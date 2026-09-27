'use client';

import { useState, useCallback, useRef } from 'react';

export interface AIMessage {
  id: string;
  role: 'user' | 'assistant';
  content: string;
  timestamp: number;
  isStreaming?: boolean;
  error?: boolean;
  technicalDetails?: string;
}

export interface AIRequestPayload {
  mode?: 'chat' | 'explain' | 'debug' | 'optimize' | 'add-comments' | 'convert' | 'explain-error';
  message?: string;
  code?: string;
  language?: string;
  errorOutput?: string;
  targetLanguage?: string;
}

function genId() {
  return Math.random().toString(36).slice(2, 10);
}

export function useAI() {
  const [messages, setMessages] = useState<AIMessage[]>([]);
  const [isGenerating, setIsGenerating] = useState(false);
  const abortRef = useRef<AbortController | null>(null);

  const sendMessage = useCallback(async (payload: AIRequestPayload) => {
    if (isGenerating) return;

    const userMsg: AIMessage = {
      id: genId(),
      role: 'user',
      content: payload.message || `[${payload.mode} request]`,
      timestamp: Date.now(),
    };

    const assistantId = genId();
    const assistantMsg: AIMessage = {
      id: assistantId,
      role: 'assistant',
      content: '',
      timestamp: Date.now(),
      isStreaming: true,
    };

    setMessages(prev => [...prev, userMsg, assistantMsg]);
    setIsGenerating(true);

    abortRef.current = new AbortController();

    try {
      const conversationHistory = messages.slice(-10).map(m => ({
        role: m.role,
        content: m.content,
      }));

      const response = await fetch('/api/ai', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ ...payload, conversationHistory, stream: true }),
        signal: abortRef.current.signal,
      });

      if (!response.ok) {
        const errData = await response.json().catch(() => ({
          error: 'Code&Tools AI encountered an unexpected provider error.',
        }));
        const customErr = new Error(errData.error || `HTTP ${response.status}`);
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        (customErr as any).technicalDetails = errData.technicalDetails;
        throw customErr;
      }

      const reader = response.body?.getReader();
      const decoder = new TextDecoder();
      let accumulated = '';

      if (!reader) throw new Error('No response stream available.');

      while (true) {
        const { value, done } = await reader.read();
        if (done) break;

        const chunk = decoder.decode(value, { stream: true });
        const lines = chunk.split('\n');

        for (const line of lines) {
          if (line.startsWith('data: ')) {
            const data = line.slice(6).trim();
            if (data === '[DONE]') break;
            try {
              const parsed = JSON.parse(data);
              if (parsed.error) {
                const streamErr = new Error(parsed.error);
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                (streamErr as any).technicalDetails = parsed.technicalDetails;
                throw streamErr;
              }
              if (parsed.text) {
                accumulated += parsed.text;
                setMessages(prev =>
                  prev.map(m =>
                    m.id === assistantId
                      ? { ...m, content: accumulated, isStreaming: true }
                      : m
                  )
                );
              }
            } catch (jsonErr) {
              if (jsonErr instanceof Error && jsonErr.message !== 'Unexpected end of JSON input') {
                throw jsonErr;
              }
            }
          }
        }
      }

      // Finalize — mark streaming done
      setMessages(prev =>
        prev.map(m =>
          m.id === assistantId ? { ...m, isStreaming: false } : m
        )
      );
    } catch (err: unknown) {
      if (err instanceof Error && err.name === 'AbortError') {
        setMessages(prev =>
          prev.map(m =>
            m.id === assistantId
              ? { ...m, content: m.content || '_Generation stopped._', isStreaming: false }
              : m
          )
        );
      } else {
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const anyErr = err as any;
        const errorMsg = err instanceof Error ? err.message : 'Code&Tools AI could not connect to NVIDIA NIM.';
        const technicalDetails = anyErr?.technicalDetails;
        setMessages(prev =>
          prev.map(m =>
            m.id === assistantId
              ? {
                  ...m,
                  content: errorMsg,
                  technicalDetails,
                  isStreaming: false,
                  error: true,
                }
              : m
          )
        );
      }
    } finally {
      setIsGenerating(false);
      abortRef.current = null;
    }
  }, [messages, isGenerating]);

  const stopGeneration = useCallback(() => {
    abortRef.current?.abort();
    setIsGenerating(false);
  }, []);

  const clearMessages = useCallback(() => {
    if (!isGenerating) setMessages([]);
  }, [isGenerating]);

  const regenerateLastResponse = useCallback(async () => {
    if (isGenerating || messages.length < 2) return;
    const lastUser = [...messages].reverse().find(m => m.role === 'user');
    if (!lastUser) return;
    setMessages(prev => prev.slice(0, -1));
    await sendMessage({ mode: 'chat', message: lastUser.content });
  }, [isGenerating, messages, sendMessage]);

  return {
    messages,
    isGenerating,
    sendMessage,
    stopGeneration,
    clearMessages,
    regenerateLastResponse,
  };
}

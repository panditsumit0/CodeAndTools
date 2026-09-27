'use client';

import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Sparkles, X, Send, StopCircle, Bot } from 'lucide-react';
import { useAI } from '@/lib/ai/use-ai';
import { AIMessageBubble } from './AIMessageBubble';

interface AskAIButtonProps {
  topic: string;
  language: string;
  contextDescription?: string;
}

export function AskAIButton({ topic, language, contextDescription }: AskAIButtonProps) {
  const { messages, isGenerating, sendMessage, stopGeneration, clearMessages, regenerateLastResponse } = useAI();
  const [open, setOpen] = useState(false);
  const [input, setInput] = useState('');
  const [seeded, setSeeded] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Auto-seed when first opened
  useEffect(() => {
    if (open && !seeded && messages.length === 0) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setSeeded(true);
    }
  }, [open, seeded, messages.length]);

  const handleSend = useCallback(async (text?: string) => {
    const msg = (text ?? input).trim();
    if (!msg || isGenerating) return;
    setInput('');
    await sendMessage({
      mode: 'chat',
      message: `Context: I'm studying ${language.toUpperCase()} programming, specifically the topic "${topic}".${contextDescription ? ` ${contextDescription}` : ''}\n\nMy question: ${msg}`,
    });
  }, [input, isGenerating, language, topic, contextDescription, sendMessage]);

  const handleClose = useCallback(() => {
    setOpen(false);
    clearMessages();
    setSeeded(false);
  }, [clearMessages]);

  const quickQuestions = [
    `Explain "${topic}" with a simple real-world example`,
    `Give me a ${language.toUpperCase()} code example for "${topic}"`,
    `What are common mistakes with "${topic}"?`,
    `How does "${topic}" relate to B.Tech exam questions?`,
  ];

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(true)}
        className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-gradient-to-r from-blue-600/20 to-orange-500/10 border border-blue-500/30 text-blue-400 hover:text-blue-300 hover:border-blue-400/50 hover:from-blue-600/30 text-xs font-semibold transition-all shadow-sm shadow-blue-500/10"
      >
        <Sparkles className="w-3.5 h-3.5" />
        Ask AI
      </button>

      {open && (
        <>
          {/* Backdrop */}
          <div className="fixed inset-0 z-40 bg-black/50 backdrop-blur-sm" onClick={handleClose} />

          {/* Modal */}
          <div className="fixed inset-x-4 bottom-4 sm:inset-auto sm:bottom-8 sm:right-8 sm:w-[420px] z-50 flex flex-col max-h-[80vh] rounded-2xl border border-zinc-700 bg-zinc-950 shadow-2xl shadow-black/60 overflow-hidden animate-in fade-in slide-in-from-bottom-4 duration-200">
            {/* Header */}
            <div className="flex items-center gap-2 px-4 py-3 border-b border-zinc-800 bg-zinc-900/90 shrink-0">
              <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-blue-600 to-orange-500 flex items-center justify-center">
                <Bot className="w-3.5 h-3.5 text-white" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-xs font-bold text-zinc-100">Ask AI about:</p>
                <p className="text-[11px] text-blue-400 truncate">{topic} ({language.toUpperCase()})</p>
              </div>
              <button
                onClick={handleClose}
                className="p-1 rounded-lg text-zinc-500 hover:text-zinc-200 hover:bg-zinc-700 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Quick question chips */}
            {messages.length === 0 && (
              <div className="p-3 border-b border-zinc-800 space-y-2 shrink-0">
                <p className="text-[11px] text-zinc-400 font-medium">Quick questions:</p>
                <div className="space-y-1.5">
                  {quickQuestions.map(q => (
                    <button
                      key={q}
                      onClick={() => handleSend(q)}
                      className="w-full text-left text-[11px] text-zinc-300 bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 hover:border-zinc-700 rounded-xl px-3 py-2 transition-all leading-snug"
                    >
                      {q}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Messages */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((msg, idx) => (
                <AIMessageBubble key={msg.id} message={msg} onRetry={msg.error && idx === messages.length - 1 ? regenerateLastResponse : undefined} />
              ))}
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="shrink-0 p-3 border-t border-zinc-800 bg-zinc-900/60">
              <div className="flex items-center gap-2 p-2 rounded-xl border border-zinc-700 bg-zinc-900 focus-within:border-blue-500/60 transition-colors">
                <input
                  type="text"
                  value={input}
                  onChange={e => setInput(e.target.value)}
                  onKeyDown={e => e.key === 'Enter' && handleSend()}
                  placeholder={`Ask about ${topic}…`}
                  disabled={isGenerating}
                  className="flex-1 bg-transparent text-xs text-zinc-100 placeholder-zinc-500 outline-none"
                />
                {isGenerating ? (
                  <button onClick={stopGeneration} className="p-1 text-red-400 hover:text-red-300">
                    <StopCircle className="w-4 h-4" />
                  </button>
                ) : (
                  <button
                    onClick={() => handleSend()}
                    disabled={!input.trim()}
                    className="p-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-white disabled:opacity-40 transition-colors"
                  >
                    <Send className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

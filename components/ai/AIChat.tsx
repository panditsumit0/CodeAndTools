'use client';

import React, { useState, useRef, useEffect, useCallback } from 'react';
import {
  Bot, Send, StopCircle, Trash2, RotateCcw, Sparkles,
  Code2, Bug, Zap, MessageSquare, ChevronDown,
} from 'lucide-react';
import { useAI } from '@/lib/ai/use-ai';
import { AIMessageBubble } from './AIMessageBubble';

const QUICK_PROMPTS = [
  { icon: Code2, label: 'Explain code', prompt: 'Explain how this code works step by step.' },
  { icon: Bug, label: 'Debug help', prompt: 'Help me find and fix bugs in my code.' },
  { icon: Zap, label: 'Optimize', prompt: 'How can I optimize this code for better performance?' },
  { icon: MessageSquare, label: 'Concept', prompt: 'Explain the concept of ' },
];

const STARTER_PROMPTS = [
  'Explain pointers in C like I\'m a first-year B.Tech student.',
  'What\'s the difference between stack and heap memory?',
  'How does recursion work? Give me a simple example.',
  'Explain time complexity with an easy example.',
  'What\'s the difference between C++ and Java for interviews?',
  'How do I reverse a linked list in Python?',
];

interface AIChatProps {
  initialCode?: string;
  initialLanguage?: string;
  initialMode?: 'chat' | 'explain' | 'debug' | 'optimize' | 'add-comments';
  compact?: boolean;
}

export function AIChat({ initialCode, initialLanguage, initialMode, compact }: AIChatProps) {
  const { messages, isGenerating, sendMessage, stopGeneration, clearMessages, regenerateLastResponse } = useAI();
  const [input, setInput] = useState('');
  const [mode] = useState<'chat' | 'explain' | 'debug' | 'optimize' | 'add-comments'>(initialMode || 'chat');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const textareaRef = useRef<HTMLTextAreaElement>(null);
  const [showStarters, setShowStarters] = useState(true);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  // Auto-resize textarea
  useEffect(() => {
    if (textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      textareaRef.current.style.height = Math.min(textareaRef.current.scrollHeight, 160) + 'px';
    }
  }, [input]);

  const handleSubmit = useCallback(async (text?: string) => {
    const msg = (text ?? input).trim();
    if (!msg || isGenerating) return;
    setInput('');
    setShowStarters(false);

    const payload = mode === 'chat'
      ? { mode: 'chat' as const, message: msg }
      : { mode, message: msg, code: initialCode, language: initialLanguage };

    await sendMessage(payload);
  }, [input, isGenerating, mode, initialCode, initialLanguage, sendMessage]);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSubmit();
    }
  };

  const isEmpty = messages.length === 0;

  return (
    <div className={`flex flex-col ${compact ? 'h-[520px]' : 'h-[calc(100vh-200px)] min-h-[500px]'} bg-[#070A0F] rounded-2xl border border-[#1F2937] overflow-hidden`}>
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 border-b border-[#1F2937] bg-[#090D14] shrink-0">
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-[#8B5CF6] to-[#3B82F6] flex items-center justify-center shadow-sm shadow-blue-500/20">
            <Bot className="w-4 h-4 text-white" />
          </div>
          <div>
            <span className="font-bold text-sm text-zinc-100">DevForge AI</span>
            <div className="flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-[#22C55E] animate-pulse" />
              <span className="text-[10px] text-zinc-400">Powered by Gemini</span>
            </div>
          </div>
        </div>
        <div className="flex items-center gap-1">
          {messages.length > 1 && (
            <button
              onClick={regenerateLastResponse}
              disabled={isGenerating}
              className="p-1.5 rounded-lg text-zinc-400 hover:text-zinc-200 hover:bg-zinc-700 transition-colors disabled:opacity-50"
              title="Regenerate response"
            >
              <RotateCcw className="w-3.5 h-3.5" />
            </button>
          )}
          {messages.length > 0 && (
            <button
              onClick={clearMessages}
              disabled={isGenerating}
              className="p-1.5 rounded-lg text-zinc-400 hover:text-red-400 hover:bg-zinc-700 transition-colors disabled:opacity-50"
              title="Clear conversation"
            >
              <Trash2 className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </div>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4 scroll-smooth">
        {isEmpty && showStarters && (
          <div className="h-full flex flex-col items-center justify-center text-center px-6 space-y-6">
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#8B5CF6] to-[#3B82F6] flex items-center justify-center shadow-lg shadow-blue-500/20">
              <Sparkles className="w-7 h-7 text-white" />
            </div>
            <div>
              <h3 className="text-base font-bold text-zinc-100">How can I help you today?</h3>
              <p className="text-xs text-zinc-400 mt-1">Ask about code, concepts, bugs, or anything you&apos;re learning.</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 w-full max-w-lg">
              {STARTER_PROMPTS.map((prompt) => (
                <button
                  key={prompt}
                  onClick={() => handleSubmit(prompt)}
                  className="text-left p-3 rounded-xl border border-[#1F2937] bg-[#0D1117] hover:bg-[#151B24] hover:border-[#8B5CF6]/50 text-[#E2E8F0] text-xs leading-snug transition-all"
                >
                  {prompt}
                </button>
              ))}
            </div>
          </div>
        )}

        {messages.map((msg, idx) => (
          <AIMessageBubble key={msg.id} message={msg} onRetry={msg.error && idx === messages.length - 1 ? regenerateLastResponse : undefined} />
        ))}
        <div ref={messagesEndRef} />
      </div>

      {/* Quick action chips */}
      {!compact && messages.length === 0 && !showStarters && (
        <div className="flex gap-2 px-4 pb-2 overflow-x-auto shrink-0">
          {QUICK_PROMPTS.map(({ icon: Icon, label, prompt }) => (
            <button
              key={label}
              onClick={() => handleSubmit(prompt)}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-[#1F2937] bg-[#0D1117] hover:border-[#8B5CF6]/50 hover:bg-[#151B24] text-[#94A3B8] hover:text-[#F8FAFC] text-xs whitespace-nowrap transition-all shrink-0"
            >
              <Icon className="w-3.5 h-3.5" />
              {label}
            </button>
          ))}
        </div>
      )}

      {/* Input area */}
      <div className="shrink-0 p-3 border-t border-[#1F2937] bg-[#090D14]">
        <div className="flex items-end gap-2 p-2 rounded-xl border border-[#1F2937] bg-[#0B111A] focus-within:border-[#3B82F6] focus-within:ring-2 focus-within:ring-[#3B82F6]/30 transition-colors">
          <textarea
            ref={textareaRef}
            value={input}
            onChange={e => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder={isGenerating ? 'Generating…' : 'Ask anything about code, concepts, or debugging… (Enter to send, Shift+Enter for newline)'}
            disabled={isGenerating}
            rows={1}
            className="flex-1 bg-transparent text-sm text-[#F8FAFC] placeholder:text-[#64748B] resize-none outline-none leading-relaxed disabled:opacity-50 max-h-40"
          />
          {isGenerating ? (
            <button
              onClick={stopGeneration}
              className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-red-600/20 text-red-400 border border-red-500/30 hover:bg-red-600/30 text-xs font-medium transition-colors shrink-0"
            >
              <StopCircle className="w-4 h-4" />
              Stop
            </button>
          ) : (
            <button
              onClick={() => handleSubmit()}
              disabled={!input.trim()}
              className="p-2 rounded-lg bg-gradient-to-r from-[#8B5CF6] to-[#3B82F6] hover:from-[#7c4def] hover:to-[#2563eb] text-white shadow-md shadow-purple-500/25 transition-all disabled:opacity-40 disabled:cursor-not-allowed shrink-0"
              title="Send (Enter)"
            >
              <Send className="w-4 h-4" />
            </button>
          )}
        </div>
        <p className="text-[10px] text-zinc-600 mt-1.5 px-1 text-center">
          DevForge AI can make mistakes. Verify important code before using it.
        </p>
      </div>
    </div>
  );
}

// ─── Collapsible wrapper for the compiler panel ──────────────────────────────
interface AICompilerPanelProps {
  code: string;
  language: string;
  errorOutput?: string;
  onApplyCode?: (code: string) => void;
}

export function AICompilerPanel({ code, language, errorOutput, onApplyCode }: AICompilerPanelProps) {
  const { messages, isGenerating, sendMessage, stopGeneration, clearMessages, regenerateLastResponse } = useAI();
  const [open, setOpen] = useState(false);
  const [activeAction, setActiveAction] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  const runAction = useCallback(async (action: 'explain' | 'debug' | 'optimize' | 'add-comments' | 'explain-error') => {
    setOpen(true);
    setActiveAction(action);
    clearMessages();
    const actionLabels: Record<string, string> = {
      explain: 'Explain this code',
      debug: errorOutput ? 'Debug this error' : 'Debug this code',
      optimize: 'Optimize this code',
      'add-comments': 'Add comments to this code',
      'explain-error': 'Explain this error',
    };
    await sendMessage({
      mode: action === 'explain-error' && errorOutput ? 'explain-error' : action,
      message: actionLabels[action],
      code,
      language,
      errorOutput: action === 'debug' || action === 'explain-error' ? errorOutput : undefined,
    });
  }, [code, language, errorOutput, sendMessage, clearMessages]);

  // Try to extract code from last AI response for "Apply Fix"
  const extractCode = useCallback(() => {
    const last = [...messages].reverse().find(m => m.role === 'assistant');
    if (!last) return null;
    const match = last.content.match(/```(?:\w+)?\n([\s\S]+?)```/);
    return match ? match[1] : null;
  }, [messages]);

  const hasCode = extractCode() !== null;

  return (
    <div className="rounded-xl border border-zinc-800 bg-zinc-900/60 overflow-hidden">
      {/* Trigger Bar */}
      <div className="flex items-center gap-2 px-3 py-2.5 bg-zinc-900">
        <div className="flex items-center gap-1.5">
          <div className="w-5 h-5 rounded bg-gradient-to-br from-[#8B5CF6] to-[#3B82F6] flex items-center justify-center">
            <Sparkles className="w-3 h-3 text-white" />
          </div>
          <span className="text-xs font-bold text-zinc-200">AI Assistant</span>
        </div>

        <div className="flex items-center gap-1 ml-1 flex-wrap">
          {[
            { key: 'explain', label: 'Explain', icon: Code2 },
            { key: 'debug', label: errorOutput ? 'Debug Error' : 'Debug', icon: Bug },
            { key: 'optimize', label: 'Optimize', icon: Zap },
            { key: 'add-comments', label: 'Add Comments', icon: MessageSquare },
          ].map(({ key, label, icon: Icon }) => (
            <button
              key={key}
              onClick={() => runAction(key as Parameters<typeof runAction>[0])}
              disabled={isGenerating}
              className={`flex items-center gap-1 px-2.5 py-1 rounded-lg text-[11px] font-medium transition-all border disabled:opacity-50 ${
                activeAction === key && open
                  ? 'bg-[#8B5CF6]/20 border-[#8B5CF6]/40 text-purple-300'
                  : 'bg-[#151B24] border-[#1F2937] text-[#E2E8F0] hover:bg-[#1F2937] hover:border-[#8B5CF6]/30'
              }`}
            >
              <Icon className="w-3 h-3" />
              {label}
            </button>
          ))}
          {errorOutput && (
            <button
              onClick={() => runAction('explain-error')}
              disabled={isGenerating}
              className="flex items-center gap-1 px-2.5 py-1 rounded-lg text-[11px] font-medium transition-all border bg-red-900/30 border-red-500/30 text-red-300 hover:bg-red-900/50 disabled:opacity-50"
            >
              <Bug className="w-3 h-3" />
              Explain Error
            </button>
          )}
        </div>

        <button
          onClick={() => setOpen(o => !o)}
          className="ml-auto p-1 rounded text-zinc-500 hover:text-zinc-300 transition-colors"
          title={open ? 'Collapse' : 'Expand'}
        >
          <ChevronDown className={`w-4 h-4 transition-transform ${open ? 'rotate-180' : ''}`} />
        </button>
      </div>

      {/* AI Response Panel */}
      {open && (
        <div className="border-t border-[#1F2937]">
          <div className="max-h-80 overflow-y-auto p-4 space-y-4">
            {messages.length === 0 && !isGenerating && (
              <p className="text-xs text-zinc-500 text-center py-4">
                Click an action above to get AI assistance with your code.
              </p>
            )}
            {messages.map((msg, idx) => (
            <AIMessageBubble key={msg.id} message={msg} onRetry={msg.error && idx === messages.length - 1 ? regenerateLastResponse : undefined} />
          ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Apply Fix button */}
          {hasCode && onApplyCode && !isGenerating && (
            <div className="px-4 pb-3 border-t border-[#1F2937] pt-2">
              <button
                onClick={() => {
                  const code = extractCode();
                  if (code) onApplyCode(code);
                }}
                className="w-full py-2 rounded-lg bg-[#22C55E]/15 border border-[#22C55E]/30 text-[#22C55E] text-xs font-semibold hover:bg-[#22C55E]/25 transition-colors"
              >
                ✓ Apply AI Fix to Editor
              </button>
              <p className="text-[10px] text-zinc-500 text-center mt-1">
                Review the fix before applying. This will replace your current code.
              </p>
            </div>
          )}

          {isGenerating && (
            <div className="px-4 pb-3 border-t border-[#1F2937] pt-2">
              <button
                onClick={stopGeneration}
                className="w-full py-1.5 rounded-lg border border-red-500/30 text-red-400 text-xs hover:bg-red-900/20 transition-colors"
              >
                ■ Stop generation
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

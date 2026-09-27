'use client';

import React, { useState, useRef, useEffect, useCallback } from 'react';
import { Code2, Bug, Zap, MessageSquare, ArrowLeftRight, Bot, Sparkles, StopCircle } from 'lucide-react';
import { useAI, type AIRequestPayload } from '@/lib/ai/use-ai';
import { AIMessageBubble } from './AIMessageBubble';

const LANGUAGES = ['C', 'C++', 'Java', 'Python', 'TypeScript', 'JavaScript'];
const CONVERT_TARGETS: Record<string, string[]> = {
  C: ['C++', 'Python', 'Java'],
  'C++': ['C', 'Java', 'Python', 'TypeScript'],
  Java: ['C++', 'Python', 'TypeScript'],
  Python: ['C++', 'Java', 'TypeScript', 'JavaScript'],
  TypeScript: ['JavaScript', 'Python'],
  JavaScript: ['TypeScript', 'Python'],
};

const ACTIONS = [
  { key: 'explain', icon: Code2, label: 'Explain', desc: 'Understand what this code does', color: 'text-blue-400' },
  { key: 'debug', icon: Bug, label: 'Debug', desc: 'Find and fix bugs', color: 'text-red-400' },
  { key: 'optimize', icon: Zap, label: 'Optimize', desc: 'Improve performance', color: 'text-yellow-400' },
  { key: 'add-comments', icon: MessageSquare, label: 'Add Comments', desc: 'Document the code', color: 'text-emerald-400' },
  { key: 'convert', icon: ArrowLeftRight, label: 'Convert', desc: 'Translate to another language', color: 'text-purple-400' },
] as const;

type ActionKey = typeof ACTIONS[number]['key'];

export function AICodeAssistant() {
  const { messages, isGenerating, sendMessage, stopGeneration, clearMessages } = useAI();
  const [code, setCode] = useState('');
  const [language, setLanguage] = useState('Python');
  const [selectedAction, setSelectedAction] = useState<ActionKey>('explain');
  const [targetLanguage, setTargetLanguage] = useState('JavaScript');
  const [customMessage, setCustomMessage] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  useEffect(() => {
    const targets = CONVERT_TARGETS[language] || [];
    if (!targets.includes(targetLanguage)) {
      // eslint-disable-next-line react-hooks/set-state-in-effect
      setTargetLanguage(targets[0] || 'JavaScript');
    }
  }, [language, targetLanguage]);

  const handleRun = useCallback(async () => {
    if (!code.trim() || isGenerating) return;
    clearMessages();

    const payload: AIRequestPayload = {
      mode: selectedAction,
      code,
      language: language.toLowerCase(),
      targetLanguage: selectedAction === 'convert' ? targetLanguage.toLowerCase() : undefined,
      message: customMessage.trim() || undefined,
    };

    await sendMessage(payload);
  }, [code, language, selectedAction, targetLanguage, customMessage, isGenerating, sendMessage, clearMessages]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
      {/* Left: Input */}
      <div className="space-y-4">
        {/* Language selector */}
        <div className="flex items-center gap-3">
          <label className="text-xs font-semibold text-zinc-400 whitespace-nowrap">Language:</label>
          <div className="flex flex-wrap gap-1.5">
            {LANGUAGES.map(lang => (
              <button
                key={lang}
                onClick={() => setLanguage(lang)}
                className={`px-3 py-1 rounded-lg text-xs font-medium border transition-all ${
                  language === lang
                    ? 'bg-blue-600/20 border-blue-500/50 text-blue-300'
                    : 'bg-zinc-800 border-zinc-700 text-zinc-400 hover:text-zinc-200 hover:border-zinc-600'
                }`}
              >
                {lang}
              </button>
            ))}
          </div>
        </div>

        {/* Code input */}
        <div className="relative">
          <div className="flex items-center justify-between px-3 py-2 bg-zinc-800 border border-zinc-700 border-b-0 rounded-t-xl">
            <span className="text-[11px] font-mono font-medium text-zinc-400">Your code ({language})</span>
            <button onClick={() => setCode('')} className="text-[10px] text-zinc-500 hover:text-zinc-300">Clear</button>
          </div>
          <textarea
            value={code}
            onChange={e => setCode(e.target.value)}
            placeholder={`Paste your ${language} code here...`}
            rows={12}
            className="w-full font-mono text-xs text-zinc-100 bg-zinc-950 border border-zinc-700 rounded-b-xl px-4 py-3 resize-none outline-none focus:border-blue-500/50 transition-colors placeholder-zinc-600 leading-relaxed"
          />
        </div>

        {/* Action selector */}
        <div className="space-y-2">
          <label className="text-xs font-semibold text-zinc-400">What should AI do?</label>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
            {ACTIONS.map(({ key, icon: Icon, label, desc, color }) => (
              <button
                key={key}
                onClick={() => setSelectedAction(key)}
                className={`flex flex-col items-start gap-1 p-3 rounded-xl border text-left transition-all ${
                  selectedAction === key
                    ? 'bg-zinc-800 border-blue-500/50 shadow-sm shadow-blue-500/10'
                    : 'bg-zinc-900 border-zinc-700/80 hover:border-zinc-600 hover:bg-zinc-800'
                }`}
              >
                <Icon className={`w-4 h-4 ${color}`} />
                <span className="text-xs font-semibold text-zinc-200">{label}</span>
                <span className="text-[10px] text-zinc-500 leading-tight">{desc}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Convert target language */}
        {selectedAction === 'convert' && (
          <div className="flex items-center gap-3 p-3 rounded-xl bg-purple-900/20 border border-purple-500/30">
            <span className="text-xs text-zinc-300 font-medium">Convert to:</span>
            <div className="flex flex-wrap gap-1.5">
              {(CONVERT_TARGETS[language] || []).map(lang => (
                <button
                  key={lang}
                  onClick={() => setTargetLanguage(lang)}
                  className={`px-3 py-1 rounded-lg text-xs font-medium border transition-all ${
                    targetLanguage === lang
                      ? 'bg-purple-600/30 border-purple-400/50 text-purple-200'
                      : 'bg-zinc-800 border-zinc-700 text-zinc-400 hover:border-purple-500/30'
                  }`}
                >
                  {lang}
                </button>
              ))}
            </div>
          </div>
        )}

        {/* Optional custom message */}
        <div>
          <input
            type="text"
            value={customMessage}
            onChange={e => setCustomMessage(e.target.value)}
            placeholder="Optional: add specific instructions (e.g. focus on the sort function)"
            className="w-full text-xs bg-zinc-900 border border-zinc-700 rounded-xl px-3 py-2 text-zinc-200 placeholder-zinc-500 outline-none focus:border-blue-500/50 transition-colors"
          />
        </div>

        {/* Run button */}
        <button
          onClick={handleRun}
          disabled={!code.trim() || isGenerating}
          className="w-full flex items-center justify-center gap-2 py-3 rounded-xl bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white font-semibold text-sm transition-all shadow-lg shadow-blue-600/20 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {isGenerating ? (
            <><StopCircle className="w-4 h-4" onClick={e => { e.stopPropagation(); stopGeneration(); }} />Generating...</>
          ) : (
            <><Sparkles className="w-4 h-4" />Ask DevForge AI</>
          )}
        </button>
      </div>

      {/* Right: AI Response */}
      <div className="flex flex-col min-h-[480px] bg-zinc-950 rounded-2xl border border-zinc-800 overflow-hidden">
        <div className="flex items-center gap-2 px-4 py-3 border-b border-zinc-800 bg-zinc-900/80">
          <div className="w-6 h-6 rounded-lg bg-gradient-to-br from-blue-600 to-orange-500 flex items-center justify-center">
            <Bot className="w-3.5 h-3.5 text-white" />
          </div>
          <span className="text-xs font-bold text-zinc-200">AI Response</span>
          {isGenerating && (
            <span className="ml-auto flex items-center gap-1 text-[10px] text-blue-400">
              <span className="w-1 h-1 rounded-full bg-blue-400 animate-ping" />
              Generating
            </span>
          )}
        </div>

        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.length === 0 && !isGenerating && (
            <div className="h-full flex flex-col items-center justify-center text-center py-12 space-y-3">
              <Bot className="w-10 h-10 text-zinc-700" />
              <p className="text-sm text-zinc-500">Paste your code and click <strong className="text-zinc-400">Ask DevForge AI</strong></p>
              <p className="text-xs text-zinc-600">The AI will {ACTIONS.find(a => a.key === selectedAction)?.desc?.toLowerCase()}</p>
            </div>
          )}
          {messages.filter(m => m.role === 'assistant').map(msg => (
            <AIMessageBubble key={msg.id} message={msg} />
          ))}
          <div ref={messagesEndRef} />
        </div>

        {isGenerating && (
          <div className="shrink-0 p-3 border-t border-zinc-800">
            <button
              onClick={stopGeneration}
              className="w-full py-1.5 rounded-lg border border-red-500/30 text-red-400 text-xs hover:bg-red-900/20 transition-colors"
            >
              ■ Stop generation
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

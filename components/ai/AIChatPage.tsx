'use client';

import React, { useState } from 'react';
import { MessageSquare, Code2, Sparkles } from 'lucide-react';
import { AIChat } from './AIChat';
import { AICodeAssistant } from './AICodeAssistant';

const TABS = [
  { id: 'chat', label: 'AI Chat', icon: MessageSquare, desc: 'Ask anything about coding, debugging, or concepts' },
  { id: 'code', label: 'Code Assistant', icon: Code2, desc: 'Explain, debug, optimize, or convert your code' },
] as const;

type TabId = typeof TABS[number]['id'];

export function AIChatPage() {
  const [activeTab, setActiveTab] = useState<TabId>('chat');

  return (
    <div className="space-y-4">
      {/* Tab selector */}
      <div className="flex gap-2 p-1 bg-zinc-100 dark:bg-zinc-900 rounded-xl border border-zinc-200 dark:border-zinc-800 w-fit mx-auto">
        {TABS.map(({ id, label, icon: Icon }) => (
          <button
            key={id}
            onClick={() => setActiveTab(id)}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition-all ${
              activeTab === id
                ? 'bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 shadow-sm'
                : 'text-zinc-500 dark:text-zinc-400 hover:text-zinc-700 dark:hover:text-zinc-200'
            }`}
          >
            <Icon className="w-4 h-4" />
            {label}
          </button>
        ))}
      </div>

      {/* Tab description */}
      <p className="text-center text-xs text-zinc-500 dark:text-zinc-500">
        {TABS.find(t => t.id === activeTab)?.desc}
      </p>

      {/* Content */}
      {activeTab === 'chat' && (
        <div className="max-w-3xl mx-auto">
          <AIChat />
        </div>
      )}

      {activeTab === 'code' && (
        <div className="max-w-5xl mx-auto">
          <AICodeAssistant />
        </div>
      )}

      {/* Feature cards */}
      <div className="max-w-5xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
        {[
          {
            icon: '🎓',
            title: 'B.Tech Focused',
            desc: 'Optimized for engineering students — explains concepts at the right level for exams and vivas.',
          },
          {
            icon: '⚡',
            title: 'Streaming Responses',
            desc: 'Answers stream in real-time so you see results immediately, not after a long wait.',
          },
          {
            icon: '🔒',
            title: 'Private & Secure',
            desc: 'Your code is sent only to Gemini AI for processing — never stored or logged by DevForge.',
          },
        ].map(({ icon, title, desc }) => (
          <div
            key={title}
            className="p-4 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/60 space-y-2"
          >
            <div className="text-2xl">{icon}</div>
            <h3 className="text-sm font-bold text-zinc-900 dark:text-zinc-100 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-blue-400" />
              {title}
            </h3>
            <p className="text-xs text-zinc-500 dark:text-zinc-400 leading-relaxed">{desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

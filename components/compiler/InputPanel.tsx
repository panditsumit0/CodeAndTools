'use client';

import React from 'react';
import { Terminal, Trash2, Sparkles } from 'lucide-react';

interface InputPanelProps {
  stdin: string;
  onChange: (value: string) => void;
  sampleStdin: string;
  onClear: () => void;
  disabled?: boolean;
}

export function InputPanel({
  stdin,
  onChange,
  sampleStdin,
  onClear,
  disabled = false,
}: InputPanelProps) {
  // Allow typing Tab characters inside textarea without losing focus
  const handleKeyDown = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
    if (e.key === 'Tab') {
      e.preventDefault();
      const target = e.currentTarget;
      const start = target.selectionStart;
      const end = target.selectionEnd;
      const nextValue = stdin.substring(0, start) + '\t' + stdin.substring(end);
      onChange(nextValue);
      setTimeout(() => {
        target.selectionStart = target.selectionEnd = start + 1;
      }, 0);
    }
  };

  const lineCount = stdin ? stdin.split('\n').length : 0;

  return (
    <div className="flex flex-col rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950/70 overflow-hidden shadow-xs">
      {/* Header */}
      <div className="flex items-center justify-between px-3.5 py-2.5 border-b border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/60 text-xs">
        <div className="flex items-center gap-2 font-semibold text-zinc-700 dark:text-zinc-300">
          <Terminal className="w-3.5 h-3.5 text-emerald-500" />
          <span>Standard Input (stdin)</span>
        </div>

        <div className="flex items-center gap-1.5">
          <button
            type="button"
            onClick={() => onChange(sampleStdin)}
            disabled={disabled || !sampleStdin}
            className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-medium text-emerald-600 dark:text-emerald-400 hover:bg-emerald-50 dark:hover:bg-emerald-950/30 transition-colors disabled:opacity-40 disabled:cursor-not-allowed"
            title={sampleStdin ? "Load sample input" : "No sample input defined"}
          >
            <Sparkles className="w-3 h-3" />
            <span>Sample Input</span>
          </button>

          <button
            type="button"
            onClick={onClear}
            disabled={disabled || !stdin}
            className="inline-flex items-center gap-1 px-2 py-0.5 rounded text-[11px] font-medium text-zinc-500 hover:text-rose-600 dark:hover:text-rose-400 hover:bg-rose-50 dark:hover:bg-rose-950/30 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
            title="Clear standard input"
          >
            <Trash2 className="w-3 h-3" />
            <span>Clear</span>
          </button>
        </div>
      </div>

      {/* Textarea: Preserves all whitespace, spaces, newlines, tabs */}
      <textarea
        value={stdin}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={handleKeyDown}
        disabled={disabled}
        placeholder="Enter input for your program..."
        rows={4}
        spellCheck={false}
        className="w-full p-3 font-mono text-xs sm:text-sm bg-transparent text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-400 dark:placeholder:text-zinc-600 focus:outline-none resize-y leading-relaxed whitespace-pre"
      />

      {/* Footer Info */}
      <div className="px-3.5 py-1.5 bg-zinc-50/50 dark:bg-zinc-900/30 border-t border-zinc-200 dark:border-zinc-800/60 flex items-center justify-between text-[11px] text-zinc-400">
        <span>Passed sequentially to scanf, cin, Scanner, input(), readline</span>
        <span className="font-mono">
          {lineCount} {lineCount === 1 ? 'line' : 'lines'} • {stdin.length} chars
        </span>
      </div>
    </div>
  );
}

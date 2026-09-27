'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { HelpCircle, CheckCircle2, Play, ChevronDown, ChevronUp, Lightbulb } from 'lucide-react';
import { PracticeQuestion } from '@/lib/learn/types';
import { SupportedLanguageId } from '@/lib/compiler/types';

interface PracticeCardProps {
  practice: PracticeQuestion;
  languageId: SupportedLanguageId;
}

export function PracticeCard({ practice, languageId }: PracticeCardProps) {
  const router = useRouter();
  const [showHint, setShowHint] = useState(false);
  const [showSolution, setShowSolution] = useState(false);

  const difficultyColors = {
    Easy: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20',
    Medium: 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20',
    Hard: 'bg-rose-500/10 text-rose-600 dark:text-rose-400 border-rose-500/20',
  };

  const handleOpenInCompiler = (codeToLoad: string, title: string) => {
    try {
      sessionStorage.setItem(
        'devkit_compiler_snippet',
        JSON.stringify({
          lang: languageId,
          code: codeToLoad,
          stdin: '',
          title,
        })
      );
    } catch {
      // Fallback
    }
    router.push(`/tools/compiler?lang=${languageId}`);
  };

  return (
    <div className="mt-4 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/70 dark:bg-zinc-900/60 p-4 sm:p-5 transition-colors">
      <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
        <div className="flex items-center gap-2">
          <span className="text-xs font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 flex items-center gap-1.5">
            <HelpCircle className="w-3.5 h-3.5 text-[#22C55E]" />
            Practice Problem
          </span>
          <span
            className={`text-[11px] font-semibold px-2 py-0.5 rounded-full border ${difficultyColors[practice.difficulty]}`}
          >
            {practice.difficulty}
          </span>
        </div>

        <button
          type="button"
          onClick={() => handleOpenInCompiler(practice.starterCode, practice.question)}
          className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold rounded-lg bg-primary hover:bg-blue-500 text-white shadow-xs transition-colors"
        >
          <Play className="w-3 h-3 fill-current" />
          <span>Try in Compiler</span>
        </button>
      </div>

      <p className="text-sm font-medium text-zinc-900 dark:text-zinc-100 leading-relaxed">
        {practice.question}
      </p>

      {/* Action controls: Show Hint and Show Solution */}
      <div className="mt-4 pt-3 border-t border-zinc-200/80 dark:border-zinc-800 flex flex-wrap items-center gap-2">
        <button
          type="button"
          onClick={() => setShowHint((prev) => !prev)}
          className="inline-flex items-center gap-1 text-xs font-medium px-2.5 py-1 rounded-md border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-700/80 transition-colors"
        >
          <Lightbulb className="w-3 h-3 text-amber-500" />
          <span>{showHint ? 'Hide Hint' : 'Show Hint'}</span>
          {showHint ? <ChevronUp className="w-3 h-3 ml-0.5" /> : <ChevronDown className="w-3 h-3 ml-0.5" />}
        </button>

        <button
          type="button"
          onClick={() => setShowSolution((prev) => !prev)}
          className="inline-flex items-center gap-1 text-xs font-medium px-2.5 py-1 rounded-md border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-700/80 transition-colors"
        >
          <CheckCircle2 className="w-3 h-3 text-[#22C55E]" />
          <span>{showSolution ? 'Hide Solution' : 'Show Solution'}</span>
          {showSolution ? <ChevronUp className="w-3 h-3 ml-0.5" /> : <ChevronDown className="w-3 h-3 ml-0.5" />}
        </button>
      </div>

      {/* Hint Reveal Box */}
      {showHint && (
        <div className="mt-3 p-3 rounded-lg bg-amber-500/10 border border-amber-500/20 text-xs text-amber-800 dark:text-amber-300 animate-in fade-in duration-150">
          <strong className="font-semibold block mb-0.5">💡 Hint:</strong>
          {practice.hint}
        </div>
      )}

      {/* Solution Reveal Box */}
      {showSolution && (
        <div className="mt-3 rounded-lg border border-zinc-200 dark:border-zinc-700 bg-zinc-950 p-3 text-xs font-mono text-zinc-100 overflow-x-auto animate-in fade-in duration-150">
          <div className="flex items-center justify-between pb-1.5 mb-2 border-b border-zinc-800 text-[11px] text-zinc-400">
            <span>Verified Solution</span>
            <button
              type="button"
              onClick={() => handleOpenInCompiler(practice.solution, `Solution: ${practice.question}`)}
              className="text-primary hover:underline inline-flex items-center gap-1"
            >
              <Play className="w-2.5 h-2.5 fill-current" /> Run Solution
            </button>
          </div>
          <pre className="text-zinc-200 leading-relaxed">{practice.solution}</pre>
        </div>
      )}
    </div>
  );
}

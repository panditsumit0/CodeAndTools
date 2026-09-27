'use client';

import React, { useState, useSyncExternalStore, useMemo } from 'react';
import Link from 'next/link';
import {
  Code,
  CheckCircle2,
  Circle,
  Lightbulb,
  ChevronDown,
  ChevronUp,
  Play,
  Copy,
  Check,
  Terminal,
} from 'lucide-react';
import { getPracticeQuestionsByLanguage } from '@/lib/learn/practice-questions';

interface BTechPracticeSectionProps {
  languageId: string;
  languageName: string;
}

const STORAGE_KEY = 'devkit_btech_solved_questions';

const storageListeners = new Set<() => void>();

function subscribeStorage(callback: () => void) {
  storageListeners.add(callback);
  const handleWindowStorage = () => callback();
  window.addEventListener('storage', handleWindowStorage);
  return () => {
    storageListeners.delete(callback);
    window.removeEventListener('storage', handleWindowStorage);
  };
}

function notifyStorageListeners() {
  storageListeners.forEach((listener) => listener());
}

export function BTechPracticeSection({
  languageId,
  languageName,
}: BTechPracticeSectionProps) {
  const questions = getPracticeQuestionsByLanguage(languageId);
  const [activeFilter, setActiveFilter] = useState<'All' | 'Easy' | 'Medium' | 'Hard'>('All');
  const [openHints, setOpenHints] = useState<Record<string, boolean>>({});
  const [openSolutions, setOpenSolutions] = useState<Record<string, boolean>>({});
  const [copiedSolutionId, setCopiedSolutionId] = useState<string | null>(null);

  // Sync with localStorage without cascading effect renders
  const rawSolved = useSyncExternalStore(
    subscribeStorage,
    () => {
      try {
        return localStorage.getItem(STORAGE_KEY) || '{}';
      } catch {
        return '{}';
      }
    },
    () => '{}'
  );

  const solvedMap = useMemo<Record<string, boolean>>(() => {
    try {
      return JSON.parse(rawSolved);
    } catch {
      return {};
    }
  }, [rawSolved]);

  const toggleSolved = (id: string) => {
    const updated = { ...solvedMap, [id]: !solvedMap[id] };
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
      notifyStorageListeners();
    } catch {
      // Ignore localStorage errors
    }
  };

  const toggleHint = (id: string) => {
    setOpenHints((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const toggleSolution = (id: string) => {
    setOpenSolutions((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  const handleCopySolution = async (id: string, code: string) => {
    try {
      await navigator.clipboard.writeText(code);
      setCopiedSolutionId(id);
      setTimeout(() => setCopiedSolutionId(null), 2000);
    } catch {
      // Fallback
    }
  };

  // Filter questions
  const filteredQuestions = questions.filter((q) => {
    if (activeFilter === 'All') return true;
    return q.difficulty === activeFilter;
  });

  // Calculate stats for this language
  const languageQuestionIds = questions.map((q) => q.id);
  const solvedCount = languageQuestionIds.filter((id) => solvedMap[id]).length;
  const totalCount = questions.length;
  const progressPercent = totalCount > 0 ? Math.round((solvedCount / totalCount) * 100) : 0;

  const easyCount = questions.filter((q) => q.difficulty === 'Easy').length;
  const medCount = questions.filter((q) => q.difficulty === 'Medium').length;
  const hardCount = questions.filter((q) => q.difficulty === 'Hard').length;

  return (
    <div id="practice-questions" className="scroll-mt-24 space-y-6">
      {/* Header and Summary */}
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-zinc-200 dark:border-zinc-800 pb-5">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
            <Code className="w-4 h-4" />
            <span>Curated DSA & Lab Problems</span>
          </div>
          <h3 className="text-xl sm:text-2xl font-extrabold text-zinc-900 dark:text-zinc-50 mt-1">
            {languageName} B.Tech Practice Questions ({questions.length})
          </h3>
          <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 mt-1">
            Carefully curated for semester university exams, lab practicals, viva voce, and coding rounds.
          </p>
        </div>

        {/* Progress Bar Card */}
        <div className="w-full md:w-64 p-3.5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-xs">
          <div className="flex items-center justify-between text-xs font-semibold mb-1.5">
            <span className="text-zinc-700 dark:text-zinc-300">Practice Progress</span>
            <span className="text-emerald-600 dark:text-emerald-400 font-mono">
              {solvedCount} / {totalCount} ({progressPercent}%)
            </span>
          </div>
          <div className="w-full h-2 rounded-full bg-zinc-100 dark:bg-zinc-800 overflow-hidden">
            <div
              className="h-full bg-emerald-500 transition-all duration-300 rounded-full"
              style={{ width: `${progressPercent}%` }}
            />
          </div>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex items-center gap-1.5 p-1 rounded-xl bg-zinc-100 dark:bg-zinc-900/80 border border-zinc-200 dark:border-zinc-800 w-fit text-xs font-semibold">
        <button
          type="button"
          onClick={() => setActiveFilter('All')}
          className={`px-3 py-1.5 rounded-lg transition-all ${
            activeFilter === 'All'
              ? 'bg-white dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 shadow-xs'
              : 'text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-200'
          }`}
        >
          All ({totalCount})
        </button>
        <button
          type="button"
          onClick={() => setActiveFilter('Easy')}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all ${
            activeFilter === 'Easy'
              ? 'bg-white dark:bg-zinc-800 text-emerald-600 dark:text-emerald-400 shadow-xs'
              : 'text-zinc-500 hover:text-emerald-600 dark:hover:text-emerald-400'
          }`}
        >
          <span className="w-2 h-2 rounded-full bg-emerald-500" />
          <span>Easy ({easyCount})</span>
        </button>
        <button
          type="button"
          onClick={() => setActiveFilter('Medium')}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all ${
            activeFilter === 'Medium'
              ? 'bg-white dark:bg-zinc-800 text-amber-600 dark:text-amber-400 shadow-xs'
              : 'text-zinc-500 hover:text-amber-600 dark:hover:text-amber-400'
          }`}
        >
          <span className="w-2 h-2 rounded-full bg-amber-500" />
          <span>Medium ({medCount})</span>
        </button>
        <button
          type="button"
          onClick={() => setActiveFilter('Hard')}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-lg transition-all ${
            activeFilter === 'Hard'
              ? 'bg-white dark:bg-zinc-800 text-rose-600 dark:text-rose-400 shadow-xs'
              : 'text-zinc-500 hover:text-rose-600 dark:hover:text-rose-400'
          }`}
        >
          <span className="w-2 h-2 rounded-full bg-rose-500" />
          <span>Hard ({hardCount})</span>
        </button>
      </div>

      {/* Questions Grid */}
      <div className="space-y-4">
        {filteredQuestions.map((q) => {
          const isSolved = Boolean(solvedMap[q.id]);
          const isHintOpen = Boolean(openHints[q.id]);
          const isSolutionOpen = Boolean(openSolutions[q.id]);

          // Difficulty badge styles (professional badges, no random emoji)
          const diffBadge =
            q.difficulty === 'Easy'
              ? 'bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border-emerald-500/20'
              : q.difficulty === 'Medium'
              ? 'bg-amber-500/10 text-amber-700 dark:text-amber-400 border-amber-500/20'
              : 'bg-rose-500/10 text-rose-700 dark:text-rose-400 border-rose-500/20';

          return (
            <div
              key={q.id}
              className={`rounded-2xl border transition-all duration-200 ${
                isSolved
                  ? 'border-emerald-500/30 bg-emerald-500/[0.02] dark:bg-emerald-950/[0.05]'
                  : 'border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 hover:border-zinc-300 dark:hover:border-zinc-700'
              } p-4 sm:p-5 shadow-xs space-y-3.5`}
            >
              {/* Question Header */}
              <div className="flex flex-wrap items-center justify-between gap-2.5">
                <div className="flex items-center gap-2">
                  <span
                    className={`px-2.5 py-0.5 rounded-full text-[11px] font-bold uppercase tracking-wider border ${diffBadge}`}
                  >
                    {q.difficulty}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-700">
                    Topic: {q.topic}
                  </span>
                </div>

                {/* Mark as Solved toggle */}
                <button
                  type="button"
                  onClick={() => toggleSolved(q.id)}
                  className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs font-semibold transition-all ${
                    isSolved
                      ? 'bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 border border-emerald-500/30'
                      : 'text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-200 hover:bg-zinc-100 dark:hover:bg-zinc-800'
                  }`}
                  title={isSolved ? 'Mark as unsolved' : 'Mark as solved'}
                >
                  {isSolved ? (
                    <>
                      <CheckCircle2 className="w-4 h-4 text-emerald-500 fill-emerald-500/20" />
                      <span>Solved</span>
                    </>
                  ) : (
                    <>
                      <Circle className="w-4 h-4 text-zinc-400" />
                      <span>Mark Solved</span>
                    </>
                  )}
                </button>
              </div>

              {/* Title & Question Statement */}
              <div>
                <h4 className="text-sm sm:text-base font-bold text-zinc-900 dark:text-zinc-100 mb-1">
                  {q.title}
                </h4>
                <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300 leading-relaxed">
                  {q.question}
                </p>
              </div>

              {/* Expected I/O preview if present */}
              {q.sampleStdin && (
                <div className="flex flex-wrap items-center gap-3 text-[11px] text-zinc-500 font-mono bg-zinc-50 dark:bg-zinc-950/60 p-2.5 rounded-lg border border-zinc-100 dark:border-zinc-800/80">
                  <div className="flex items-center gap-1">
                    <span className="font-semibold text-zinc-700 dark:text-zinc-300">Input:</span>
                    <span className="bg-white dark:bg-zinc-900 px-1.5 py-0.5 rounded border border-zinc-200 dark:border-zinc-800 text-zinc-800 dark:text-zinc-200">
                      {q.sampleStdin.replace(/\n/g, ' ↵ ')}
                    </span>
                  </div>
                  {q.expectedOutput && (
                    <div className="flex items-center gap-1">
                      <span className="font-semibold text-zinc-700 dark:text-zinc-300">Output:</span>
                      <span className="bg-white dark:bg-zinc-900 px-1.5 py-0.5 rounded border border-zinc-200 dark:border-zinc-800 text-emerald-600 dark:text-emerald-400">
                        {q.expectedOutput.replace(/\n/g, ' ↵ ')}
                      </span>
                    </div>
                  )}
                </div>
              )}

              {/* Action Buttons Toolbar */}
              <div className="flex flex-wrap items-center justify-between gap-2 pt-1 border-t border-zinc-100 dark:border-zinc-800/80">
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={() => toggleHint(q.id)}
                    className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-medium border border-zinc-200 dark:border-zinc-700 text-zinc-600 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors"
                  >
                    <Lightbulb className="w-3.5 h-3.5 text-amber-500" />
                    <span>{isHintOpen ? 'Hide Hint' : 'Hint'}</span>
                    {isHintOpen ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
                  </button>

                  <button
                    type="button"
                    onClick={() => toggleSolution(q.id)}
                    className="inline-flex items-center gap-1 px-2.5 py-1 rounded-lg text-xs font-medium border border-zinc-200 dark:border-zinc-700 text-zinc-600 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors"
                  >
                    <Terminal className="w-3.5 h-3.5 text-emerald-500" />
                    <span>{isSolutionOpen ? 'Hide Solution' : 'Show Solution'}</span>
                    {isSolutionOpen ? <ChevronUp className="w-3 h-3" /> : <ChevronDown className="w-3 h-3" />}
                  </button>
                </div>

                {/* Try in Compiler Button */}
                <Link
                  href={`/tools/compiler?lang=${languageId}&q=${q.id}`}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-bold bg-emerald-600 hover:bg-emerald-500 text-white shadow-xs transition-all hover:scale-[1.02]"
                >
                  <Play className="w-3.5 h-3.5 fill-current" />
                  <span>Try in Compiler →</span>
                </Link>
              </div>

              {/* Collapsible Hint Block */}
              {isHintOpen && (
                <div className="rounded-xl border border-amber-500/20 bg-amber-500/[0.04] p-3 text-xs text-zinc-700 dark:text-zinc-300 leading-relaxed flex items-start gap-2.5">
                  <Lightbulb className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-amber-700 dark:text-amber-400 block mb-0.5">Hint:</strong>
                    <span>{q.hint}</span>
                  </div>
                </div>
              )}

              {/* Collapsible Solution Code Block */}
              {isSolutionOpen && (
                <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-950 text-zinc-100 p-3.5 text-xs font-mono relative overflow-hidden space-y-2">
                  <div className="flex items-center justify-between text-[11px] text-zinc-400 border-b border-zinc-800 pb-2">
                    <span>Verified {languageName} Solution</span>
                    <button
                      type="button"
                      onClick={() => handleCopySolution(q.id, q.solution)}
                      className="inline-flex items-center gap-1 text-[11px] text-zinc-400 hover:text-zinc-200 transition-colors"
                      title="Copy solution code"
                    >
                      {copiedSolutionId === q.id ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-emerald-400" />
                          <span className="text-emerald-400">Copied</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>Copy</span>
                        </>
                      )}
                    </button>
                  </div>
                  <pre className="overflow-x-auto text-[11px] sm:text-xs leading-relaxed max-h-72 scrollbar-thin">
                    <code>{q.solution}</code>
                  </pre>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

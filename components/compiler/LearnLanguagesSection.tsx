'use client';

import React from 'react';
import Link from 'next/link';
import { BookOpen, Play, GraduationCap, ArrowRight } from 'lucide-react';
import { SupportedLanguageId } from '@/lib/compiler/types';
import { DynamicIcon } from '@/components/icons/DynamicIcon';

interface LearnLanguagesSectionProps {
  onSelectLanguage?: (lang: SupportedLanguageId) => void;
}

export function LearnLanguagesSection({ onSelectLanguage }: LearnLanguagesSectionProps) {
  const cards = [
    {
      id: 'c' as SupportedLanguageId,
      slug: 'c',
      name: 'C',
      description: 'Learn the fundamentals of programming, memory, pointers and system-level concepts.',
      difficulty: 'Beginner → Intermediate',
      difficultyBadge: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20',
      icon: 'Code2',
    },
    {
      id: 'cpp' as SupportedLanguageId,
      slug: 'cpp',
      name: 'C++',
      description: 'Learn object-oriented programming, STL, algorithms and competitive programming concepts.',
      difficulty: 'Medium → Hard',
      difficultyBadge: 'bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20',
      icon: 'Code2',
    },
    {
      id: 'java' as SupportedLanguageId,
      slug: 'java',
      name: 'Java',
      description: 'Learn object-oriented programming, collections, exceptions and application development.',
      difficulty: 'Medium',
      difficultyBadge: 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20',
      icon: 'Coffee',
    },
    {
      id: 'python' as SupportedLanguageId,
      slug: 'python',
      name: 'Python',
      description: 'Learn simple and readable programming with powerful libraries and automation.',
      difficulty: 'Easy',
      difficultyBadge: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20',
      icon: 'Terminal',
    },
    {
      id: 'typescript' as SupportedLanguageId,
      slug: 'typescript',
      name: 'TypeScript',
      description: 'Learn modern typed JavaScript for web applications and scalable software.',
      difficulty: 'Medium',
      difficultyBadge: 'bg-sky-500/10 text-sky-600 dark:text-sky-400 border-sky-500/20',
      icon: 'Braces',
    },
  ];

  return (
    <section className="mt-12 pt-10 border-t border-zinc-200 dark:border-zinc-800 space-y-6">
      <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4">
        <div>
          <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-emerald-600 dark:text-emerald-400 mb-1">
            <GraduationCap className="w-4 h-4" />
            <span>Curriculum & Learning Guides</span>
          </div>
          <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50">
            Learn Programming Languages
          </h2>
          <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
            Understand the fundamentals before you start coding.
          </p>
        </div>

        <Link
          href="/learn"
          className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-emerald-600 dark:text-emerald-400 hover:underline"
        >
          <span>Language Comparison Guide</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {cards.map((lang) => (
          <div
            key={lang.id}
            className="flex flex-col justify-between rounded-2xl border border-zinc-200 dark:border-zinc-800/80 bg-white/70 dark:bg-zinc-900/60 p-5 backdrop-blur-sm hover:border-zinc-300 dark:hover:border-zinc-700 transition-all shadow-xs"
          >
            <div>
              <div className="flex items-center justify-between gap-3 mb-3.5">
                <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
                  <DynamicIcon name={lang.icon} className="w-5 h-5" />
                </div>
                <span
                  className={`text-[11px] font-semibold px-2 py-0.5 rounded-full border ${lang.difficultyBadge}`}
                >
                  {lang.difficulty}
                </span>
              </div>

              <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100">
                {lang.name}
              </h3>

              <p className="mt-1.5 text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed">
                {lang.description}
              </p>
            </div>

            <div className="mt-5 pt-3.5 border-t border-zinc-100 dark:border-zinc-800/80 flex items-center gap-2">
              <Link
                href={`/learn/${lang.slug}`}
                className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 hover:bg-zinc-50 dark:hover:bg-zinc-700/70 transition-colors"
              >
                <BookOpen className="w-3.5 h-3.5 text-emerald-500" />
                <span>Learn</span>
              </Link>

              {onSelectLanguage ? (
                <button
                  type="button"
                  onClick={() => {
                    onSelectLanguage(lang.id);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold bg-emerald-600 hover:bg-emerald-500 text-white shadow-xs transition-colors"
                >
                  <Play className="w-3 h-3 fill-current" />
                  <span>Open Compiler</span>
                </button>
              ) : (
                <Link
                  href={`/tools/compiler?lang=${lang.id}`}
                  className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl text-xs font-semibold bg-emerald-600 hover:bg-emerald-500 text-white shadow-xs transition-colors"
                >
                  <Play className="w-3 h-3 fill-current" />
                  <span>Open Compiler</span>
                </Link>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

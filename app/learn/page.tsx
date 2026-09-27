import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import {
  GraduationCap,
  Play,
  BookOpen,
  ArrowRight,
  CheckCircle2,
  Layers,
} from 'lucide-react';
import { COURSE_LIST, LANGUAGE_COMPARISON } from '@/lib/learn';
import { DynamicIcon } from '@/components/icons/DynamicIcon';

import { BackToTop } from '@/components/BackToTop';

export const metadata: Metadata = {
  title: 'Which Programming Language Should You Learn? — B.Tech Guide | DevForge',
  description:
    'Compare C, C++, Java, Python, and TypeScript. Find the ideal programming language for B.Tech semester exams, DSA, competitive coding, AI/ML, and web engineering.',
  keywords: [
    'learn programming',
    'which programming language to learn',
    'B.Tech programming languages',
    'C vs C++',
    'Java vs Python',
    'TypeScript vs JavaScript',
    'DSA languages',
    'coding for engineering students',
  ],
};

export default function LearnHubPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-16">
      {/* 1. Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 text-xs font-bold uppercase tracking-wider">
          <GraduationCap className="w-4 h-4" />
          <span>B.Tech Engineering Roadmap</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50">
          Which Programming Language Should You Learn?
        </h1>
        <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-300 leading-relaxed">
          There is no single &ldquo;best&rdquo; programming language. Different engineering domains require distinct tools: systems rely on C, competitive programming excels in C++, enterprise applications depend on Java, AI thrives on Python, and the web runs on TypeScript.
        </p>

        <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/tools/compiler"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm bg-emerald-600 hover:bg-emerald-500 text-white shadow-md shadow-emerald-600/20 transition-all hover:scale-[1.02]"
          >
            <Play className="w-4 h-4 fill-current" />
            <span>Open Online Compiler</span>
          </Link>
          <a
            href="#comparison-matrix"
            className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl text-sm font-semibold border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-800 transition-colors"
          >
            <span>View Comparison Table ↓</span>
          </a>
        </div>
      </div>

      {/* 2. Language Courses Grid */}
      <div className="space-y-6">
        <div className="flex items-center justify-between">
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-zinc-100">
              Interactive Language Courses
            </h2>
            <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400">
              Curated specifically for computer science and engineering undergraduates.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {COURSE_LIST.map((course) => (
            <div
              key={course.id}
              className="flex flex-col justify-between rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-white/70 dark:bg-zinc-900/60 p-6 backdrop-blur-sm hover:border-zinc-300 dark:hover:border-zinc-700 transition-all shadow-xs"
            >
              <div>
                <div className="flex items-center justify-between gap-3 mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shadow-xs">
                    <DynamicIcon name={course.icon} className="w-6 h-6" />
                  </div>
                  <span className="text-[11px] font-semibold px-2.5 py-1 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700">
                    {course.difficulty}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 mb-1">
                  {course.name}
                </h3>
                <p className="text-xs font-semibold text-emerald-600 dark:text-emerald-400 mb-2">
                  {course.tagline}
                </p>
                <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed mb-4">
                  {course.shortDescription}
                </p>

                <div className="space-y-1.5 pt-2 border-t border-zinc-100 dark:border-zinc-800/80 text-xs text-zinc-600 dark:text-zinc-400">
                  <div className="font-semibold text-zinc-800 dark:text-zinc-200">
                    Key Highlights:
                  </div>
                  <ul className="space-y-1">
                    {course.intro.advantages.slice(0, 2).map((adv, idx) => (
                      <li key={idx} className="flex items-start gap-1.5">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{adv}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-zinc-100 dark:border-zinc-800 flex items-center gap-2">
                <Link
                  href={`/learn/${course.slug}`}
                  className="flex-1 inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-semibold border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-zinc-800 dark:text-zinc-200 hover:bg-zinc-50 dark:hover:bg-zinc-700/80 transition-colors"
                >
                  <BookOpen className="w-4 h-4 text-emerald-500" />
                  <span>Start Learning</span>
                </Link>
                <Link
                  href={`/tools/compiler?lang=${course.id}`}
                  className="inline-flex items-center justify-center p-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white transition-colors"
                  title={`Open ${course.name} Compiler`}
                >
                  <Play className="w-4 h-4 fill-current" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 3. Section 15: Comparison Table */}
      <div id="comparison-matrix" className="scroll-mt-24 space-y-6">
        <div>
          <span className="text-xs uppercase font-bold tracking-wider text-emerald-600 dark:text-emerald-400">
            Decision Matrix
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 dark:text-zinc-50">
            Language Comparison Matrix
          </h2>
          <p className="mt-1 text-sm text-zinc-600 dark:text-zinc-400">
            Compare difficulty, primary applications, and architecture strengths across all 5 languages.
          </p>
        </div>

        <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 overflow-hidden shadow-xs">
          <div className="overflow-x-auto">
            <table className="w-full text-left text-sm">
              <thead className="bg-zinc-50 dark:bg-zinc-950/70 border-b border-zinc-200 dark:border-zinc-800 text-xs font-semibold text-zinc-500 uppercase tracking-wider">
                <tr>
                  <th className="px-5 py-3.5">Language</th>
                  <th className="px-5 py-3.5">Best For</th>
                  <th className="px-5 py-3.5">Difficulty</th>
                  <th className="px-5 py-3.5">Main Strength</th>
                  <th className="px-5 py-3.5">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-200 dark:divide-zinc-800/80">
                {LANGUAGE_COMPARISON.map((row) => (
                  <tr
                    key={row.slug}
                    className="hover:bg-zinc-50/50 dark:hover:bg-zinc-800/30 transition-colors"
                  >
                    <td className="px-5 py-4 font-bold text-zinc-900 dark:text-zinc-100 flex items-center gap-2">
                      <span>{row.language}</span>
                    </td>
                    <td className="px-5 py-4 text-xs sm:text-sm text-zinc-700 dark:text-zinc-300">
                      {row.bestFor}
                    </td>
                    <td className="px-5 py-4">
                      <span className="inline-block text-xs font-medium px-2 py-0.5 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700">
                        {row.difficulty}
                      </span>
                    </td>
                    <td className="px-5 py-4 text-xs sm:text-sm text-zinc-600 dark:text-zinc-400">
                      {row.mainStrength}
                    </td>
                    <td className="px-5 py-4">
                      <Link
                        href={`/learn/${row.slug}`}
                        className="inline-flex items-center gap-1 text-xs font-bold text-emerald-600 dark:text-emerald-400 hover:underline whitespace-nowrap"
                      >
                        <span>Learn Guide</span>
                        <ArrowRight className="w-3.5 h-3.5" />
                      </Link>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* 4. Practical Recommendation Flowchart Cards */}
      <div className="rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50/70 dark:bg-zinc-900/40 p-6 sm:p-10 space-y-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
            <Layers className="w-5 h-5" />
          </div>
          <div>
            <h3 className="text-lg font-bold text-zinc-900 dark:text-zinc-100">
              How to Choose Based on Your B.Tech Goals
            </h3>
            <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400">
              Clear path based on your current semester and career aspirations:
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="p-4 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 space-y-2">
            <div className="text-xs font-bold uppercase text-emerald-600 dark:text-emerald-400">
              Year 1 & 2 Undergraduates
            </div>
            <h4 className="font-bold text-sm text-zinc-900 dark:text-zinc-100">
              Start with C, then move to C++ or Java
            </h4>
            <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Mastering C first gives you a foundational understanding of memory, pointers, and CPU execution before learning OOP in C++ or Java.
            </p>
          </div>

          <div className="p-4 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 space-y-2">
            <div className="text-xs font-bold uppercase text-blue-600 dark:text-blue-400">
              DSA & Placements
            </div>
            <h4 className="font-bold text-sm text-zinc-900 dark:text-zinc-100">
              Pick C++ (STL) or Java (Collections)
            </h4>
            <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
              For LeetCode and product company campus drives, C++ STL or Java Collections are industry standard and widely accepted in coding interviews.
            </p>
          </div>

          <div className="p-4 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 space-y-2">
            <div className="text-xs font-bold uppercase text-amber-600 dark:text-amber-400">
              Projects & Modern Tech
            </div>
            <h4 className="font-bold text-sm text-zinc-900 dark:text-zinc-100">
              Learn Python (AI/ML) or TypeScript (Web)
            </h4>
            <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">
              If your goal is building machine learning models or full-stack web applications, Python and TypeScript offer the fastest development velocity.
            </p>
          </div>
        </div>
      </div>

      <BackToTop />
    </div>
  );
}

'use client';

import React, { useCallback } from 'react';
import Link from 'next/link';
import {
  Play,
  GraduationCap,
  CheckCircle,
  HelpCircle,
  ArrowRight,
  Layers,
  Sparkles,
  Code2,
} from 'lucide-react';
import { CourseData } from '@/lib/learn/types';
import { getCurriculum } from '@/lib/learn/curriculum';
import { LearnLayout } from './LearnLayout';
import { TopicSectionView } from './TopicSectionView';
import { DynamicIcon } from '@/components/icons/DynamicIcon';
import { BTechPracticeSection } from './BTechPracticeSection';
import { useTopicProgress } from '@/lib/learn/use-topic-progress';

interface CourseLayoutProps {
  course: CourseData;
}

export function CourseLayout({ course }: CourseLayoutProps) {
  const curriculum = getCurriculum(course.id)!;
  const compilerUrl = `/tools/compiler?lang=${course.id}`;
  const { getStatus, markDone, doneCount } = useTopicProgress(course.id);

  const handleNav = useCallback((id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  }, []);

  return (
    <LearnLayout curriculum={curriculum}>
      {/* 1. Hero Header */}
      <div className="relative rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-white/70 dark:bg-zinc-900/60 p-6 sm:p-10 backdrop-blur-md overflow-hidden">
        <div className="absolute top-0 right-0 -mr-16 -mt-16 w-64 h-64 rounded-full bg-emerald-500/10 blur-3xl pointer-events-none" />

        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="flex items-center gap-2.5">
              <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shadow-xs">
                <DynamicIcon name={course.icon} className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs uppercase font-bold tracking-wider text-emerald-600 dark:text-emerald-400">
                  B.Tech Engineering Course
                </span>
                <h1 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-zinc-50">
                  Learn {course.name} Programming
                </h1>
              </div>
            </div>

            <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-300 leading-relaxed">
              {course.tagline}. {course.shortDescription}
            </p>

            <div className="flex flex-wrap items-center gap-2 pt-1 text-xs">
              <span className="px-2.5 py-1 rounded-full font-medium bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border border-emerald-500/20">
                <strong>Difficulty:</strong> {course.difficulty}
              </span>
              <span className="px-2.5 py-1 rounded-full font-medium bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700">
                <strong>Best For:</strong> {course.bestFor}
              </span>
            </div>
          </div>

          <div className="flex flex-col w-full sm:w-auto gap-2.5 shrink-0">
            <Link
              href={compilerUrl}
              className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl font-bold text-sm bg-emerald-600 hover:bg-emerald-500 text-white shadow-md shadow-emerald-600/20 transition-all hover:scale-[1.02]"
            >
              <Play className="w-4 h-4 fill-current" />
              <span>▶ Open {course.name} Compiler</span>
            </Link>

            <a
              href="#btech-priority"
              className="inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 hover:bg-zinc-50 dark:hover:bg-zinc-700/60 transition-colors"
            >
              <GraduationCap className="w-4 h-4 text-emerald-500" />
              <span>B.Tech Exam & Viva Prep ↓</span>
            </a>

            <a
              href="#practice-questions"
              className="inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold border border-emerald-500/30 bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 hover:bg-emerald-500/20 transition-colors"
            >
              <Code2 className="w-4 h-4 text-emerald-500" />
              <span>25+ Practice Questions ↓</span>
            </a>
          </div>
        </div>
      </div>

      {/* 2. Introduction & Industry Context */}
      <div id="introduction" className="scroll-mt-24 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 p-6 sm:p-8 space-y-6">
        <div>
          <h2 className="text-lg font-bold text-zinc-900 dark:text-zinc-100 flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-emerald-500" />
            <span>Introduction to {course.name}</span>
          </h2>
          <p className="mt-2 text-sm sm:text-base text-zinc-600 dark:text-zinc-300 leading-relaxed">
            {course.intro.whatIs}
          </p>
          <p className="mt-3 text-sm sm:text-base text-zinc-600 dark:text-zinc-300 leading-relaxed font-medium">
            <strong>Why B.Tech Students Should Learn {course.name}:</strong> {course.intro.whyLearn}
          </p>
        </div>

        {/* Where Used & Pros/Cons Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
          <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/60 p-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-2">
              Where {course.name} is Used in Industry
            </h3>
            <ul className="space-y-1.5 text-xs sm:text-sm text-zinc-700 dark:text-zinc-300">
              {course.intro.whereUsed.map((u, i) => (
                <li key={i} className="flex items-start gap-2">
                  <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                  <span>{u}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/60 p-4">
            <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-500 dark:text-zinc-400 mb-2">
              Key Strengths & Trade-offs
            </h3>
            <div className="space-y-2 text-xs sm:text-sm">
              <div>
                <strong className="text-emerald-600 dark:text-emerald-400 block mb-1">Advantages:</strong>
                <ul className="space-y-1 text-zinc-700 dark:text-zinc-300">
                  {course.intro.advantages.slice(0, 2).map((a, i) => (
                    <li key={i}>• {a}</li>
                  ))}
                </ul>
              </div>
              <div className="pt-1">
                <strong className="text-zinc-500 dark:text-zinc-400 block mb-1">Limitations:</strong>
                <ul className="space-y-1 text-zinc-600 dark:text-zinc-400">
                  {course.intro.limitations.slice(0, 2).map((l, i) => (
                    <li key={i}>• {l}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Visual Callout Diagram if defined */}
        {course.visualCallout && (
          <div className="rounded-xl border border-emerald-500/30 bg-emerald-500/[0.04] p-4 sm:p-5 space-y-3">
            <div className="flex items-center gap-2">
              <Layers className="w-4 h-4 text-emerald-500" />
              <h3 className="text-sm font-bold text-zinc-900 dark:text-zinc-100">
                {course.visualCallout.title}
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300">
              {course.visualCallout.description}
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
              {course.visualCallout.items.map((item, idx) => (
                <div
                  key={idx}
                  className="rounded-lg border border-zinc-200 dark:border-zinc-800 bg-white/90 dark:bg-zinc-900/90 p-3"
                >
                  <div className="flex items-center justify-between mb-1">
                    <span className="font-bold text-xs text-zinc-900 dark:text-zinc-100">{item.label}</span>
                    {item.badge && (
                      <span className="text-[10px] font-semibold px-1.5 py-0.5 rounded bg-emerald-500/10 text-emerald-600 dark:text-emerald-400">
                        {item.badge}
                      </span>
                    )}
                  </div>
                  <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">{item.detail}</p>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>

      {/* 3. Detailed Topics Progression */}
      <div className="space-y-2">
        <h2 className="text-xl font-bold tracking-tight text-zinc-900 dark:text-zinc-100 mb-4">
          Complete {course.name} Curriculum & Interactive Lessons
        </h2>
        <div className="space-y-6">
          {/* Progress bar */}
          <div className="flex items-center gap-3 mb-2">
            <div className="flex-1 h-1.5 bg-zinc-800 rounded-full overflow-hidden">
              <div
                className="h-full bg-emerald-500 rounded-full transition-all duration-500"
                style={{ width: `${course.topics.length > 0 ? Math.round((doneCount / course.topics.length) * 100) : 0}%` }}
              />
            </div>
            <span className="text-xs text-zinc-400 shrink-0">
              {doneCount}/{course.topics.length} done
            </span>
          </div>

          {course.topics.map((topic, idx) => {
            const prevTopic = idx > 0 ? course.topics[idx - 1] : null;
            const nextTopic = idx < course.topics.length - 1 ? course.topics[idx + 1] : null;
            return (
              <TopicSectionView
                key={topic.id}
                topic={topic}
                languageId={course.id}
                languageName={course.name}
                topicIndex={idx + 1}
                totalTopics={course.topics.length}
                status={getStatus(topic.id)}
                onMarkDone={markDone}
                onPrev={prevTopic ? () => handleNav(prevTopic.id) : undefined}
                onNext={nextTopic ? () => handleNav(nextTopic.id) : undefined}
                prevTitle={prevTopic?.title}
                nextTitle={nextTopic?.title}
              />
            );
          })}
        </div>
      </div>

      {/* 4. Section: Important for B.Tech Students */}
      <div
        id="btech-priority"
        className="scroll-mt-24 rounded-3xl border border-emerald-500/30 bg-gradient-to-br from-emerald-500/[0.05] via-zinc-50 to-white dark:from-emerald-950/20 dark:via-zinc-900 dark:to-zinc-900/60 p-6 sm:p-10 space-y-10 shadow-lg shadow-emerald-950/5"
      >
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 rounded-2xl bg-emerald-600 text-white flex items-center justify-center shadow-md shadow-emerald-600/30">
            <GraduationCap className="w-6 h-6" />
          </div>
          <div>
            <span className="text-xs uppercase font-bold tracking-wider text-emerald-600 dark:text-emerald-400">
              Exam & Placement Accelerator
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 dark:text-zinc-50">
              Important for B.Tech Students
            </h2>
          </div>
        </div>

        {/* A. Important Topics: Semester Exams & DSA Prerequisites */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Semester Exams High Priority */}
          <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white/80 dark:bg-zinc-900/80 p-5 space-y-3">
            <h3 className="text-sm font-bold text-zinc-900 dark:text-zinc-100 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500" />
              <span>High Priority Semester Exam Topics</span>
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm text-zinc-600 dark:text-zinc-300">
              {course.bTechPriority.semesterExams.map((topic, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-emerald-500 font-bold shrink-0">✓</span>
                  <span>{topic}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* DSA & Coding Rounds Prerequisites */}
          <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white/80 dark:bg-zinc-900/80 p-5 space-y-3">
            <h3 className="text-sm font-bold text-zinc-900 dark:text-zinc-100 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-blue-500" />
              <span>DSA & Placement Test Prerequisites</span>
            </h3>
            <ul className="space-y-2 text-xs sm:text-sm text-zinc-600 dark:text-zinc-300">
              {course.bTechPriority.dsaPrerequisites.map((dsa, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-blue-500 font-bold shrink-0">✓</span>
                  <span>{dsa}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* B. Viva Voce Questions & Answers */}
        <div className="space-y-4">
          <h3 className="text-base font-bold text-zinc-900 dark:text-zinc-100 flex items-center gap-2">
            <HelpCircle className="w-4 h-4 text-emerald-500" />
            <span>Top University Lab Viva Voce Questions & Model Answers</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {course.bTechPriority.vivaQuestions.map((viva, i) => (
              <div
                key={i}
                className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white/90 dark:bg-zinc-900/90 p-4 space-y-2"
              >
                <div className="flex items-start gap-2">
                  <span className="text-xs font-mono font-bold text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded">
                    Q{i + 1}
                  </span>
                  <h4 className="text-xs sm:text-sm font-bold text-zinc-900 dark:text-zinc-100">
                    {viva.q}
                  </h4>
                </div>
                <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed pl-7">
                  {viva.a}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* C. Coding Round & Technical Interview Tips */}
        <div className="rounded-2xl border border-amber-500/30 bg-amber-500/[0.04] p-5 space-y-3">
          <h3 className="text-sm font-bold text-zinc-900 dark:text-zinc-100 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-amber-500" />
            <span>Campus Placement Interview & Coding Round Advice</span>
          </h3>
          <ul className="space-y-2 text-xs sm:text-sm text-zinc-600 dark:text-zinc-300">
            {course.bTechPriority.interviewTips.map((tip, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="text-amber-500 font-bold shrink-0">→</span>
                <span>{tip}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* 5. Section: 25+ Curated B.Tech Practice Questions */}
      <BTechPracticeSection
        languageId={course.id}
        languageName={course.name}
      />

      {/* 6. Footer Navigation & Language Switcher */}
      <div className="p-6 sm:p-8 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/40 space-y-4">
        <h3 className="text-base font-bold text-zinc-900 dark:text-zinc-100">
          Continue Your Engineering Learning Journey
        </h3>
        <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400">
          Master multiple programming paradigms to excel in coursework, competitive programming, and technical interviews.
        </p>

        <div className="flex flex-wrap gap-3 pt-2">
          {['c', 'cpp', 'java', 'python', 'typescript']
            .filter((lang) => lang !== course.id)
            .map((lang) => (
              <Link
                key={lang}
                href={`/learn/${lang}`}
                className="px-3 py-1.5 rounded-xl border border-zinc-200 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-xs font-semibold text-zinc-700 dark:text-zinc-300 hover:border-emerald-500 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
              >
                Learn {lang.toUpperCase()} &rarr;
              </Link>
            ))}
        </div>

        <div className="pt-2 border-t border-zinc-200 dark:border-zinc-800/80 flex items-center justify-between">
          <Link
            href="/learn"
            className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-zinc-600 dark:text-zinc-400 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors"
          >
            <span>Compare with other languages</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </LearnLayout>
  );
}

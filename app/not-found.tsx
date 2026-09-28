import React from "react";
import Link from "next/link";
import { Metadata } from "next";
import {
  FileQuestion,
  Home,
  Terminal,
  Code2,
  BookOpen,
  ArrowRight,
  Sparkles,
  } from "lucide-react";
import { TOOLS } from "@/lib/tools-registry";
import { COURSE_LIST } from "@/lib/learn";

export const metadata: Metadata = {
  title: "Page Not Found",
  description: "The page you are looking for does not exist. Browse our developer tools, compilers, or programming tutorials.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function NotFound() {
  const popularTools = TOOLS.filter((t) => t.popular).slice(0, 6);

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-16 sm:py-24 text-center">
      {/* 404 Badge */}
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-500 text-xs font-bold uppercase tracking-wider border border-blue-500/20 mb-6">
        <FileQuestion className="w-4 h-4" />
        <span>Error 404 — Page Missing</span>
      </div>

      <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-foreground max-w-2xl mx-auto">
        We couldn&apos;t find that page
      </h1>

      <p className="mt-3 text-sm sm:text-base text-muted-foreground max-w-xl mx-auto">
        The tool, tutorial, or resource you were looking for may have moved or doesn&apos;t exist. Let&apos;s get you back on track with our popular developer utilities.
      </p>

      {/* Quick Action Buttons */}
      <div className="flex flex-wrap items-center justify-center gap-3 mt-8">
        <Link
          href="/"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-primary text-white font-semibold text-sm hover:bg-blue-600 transition-colors shadow-sm"
        >
          <Home className="w-4 h-4" />
          <span>Return Home</span>
        </Link>
        <Link
          href="/tools/compiler"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-muted hover:bg-muted/80 text-foreground font-semibold text-sm border border-border transition-colors"
        >
          <Terminal className="w-4 h-4 text-blue-500" />
          <span>Open Compiler</span>
        </Link>
        <Link
          href="/learn"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-muted hover:bg-muted/80 text-foreground font-semibold text-sm border border-border transition-colors"
        >
          <BookOpen className="w-4 h-4 text-emerald-500" />
          <span>Explore Tutorials</span>
        </Link>
      </div>

      {/* Popular Developer Tools Grid */}
      <div className="mt-16 text-left">
        <div className="flex items-center justify-between mb-4 border-b border-border pb-3">
          <h2 className="text-base sm:text-lg font-bold text-foreground flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-blue-500" />
            <span>Popular Developer Tools</span>
          </h2>
          <Link
            href="/tools"
            className="text-xs font-semibold text-blue-500 hover:underline flex items-center gap-1"
          >
            <span>View all 20+ tools</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
          {popularTools.map((tool) => (
            <Link
              key={tool.slug}
              href={`/tools/${tool.slug}`}
              className="p-3.5 rounded-xl border border-border bg-card hover:border-blue-500/40 hover:bg-accent/40 transition-all group"
            >
              <div className="font-semibold text-sm text-foreground group-hover:text-blue-500 transition-colors">
                {tool.name}
              </div>
              <p className="text-xs text-muted-foreground line-clamp-1 mt-1">
                {tool.shortDescription}
              </p>
            </Link>
          ))}
        </div>
      </div>

      {/* Programming Courses Grid */}
      <div className="mt-10 text-left">
        <div className="flex items-center justify-between mb-4 border-b border-border pb-3">
          <h2 className="text-base sm:text-lg font-bold text-foreground flex items-center gap-2">
            <Code2 className="w-4 h-4 text-blue-500" />
            <span>Engineering Programming Tutorials</span>
          </h2>
          <Link
            href="/learn"
            className="text-xs font-semibold text-blue-500 hover:underline flex items-center gap-1"
          >
            <span>View curriculum</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-3">
          {COURSE_LIST.map((course) => (
            <Link
              key={course.id}
              href={`/learn/${course.slug}`}
              className="p-3 rounded-xl border border-border bg-card hover:border-blue-500/40 hover:bg-accent/40 text-center transition-all group"
            >
              <div className="font-bold text-sm text-foreground group-hover:text-blue-500 transition-colors">
                {course.name}
              </div>
              <span className="text-[11px] text-muted-foreground mt-0.5 block">
                {course.difficulty}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

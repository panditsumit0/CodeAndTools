import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import {
  TOOLS,
  getToolsByCategory,
} from '@/lib/tools-registry';
import { COURSE_LIST } from '@/lib/learn';
import { ToolCard } from '@/components/tools/ToolCard';
import { HomeHeroSearch } from '@/components/home/HomeHeroSearch';
import { MonetizationSlot } from '@/components/tools/MonetizationSlot';
import { DynamicIcon } from '@/components/icons/DynamicIcon';
import {
  ArrowRight,
  ShieldCheck,
  Sparkles,
  Terminal,
  Play,
  Repeat,
  Minimize2,
  BookOpen,
  GraduationCap,
} from 'lucide-react';

export default function HomePage() {
  const converterTools = getToolsByCategory('converters');
  const compressorTools = getToolsByCategory('compressors');
  const devTools = TOOLS.filter(
    (t) => t.category !== 'converters' && t.category !== 'compressors' && t.slug !== 'compiler'
  );

  return (
    <div className="space-y-20 pb-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-16 sm:pt-24 pb-12 sm:pb-20 border-b border-zinc-200 dark:border-[#1F2937] bg-gradient-to-b from-blue-500/[0.04] via-transparent to-transparent">
        {/* Subtle decorative glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-blue-500/10 dark:bg-blue-500/5 blur-[120px] rounded-full pointer-events-none -z-10" />

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          {/* Code&Tools Logo */}
          <div className="flex justify-center mb-2">
            <Link href="/" aria-label="Code&Tools home" className="group inline-block">
              <Image
                src="/branding/devforge-logo.png"
                alt="Code&Tools — Build. Learn. Create."
                width={220}
                height={147}
                priority
                className="w-[160px] sm:w-[200px] h-auto object-contain group-hover:scale-105 group-hover:brightness-110 transition-all duration-300"
              />
            </Link>
          </div>

          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 text-xs font-semibold border border-blue-500/20 shadow-xs">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse" />
            <span>Fast, private, browser-based tools & tutorials</span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight text-zinc-900 dark:text-white max-w-4xl mx-auto leading-[1.15]">
            Developer utilities & learning that{' '}
            <span className="bg-gradient-to-r from-blue-500 via-cyan-400 to-blue-400 bg-clip-text text-transparent">
              just work.
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-zinc-600 dark:text-zinc-400 max-w-2xl mx-auto leading-relaxed">
            Local developer tools, document & image converters, high-ratio compressors, and interactive programming courses for B.Tech students.
          </p>

          {/* Call to Action Buttons */}
          <div className="flex flex-wrap items-center justify-center gap-3 pt-2">
            <Link
              href="/tools/compiler"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary hover:bg-blue-500 text-white font-semibold text-sm sm:text-base transition-all shadow-lg shadow-blue-500/25 hover:shadow-blue-500/35 active:scale-98"
            >
              <Terminal className="w-4 h-4 stroke-[2.5]" />
              <span>Launch Compiler</span>
            </Link>

            <Link
              href="/converters"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-zinc-200 dark:border-[#1F2937] bg-white/80 dark:bg-[#151B24] hover:bg-zinc-100 dark:hover:bg-[#1F2937] text-zinc-900 dark:text-[#E2E8F0] font-semibold text-sm sm:text-base transition-colors"
            >
              <Repeat className="w-4 h-4 text-[#F97316]" />
              <span>Converters</span>
            </Link>

            <Link
              href="/compressors"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl border border-zinc-200 dark:border-[#1F2937] bg-white/80 dark:bg-[#151B24] hover:bg-zinc-100 dark:hover:bg-[#1F2937] text-zinc-900 dark:text-[#E2E8F0] font-semibold text-sm sm:text-base transition-colors"
            >
              <Minimize2 className="w-4 h-4 text-[#22D3EE]" />
              <span>Compressors</span>
            </Link>
          </div>

          {/* Search Interface in Hero */}
          <div className="pt-6">
            <HomeHeroSearch />
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-20">
        {/* Major Featured Compiler Spotlight Banner */}
        <section className="relative overflow-hidden rounded-3xl border border-blue-500/30 bg-gradient-to-br from-blue-500/10 via-card to-card p-6 sm:p-10 shadow-lg shadow-blue-500/5">
          <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
            <div className="space-y-4 max-w-2xl">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/15 text-blue-600 dark:text-blue-400 text-xs font-bold uppercase tracking-wider border border-blue-500/25">
                <Terminal className="w-3.5 h-3.5" />
                <span>Featured Online IDE</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-foreground">
                Code&Tools Multi-Language Compiler
              </h2>
              <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                Compile and execute C, C++, Java, Python, and TypeScript with intelligent input detection, terminal-like prompt collection, live syntax hints, and zero setup.
              </p>
              <div className="flex flex-wrap items-center gap-2 pt-1 text-xs">
                {['C', 'C++', 'Java', 'Python', 'TypeScript'].map((lang) => (
                  <span
                    key={lang}
                    className="px-2.5 py-1 rounded-lg bg-background border border-border/80 font-mono font-medium text-foreground"
                  >
                    {lang}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row lg:flex-col gap-3 w-full sm:w-auto shrink-0">
              <Link
                href="/tools/compiler"
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-primary hover:bg-blue-500 text-white font-bold text-sm shadow-md shadow-blue-500/25 transition-all hover:scale-[1.02]"
              >
                <Play className="w-4 h-4 fill-current" />
                <span>Open Compiler Workspace</span>
              </Link>
              <Link
                href="/learn"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl border border-border bg-card hover:bg-muted text-foreground font-semibold text-xs transition-colors"
              >
                <BookOpen className="w-4 h-4 text-blue-500" />
                <span>Browse B.Tech Tutorials</span>
              </Link>
            </div>
          </div>
        </section>

        {/* 1. Developer Tools */}
        <section className="space-y-6">
          <div className="flex items-center justify-between pb-3 border-b border-border">
            <div>
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-amber-500" />
                <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground">
                  Developer Tools
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-muted-foreground mt-1">
                JSON formatter, JWT decoder, Regex tester, UUID generator, and essential utilities.
              </p>
            </div>

            <Link
              href="/tools"
              className="text-xs sm:text-sm font-semibold text-primary hover:underline flex items-center gap-1"
            >
              <span>View all tools</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {devTools.slice(0, 6).map((tool) => (
              <ToolCard key={tool.slug} tool={tool} />
            ))}
          </div>
        </section>

        {/* 2. Converters Section */}
        <section className="space-y-6">
          <div className="flex items-center justify-between pb-3 border-b border-border">
            <div>
              <div className="flex items-center gap-2">
                <Repeat className="w-4 h-4 text-blue-500" />
                <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground">
                  File Converters
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-muted-foreground mt-1">
                Convert between PDF, Microsoft Word, plain text, and multiple image formats entirely in your browser.
              </p>
            </div>

            <Link
              href="/converters"
              className="text-xs sm:text-sm font-semibold text-[#F97316] hover:underline flex items-center gap-1"
            >
              <span>All {converterTools.length} converters</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {converterTools.slice(0, 6).map((tool) => (
              <ToolCard key={tool.slug} tool={tool} />
            ))}
          </div>
        </section>

        {/* 3. Compressors Section */}
        <section className="space-y-6">
          <div className="flex items-center justify-between pb-3 border-b border-border">
            <div>
              <div className="flex items-center gap-2">
                <Minimize2 className="w-4 h-4 text-teal-500" />
                <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground">
                  File Compressors
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-muted-foreground mt-1">
                Reduce image sizes, optimize PDF documents, and bundle multiple files into ZIP archives.
              </p>
            </div>

            <Link
              href="/compressors"
              className="text-xs sm:text-sm font-semibold text-[#22D3EE] hover:underline flex items-center gap-1"
            >
              <span>All compressors</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
            {compressorTools.map((tool) => (
              <ToolCard key={tool.slug} tool={tool} />
            ))}
          </div>
        </section>

        {/* 4. Learn Section */}
        <section className="space-y-6">
          <div className="flex items-center justify-between pb-3 border-b border-border">
            <div>
              <div className="flex items-center gap-2">
                <GraduationCap className="w-4 h-4 text-blue-500" />
                <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-foreground">
                  Learn Programming for B.Tech
                </h2>
              </div>
              <p className="text-xs sm:text-sm text-muted-foreground mt-1">
                Curated language guides with viva questions, university exam priorities, and 25+ practice questions each.
              </p>
            </div>

            <Link
              href="/learn"
              className="text-xs sm:text-sm font-semibold text-blue-500 hover:underline flex items-center gap-1"
            >
              <span>Compare all languages</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {COURSE_LIST.map((course) => (
              <Link
                key={course.slug}
                href={`/learn/${course.slug}`}
                className="group p-4 rounded-2xl border border-border/80 bg-card hover:border-primary/50 hover:bg-muted/40 transition-all flex flex-col justify-between space-y-3"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-primary/10 text-primary flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
                    <DynamicIcon name={course.icon} className="w-5 h-5" />
                  </div>
                  <h3 className="font-bold text-sm text-foreground group-hover:text-primary transition-colors">
                    {course.name}
                  </h3>
                  <p className="text-xs text-muted-foreground line-clamp-2 mt-1">
                    {course.tagline}
                  </p>
                </div>
                <div className="pt-2 border-t border-border/50 flex items-center justify-between text-[11px] text-primary font-semibold">
                  <span>Start Guide</span>
                  <ArrowRight className="w-3 h-3 group-hover:translate-x-0.5 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Privacy Highlight Banner */}
        <section className="p-6 sm:p-8 rounded-3xl border border-blue-500/20 bg-gradient-to-r from-blue-500/5 via-cyan-500/5 to-blue-500/5 dark:from-blue-950/20 dark:via-[#0D1117] dark:to-blue-950/20 flex flex-col md:flex-row items-center justify-between gap-6 shadow-sm">
          <div className="flex items-start gap-4">
            <div className="w-12 h-12 rounded-2xl bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20 flex items-center justify-center shrink-0">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <div>
              <h2 className="text-base sm:text-lg font-bold text-foreground">
                Your data stays in your browser. Nothing is uploaded to our servers.
              </h2>
              <p className="mt-1 text-xs sm:text-sm text-muted-foreground leading-relaxed">
                All conversions, compressions, token decodings, regex evaluations, and hashes execute locally using your device’s JavaScript and WebAssembly runtimes. Zero data leaks, zero logs, 100% private.
              </p>
            </div>
          </div>

          <Link
            href="/about"
            className="shrink-0 text-xs sm:text-sm font-semibold text-blue-600 dark:text-blue-400 hover:underline flex items-center gap-1.5"
          >
            <span>Learn about our architecture</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </section>

        {/* Monetization / Pro Slot */}
        <MonetizationSlot />
      </div>
    </div>
  );
}


import React from 'react';
import { ToolDefinition } from '@/types/tool';
import { ToolHeader } from './ToolHeader';
import { ToolFaq } from './ToolFaq';
import { RelatedTools } from './RelatedTools';
import { MonetizationSlot } from './MonetizationSlot';
import { CheckCircle2, ListOrdered, Sparkles, ShieldCheck, Info } from 'lucide-react';

interface ToolLayoutProps {
  tool: ToolDefinition;
  children: React.ReactNode;
}

export function ToolLayout({ tool, children }: ToolLayoutProps) {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      {/* Header with breadcrumbs, title, category, privacy badge */}
      <ToolHeader tool={tool} />

      {/* Main Interactive Tool Workspace */}
      <div className="rounded-2xl border border-zinc-200 dark:border-[#1F2937] bg-white dark:bg-[#0D1117] shadow-xl dark:shadow-2xl overflow-hidden p-4 sm:p-6 mb-8">
        {children}
      </div>

      {/* Monetization / Pro plan slot */}
      <MonetizationSlot />

      {/* About & Technical Overview */}
      <section className="p-6 sm:p-8 rounded-2xl border border-zinc-200 dark:border-[#1F2937] bg-white dark:bg-[#0D1117] my-8 shadow-xs">
        <div className="flex items-center gap-2 mb-3 text-zinc-900 dark:text-zinc-100 font-bold text-lg">
          <Info className="w-5 h-5 text-blue-500" />
          <h2>About {tool.name}</h2>
        </div>
        <p className="text-sm sm:text-base text-zinc-600 dark:text-zinc-300 leading-relaxed">
          {tool.longDescription}
        </p>

        {/* Privacy Note */}
        <div className="mt-5 p-4 rounded-xl bg-blue-500/[0.04] dark:bg-blue-500/[0.08] border border-blue-500/20 flex items-start gap-3">
          <ShieldCheck className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
          <div className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-300">
            <strong className="text-zinc-900 dark:text-white block mb-0.5">Privacy First Guarantee</strong>
            All processing for this utility executes locally in your browser memory via native JavaScript Web APIs. No inputs, keys, strings, or file payloads are transmitted to external servers or logged anywhere.
          </div>
        </div>
      </section>

      {/* Guide & Documentation Sections */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-8">
        {/* How to use */}
        <section className="p-6 rounded-2xl border border-zinc-200 dark:border-[#1F2937] bg-zinc-50/70 dark:bg-[#090D14]">
          <div className="flex items-center gap-2 mb-4 text-zinc-900 dark:text-zinc-100 font-bold text-base sm:text-lg">
            <ListOrdered className="w-5 h-5 text-blue-500" />
            <h3>How to use {tool.name}</h3>
          </div>
          <ol className="space-y-3">
            {tool.howToUse.map((step, idx) => (
              <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-zinc-600 dark:text-zinc-400">
                <span className="flex items-center justify-center w-5 h-5 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 font-bold text-xs shrink-0 mt-0.5 border border-blue-500/20">
                  {idx + 1}
                </span>
                <span className="leading-relaxed">{step}</span>
              </li>
            ))}
          </ol>
        </section>

        {/* Features */}
        <section className="p-6 rounded-2xl border border-zinc-200 dark:border-[#1F2937] bg-zinc-50/70 dark:bg-[#090D14]">
          <div className="flex items-center gap-2 mb-4 text-zinc-900 dark:text-zinc-100 font-bold text-base sm:text-lg">
            <Sparkles className="w-5 h-5 text-blue-500" />
            <h3>Key Features</h3>
          </div>
          <ul className="space-y-3">
            {tool.features.map((feature, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-600 dark:text-zinc-400">
                <CheckCircle2 className="w-4 h-4 text-blue-500 shrink-0 mt-0.5" />
                <span className="leading-relaxed">{feature}</span>
              </li>
            ))}
          </ul>
        </section>
      </div>

      {/* Frequently Asked Questions */}
      <ToolFaq faq={tool.faq} />

      {/* Related tools */}
      <RelatedTools currentSlug={tool.slug} relatedSlugs={tool.relatedSlugs} />
    </div>
  );
}

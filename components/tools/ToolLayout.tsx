import React from 'react';
import { ToolDefinition } from '@/types/tool';
import { ToolHeader } from './ToolHeader';
import { ToolFaq } from './ToolFaq';
import { RelatedTools } from './RelatedTools';
import { MonetizationSlot } from './MonetizationSlot';
import { CheckCircle2, ListOrdered, Sparkles } from 'lucide-react';

interface ToolLayoutProps {
  tool: ToolDefinition;
  children: React.ReactNode;
}

export function ToolLayout({ tool, children }: ToolLayoutProps) {
  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      {/* Header with breadcrumbs, title, category, privacy banner */}
      <ToolHeader tool={tool} />

      {/* Main Interactive Tool Workspace */}
      <div className="rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/90 shadow-xl dark:shadow-2xl overflow-hidden p-4 sm:p-6 mb-8">
        {children}
      </div>

      {/* Monetization / Pro plan slot */}
      <MonetizationSlot />

      {/* Guide & Documentation Sections */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 my-10">
        {/* How to use */}
        <section className="p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800/80 bg-zinc-50/70 dark:bg-zinc-900/40">
          <div className="flex items-center gap-2 mb-4 text-zinc-900 dark:text-zinc-100 font-bold text-base sm:text-lg">
            <ListOrdered className="w-5 h-5 text-emerald-500" />
            <h3>How to use {tool.name}</h3>
          </div>
          <ol className="space-y-3">
            {tool.howToUse.map((step, idx) => (
              <li key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-zinc-600 dark:text-zinc-400">
                <span className="flex items-center justify-center w-5 h-5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 font-bold text-xs shrink-0 mt-0.5 border border-emerald-500/20">
                  {idx + 1}
                </span>
                <span className="leading-relaxed">{step}</span>
              </li>
            ))}
          </ol>
        </section>

        {/* Features */}
        <section className="p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800/80 bg-zinc-50/70 dark:bg-zinc-900/40">
          <div className="flex items-center gap-2 mb-4 text-zinc-900 dark:text-zinc-100 font-bold text-base sm:text-lg">
            <Sparkles className="w-5 h-5 text-emerald-500" />
            <h3>Key Features</h3>
          </div>
          <ul className="space-y-3">
            {tool.features.map((feature, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-600 dark:text-zinc-400">
                <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
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

import React from 'react';
import type { Metadata } from 'next';
import { CATEGORIES, getToolsByCategory } from '@/lib/tools-registry';
import { ToolCard } from '@/components/tools/ToolCard';
import { DynamicIcon } from '@/components/icons/DynamicIcon';
import { Layers } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Categories — DevForge',
  description: 'Explore developer tools grouped by category: Data, Security, Web, and Developer Utilities.',
  openGraph: {
    title: 'Categories — DevForge',
    description: 'Explore developer tools grouped by category.',
  },
};

export default function CategoriesPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-16">
      {/* Header */}
      <div className="space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-semibold border border-emerald-500/20">
          <Layers className="w-3.5 h-3.5" />
          <span>Curated Tool Taxonomy</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-white">
          Tool Categories
        </h1>
        <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl">
          Discover specialized browser-based utilities tailored for your daily software engineering workflows.
        </p>
      </div>

      {/* Category Groups */}
      <div className="space-y-16">
        {CATEGORIES.map((category) => {
          const categoryTools = getToolsByCategory(category.id);

          return (
            <section
              key={category.id}
              id={category.id}
              className="space-y-6 pt-4 border-t border-zinc-200 dark:border-zinc-800 first:border-none first:pt-0"
            >
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center text-zinc-700 dark:text-zinc-300">
                    <DynamicIcon name={category.icon} className="w-5 h-5 text-emerald-500" />
                  </div>
                  <div>
                    <h2 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-white">
                      {category.label} Utilities
                    </h2>
                    <p className="text-xs sm:text-sm text-zinc-500 mt-0.5">
                      {category.description}
                    </p>
                  </div>
                </div>

                <span className="text-xs font-semibold text-zinc-500 self-start sm:self-auto px-2.5 py-1 rounded-lg bg-zinc-100 dark:bg-zinc-800">
                  {categoryTools.length} {categoryTools.length === 1 ? 'tool' : 'tools'}
                </span>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {categoryTools.map((tool) => (
                  <ToolCard key={tool.slug} tool={tool} />
                ))}
              </div>
            </section>
          );
        })}
      </div>
    </div>
  );
}

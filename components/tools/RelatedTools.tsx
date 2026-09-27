import React from 'react';
import { TOOLS } from '@/lib/tools-registry';
import { ToolCard } from './ToolCard';

interface RelatedToolsProps {
  currentSlug: string;
  relatedSlugs: string[];
}

export function RelatedTools({ currentSlug, relatedSlugs }: RelatedToolsProps) {
  // Find related tools, fallback to other tools in the registry if needed
  let related = TOOLS.filter((t) => relatedSlugs.includes(t.slug) && t.slug !== currentSlug);

  if (related.length < 3) {
    const fallback = TOOLS.filter((t) => t.slug !== currentSlug && !related.some((r) => r.slug === t.slug));
    related = [...related, ...fallback].slice(0, 3);
  } else {
    related = related.slice(0, 3);
  }

  return (
    <section className="mt-12 pt-8 border-t border-zinc-200 dark:border-zinc-800">
      <div className="mb-6">
        <h3 className="text-lg font-bold text-zinc-900 dark:text-white">
          Related Developer Tools
        </h3>
        <p className="text-xs sm:text-sm text-zinc-500 dark:text-zinc-400 mt-1">
          Handy utilities frequently used alongside this tool.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {related.map((tool) => (
          <ToolCard key={tool.slug} tool={tool} compact />
        ))}
      </div>
    </section>
  );
}

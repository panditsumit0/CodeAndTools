import React from 'react';
import Link from 'next/link';
import { ArrowUpRight, Sparkles } from 'lucide-react';
import { ToolDefinition } from '@/types/tool';
import { DynamicIcon } from '@/components/icons/DynamicIcon';

interface ToolCardProps {
  tool: ToolDefinition;
  compact?: boolean;
}

export function ToolCard({ tool, compact = false }: ToolCardProps) {
  const categoryColors: Record<string, { badge: string; iconBg: string; text: string }> = {
    data: {
      badge: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20',
      iconBg: 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400',
      text: 'text-emerald-500',
    },
    security: {
      badge: 'bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20',
      iconBg: 'bg-purple-500/10 text-purple-600 dark:text-purple-400',
      text: 'text-purple-500',
    },
    web: {
      badge: 'bg-sky-500/10 text-sky-600 dark:text-sky-400 border-sky-500/20',
      iconBg: 'bg-sky-500/10 text-sky-600 dark:text-sky-400',
      text: 'text-sky-500',
    },
    developer: {
      badge: 'bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20',
      iconBg: 'bg-amber-500/10 text-amber-600 dark:text-amber-400',
      text: 'text-amber-500',
    },
    converters: {
      badge: 'bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20',
      iconBg: 'bg-blue-500/10 text-blue-600 dark:text-blue-400',
      text: 'text-blue-500',
    },
    compressors: {
      badge: 'bg-teal-500/10 text-teal-600 dark:text-teal-400 border-teal-500/20',
      iconBg: 'bg-teal-500/10 text-teal-600 dark:text-teal-400',
      text: 'text-teal-500',
    },
  };

  const style = categoryColors[tool.category] || categoryColors.developer;

  const isCompiler = tool.slug === 'compiler';

  const href =
    tool.category === 'converters'
      ? `/converters/${tool.slug}`
      : tool.category === 'compressors'
      ? `/compressors/${tool.slug}`
      : `/tools/${tool.slug}`;

  return (
    <Link
      href={href}
      className={`group relative flex flex-col justify-between rounded-2xl border backdrop-blur-sm transition-all duration-200 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-emerald-500/40 ${
        isCompiler
          ? 'border-emerald-500/40 dark:border-emerald-500/40 bg-gradient-to-br from-emerald-500/[0.05] via-white/80 to-white dark:via-zinc-900/80 dark:to-zinc-900 hover:border-emerald-500/70 shadow-xs shadow-emerald-500/10'
          : 'border-zinc-200 dark:border-zinc-800/80 bg-white/70 dark:bg-zinc-900/60 hover:border-zinc-300 dark:hover:border-zinc-700 hover:bg-white dark:hover:bg-zinc-900 dark:hover:shadow-emerald-950/20'
      } ${compact ? 'p-4' : 'p-5'}`}
    >
      <div>
        <div className="flex items-center justify-between gap-3 mb-3.5">
          <div
            className={`w-10 h-10 rounded-xl flex items-center justify-center transition-transform group-hover:scale-105 duration-200 ${
              isCompiler
                ? 'bg-emerald-600 text-white shadow-md shadow-emerald-500/30'
                : style.iconBg
            }`}
          >
            <DynamicIcon name={tool.icon} className="w-5 h-5" />
          </div>

          <div className="flex items-center gap-1.5">
            {isCompiler && (
              <span className="inline-flex items-center gap-1 text-[11px] font-bold px-2 py-0.5 rounded-full bg-emerald-500/15 text-emerald-700 dark:text-emerald-300 border border-emerald-500/30">
                <Sparkles className="w-2.5 h-2.5" />
                Online IDE
              </span>
            )}
            {!isCompiler && tool.popular && (
              <span className="inline-flex items-center gap-1 text-[11px] font-semibold px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20">
                <Sparkles className="w-2.5 h-2.5" />
                Popular
              </span>
            )}
            <span className={`text-[11px] font-medium px-2 py-0.5 rounded-full border ${style.badge}`}>
              {tool.categoryLabel}
            </span>
          </div>
        </div>

        <h3 className="text-base font-semibold text-zinc-900 dark:text-zinc-100 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors flex items-center gap-1">
          {tool.name}
        </h3>

        <p className="mt-1.5 text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 line-clamp-2 leading-relaxed">
          {tool.shortDescription}
        </p>
      </div>

      <div className="mt-4 pt-3.5 border-t border-zinc-100 dark:border-zinc-800/80 flex items-center justify-between text-xs font-medium text-zinc-500 dark:text-zinc-400 group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
        <span>Open Tool</span>
        <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </div>
    </Link>
  );
}

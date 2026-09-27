import React from 'react';
import Link from 'next/link';
import { ChevronRight, ShieldCheck, Home } from 'lucide-react';
import { ToolDefinition } from '@/types/tool';
import { DynamicIcon } from '@/components/icons/DynamicIcon';

interface ToolHeaderProps {
  tool: ToolDefinition;
}

export function ToolHeader({ tool }: ToolHeaderProps) {
  return (
    <div className="mb-6 space-y-4">
      {/* Breadcrumb */}
      <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs text-zinc-500">
        <Link href="/" className="hover:text-zinc-900 dark:hover:text-white flex items-center gap-1 transition-colors">
          <Home className="w-3.5 h-3.5" />
          <span>Home</span>
        </Link>
        <ChevronRight className="w-3.5 h-3.5 text-zinc-400" />
        <Link href="/tools" className="hover:text-zinc-900 dark:hover:text-white transition-colors">
          Tools
        </Link>
        <ChevronRight className="w-3.5 h-3.5 text-zinc-400" />
        <span className="text-zinc-900 dark:text-zinc-200 font-medium">
          {tool.name}
        </span>
      </nav>

      {/* Main Header & Title */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div className="flex items-start sm:items-center gap-3.5">
          <div className="w-12 h-12 rounded-2xl bg-emerald-500/10 dark:bg-emerald-500/20 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20 flex items-center justify-center shrink-0 shadow-sm">
            <DynamicIcon name={tool.icon} className="w-6 h-6" />
          </div>
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <h1 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-zinc-900 dark:text-white">
                {tool.name}
              </h1>
              <span className="text-xs font-semibold px-2 py-0.5 rounded-full bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 border border-zinc-200 dark:border-zinc-700">
                {tool.categoryLabel}
              </span>
            </div>
            <p className="mt-1 text-sm sm:text-base text-zinc-600 dark:text-zinc-400">
              {tool.tagline}
            </p>
          </div>
        </div>

        {/* Privacy badge */}
        {tool.slug === 'compiler' ? (
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-purple-500/10 border border-purple-500/25 text-purple-700 dark:text-purple-300 text-xs font-medium shrink-0 self-start sm:self-auto">
            <ShieldCheck className="w-4 h-4 text-purple-500 shrink-0" />
            <span>Sandboxed Execution</span>
          </div>
        ) : (
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl bg-emerald-500/10 border border-emerald-500/25 text-emerald-700 dark:text-emerald-300 text-xs font-medium shrink-0 self-start sm:self-auto">
            <ShieldCheck className="w-4 h-4 text-emerald-500 shrink-0" />
            <span>Runs 100% in browser</span>
          </div>
        )}
      </div>

      {/* Privacy guarantee reminder pill */}
      {tool.slug === 'compiler' ? (
        <div className="text-xs text-amber-700 dark:text-amber-300 bg-amber-500/10 border border-amber-500/25 rounded-xl px-3.5 py-2 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse shrink-0" />
          <span>
            <strong>Execution Environment:</strong> Code is sent to a secure sandbox to compile and run. Do not submit passwords, API keys, or other sensitive information.
          </span>
        </div>
      ) : (
        <div className="text-xs text-zinc-500 dark:text-zinc-400 bg-zinc-50 dark:bg-zinc-900/50 border border-zinc-200 dark:border-zinc-800/80 rounded-xl px-3.5 py-2 flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0" />
          <span>
            <strong>Privacy guarantee:</strong> Your data stays in your browser. Nothing is uploaded to our servers.
          </span>
        </div>
      )}
    </div>
  );
}

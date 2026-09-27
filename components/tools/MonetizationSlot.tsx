import React from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';
import Link from 'next/link';

interface MonetizationSlotProps {
  className?: string;
}

export function MonetizationSlot({ className = '' }: MonetizationSlotProps) {
  return (
    <div
      className={`my-8 p-4 sm:p-5 rounded-2xl border border-dashed border-zinc-300 dark:border-zinc-800 bg-gradient-to-r from-zinc-50 via-zinc-100/50 to-zinc-50 dark:from-zinc-900/60 dark:via-zinc-900/30 dark:to-zinc-900/60 flex flex-col sm:flex-row items-center justify-between gap-4 transition-all ${className}`}
      data-devkit-slot="pro-or-sponsor"
    >
      <div className="flex items-center gap-3.5 text-center sm:text-left">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-emerald-500/20 to-teal-500/20 text-emerald-500 flex items-center justify-center shrink-0">
          <Sparkles className="w-5 h-5" />
        </div>
        <div>
          <div className="flex items-center justify-center sm:justify-start gap-2">
            <span className="text-sm font-semibold text-zinc-900 dark:text-zinc-100">
              DevForge Pro for Teams
            </span>
            <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-zinc-200 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 uppercase tracking-wider">
              Coming Soon
            </span>
          </div>
          <p className="text-xs text-zinc-600 dark:text-zinc-400 mt-0.5">
            Offline PWA app, shared team presets, custom regex libraries, and desktop companion.
          </p>
        </div>
      </div>

      <div className="flex items-center gap-2 shrink-0">
        <Link
          href="/about#roadmap"
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-zinc-900 dark:bg-zinc-100 text-white dark:text-zinc-900 hover:bg-zinc-800 dark:hover:bg-white/90 transition-colors shadow-sm"
        >
          <span>View Roadmap</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
}

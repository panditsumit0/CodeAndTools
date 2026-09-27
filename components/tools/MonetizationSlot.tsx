import React from 'react';
import { Sparkles, ArrowRight } from 'lucide-react';
import Link from 'next/link';

interface MonetizationSlotProps {
  className?: string;
}

export function MonetizationSlot({ className = '' }: MonetizationSlotProps) {
  return (
    <div
      className={`my-8 p-4 sm:p-5 rounded-2xl border border-dashed border-zinc-300 dark:border-[#1F2937] bg-gradient-to-r from-zinc-50 via-zinc-100/50 to-zinc-50 dark:from-[#0D1117] dark:via-[#090D14] dark:to-[#0D1117] flex flex-col sm:flex-row items-center justify-between gap-4 transition-all ${className}`}
      data-devkit-slot="pro-or-sponsor"
    >
      <div className="flex items-center gap-3.5 text-center sm:text-left">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-500/20 to-orange-500/20 text-[#F97316] flex items-center justify-center shrink-0">
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
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold bg-primary text-white hover:bg-blue-500 transition-colors shadow-sm"
        >
          <span>View Roadmap</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </div>
  );
}

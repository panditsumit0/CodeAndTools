'use client';

import React from 'react';
import { Play, Square, RotateCcw, Download, Terminal, ShieldAlert } from 'lucide-react';
import { LanguageSelector } from './LanguageSelector';
import { LanguageConfig, SupportedLanguageId } from '@/lib/compiler/types';

interface CompilerToolbarProps {
  languageConfig: LanguageConfig;
  onSelectLanguage: (lang: SupportedLanguageId) => void;
  isRunning: boolean;
  onRun: () => void;
  onStop: () => void;
  onReset: () => void;
  onDownload: () => void;
  isMac: boolean;
}

export function CompilerToolbar({
  languageConfig,
  onSelectLanguage,
  isRunning,
  onRun,
  onStop,
  onReset,
  onDownload,
  isMac,
}: CompilerToolbarProps) {
  return (
    <div className="space-y-3 pb-3 border-b border-zinc-200 dark:border-[#1F2937]">
      {/* Top Bar Row */}
      <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
        {/* Left: Brand & Language Selector */}
        <div className="flex flex-wrap items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-xl bg-gradient-to-tr from-[#3B82F6] to-[#22D3EE] flex items-center justify-center text-white shadow-xs">
              <Terminal className="w-4 h-4 stroke-[2.5]" />
            </div>
            <div>
              <span className="font-bold text-sm sm:text-base text-zinc-900 dark:text-white">
                DevForge Compiler
              </span>
              <span className="text-[10px] ml-2 px-1.5 py-0.5 rounded bg-zinc-100 dark:bg-[#151B24] text-zinc-600 dark:text-[#94A3B8] border border-transparent dark:border-[#1F2937] font-mono">
                {languageConfig.version}
              </span>
            </div>
          </div>

          <LanguageSelector
            currentLanguage={languageConfig.id}
            onSelectLanguage={onSelectLanguage}
            disabled={isRunning}
          />
        </div>

        {/* Right: Actions */}
        <div className="flex flex-wrap items-center gap-2">
          {/* Run Button */}
          {!isRunning ? (
            <button
              type="button"
              onClick={onRun}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#22C55E] hover:bg-[#1da850] text-white text-xs sm:text-sm font-semibold shadow-md shadow-[#22C55E]/20 active:scale-98 transition-all focus:outline-none focus:ring-2 focus:ring-[#22C55E]/40"
              title={`Run (${isMac ? '⌘' : 'Ctrl'} + Enter)`}
            >
              <Play className="w-4 h-4 fill-white" />
              <span>Run</span>
              <kbd className="hidden sm:inline-flex items-center px-1.5 py-0.5 text-[10px] font-mono rounded bg-[#16813d] text-white border border-[#22C55E]/30">
                {isMac ? '⌘↵' : 'Ctrl+↵'}
              </kbd>
            </button>
          ) : (
            <button
              type="button"
              onClick={onStop}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#EF4444] hover:bg-[#dc2626] text-white text-xs sm:text-sm font-semibold shadow-md shadow-[#EF4444]/20 active:scale-98 transition-all focus:outline-none focus:ring-2 focus:ring-[#EF4444]/40"
              title="Stop execution"
            >
              <Square className="w-3.5 h-3.5 fill-white" />
              <span>Stop</span>
            </button>
          )}

          {/* Reset Code */}
          <button
            type="button"
            onClick={onReset}
            disabled={isRunning}
            className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-zinc-100 hover:bg-zinc-200 dark:bg-[#151B24] dark:hover:bg-[#1F2937] text-zinc-700 dark:text-[#E2E8F0] text-xs sm:text-sm font-medium border border-zinc-200 dark:border-[#1F2937] transition-colors disabled:opacity-40"
            title="Reset to starter template"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Reset</span>
          </button>

          {/* Download Code */}
          <button
            type="button"
            onClick={onDownload}
            className="inline-flex items-center gap-1.5 px-3 py-2 rounded-xl bg-zinc-100 hover:bg-zinc-200 dark:bg-[#151B24] dark:hover:bg-[#1F2937] text-zinc-700 dark:text-[#E2E8F0] text-xs sm:text-sm font-medium border border-zinc-200 dark:border-[#1F2937] transition-colors"
            title={`Download source (${languageConfig.extension})`}
          >
            <Download className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Save</span>
          </button>
        </div>
      </div>

      {/* Security Privacy Notice */}
      <div className="flex items-start sm:items-center gap-2.5 px-3.5 py-2 rounded-xl bg-[#F59E0B]/10 border border-[#F59E0B]/25 text-[#F59E0B] text-xs">
        <ShieldAlert className="w-4 h-4 text-[#F59E0B] shrink-0 mt-0.5 sm:mt-0" />
        <span className="leading-relaxed">
          <strong>Execution Notice:</strong> Code is sent to a secure execution environment to compile and run. Do not submit passwords, API keys, or other sensitive information.
        </span>
      </div>
    </div>
  );
}

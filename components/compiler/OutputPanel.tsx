'use client';

import React from 'react';
import {
  CheckCircle2,
  XCircle,
  AlertTriangle,
  Clock,
  Loader2,
  Trash2,
} from 'lucide-react';
import { ExecutionResult } from '@/lib/compiler/types';
import { CopyButton } from '@/components/ui/CopyButton';

interface OutputPanelProps {
  isRunning: boolean;
  result: ExecutionResult | null;
  onClear: () => void;
}

export function OutputPanel({ isRunning, result, onClear }: OutputPanelProps) {
  const getStatusBadge = () => {
    if (isRunning) {
      return (
        <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#F59E0B]/10 text-[#F59E0B] border border-[#F59E0B]/20 text-xs font-semibold">
          <Loader2 className="w-3.5 h-3.5 animate-spin" />
          <span>Running...</span>
        </span>
      );
    }

    if (!result) {
      return (
        <span className="text-xs text-zinc-500 dark:text-zinc-400 font-medium">
          Ready to run
        </span>
      );
    }

    switch (result.status) {
      case 'success':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#22C55E]/10 text-emerald-600 dark:text-[#22C55E] border border-emerald-500/20 text-xs font-semibold">
            <CheckCircle2 className="w-3.5 h-3.5" />
            <span>Execution Successful</span>
          </span>
        );
      case 'compilation_error':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#EF4444]/10 text-rose-600 dark:text-[#EF4444] border border-rose-500/20 text-xs font-semibold">
            <XCircle className="w-3.5 h-3.5" />
            <span>Compilation Error</span>
          </span>
        );
      case 'runtime_error':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#EF4444]/10 text-rose-600 dark:text-[#EF4444] border border-rose-500/20 text-xs font-semibold">
            <AlertTriangle className="w-3.5 h-3.5" />
            <span>Runtime Error</span>
          </span>
        );
      case 'timeout':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#F59E0B]/10 text-[#F59E0B] border border-[#F59E0B]/20 text-xs font-semibold">
            <Clock className="w-3.5 h-3.5" />
            <span>Time Limit Exceeded</span>
          </span>
        );
      case 'rate_limited':
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#F59E0B]/10 text-[#F59E0B] border border-[#F59E0B]/20 text-xs font-semibold">
            <Clock className="w-3.5 h-3.5" />
            <span>Rate Limited</span>
          </span>
        );
      default:
        return (
          <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-[#EF4444]/10 text-rose-600 dark:text-[#EF4444] border border-rose-500/20 text-xs font-semibold">
            <XCircle className="w-3.5 h-3.5" />
            <span>Execution Error</span>
          </span>
        );
    }
  };

  const combinedText = result
    ? [result.stdout, result.stderr].filter(Boolean).join('\n')
    : '';

  return (
    <div className="flex flex-col rounded-xl border border-zinc-200 dark:border-[#1F2937] bg-[#0c1017] dark:bg-[#05070A] overflow-hidden shadow-inner">
      {/* Terminal Title Bar */}
      <div className="flex items-center justify-between px-3.5 py-2.5 border-b border-[#1F2937] bg-[#0D1117] text-xs">
        <div className="flex items-center gap-2.5">
          {/* Traffic light terminal dots */}
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-[#EF4444]/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#F59E0B]/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#22C55E]/80" />
          </div>
          <span className="font-mono text-zinc-300 font-semibold pl-1">Output Console</span>
          {getStatusBadge()}
        </div>

        <div className="flex items-center gap-2">
          {combinedText && <CopyButton text={combinedText} label="Copy Output" size="sm" />}
          {result && (
            <button
              type="button"
              onClick={onClear}
              disabled={isRunning}
              className="p-1 rounded text-zinc-400 hover:text-[#EF4444] transition-colors disabled:opacity-30"
              title="Clear console"
            >
              <Trash2 className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </div>

      {/* Terminal Screen */}
      <div className="p-4 font-mono-code text-xs sm:text-sm min-h-[160px] max-h-[280px] overflow-y-auto leading-relaxed select-text">
        {isRunning ? (
          <div className="flex flex-col items-center justify-center py-10 space-y-2 text-zinc-400">
            <Loader2 className="w-6 h-6 animate-spin text-emerald-500" />
            <span className="text-xs">Compiling and running in sandbox...</span>
          </div>
        ) : !result ? (
          <div className="text-zinc-500 italic py-6 select-none">
            Click &ldquo;Run ▶&rdquo; (or press Ctrl+Enter) to compile and execute code. Output will appear here.
          </div>
        ) : (
          <div className="space-y-3">
            {/* Standard Output */}
            {result.stdout && (
              <div>
                <pre className="text-[#22C55E] dark:text-[#22C55E] whitespace-pre-wrap break-all font-mono-code">
                  {result.stdout}
                </pre>
              </div>
            )}

            {/* Standard Error / Diagnostic Output */}
            {result.stderr && (
              <div className="pt-1">
                <pre className="text-[#EF4444] dark:text-[#EF4444] whitespace-pre-wrap break-all font-mono-code bg-[#EF4444]/10 p-2 rounded-lg border border-[#EF4444]/25">
                  {result.stderr}
                </pre>
              </div>
            )}

            {!result.stdout && !result.stderr && (
              <div className="text-zinc-500 italic">
                Program completed with no output.
              </div>
            )}
          </div>
        )}
      </div>

      {/* Terminal Footer with Execution Metadata */}
      {result && !isRunning && (
        <div className="px-3.5 py-1.5 border-t border-[#1F2937] bg-[#0D1117] flex flex-wrap items-center justify-between text-[11px] text-zinc-400 font-mono">
          <div className="flex items-center gap-3">
            <span>
              Exit Code: <strong className={result.exitCode === 0 ? 'text-[#22C55E]' : 'text-[#EF4444]'}>{result.exitCode ?? 0}</strong>
            </span>
            {result.executionTime !== null && (
              <span>
                Time: <strong className="text-zinc-200">{result.executionTime} ms</strong>
              </span>
            )}
            {result.memory && (
              <span>
                Memory: <strong className="text-zinc-200">{result.memory} KB</strong>
              </span>
            )}
          </div>

          <div>
            <span>Sandbox: {result.provider || 'Isolated Container'}</span>
          </div>
        </div>
      )}
    </div>
  );
}

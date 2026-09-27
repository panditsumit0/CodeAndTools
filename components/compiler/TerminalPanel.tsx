'use client';

import React, { useState, useEffect, useMemo, useRef } from 'react';
import {
  Terminal as TerminalIcon,
  Trash2,
  HelpCircle,
  Code2,
  Copy,
  Check,
  Loader2,
  Info,
  Sparkles,
} from 'lucide-react';
import { ExecutionResult, SupportedLanguageId } from '@/lib/compiler/types';
import { detectProgramInputs } from '@/lib/compiler/input-detector';

interface TerminalPanelProps {
  language: SupportedLanguageId;
  code: string;
  stdin: string;
  onStdinChange: (newStdin: string) => void;
  isRunning: boolean;
  result: ExecutionResult | null;
  onRun: () => void;
  onClearOutput: () => void;
  sampleStdin?: string;
  isWaitingForInput: boolean;
  setIsWaitingForInput: (waiting: boolean) => void;
}

export function TerminalPanel({
  language,
  code,
  stdin,
  onStdinChange,
  isRunning,
  result,
  onRun,
  onClearOutput,
  sampleStdin = '',
  isWaitingForInput,
  setIsWaitingForInput,
}: TerminalPanelProps) {
  const [activeTab, setActiveTab] = useState<'interactive' | 'raw'>('interactive');
  const [copied, setCopied] = useState(false);

  // Analyze program code for input functions and prompts
  const inputAnalysis = useMemo(() => {
    return detectProgramInputs(code, language);
  }, [code, language]);

  const promptInputRef = useRef<HTMLInputElement>(null);

  // Derive structured values directly from stdin
  const promptValues = useMemo(() => {
    const lines = stdin.split('\n');
    const values: Record<string, string> = {};
    inputAnalysis.prompts.forEach((p, idx) => {
      values[p.id] = lines[idx] ?? '';
    });
    return values;
  }, [stdin, inputAnalysis.prompts]);

  // Auto-focus prompt input when waiting for input
  useEffect(() => {
    if (isWaitingForInput && promptInputRef.current) {
      promptInputRef.current.focus();
    }
  }, [isWaitingForInput]);

  const handlePromptChange = (promptId: string, val: string) => {
    const updated = { ...promptValues, [promptId]: val };
    // Sync to raw stdin
    const combined = inputAnalysis.prompts.map((p) => updated[p.id] || '').join('\n');
    onStdinChange(combined);
  };

  const handleLoadSample = () => {
    if (sampleStdin) {
      onStdinChange(sampleStdin);
    }
  };

  const handleClearInputs = () => {
    onStdinChange('');
    setIsWaitingForInput(false);
  };

  const handleCopy = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback
    }
  };

  // Build authentic terminal replay text:
  // Merges program output with user inputs where natural
  const terminalReplay = useMemo(() => {
    if (!result) return null;
    return result.stdout;
  }, [result]);

  return (
    <div className="flex flex-col rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-[#05070A] overflow-hidden shadow-lg shadow-zinc-950/20 text-zinc-100">
      {/* 1. Terminal Header */}
      <div className="flex items-center justify-between px-4 py-2.5 bg-zinc-900/90 border-b border-zinc-800 text-xs">
        <div className="flex items-center gap-3">
          {/* Traffic light terminal dots */}
          <div className="flex items-center gap-1.5">
            <span className="w-2.5 h-2.5 rounded-full bg-rose-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#22C55E]/80" />
          </div>

          <div className="flex items-center gap-1.5 font-mono text-zinc-200 font-semibold pl-1">
            <TerminalIcon className="w-3.5 h-3.5 text-[#22C55E]" />
            <span>Terminal</span>
          </div>

          {/* Mode Tabs */}
          <div className="hidden sm:flex items-center p-0.5 rounded-lg bg-zinc-800/80 border border-zinc-700/60 text-[11px]">
            <button
              type="button"
              onClick={() => setActiveTab('interactive')}
              className={`px-2 py-0.5 rounded-md transition-colors ${
                activeTab === 'interactive'
                  ? 'bg-[#22C55E] text-white font-semibold'
                  : 'text-zinc-400 hover:text-zinc-200'
              }`}
            >
              Interactive Mode
            </button>
            <button
              type="button"
              onClick={() => setActiveTab('raw')}
              className={`px-2 py-0.5 rounded-md transition-colors ${
                activeTab === 'raw'
                  ? 'bg-[#22C55E] text-white font-semibold'
                  : 'text-zinc-400 hover:text-zinc-200'
              }`}
            >
              Raw Stdin
            </button>
          </div>
        </div>

        {/* Right side actions */}
        <div className="flex items-center gap-2">
          {isWaitingForInput && (
            <span className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-amber-500/20 text-amber-300 border border-amber-500/40 animate-pulse">
              <span className="w-2 h-2 rounded-full bg-amber-400" />
              <span>Waiting for input...</span>
            </span>
          )}

          {isRunning && (
            <span className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-[#22C55E]/20 text-[#22C55E] border border-emerald-500/30">
              <Loader2 className="w-3 h-3 animate-spin text-[#22C55E]" />
              <span>Running...</span>
            </span>
          )}

          {sampleStdin && (
            <button
              type="button"
              onClick={handleLoadSample}
              disabled={isRunning}
              className="inline-flex items-center gap-1 px-2 py-1 rounded text-[11px] font-medium text-[#22C55E] hover:bg-emerald-950/40 border border-emerald-500/30 transition-colors disabled:opacity-40"
              title="Fill sample test input"
            >
              <Sparkles className="w-3 h-3" />
              <span className="hidden sm:inline">Sample Input</span>
            </button>
          )}

          {result && (
            <button
              type="button"
              onClick={() => handleCopy([result.stdout, result.stderr].filter(Boolean).join('\n'))}
              className="p-1 rounded text-zinc-400 hover:text-zinc-200 hover:bg-zinc-800 transition-colors"
              title="Copy output"
            >
              {copied ? <Check className="w-3.5 h-3.5 text-[#22C55E]" /> : <Copy className="w-3.5 h-3.5" />}
            </button>
          )}

          {(result || stdin) && (
            <button
              type="button"
              onClick={() => {
                onClearOutput();
                handleClearInputs();
              }}
              disabled={isRunning}
              className="p-1 rounded text-zinc-400 hover:text-[#EF4444] hover:bg-zinc-800 transition-colors disabled:opacity-30"
              title="Clear terminal and inputs"
            >
              <Trash2 className="w-3.5 h-3.5" />
            </button>
          )}
        </div>
      </div>

      {/* 2. Interactive Input Bar (When program expects input) */}
      {inputAnalysis.hasInput && (
        <div className="px-4 py-3 bg-zinc-900/60 border-b border-zinc-800/80 space-y-2.5">
          <div className="flex items-center justify-between text-xs">
            <span className="font-semibold text-[#22C55E] flex items-center gap-1.5">
              <Code2 className="w-3.5 h-3.5" />
              <span>Program Input Required:</span>
            </span>
            <span className="text-[11px] text-zinc-400">
              {inputAnalysis.prompts.length} input {inputAnalysis.prompts.length === 1 ? 'value' : 'values'} expected
            </span>
          </div>

          {activeTab === 'interactive' ? (
            <div className="space-y-2">
              {inputAnalysis.prompts.map((prompt, idx) => (
                <div key={prompt.id} className="flex flex-col sm:flex-row sm:items-center gap-2 text-xs">
                  <label
                    htmlFor={`input-${prompt.id}`}
                    className="sm:w-1/2 font-mono text-zinc-300 truncate font-medium flex items-center gap-1.5"
                    title={prompt.label}
                  >
                    <span className="text-[#22C55E] font-bold">›</span>
                    <span>{prompt.label}</span>
                  </label>
                  <div className="flex-1 relative">
                    <input
                      id={`input-${prompt.id}`}
                      ref={idx === 0 ? promptInputRef : undefined}
                      type="text"
                      value={promptValues[prompt.id] || ''}
                      onChange={(e) => handlePromptChange(prompt.id, e.target.value)}
                      onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                          e.preventDefault();
                          onRun();
                        }
                      }}
                      placeholder={`e.g. ${prompt.typeHint === 'integer' ? '20' : prompt.typeHint === 'float' ? '3.14' : 'text'}`}
                      disabled={isRunning}
                      className="w-full px-3 py-1.5 rounded-lg bg-[#0B111A] border border-[#1F2937] focus:border-[#3B82F6] focus:ring-1 focus:ring-[#3B82F6] text-xs text-zinc-100 placeholder:text-[#64748B] font-mono transition-colors"
                    />
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <div>
              <textarea
                value={stdin}
                onChange={(e) => onStdinChange(e.target.value)}
                placeholder="Enter raw standard input (one value per line)..."
                rows={3}
                disabled={isRunning}
                className="w-full p-2.5 rounded-lg bg-[#0B111A] border border-[#1F2937] text-xs font-mono text-zinc-100 placeholder:text-[#64748B] focus:border-[#3B82F6] focus:ring-1 focus:ring-[#3B82F6] whitespace-pre leading-relaxed resize-y"
              />
            </div>
          )}

          {/* Honest execution notice */}
          <div className="text-[11px] text-zinc-400 flex items-start gap-1.5 pt-0.5">
            <Info className="w-3.5 h-3.5 text-zinc-500 shrink-0 mt-0.5" />
            <span>
              This compiler collects program input before execution because the current execution provider does not support live terminal input.
            </span>
          </div>
        </div>
      )}

      {/* 3. Terminal Screen View */}
      <div className="p-4 font-mono text-xs sm:text-sm min-h-[180px] max-h-[340px] overflow-y-auto leading-relaxed select-text bg-[#090d16]">
        {isRunning ? (
          <div className="flex flex-col items-center justify-center py-12 space-y-2.5 text-zinc-400">
            <Loader2 className="w-6 h-6 animate-spin text-[#22C55E]" />
            <span className="text-xs">Compiling & executing in sandbox container...</span>
          </div>
        ) : isWaitingForInput ? (
          <div className="space-y-3 py-4">
            <div className="text-[#22C55E] font-semibold flex items-center gap-2">
              <span className="animate-pulse">●</span>
              <span>Waiting for input...</span>
            </div>
            <p className="text-xs text-zinc-400 leading-relaxed">
              Your program uses an input function ({language === 'c' ? 'scanf' : language === 'cpp' ? 'cin' : language === 'java' ? 'Scanner' : language === 'python' ? 'input()' : 'stdin'}).
              Please enter your response above and press <strong>Enter</strong> or click <strong>Run ▶</strong>.
            </p>
          </div>
        ) : !result ? (
          <div className="space-y-2 text-zinc-500 py-6">
            <div className="text-zinc-400 font-mono text-xs">$ ./main</div>
            <div className="italic text-xs">
              Click &ldquo;Run ▶&rdquo; (or press Ctrl+Enter) to execute your {language.toUpperCase()} code.
            </div>
          </div>
        ) : (
          <div className="space-y-3">
            {/* Command execution header */}
            <div className="text-zinc-500 text-xs pb-1 border-b border-zinc-800/60 flex items-center justify-between">
              <span>$ ./main</span>
              <span className="text-[11px] text-zinc-400">
                {result.status === 'success' ? 'Execution completed' : 'Process terminated'}
              </span>
            </div>

            {/* Standard Output */}
            {terminalReplay && (
              <pre className="text-[#22C55E] whitespace-pre-wrap break-all font-mono leading-relaxed">
                {terminalReplay}
              </pre>
            )}

            {/* Standard Error / Diagnostic */}
            {result.stderr && (
              <pre className="text-[#EF4444] whitespace-pre-wrap break-all font-mono bg-[#EF4444]/10 p-3 rounded-lg border border-[#EF4444]/25 text-xs leading-relaxed">
                {result.stderr}
              </pre>
            )}

            {!result.stdout && !result.stderr && (
              <div className="text-zinc-500 italic text-xs">
                Program completed with no terminal output.
              </div>
            )}
          </div>
        )}
      </div>

      {/* 4. Terminal Status Footer */}
      {result && !isRunning && (
        <div className="px-4 py-2 border-t border-[#1F2937] bg-[#0D1117] flex flex-wrap items-center justify-between text-[11px] text-zinc-400 font-mono">
          <div className="flex items-center gap-3">
            <span>
              Process exit code: <strong className={result.exitCode === 0 ? 'text-[#22C55E]' : 'text-[#EF4444]'}>{result.exitCode ?? 0}</strong>
            </span>
            {result.executionTime !== null && (
              <span>
                Time: <strong className="text-zinc-200">{result.executionTime} ms</strong>
              </span>
            )}
          </div>
          <span>{result.provider || 'DevForge Sandbox'}</span>
        </div>
      )}

      {/* 5. How Input Works Beginner Guide (Requirement 5) */}
      <div className="p-3.5 bg-[#090D14] border-t border-[#1F2937] text-xs space-y-2">
        <div className="flex items-center gap-1.5 font-bold text-zinc-300">
          <HelpCircle className="w-3.5 h-3.5 text-[#22C55E]" />
          <span>How input works in DevForge:</span>
        </div>
        <p className="text-[11px] text-zinc-400 leading-relaxed">
          For programs that use input functions such as <code>scanf()</code>, <code>cin</code>, <code>Scanner</code>, or <code>input()</code>, enter your values when the program asks for them above before running.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-5 gap-2 pt-1 text-[11px] font-mono">
          <div className="p-1.5 rounded bg-[#05070A] border border-[#1F2937]">
            <span className="text-zinc-500 block text-[10px]">C</span>
            <span className="text-[#22C55E]">scanf(&quot;%d&quot;, &amp;val)</span>
          </div>
          <div className="p-1.5 rounded bg-[#05070A] border border-[#1F2937]">
            <span className="text-zinc-500 block text-[10px]">C++</span>
            <span className="text-[#22C55E]">cin &gt;&gt; val</span>
          </div>
          <div className="p-1.5 rounded bg-[#05070A] border border-[#1F2937]">
            <span className="text-zinc-500 block text-[10px]">Java</span>
            <span className="text-[#22C55E]">sc.nextInt()</span>
          </div>
          <div className="p-1.5 rounded bg-[#05070A] border border-[#1F2937]">
            <span className="text-zinc-500 block text-[10px]">Python</span>
            <span className="text-[#22C55E]">input(&quot;prompt&quot;)</span>
          </div>
          <div className="p-1.5 rounded bg-[#05070A] border border-[#1F2937]">
            <span className="text-zinc-500 block text-[10px]">TypeScript</span>
            <span className="text-[#22C55E]">fs.readFileSync(0)</span>
          </div>
        </div>
      </div>
    </div>
  );
}

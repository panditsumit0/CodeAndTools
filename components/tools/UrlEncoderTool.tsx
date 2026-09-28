'use client';

import React, { useState } from 'react';
import { CopyButton } from '@/components/ui/CopyButton';
import { ErrorMessage } from '@/components/ui/ErrorMessage';
import { Trash2, ArrowRightLeft, ListFilter } from 'lucide-react';

export function UrlEncoderTool() {
  const [mode, setMode] = useState<'encode' | 'decode'>('encode');
  const [scope, setScope] = useState<'component' | 'full'>('component');
  const [input, setInput] = useState<string>('');
  const [output, setOutput] = useState<string>('');
  const [error, setError] = useState<string | null>(null);

  const processUrl = (text: string, currentMode: 'encode' | 'decode', currentScope: 'component' | 'full') => {
    if (!text) {
      setOutput('');
      setError(null);
      return;
    }

    try {
      if (currentMode === 'encode') {
        if (currentScope === 'full') {
          setOutput(encodeURI(text));
        } else {
          setOutput(encodeURIComponent(text));
        }
        setError(null);
      } else {
        if (currentScope === 'full') {
          setOutput(decodeURI(text));
        } else {
          setOutput(decodeURIComponent(text));
        }
        setError(null);
      }
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(`Malformed URL sequence: ${err.message}`);
      } else {
        setError('Failed to process URL.');
      }
      setOutput('');
    }
  };

  const handleInputChange = (val: string) => {
    setInput(val);
    processUrl(val, mode, scope);
  };

  const handleModeChange = (newMode: 'encode' | 'decode') => {
    setMode(newMode);
    processUrl(input, newMode, scope);
  };

  const handleScopeChange = (newScope: 'component' | 'full') => {
    setScope(newScope);
    processUrl(input, mode, newScope);
  };

  const handleSwap = () => {
    const nextMode = mode === 'encode' ? 'decode' : 'encode';
    setMode(nextMode);
    setInput(output);
    processUrl(output, nextMode, scope);
  };

  const handleClear = () => {
    setInput('');
    setOutput('');
    setError(null);
  };

  const handleLoadSample = () => {
    if (mode === 'encode') {
      const sample = 'https://api.codeandtools.dev/search?q=developer tools & privacy=100%&tags=react,nextjs,web tools';
      setInput(sample);
      processUrl(sample, 'encode', scope);
    } else {
      const sample = 'https%3A%2F%2Fapi.codeandtools.dev%2Fsearch%3Fq%3Ddeveloper%20tools%20%26%20privacy%3D100%25';
      setInput(sample);
      processUrl(sample, 'decode', scope);
    }
  };

  // Extract query parameters if input resembles a URL with query string
  const queryParams = React.useMemo(() => {
    try {
      const raw = mode === 'encode' ? input : output;
      if (!raw || !raw.includes('?')) return [];

      const queryPart = raw.split('?')[1]?.split('#')[0];
      if (!queryPart) return [];

      const searchParams = new URLSearchParams(queryPart);
      const params: { key: string; value: string }[] = [];
      searchParams.forEach((value, key) => {
        params.push({ key, value });
      });
      return params;
    } catch {
      return [];
    }
  }, [input, output, mode]);

  return (
    <div className="space-y-4">
      {/* Top Toolbar */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-zinc-200 dark:border-[#1F2937]">
        <div className="flex flex-wrap items-center gap-2">
          {/* Encode / Decode Tabs */}
          <div className="flex items-center p-0.5 rounded-lg bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700">
            <button
              type="button"
              onClick={() => handleModeChange('encode')}
              className={`px-3 py-1 rounded-md text-xs sm:text-sm font-semibold transition-colors ${
                mode === 'encode'
                  ? 'bg-primary text-primary-foreground shadow-sm'
                  : 'text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white'
              }`}
            >
              Encode
            </button>
            <button
              type="button"
              onClick={() => handleModeChange('decode')}
              className={`px-3 py-1 rounded-md text-xs sm:text-sm font-semibold transition-colors ${
                mode === 'decode'
                  ? 'bg-primary text-primary-foreground shadow-sm'
                  : 'text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white'
              }`}
            >
              Decode
            </button>
          </div>

          {/* Scope: Component vs Full URL */}
          <div className="flex items-center p-0.5 rounded-lg bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-xs">
            <button
              type="button"
              onClick={() => handleScopeChange('component')}
              className={`px-2.5 py-1 rounded-md font-medium transition-colors ${
                scope === 'component'
                  ? 'bg-white dark:bg-[#0D1117] text-zinc-900 dark:text-white shadow-xs'
                  : 'text-zinc-500 hover:text-zinc-900 dark:hover:text-white'
              }`}
              title="encodeURIComponent / decodeURIComponent (encodes :, /, ?, &, =)"
            >
              Component
            </button>
            <button
              type="button"
              onClick={() => handleScopeChange('full')}
              className={`px-2.5 py-1 rounded-md font-medium transition-colors ${
                scope === 'full'
                  ? 'bg-white dark:bg-[#0D1117] text-zinc-900 dark:text-white shadow-xs'
                  : 'text-zinc-500 hover:text-zinc-900 dark:hover:text-white'
              }`}
              title="encodeURI / decodeURI (preserves protocol, domain, and path structure)"
            >
              Full URL
            </button>
          </div>

          <button
            type="button"
            onClick={handleSwap}
            disabled={!output}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-zinc-800 dark:text-zinc-200 text-xs font-medium border border-zinc-200 dark:border-zinc-700/60 transition-colors disabled:opacity-40"
          >
            <ArrowRightLeft className="w-3.5 h-3.5" />
            <span>Swap</span>
          </button>
        </div>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={handleLoadSample}
            className="text-xs text-primary hover:underline px-2 py-1"
          >
            Load Sample
          </button>

          <button
            type="button"
            onClick={handleClear}
            disabled={!input && !output}
            className="p-1.5 rounded-lg text-zinc-400 hover:text-rose-500 hover:bg-rose-500/10 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
            title="Clear all"
          >
            <Trash2 className="w-4 h-4" />
          </button>
        </div>
      </div>

      {error && <ErrorMessage type="error" message={error} onClear={() => setError(null)} />}

      {/* Input / Output Panels */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Input */}
        <div className="space-y-1.5">
          <div className="flex items-center justify-between text-xs font-medium text-zinc-600 dark:text-zinc-400 px-1">
            <span>INPUT ({mode === 'encode' ? 'Raw URL or Query Param' : 'Encoded URI'})</span>
            <span>{input ? `${input.length} chars` : 'Empty'}</span>
          </div>
          <div className="rounded-xl border border-zinc-200 dark:border-[#1F2937] bg-zinc-50 dark:bg-[#0B111A] overflow-hidden focus-within:ring-2 focus-within:ring-primary/40 focus-within:border-primary">
            <textarea
              value={input}
              onChange={(e) => handleInputChange(e.target.value)}
              placeholder="Paste URL or query string here..."
              rows={8}
              spellCheck={false}
              className="w-full p-4 font-mono-code text-xs sm:text-sm bg-transparent text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-400 dark:placeholder:text-zinc-600 focus:outline-none resize-y leading-relaxed"
            />
          </div>
        </div>

        {/* Output */}
        <div className="space-y-1.5">
          <div className="flex items-center justify-between text-xs font-medium text-zinc-600 dark:text-zinc-400 px-1">
            <span>OUTPUT ({mode === 'encode' ? 'Encoded URI' : 'Decoded String'})</span>
            <CopyButton text={output} label="Copy Output" size="sm" />
          </div>
          <div className="rounded-xl border border-zinc-200 dark:border-[#1F2937] bg-zinc-100/70 dark:bg-[#0B111A]/80 overflow-hidden">
            <textarea
              value={output}
              readOnly
              placeholder="Processed result will appear here..."
              rows={8}
              spellCheck={false}
              className="w-full p-4 font-mono-code text-xs sm:text-sm bg-transparent text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-400 dark:placeholder:text-zinc-600 focus:outline-none resize-y leading-relaxed"
            />
          </div>
        </div>
      </div>

      {/* Query Parameters Inspector Table */}
      {queryParams.length > 0 && (
        <div className="mt-4 p-4 rounded-xl border border-zinc-200 dark:border-[#1F2937] bg-zinc-50/50 dark:bg-[#0B111A]/50 space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2 text-xs font-bold text-zinc-800 dark:text-zinc-200">
              <ListFilter className="w-4 h-4 text-emerald-500" />
              <span>Parsed Query Parameters ({queryParams.length})</span>
            </div>
          </div>

          <div className="overflow-x-auto rounded-lg border border-zinc-200 dark:border-[#1F2937] bg-white dark:bg-[#0D1117]">
            <table className="w-full text-left text-xs font-mono-code">
              <thead className="bg-zinc-100/80 dark:bg-zinc-800/80 text-zinc-700 dark:text-zinc-300 font-semibold border-b border-zinc-200 dark:border-[#1F2937]">
                <tr>
                  <th className="py-2 px-3">Parameter (Key)</th>
                  <th className="py-2 px-3">Value</th>
                  <th className="py-2 px-3 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-200 dark:divide-zinc-800 text-zinc-800 dark:text-zinc-200">
                {queryParams.map((p, idx) => (
                  <tr key={idx} className="hover:bg-zinc-50 dark:hover:bg-zinc-800/40">
                    <td className="py-2 px-3 font-semibold text-emerald-600 dark:text-emerald-400">
                      {p.key}
                    </td>
                    <td className="py-2 px-3 break-all">{p.value}</td>
                    <td className="py-2 px-3 text-right">
                      <CopyButton text={p.value} label="Copy Value" size="sm" />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}
    </div>
  );
}

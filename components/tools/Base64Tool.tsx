'use client';

import React, { useState } from 'react';
import { CopyButton } from '@/components/ui/CopyButton';
import { DownloadButton } from '@/components/ui/DownloadButton';
import { ErrorMessage } from '@/components/ui/ErrorMessage';
import { ArrowRightLeft, Trash2 } from 'lucide-react';

export function Base64Tool() {
  const [mode, setMode] = useState<'encode' | 'decode'>('encode');
  const [input, setInput] = useState<string>('');
  const [output, setOutput] = useState<string>('');
  const [urlSafe, setUrlSafe] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const processTransformation = (text: string, currentMode: 'encode' | 'decode', isUrlSafe: boolean) => {
    if (!text) {
      setOutput('');
      setError(null);
      return;
    }

    try {
      if (currentMode === 'encode') {
        const bytes = new TextEncoder().encode(text);
        let binary = '';
        for (let i = 0; i < bytes.byteLength; i++) {
          binary += String.fromCharCode(bytes[i]);
        }
        let b64 = btoa(binary);
        if (isUrlSafe) {
          b64 = b64.replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');
        }
        setOutput(b64);
        setError(null);
      } else {
        let clean = text.trim().replace(/-/g, '+').replace(/_/g, '/');
        while (clean.length % 4 !== 0) {
          clean += '=';
        }
        const binary = atob(clean);
        const bytes = new Uint8Array(binary.length);
        for (let i = 0; i < binary.length; i++) {
          bytes[i] = binary.charCodeAt(i);
        }
        const decoded = new TextDecoder().decode(bytes);
        setOutput(decoded);
        setError(null);
      }
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(`Base64 ${currentMode} error: ${err.message}. Please check for valid encoding.`);
      } else {
        setError('Failed to process string.');
      }
      setOutput('');
    }
  };

  const handleInputChange = (val: string) => {
    setInput(val);
    processTransformation(val, mode, urlSafe);
  };

  const handleModeChange = (newMode: 'encode' | 'decode') => {
    setMode(newMode);
    processTransformation(input, newMode, urlSafe);
  };

  const handleSwap = () => {
    const nextMode = mode === 'encode' ? 'decode' : 'encode';
    setMode(nextMode);
    setInput(output);
    processTransformation(output, nextMode, urlSafe);
  };

  const handleUrlSafeToggle = (val: boolean) => {
    setUrlSafe(val);
    processTransformation(input, mode, val);
  };

  const handleClear = () => {
    setInput('');
    setOutput('');
    setError(null);
  };

  const handleLoadSample = () => {
    if (mode === 'encode') {
      const sample = 'Hello world! 🌍 Unicode & emojis are fully supported: 🚀 ⚡ 🔒';
      setInput(sample);
      processTransformation(sample, 'encode', urlSafe);
    } else {
      const sample = 'SGVsbG8gd29ybGQhIPCfjI0gVW5pY29kZSAmIGVtb2ppcyBhcmUgZnVsbHkgc3VwcG9ydGVkOiDwn5qAIOKaoCDwn5SU';
      setInput(sample);
      processTransformation(sample, 'decode', urlSafe);
    }
  };

  return (
    <div className="space-y-4">
      {/* Control Toolbar */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-zinc-200 dark:border-[#1F2937]">
        <div className="flex flex-wrap items-center gap-2">
          {/* Mode Switcher */}
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

          {/* Swap Direction */}
          <button
            type="button"
            onClick={handleSwap}
            disabled={!output}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-zinc-800 dark:text-zinc-200 text-xs font-medium border border-zinc-200 dark:border-zinc-700/60 transition-colors disabled:opacity-40"
          >
            <ArrowRightLeft className="w-3.5 h-3.5" />
            <span>Swap</span>
          </button>

          {/* URL Safe Toggle */}
          <label className="flex items-center gap-2 text-xs text-zinc-600 dark:text-zinc-400 cursor-pointer pl-1">
            <input
              type="checkbox"
              checked={urlSafe}
              onChange={(e) => handleUrlSafeToggle(e.target.checked)}
              className="rounded border-zinc-300 text-emerald-600 focus:ring-primary"
            />
            <span>URL-Safe (- and _)</span>
          </label>
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

      {/* Two Editor Panels */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Input */}
        <div className="space-y-1.5">
          <div className="flex items-center justify-between text-xs font-medium text-zinc-600 dark:text-zinc-400 px-1">
            <span>INPUT ({mode === 'encode' ? 'Plain Text / UTF-8' : 'Base64'})</span>
            <span>{input ? `${input.length} chars` : 'Empty'}</span>
          </div>
          <div className="rounded-xl border border-zinc-200 dark:border-[#1F2937] bg-zinc-50 dark:bg-[#0B111A] overflow-hidden focus-within:ring-2 focus-within:ring-primary/40 focus-within:border-primary">
            <textarea
              value={input}
              onChange={(e) => handleInputChange(e.target.value)}
              placeholder={
                mode === 'encode'
                  ? 'Type or paste plain text here (emojis & Unicode supported)...'
                  : 'Paste Base64 encoded string here...'
              }
              rows={12}
              spellCheck={false}
              className="w-full p-4 font-mono-code text-xs sm:text-sm bg-transparent text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-400 dark:placeholder:text-zinc-600 focus:outline-none resize-y leading-relaxed"
            />
          </div>
        </div>

        {/* Output */}
        <div className="space-y-1.5">
          <div className="flex items-center justify-between text-xs font-medium text-zinc-600 dark:text-zinc-400 px-1">
            <span>OUTPUT ({mode === 'encode' ? 'Base64' : 'Plain Text'})</span>
            <div className="flex items-center gap-1.5">
              <CopyButton text={output} label="Copy Output" size="sm" />
              <DownloadButton
                filename={mode === 'encode' ? 'encoded.b64.txt' : 'decoded.txt'}
                content={output}
                size="sm"
              />
            </div>
          </div>
          <div className="rounded-xl border border-zinc-200 dark:border-[#1F2937] bg-zinc-100/70 dark:bg-[#0B111A]/80 overflow-hidden">
            <textarea
              value={output}
              readOnly
              placeholder="Result will appear here..."
              rows={12}
              spellCheck={false}
              className="w-full p-4 font-mono-code text-xs sm:text-sm bg-transparent text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-400 dark:placeholder:text-zinc-600 focus:outline-none resize-y leading-relaxed"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

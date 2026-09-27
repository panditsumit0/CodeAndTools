'use client';

import React, { useState, useRef } from 'react';
import { CopyButton } from '@/components/ui/CopyButton';
import { DownloadButton } from '@/components/ui/DownloadButton';
import { ErrorMessage } from '@/components/ui/ErrorMessage';
import {
  Upload,
  Trash2,
  CheckCircle2,
  Sparkles,
  Minimize2,
} from 'lucide-react';
import { formatBytes } from '@/lib/utils';

export function JsonFormatterTool() {
  const [input, setInput] = useState<string>('');
  const [indent, setIndent] = useState<number | string>(2);
  const [error, setError] = useState<string | null>(null);
  const [errorPos, setErrorPos] = useState<{ line: number; column: number } | null>(null);
  const [validationSuccess, setValidationSuccess] = useState<boolean>(false);
  const fileInputRef = useRef<HTMLInputElement>(null);

  // Line and column extractor for JSON parsing errors
  const parseJsonError = (err: unknown, text: string) => {
    if (!(err instanceof Error)) return { message: 'Invalid JSON syntax.', pos: null };
    const msg = err.message;
    let line = 1;
    let column = 1;

    // e.g. "at position 42" or "at line 2 column 5"
    const posMatch = msg.match(/position\s+(\d+)/i);
    const lineColMatch = msg.match(/line\s+(\d+)\s+column\s+(\d+)/i);

    if (lineColMatch) {
      line = parseInt(lineColMatch[1], 10);
      column = parseInt(lineColMatch[2], 10);
      return {
        message: `Invalid JSON: Syntax error at Line ${line}, Column ${column}. (${msg})`,
        pos: { line, column },
      };
    }

    if (posMatch) {
      const charPos = parseInt(posMatch[1], 10);
      const lines = text.slice(0, charPos).split('\n');
      line = lines.length;
      column = lines[lines.length - 1].length + 1;
      return {
        message: `Invalid JSON: Syntax error near Line ${line}, Column ${column}. Check for missing quotes or trailing commas.`,
        pos: { line, column },
      };
    }

    return {
      message: `Invalid JSON: ${msg}. Please verify quotes around keys and array syntax.`,
      pos: null,
    };
  };

  const handleFormat = () => {
    if (!input.trim()) {
      setError('Please enter JSON text or upload a file to format.');
      setErrorPos(null);
      setValidationSuccess(false);
      return;
    }
    try {
      const parsed = JSON.parse(input);
      const space = indent === 'tab' ? '\t' : Number(indent);
      const formatted = JSON.stringify(parsed, null, space);
      setInput(formatted);
      setError(null);
      setErrorPos(null);
      setValidationSuccess(true);
      setTimeout(() => setValidationSuccess(false), 3000);
    } catch (err) {
      const parsedErr = parseJsonError(err, input);
      setError(parsedErr.message);
      setErrorPos(parsedErr.pos);
      setValidationSuccess(false);
    }
  };

  const handleMinify = () => {
    if (!input.trim()) {
      setError('Please enter JSON text to minify.');
      setErrorPos(null);
      setValidationSuccess(false);
      return;
    }
    try {
      const parsed = JSON.parse(input);
      const minified = JSON.stringify(parsed);
      setInput(minified);
      setError(null);
      setErrorPos(null);
      setValidationSuccess(true);
      setTimeout(() => setValidationSuccess(false), 3000);
    } catch (err) {
      const parsedErr = parseJsonError(err, input);
      setError(parsedErr.message);
      setErrorPos(parsedErr.pos);
      setValidationSuccess(false);
    }
  };

  const handleValidate = () => {
    if (!input.trim()) {
      setError('Please enter JSON text to validate.');
      setErrorPos(null);
      setValidationSuccess(false);
      return;
    }
    try {
      JSON.parse(input);
      setError(null);
      setErrorPos(null);
      setValidationSuccess(true);
    } catch (err) {
      const parsedErr = parseJsonError(err, input);
      setError(parsedErr.message);
      setErrorPos(parsedErr.pos);
      setValidationSuccess(false);
    }
  };

  const handleClear = () => {
    setInput('');
    setError(null);
    setErrorPos(null);
    setValidationSuccess(false);
  };

  const handleLoadSample = () => {
    const sample = {
      project: 'Code&Tools',
      version: '1.0.0',
      description: 'Privacy-focused developer utilities in your browser',
      features: ['Client-side execution', 'Dark mode', 'Zero telemetry'],
      author: {
        name: 'Developer Community',
        website: 'https://devkit.local',
      },
      stats: {
        stars: 1250,
        openIssues: 0,
        isPrivate: true,
      },
    };
    setInput(JSON.stringify(sample, null, 2));
    setError(null);
    setErrorPos(null);
    setValidationSuccess(false);
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const content = event.target?.result as string;
      setInput(content);
      setError(null);
      setErrorPos(null);
    };
    reader.onerror = () => {
      setError('Failed to read the uploaded file. Please ensure it is a valid text/json file.');
    };
    reader.readAsText(file);
    e.target.value = '';
  };

  // Stats
  const lineCount = input ? input.split('\n').length : 0;
  const charCount = input.length;
  const byteCount = new Blob([input]).size;

  return (
    <div className="space-y-4">
      {/* Action Toolbar */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-zinc-200 dark:border-[#1F2937]">
        <div className="flex flex-wrap items-center gap-2">
          {/* Format Button */}
          <button
            type="button"
            onClick={handleFormat}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-primary hover:bg-blue-500 text-white text-xs sm:text-sm font-semibold shadow-sm transition-all focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary"
          >
            <Sparkles className="w-4 h-4" />
            <span>Format</span>
          </button>

          {/* Minify Button */}
          <button
            type="button"
            onClick={handleMinify}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-zinc-800 dark:text-zinc-200 text-xs sm:text-sm font-medium border border-zinc-200 dark:border-zinc-700/60 transition-colors"
          >
            <Minimize2 className="w-3.5 h-3.5" />
            <span>Minify</span>
          </button>

          {/* Validate Button */}
          <button
            type="button"
            onClick={handleValidate}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-zinc-800 dark:text-zinc-200 text-xs sm:text-sm font-medium border border-zinc-200 dark:border-zinc-700/60 transition-colors"
          >
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
            <span>Validate</span>
          </button>

          {/* Indent Selector */}
          <div className="flex items-center gap-1 text-xs text-zinc-500 dark:text-zinc-400 pl-1">
            <span className="hidden sm:inline">Indent:</span>
            <select
              value={indent}
              onChange={(e) => setIndent(e.target.value)}
              className="bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-zinc-800 dark:text-zinc-200 rounded-md px-2 py-1 text-xs focus:outline-none focus:ring-1 focus:ring-primary"
            >
              <option value={2}>2 spaces</option>
              <option value={4}>4 spaces</option>
              <option value="tab">Tab</option>
            </select>
          </div>
        </div>

        {/* Right side actions */}
        <div className="flex flex-wrap items-center gap-2">
          <button
            type="button"
            onClick={handleLoadSample}
            className="text-xs text-primary hover:underline px-2 py-1"
          >
            Load Sample
          </button>

          {/* File Upload */}
          <input
            ref={fileInputRef}
            type="file"
            accept=".json,.txt"
            onChange={handleFileUpload}
            className="hidden"
          />
          <button
            type="button"
            onClick={() => fileInputRef.current?.click()}
            className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-zinc-700 dark:text-zinc-300 text-xs font-medium border border-zinc-200 dark:border-zinc-700/60 transition-colors"
          >
            <Upload className="w-3.5 h-3.5" />
            <span>Upload</span>
          </button>

          {/* Copy Button */}
          <CopyButton text={input} label="Copy" />

          {/* Download Button */}
          <DownloadButton
            filename="formatted.json"
            content={input}
            mimeType="application/json"
            label="Download"
          />

          {/* Clear Button */}
          <button
            type="button"
            onClick={handleClear}
            disabled={!input}
            title="Clear editor"
            className="p-1.5 rounded-lg text-zinc-400 hover:text-rose-500 hover:bg-rose-500/10 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <Trash2 className="w-4 h-4" />
          </button>
        </div>
      </div>

      {/* Validation Banner */}
      {validationSuccess && (
        <ErrorMessage
          type="success"
          message="Valid JSON! The syntax is correct and well-formed."
          onClear={() => setValidationSuccess(false)}
        />
      )}

      {error && (
        <ErrorMessage
          type="error"
          message={error}
          onClear={() => setError(null)}
        />
      )}

      {/* Code Editor */}
      <div className="relative rounded-xl border border-zinc-200 dark:border-[#1F2937] bg-zinc-50 dark:bg-[#0B111A] overflow-hidden focus-within:ring-2 focus-within:ring-primary/40 focus-within:border-primary">
        <textarea
          value={input}
          onChange={(e) => {
            setInput(e.target.value);
            if (error) setError(null);
            if (validationSuccess) setValidationSuccess(false);
          }}
          placeholder={`{\n  "paste": "your JSON here",\n  "click": "Format or Validate"\n}`}
          rows={16}
          spellCheck={false}
          className="w-full p-4 font-mono-code text-xs sm:text-sm bg-transparent text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-400 dark:placeholder:text-zinc-600 focus:outline-none resize-y leading-relaxed"
        />

        {errorPos && (
          <div className="absolute bottom-3 right-3 px-2 py-1 rounded bg-rose-500/10 border border-rose-500/30 text-rose-500 text-[11px] font-mono">
            Line {errorPos.line}, Col {errorPos.column}
          </div>
        )}
      </div>

      {/* Bottom Status & Statistics */}
      <div className="flex flex-wrap items-center justify-between text-xs text-zinc-500 dark:text-zinc-400 px-1 pt-1">
        <div className="flex items-center gap-4">
          <span>{lineCount} lines</span>
          <span>{charCount} characters</span>
          <span>{formatBytes(byteCount)}</span>
        </div>
        <div>
          <span>UTF-8 • Monospace • In-Browser Parsing</span>
        </div>
      </div>
    </div>
  );
}

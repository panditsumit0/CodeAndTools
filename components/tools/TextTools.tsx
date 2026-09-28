'use client';

import React, { useState, useMemo, useEffect } from 'react';
import {
  Copy,
  Check,
  RotateCcw,
  Download,
  FileText,
  AlignLeft,
  Sparkles,
  ArrowUpDown,
  Trash2,
  Columns,
  Eye,
  Edit3
} from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

// -------------------------------------------------------------
// 1. WORD & TEXT COUNTER TOOL
// -------------------------------------------------------------
export function WordCounterTool() {
  const [text, setText] = useState<string>('');
  const [copied, setCopied] = useState<boolean>(false);

  const stats = useMemo(() => {
    const raw = text;
    const trimmed = text.trim();
    const words = trimmed ? trimmed.split(/\s+/).filter(Boolean) : [];
    const charCount = raw.length;
    const charNoSpaces = raw.replace(/\s/g, '').length;
    const lines = raw ? raw.split(/\r\n|\r|\n/).length : 0;
    const paragraphs = trimmed ? trimmed.split(/\n\s*\n/).filter(Boolean).length : 0;
    const sentences = trimmed ? trimmed.split(/[.!?]+/).filter((s) => s.trim().length > 0).length : 0;
    const readingTimeMinutes = Math.ceil(words.length / 200);
    const speakingTimeMinutes = Math.ceil(words.length / 130);

    // Keyword density calculation
    const wordFreq: Record<string, number> = {};
    for (const w of words) {
      const clean = w.toLowerCase().replace(/[^a-z0-9]/g, '');
      if (clean.length > 2) {
        wordFreq[clean] = (wordFreq[clean] || 0) + 1;
      }
    }
    const topKeywords = Object.entries(wordFreq)
      .sort((a, b) => b[1] - a[1])
      .slice(0, 5);

    return {
      words: words.length,
      charCount,
      charNoSpaces,
      lines,
      paragraphs,
      sentences,
      readingTimeMinutes,
      speakingTimeMinutes,
      topKeywords,
    };
  }, [text]);

  const loadSample = () => {
    setText(
      `Code&Tools provides privacy-first, browser-based developer utilities for software engineers and computer science students. Everything executes locally in your browser with zero server uploads.\n\nWhether you need to format JSON data, generate secure cryptographic hashes, convert units, test regular expressions, or debug C, C++, Java, and Python programs, our platform is designed for lightning-fast efficiency.`
    );
  };

  const copyToClipboard = () => {
    if (!text) return;
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-6">
      {/* Metrics Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
        <div className="p-3.5 rounded-xl border border-zinc-200 dark:border-[#1F2937] bg-zinc-50 dark:bg-[#0B111A]">
          <span className="text-xs text-zinc-500 dark:text-zinc-400">Words</span>
          <p className="text-2xl font-bold text-zinc-900 dark:text-white mt-1">{stats.words}</p>
        </div>
        <div className="p-3.5 rounded-xl border border-zinc-200 dark:border-[#1F2937] bg-zinc-50 dark:bg-[#0B111A]">
          <span className="text-xs text-zinc-500 dark:text-zinc-400">Characters</span>
          <p className="text-2xl font-bold text-zinc-900 dark:text-white mt-1">{stats.charCount}</p>
        </div>
        <div className="p-3.5 rounded-xl border border-zinc-200 dark:border-[#1F2937] bg-zinc-50 dark:bg-[#0B111A]">
          <span className="text-xs text-zinc-500 dark:text-zinc-400">No Spaces</span>
          <p className="text-2xl font-bold text-zinc-900 dark:text-white mt-1">{stats.charNoSpaces}</p>
        </div>
        <div className="p-3.5 rounded-xl border border-zinc-200 dark:border-[#1F2937] bg-zinc-50 dark:bg-[#0B111A]">
          <span className="text-xs text-zinc-500 dark:text-zinc-400">Lines</span>
          <p className="text-2xl font-bold text-zinc-900 dark:text-white mt-1">{stats.lines}</p>
        </div>
        <div className="p-3.5 rounded-xl border border-zinc-200 dark:border-[#1F2937] bg-zinc-50 dark:bg-[#0B111A]">
          <span className="text-xs text-zinc-500 dark:text-zinc-400">Paragraphs</span>
          <p className="text-2xl font-bold text-zinc-900 dark:text-white mt-1">{stats.paragraphs}</p>
        </div>
        <div className="p-3.5 rounded-xl border border-zinc-200 dark:border-[#1F2937] bg-zinc-50 dark:bg-[#0B111A]">
          <span className="text-xs text-zinc-500 dark:text-zinc-400">Read Time</span>
          <p className="text-2xl font-bold text-emerald-600 dark:text-emerald-400 mt-1">
            {stats.readingTimeMinutes} min
          </p>
        </div>
      </div>

      {/* Editor & Controls */}
      <div className="space-y-2">
        <div className="flex items-center justify-between text-xs text-zinc-500">
          <span>Type or paste your text below:</span>
          <div className="flex items-center gap-2">
            <button
              onClick={loadSample}
              className="text-primary hover:underline font-medium cursor-pointer"
            >
              Load Sample
            </button>
            <span>•</span>
            <button
              onClick={() => setText('')}
              className="text-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-300 cursor-pointer"
            >
              Clear
            </button>
          </div>
        </div>
        <textarea
          value={text}
          onChange={(e) => setText(e.target.value)}
          placeholder="Paste or write your text here to see real-time character, word, sentence, and reading-time metrics..."
          rows={10}
          className="w-full p-4 rounded-xl border border-zinc-200 dark:border-[#1F2937] bg-zinc-50 dark:bg-[#0B111A] text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-400 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 font-mono leading-relaxed"
        />
      </div>

      {/* Bottom bar with top keywords and copy */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2 border-t border-zinc-200 dark:border-[#1F2937]">
        <div className="flex flex-wrap items-center gap-2 text-xs text-zinc-600 dark:text-zinc-400">
          <span className="font-semibold text-zinc-700 dark:text-zinc-300">Top Keywords:</span>
          {stats.topKeywords.length > 0 ? (
            stats.topKeywords.map(([word, count]) => (
              <span
                key={word}
                className="px-2 py-0.5 rounded-md bg-zinc-100 dark:bg-[#151B24] border border-zinc-200 dark:border-zinc-800 text-zinc-700 dark:text-zinc-300"
              >
                {word} ({count})
              </span>
            ))
          ) : (
            <span className="text-zinc-400 italic">None yet</span>
          )}
        </div>

        <button
          onClick={copyToClipboard}
          disabled={!text}
          className="inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl bg-primary text-primary-foreground text-xs font-semibold hover:opacity-90 transition-opacity disabled:opacity-50 cursor-pointer"
        >
          {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
          <span>{copied ? 'Copied' : 'Copy Text'}</span>
        </button>
      </div>
    </div>
  );
}

// -------------------------------------------------------------
// 2. TEXT CASE CONVERTER TOOL
// -------------------------------------------------------------
export function CaseConverterTool() {
  const [input, setInput] = useState<string>('hello world from code and tools');
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  const conversions = useMemo(() => {
    const raw = input || '';
    const words = raw
      .replace(/([a-z])([A-Z])/g, '$1 $2')
      .replace(/[^a-zA-Z0-9]+/g, ' ')
      .trim()
      .split(/\s+/)
      .filter(Boolean);

    const upper = raw.toUpperCase();
    const lower = raw.toLowerCase();
    const title = raw.replace(/\b\w/g, (c) => c.toUpperCase());
    const sentence = raw
      ? raw.toLowerCase().replace(/(^\s*\w|[.!?]\s*\w)/g, (c) => c.toUpperCase())
      : '';
    const camel = words
      .map((w, idx) =>
        idx === 0
          ? w.toLowerCase()
          : w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()
      )
      .join('');
    const pascal = words
      .map((w) => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase())
      .join('');
    const snake = words.map((w) => w.toLowerCase()).join('_');
    const kebab = words.map((w) => w.toLowerCase()).join('-');
    const constant = words.map((w) => w.toUpperCase()).join('_');
    const dot = words.map((w) => w.toLowerCase()).join('.');

    return [
      { key: 'upper', label: 'UPPERCASE', value: upper },
      { key: 'lower', label: 'lowercase', value: lower },
      { key: 'title', label: 'Title Case', value: title },
      { key: 'sentence', label: 'Sentence case', value: sentence },
      { key: 'camel', label: 'camelCase', value: camel },
      { key: 'pascal', label: 'PascalCase', value: pascal },
      { key: 'snake', label: 'snake_case', value: snake },
      { key: 'kebab', label: 'kebab-case', value: kebab },
      { key: 'constant', label: 'CONSTANT_CASE', value: constant },
      { key: 'dot', label: 'dot.case', value: dot },
    ];
  }, [input]);

  const copyVal = (key: string, val: string) => {
    if (!val) return;
    navigator.clipboard.writeText(val);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 1500);
  };

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <div className="flex items-center justify-between text-xs text-zinc-500">
          <span>Enter text to transform into any programming or writing case:</span>
          <button
            onClick={() => setInput('')}
            className="text-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-300 cursor-pointer"
          >
            Clear
          </button>
        </div>
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Type or paste any text or variable name here..."
          rows={4}
          className="w-full p-3.5 rounded-xl border border-zinc-200 dark:border-[#1F2937] bg-zinc-50 dark:bg-[#0B111A] text-zinc-900 dark:text-zinc-100 text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 font-mono"
        />
      </div>

      {/* Case Options Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
        {conversions.map(({ key, label, value }) => (
          <div
            key={key}
            className="p-3.5 rounded-xl border border-zinc-200 dark:border-[#1F2937] bg-zinc-50 dark:bg-[#0B111A] flex flex-col justify-between gap-2"
          >
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-primary">{label}</span>
              <button
                onClick={() => copyVal(key, value)}
                className="inline-flex items-center gap-1 text-[11px] font-medium text-zinc-500 hover:text-zinc-900 dark:hover:text-white cursor-pointer px-2 py-1 rounded-md hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-colors"
              >
                {copiedKey === key ? (
                  <>
                    <Check className="w-3 h-3 text-emerald-500" />
                    <span className="text-emerald-500">Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3 h-3" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>
            <p className="text-xs sm:text-sm font-mono text-zinc-800 dark:text-zinc-200 break-all select-all">
              {value || <span className="text-zinc-400 italic">Empty</span>}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

// -------------------------------------------------------------
// 3. WHITESPACE CLEANER & LINE DEDUPLICATOR
// -------------------------------------------------------------
export function WhitespaceCleanerTool() {
  const [input, setInput] = useState<string>(
    "apple\n  banana  \napple\ncherry\n\n  banana\n  date"
  );
  const [removeDuplicates, setRemoveDuplicates] = useState<boolean>(true);
  const [trimLines, setTrimLines] = useState<boolean>(true);
  const [removeEmpty, setRemoveEmpty] = useState<boolean>(true);
  const [collapseSpaces, setCollapseSpaces] = useState<boolean>(true);
  const [sortAlphabetical, setSortAlphabetical] = useState<boolean>(false);
  const [copied, setCopied] = useState<boolean>(false);

  const output = useMemo(() => {
    if (!input) return '';
    let lines = input.split(/\r\n|\r|\n/);

    if (trimLines) {
      lines = lines.map((l) => l.trim());
    }
    if (collapseSpaces) {
      lines = lines.map((l) => l.replace(/[ \t]+/g, ' '));
    }
    if (removeEmpty) {
      lines = lines.filter((l) => l.length > 0);
    }
    if (removeDuplicates) {
      lines = Array.from(new Set(lines));
    }
    if (sortAlphabetical) {
      lines.sort((a, b) => a.localeCompare(b));
    }

    return lines.join('\n');
  }, [input, removeDuplicates, trimLines, removeEmpty, collapseSpaces, sortAlphabetical]);

  const copyOutput = () => {
    if (!output) return;
    navigator.clipboard.writeText(output);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-6">
      {/* Options Row */}
      <div className="flex flex-wrap items-center gap-3 p-3.5 rounded-xl border border-zinc-200 dark:border-[#1F2937] bg-zinc-50 dark:bg-[#0B111A] text-xs">
        <label className="flex items-center gap-1.5 cursor-pointer">
          <input
            type="checkbox"
            checked={removeDuplicates}
            onChange={(e) => setRemoveDuplicates(e.target.checked)}
            className="rounded text-primary focus:ring-0"
          />
          <span className="font-medium text-zinc-700 dark:text-zinc-300">Remove Duplicates</span>
        </label>
        <label className="flex items-center gap-1.5 cursor-pointer">
          <input
            type="checkbox"
            checked={trimLines}
            onChange={(e) => setTrimLines(e.target.checked)}
            className="rounded text-primary focus:ring-0"
          />
          <span className="font-medium text-zinc-700 dark:text-zinc-300">Trim Lines</span>
        </label>
        <label className="flex items-center gap-1.5 cursor-pointer">
          <input
            type="checkbox"
            checked={removeEmpty}
            onChange={(e) => setRemoveEmpty(e.target.checked)}
            className="rounded text-primary focus:ring-0"
          />
          <span className="font-medium text-zinc-700 dark:text-zinc-300">Remove Empty Lines</span>
        </label>
        <label className="flex items-center gap-1.5 cursor-pointer">
          <input
            type="checkbox"
            checked={collapseSpaces}
            onChange={(e) => setCollapseSpaces(e.target.checked)}
            className="rounded text-primary focus:ring-0"
          />
          <span className="font-medium text-zinc-700 dark:text-zinc-300">Collapse Multiple Spaces</span>
        </label>
        <label className="flex items-center gap-1.5 cursor-pointer">
          <input
            type="checkbox"
            checked={sortAlphabetical}
            onChange={(e) => setSortAlphabetical(e.target.checked)}
            className="rounded text-primary focus:ring-0"
          />
          <span className="font-medium text-zinc-700 dark:text-zinc-300">Sort Lines (A-Z)</span>
        </label>
      </div>

      {/* Side by side / Stacked Editor */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <div className="flex items-center justify-between text-xs text-zinc-500">
            <span>Original Input ({input ? input.split('\n').length : 0} lines):</span>
            <button
              onClick={() => setInput('')}
              className="text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200 cursor-pointer"
            >
              Clear
            </button>
          </div>
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            rows={10}
            className="w-full p-3.5 rounded-xl border border-zinc-200 dark:border-[#1F2937] bg-zinc-50 dark:bg-[#0B111A] text-zinc-900 dark:text-zinc-100 text-xs sm:text-sm font-mono focus:outline-none focus:ring-2 focus:ring-primary/40 leading-relaxed"
          />
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between text-xs text-zinc-500">
            <span>Cleaned Output ({output ? output.split('\n').length : 0} lines):</span>
            <button
              onClick={copyOutput}
              disabled={!output}
              className="text-primary hover:underline font-semibold cursor-pointer disabled:opacity-50"
            >
              {copied ? 'Copied!' : 'Copy Result'}
            </button>
          </div>
          <textarea
            readOnly
            value={output}
            rows={10}
            className="w-full p-3.5 rounded-xl border border-zinc-200 dark:border-[#1F2937] bg-zinc-100/50 dark:bg-[#080C13] text-zinc-900 dark:text-zinc-100 text-xs sm:text-sm font-mono focus:outline-none leading-relaxed"
          />
        </div>
      </div>
    </div>
  );
}

// -------------------------------------------------------------
// 4. LOREM IPSUM GENERATOR
// -------------------------------------------------------------
export function LoremIpsumTool() {
  const [count, setCount] = useState<number>(3);
  const [type, setType] = useState<'paragraphs' | 'sentences' | 'words'>('paragraphs');
  const [startWithLorem, setStartWithLorem] = useState<boolean>(true);
  const [asHtml, setAsHtml] = useState<boolean>(false);
  const [copied, setCopied] = useState<boolean>(false);

  const LOREM_WORDS = [
    'lorem', 'ipsum', 'dolor', 'sit', 'amet', 'consectetur', 'adipiscing', 'elit',
    'sed', 'do', 'eiusmod', 'tempor', 'incididunt', 'ut', 'labore', 'et', 'dolore',
    'magna', 'aliqua', 'ut', 'enim', 'ad', 'minim', 'veniam', 'quis', 'nostrud',
    'exercitation', 'ullamco', 'laboris', 'nisi', 'ut', 'aliquip', 'ex', 'ea',
    'commodo', 'consequat', 'duis', 'aute', 'irure', 'in', 'reprehenderit', 'in',
    'voluptate', 'velit', 'esse', 'cillum', 'dolore', 'eu', 'fugiat', 'nulla',
    'pariatur', 'excepteur', 'sint', 'occaecat', 'cupidatat', 'non', 'proident',
    'sunt', 'in', 'culpa', 'qui', 'officia', 'deserunt', 'mollit', 'anim', 'id', 'est', 'laborum'
  ];

  const generatedText = useMemo(() => {
    const getRandomWord = () => LOREM_WORDS[Math.floor(Math.random() * LOREM_WORDS.length)];

    const makeSentence = (isFirst: boolean) => {
      const len = Math.floor(Math.random() * 8) + 8;
      const words: string[] = [];
      if (isFirst && startWithLorem) {
        words.push('Lorem', 'ipsum', 'dolor', 'sit', 'amet');
      }
      while (words.length < len) {
        words.push(getRandomWord());
      }
      words[0] = words[0].charAt(0).toUpperCase() + words[0].slice(1);
      return words.join(' ') + '.';
    };

    const makeParagraph = (isFirst: boolean) => {
      const sentenceCount = Math.floor(Math.random() * 4) + 4;
      const sentences: string[] = [];
      for (let i = 0; i < sentenceCount; i++) {
        sentences.push(makeSentence(isFirst && i === 0));
      }
      return sentences.join(' ');
    };

    if (type === 'words') {
      const words: string[] = [];
      if (startWithLorem) words.push('Lorem', 'ipsum', 'dolor', 'sit', 'amet');
      while (words.length < count) {
        words.push(getRandomWord());
      }
      return words.slice(0, count).join(' ');
    }

    if (type === 'sentences') {
      const sentences: string[] = [];
      for (let i = 0; i < count; i++) {
        sentences.push(makeSentence(i === 0));
      }
      return asHtml ? sentences.map((s) => `<p>${s}</p>`).join('\n') : sentences.join(' ');
    }

    // Paragraphs
    const paras: string[] = [];
    for (let i = 0; i < count; i++) {
      paras.push(makeParagraph(i === 0));
    }
    return asHtml ? paras.map((p) => `<p>${p}</p>`).join('\n\n') : paras.join('\n\n');
  }, [count, type, startWithLorem, asHtml]);

  const copyText = () => {
    navigator.clipboard.writeText(generatedText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const downloadText = () => {
    const blob = new Blob([generatedText], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'lorem-ipsum.txt';
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="space-y-6">
      {/* Controls Bar */}
      <div className="p-4 rounded-xl border border-zinc-200 dark:border-[#1F2937] bg-zinc-50 dark:bg-[#0B111A] flex flex-wrap items-center justify-between gap-4">
        <div className="flex flex-wrap items-center gap-3">
          <div className="flex items-center gap-1.5 text-xs text-zinc-600 dark:text-zinc-400">
            <span>Generate:</span>
            <input
              type="number"
              min={1}
              max={50}
              value={count}
              onChange={(e) => setCount(Math.max(1, Math.min(50, parseInt(e.target.value) || 1)))}
              className="w-16 px-2.5 py-1 rounded-lg border border-zinc-200 dark:border-[#1F2937] bg-white dark:bg-[#151B24] text-xs font-semibold text-center text-zinc-900 dark:text-white"
            />
          </div>

          <div className="flex items-center rounded-lg border border-zinc-200 dark:border-[#1F2937] bg-white dark:bg-[#151B24] p-0.5 text-xs">
            {(['paragraphs', 'sentences', 'words'] as const).map((t) => (
              <button
                key={t}
                onClick={() => setType(t)}
                className={`px-3 py-1 rounded-md font-medium capitalize transition-colors ${
                  type === t
                    ? 'bg-primary text-primary-foreground shadow-xs'
                    : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white'
                }`}
              >
                {t}
              </button>
            ))}
          </div>

          <label className="flex items-center gap-1.5 text-xs cursor-pointer text-zinc-700 dark:text-zinc-300">
            <input
              type="checkbox"
              checked={startWithLorem}
              onChange={(e) => setStartWithLorem(e.target.checked)}
              className="rounded text-primary focus:ring-0"
            />
            <span>Start with &quot;Lorem ipsum&quot;</span>
          </label>

          <label className="flex items-center gap-1.5 text-xs cursor-pointer text-zinc-700 dark:text-zinc-300">
            <input
              type="checkbox"
              checked={asHtml}
              onChange={(e) => setAsHtml(e.target.checked)}
              className="rounded text-primary focus:ring-0"
            />
            <span>Wrap in &lt;p&gt; tags</span>
          </label>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={downloadText}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-zinc-200 dark:border-[#1F2937] text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 text-xs font-medium cursor-pointer transition-colors"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Download</span>
          </button>
          <button
            onClick={copyText}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-primary text-primary-foreground text-xs font-semibold hover:opacity-90 transition-opacity cursor-pointer"
          >
            {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copied ? 'Copied' : 'Copy'}</span>
          </button>
        </div>
      </div>

      {/* Output Display */}
      <textarea
        readOnly
        value={generatedText}
        rows={12}
        className="w-full p-4 rounded-xl border border-zinc-200 dark:border-[#1F2937] bg-zinc-50 dark:bg-[#0B111A] text-zinc-900 dark:text-zinc-100 text-sm leading-relaxed focus:outline-none select-all font-mono"
      />
    </div>
  );
}

// -------------------------------------------------------------
// 5. MARKDOWN PREVIEWER TOOL
// -------------------------------------------------------------
export function MarkdownPreviewTool() {
  const [markdown, setMarkdown] = useState<string>(`# Welcome to Code&Tools Markdown Studio

A real-time, privacy-first **Markdown Previewer** running 100% in your browser.

## Features
- **GitHub Flavored Markdown** (tables, strikethrough, task lists)
- Instant live preview
- Syntax-highlighted code blocks
- Copy formatted text or export as \`.md\`

### Code Example:
\`\`\`typescript
interface Developer {
  name: string;
  skills: string[];
  isLearning: boolean;
}

const student: Developer = {
  name: "Class 12 Engineer",
  skills: ["TypeScript", "Next.js", "C++"],
  isLearning: true,
};
\`\`\`

### Comparison Table:
| Feature | Code&Tools | Other Tools |
| :--- | :---: | :---: |
| 100% Client-Side Privacy | ✅ Yes | ❌ Often Uploads |
| Fast Zero Latency | ✅ Instant | ⏳ Network delays |
| Free & Open | ✅ Unlimited | ⚠️ Paywalled |

> "Simplicity is prerequisite for reliability." — Edsger W. Dijkstra
`);
  const [copied, setCopied] = useState<boolean>(false);
  const [activeTab, setActiveTab] = useState<'both' | 'edit' | 'preview'>('both');

  const copyMarkdown = () => {
    navigator.clipboard.writeText(markdown);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const downloadMarkdown = () => {
    const blob = new Blob([markdown], { type: 'text/markdown;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'document.md';
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="space-y-4">
      {/* Top action bar */}
      <div className="flex items-center justify-between gap-3 text-xs">
        <div className="flex items-center gap-1 rounded-lg border border-zinc-200 dark:border-[#1F2937] p-0.5 bg-zinc-50 dark:bg-[#0B111A]">
          <button
            onClick={() => setActiveTab('both')}
            className={`px-3 py-1 rounded-md font-medium transition-colors cursor-pointer ${
              activeTab === 'both'
                ? 'bg-primary text-primary-foreground'
                : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white'
            }`}
          >
            Split View
          </button>
          <button
            onClick={() => setActiveTab('edit')}
            className={`px-3 py-1 rounded-md font-medium transition-colors cursor-pointer ${
              activeTab === 'edit'
                ? 'bg-primary text-primary-foreground'
                : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white'
            }`}
          >
            Editor Only
          </button>
          <button
            onClick={() => setActiveTab('preview')}
            className={`px-3 py-1 rounded-md font-medium transition-colors cursor-pointer ${
              activeTab === 'preview'
                ? 'bg-primary text-primary-foreground'
                : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white'
            }`}
          >
            Preview Only
          </button>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={downloadMarkdown}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg border border-zinc-200 dark:border-[#1F2937] text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 cursor-pointer"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Download .md</span>
          </button>
          <button
            onClick={copyMarkdown}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90 cursor-pointer"
          >
            {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copied ? 'Copied' : 'Copy'}</span>
          </button>
        </div>
      </div>

      {/* Editor & Preview Pane */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {(activeTab === 'both' || activeTab === 'edit') && (
          <div className="space-y-1.5">
            <span className="text-xs font-semibold text-zinc-500">Markdown Editor</span>
            <textarea
              value={markdown}
              onChange={(e) => setMarkdown(e.target.value)}
              rows={22}
              className="w-full p-4 rounded-xl border border-zinc-200 dark:border-[#1F2937] bg-zinc-50 dark:bg-[#0B111A] text-zinc-900 dark:text-zinc-100 font-mono text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-primary/40 leading-relaxed"
            />
          </div>
        )}

        {(activeTab === 'both' || activeTab === 'preview') && (
          <div className="space-y-1.5">
            <span className="text-xs font-semibold text-zinc-500">HTML Live Preview</span>
            <div className="w-full min-h-[480px] p-5 rounded-xl border border-zinc-200 dark:border-[#1F2937] bg-white dark:bg-[#0D1117] text-zinc-900 dark:text-zinc-100 overflow-y-auto prose dark:prose-invert max-w-none text-sm leading-relaxed">
              <ReactMarkdown remarkPlugins={[remarkGfm]}>{markdown}</ReactMarkdown>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

// -------------------------------------------------------------
// 6. DIFF CHECKER TOOL
// -------------------------------------------------------------
export function DiffCheckerTool() {
  const [original, setOriginal] = useState<string>(
    `function calculateTax(amount) {\n  const rate = 0.05;\n  return amount * rate;\n}`
  );
  const [modified, setModified] = useState<string>(
    `function calculateTax(amount, stateCode) {\n  const rate = stateCode === 'CA' ? 0.08 : 0.05;\n  const totalTax = amount * rate;\n  return totalTax;\n}`
  );

  const diffResult = useMemo(() => {
    const origLines = original.split(/\r\n|\r|\n/);
    const modLines = modified.split(/\r\n|\r|\n/);

    // Simple line-by-line diff representation
    const maxLen = Math.max(origLines.length, modLines.length);
    const rows = [];
    let addedCount = 0;
    let removedCount = 0;

    for (let i = 0; i < maxLen; i++) {
      const o = origLines[i] ?? null;
      const m = modLines[i] ?? null;
      const status =
        o === m ? 'unchanged' : o === null ? 'added' : m === null ? 'removed' : 'modified';

      if (status === 'added' || status === 'modified') addedCount++;
      if (status === 'removed' || status === 'modified') removedCount++;

      rows.push({ lineNum: i + 1, original: o, modified: m, status });
    }

    return { rows, addedCount, removedCount };
  }, [original, modified]);

  return (
    <div className="space-y-6">
      {/* Metrics Banner */}
      <div className="flex items-center justify-between p-3.5 rounded-xl border border-zinc-200 dark:border-[#1F2937] bg-zinc-50 dark:bg-[#0B111A] text-xs">
        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1.5 font-semibold text-emerald-600 dark:text-emerald-400">
            <span className="w-2 h-2 rounded-full bg-emerald-500" />
            +{diffResult.addedCount} Additions / Edits
          </span>
          <span className="flex items-center gap-1.5 font-semibold text-rose-600 dark:text-rose-400">
            <span className="w-2 h-2 rounded-full bg-rose-500" />
            -{diffResult.removedCount} Deletions
          </span>
        </div>
        <button
          onClick={() => {
            setOriginal('');
            setModified('');
          }}
          className="text-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-300 font-medium cursor-pointer"
        >
          Clear Both
        </button>
      </div>

      {/* Input Textareas */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <label className="text-xs font-semibold text-zinc-600 dark:text-zinc-400">
            Original Text
          </label>
          <textarea
            value={original}
            onChange={(e) => setOriginal(e.target.value)}
            rows={8}
            placeholder="Paste original source code or document text..."
            className="w-full p-3.5 rounded-xl border border-zinc-200 dark:border-[#1F2937] bg-zinc-50 dark:bg-[#0B111A] text-zinc-900 dark:text-zinc-100 font-mono text-xs focus:outline-none focus:ring-2 focus:ring-primary/40 leading-relaxed"
          />
        </div>

        <div className="space-y-2">
          <label className="text-xs font-semibold text-zinc-600 dark:text-zinc-400">
            Modified Text
          </label>
          <textarea
            value={modified}
            onChange={(e) => setModified(e.target.value)}
            rows={8}
            placeholder="Paste modified updated code or text..."
            className="w-full p-3.5 rounded-xl border border-zinc-200 dark:border-[#1F2937] bg-zinc-50 dark:bg-[#0B111A] text-zinc-900 dark:text-zinc-100 font-mono text-xs focus:outline-none focus:ring-2 focus:ring-primary/40 leading-relaxed"
          />
        </div>
      </div>

      {/* Visual Line Diff Output */}
      <div className="rounded-xl border border-zinc-200 dark:border-[#1F2937] bg-white dark:bg-[#080C13] overflow-hidden text-xs font-mono">
        <div className="p-3 bg-zinc-100 dark:bg-[#0F1622] border-b border-zinc-200 dark:border-[#1F2937] text-zinc-600 dark:text-zinc-300 font-semibold flex justify-between">
          <span>Side-by-Side Comparison</span>
          <span className="text-[11px] text-zinc-500 font-normal">Line-by-line inspection</span>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-zinc-200 dark:border-[#1F2937] text-zinc-400 text-[11px]">
                <th className="p-2 w-12 text-center bg-zinc-50 dark:bg-[#0B111A]">#</th>
                <th className="p-2 w-1/2 border-r border-zinc-200 dark:border-[#1F2937]">Original</th>
                <th className="p-2 w-1/2">Modified</th>
              </tr>
            </thead>
            <tbody>
              {diffResult.rows.map((row) => {
                const isModified = row.status === 'modified';
                const isAdded = row.status === 'added';
                const isRemoved = row.status === 'removed';

                return (
                  <tr
                    key={row.lineNum}
                    className={`border-b border-zinc-100 dark:border-zinc-900/60 ${
                      isModified
                        ? 'bg-amber-500/10'
                        : isAdded
                        ? 'bg-emerald-500/10'
                        : isRemoved
                        ? 'bg-rose-500/10'
                        : ''
                    }`}
                  >
                    <td className="p-2 text-center text-zinc-400 select-none bg-zinc-50/50 dark:bg-[#090E16]">
                      {row.lineNum}
                    </td>
                    <td
                      className={`p-2 border-r border-zinc-200 dark:border-[#1F2937] whitespace-pre-wrap break-all ${
                        isRemoved || isModified ? 'text-rose-600 dark:text-rose-400 font-medium' : 'text-zinc-700 dark:text-zinc-300'
                      }`}
                    >
                      {row.original !== null ? row.original : ''}
                    </td>
                    <td
                      className={`p-2 whitespace-pre-wrap break-all ${
                        isAdded || isModified ? 'text-emerald-600 dark:text-emerald-400 font-medium' : 'text-zinc-700 dark:text-zinc-300'
                      }`}
                    >
                      {row.modified !== null ? row.modified : ''}
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

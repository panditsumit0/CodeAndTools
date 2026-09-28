'use client';

import React, { useState } from 'react';
import { CopyButton } from '@/components/ui/CopyButton';
import { ErrorMessage } from '@/components/ui/ErrorMessage';
import { Regex, Sparkles, BookOpen } from 'lucide-react';

interface MatchItem {
  index: number;
  match: string;
  groups: string[];
}

export function RegexTesterTool() {
  const [pattern, setPattern] = useState<string>('([a-zA-Z0-9._%+-]+)@([a-zA-Z0-9.-]+\\.[a-zA-Z]{2,})');
  const [flags, setFlags] = useState<{ g: boolean; i: boolean; m: boolean; s: boolean; u: boolean }>({
    g: true,
    i: true,
    m: false,
    s: false,
    u: false,
  });
  const [testString, setTestString] = useState<string>(
    'Contact our engineering team at support@codeandtools.dev or security-reports@codeandtools.dev for inquiries.'
  );

  const flagString = Object.entries(flags)
    .filter(([, active]) => active)
    .map(([flag]) => flag)
    .join('');

  // Evaluate matches
  let error: string | null = null;
  const matches: MatchItem[] = [];
  let highlightedNodes: React.ReactNode = null;

  try {
    if (pattern) {
      const reg = new RegExp(pattern, flagString);

      if (flags.g) {
        let m: RegExpExecArray | null;
        let infiniteLoopGuard = 0;

        while ((m = reg.exec(testString)) !== null && infiniteLoopGuard < 500) {
          infiniteLoopGuard++;
          matches.push({
            index: m.index,
            match: m[0],
            groups: m.slice(1),
          });
          if (m[0].length === 0) {
            reg.lastIndex++;
          }
        }
      } else {
        const m = reg.exec(testString);
        if (m) {
          matches.push({
            index: m.index,
            match: m[0],
            groups: m.slice(1),
          });
        }
      }

      // Build highlighted nodes
      if (matches.length > 0) {
        const elements: React.ReactNode[] = [];
        let cursor = 0;

        matches.forEach((item, idx) => {
          if (item.index > cursor) {
            elements.push(
              <span key={`text-${cursor}`}>
                {testString.substring(cursor, item.index)}
              </span>
            );
          }

          elements.push(
            <mark
              key={`match-${idx}`}
              className="bg-blue-500/25 dark:bg-blue-500/35 text-blue-950 dark:text-blue-100 border border-blue-500/40 rounded px-1 font-semibold mx-0.5"
              title={`Match #${idx + 1}`}
            >
              {item.match}
            </mark>
          );
          cursor = item.index + item.match.length;
        });

        if (cursor < testString.length) {
          elements.push(
            <span key={`text-end`}>{testString.substring(cursor)}</span>
          );
        }

        highlightedNodes = elements;
      } else {
        highlightedNodes = <span>{testString}</span>;
      }
    }
  } catch (err: unknown) {
    if (err instanceof Error) {
      error = err.message;
    } else {
      error = 'Invalid regular expression.';
    }
  }

  const presets = [
    { label: 'Email', pattern: '([a-zA-Z0-9._%+-]+)@([a-zA-Z0-9.-]+\\.[a-zA-Z]{2,})', test: 'Email: dev@devkit.local and team@company.org' },
    { label: 'URL', pattern: 'https?:\\/\\/[\\w\\.-]+(?:\\.[\\w\\.-]+)+[\\w\\-\\._~:/?#[\\]@!\\$&\'\\(\\)\\*\\+,;=.]+', test: 'Visit https://codeandtools.dev or http://localhost:3000/docs for details.' },
    { label: 'IPv4', pattern: '\\b(?:\\d{1,3}\\.){3}\\d{1,3}\\b', test: 'DNS servers: 8.8.8.8, 1.1.1.1, and 192.168.1.1.' },
    { label: 'Hex Color', pattern: '#([a-fA-F0-9]{6}|[a-fA-F0-9]{3})', test: 'Colors: #10B981, #0f172a, and #fff.' },
    { label: 'ISO Date', pattern: '\\d{4}-\\d{2}-\\d{2}', test: 'Releases: 2026-09-26, 2026-10-15, and 2026-12-01.' },
  ];

  const applyPreset = (preset: typeof presets[0]) => {
    setPattern(preset.pattern);
    setTestString(preset.test);
  };

  const toggleFlag = (f: keyof typeof flags) => {
    setFlags((prev) => ({ ...prev, [f]: !prev[f] }));
  };

  return (
    <div className="space-y-6">
      {/* Quick Presets Bar */}
      <div className="flex flex-wrap items-center gap-2 pb-2 text-xs">
        <span className="text-zinc-500 font-semibold flex items-center gap-1">
          <Sparkles className="w-3.5 h-3.5 text-primary" /> Presets:
        </span>
        {presets.map((p) => (
          <button
            key={p.label}
            type="button"
            onClick={() => applyPreset(p)}
            className="px-2.5 py-1 rounded-lg bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-700 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700 transition-colors"
          >
            {p.label}
          </button>
        ))}
      </div>

      {/* Regex Expression Input & Flags */}
      <div className="space-y-2">
        <label className="text-xs font-semibold text-zinc-700 dark:text-zinc-300 flex items-center justify-between">
          <span className="flex items-center gap-1.5">
            <Regex className="w-4 h-4 text-primary" /> Regular Expression
          </span>
          <span className="font-mono text-zinc-400">/{pattern}/{flagString}</span>
        </label>

        <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-2">
          {/* Pattern input with slashes */}
          <div className="flex-1 flex items-center rounded-xl border border-zinc-200 dark:border-[#1F2937] bg-zinc-50 dark:bg-[#0B111A] px-3 py-2 font-mono-code text-sm focus-within:ring-2 focus-within:ring-primary/40 focus-within:border-primary">
            <span className="text-zinc-400 select-none pr-1">/</span>
            <input
              type="text"
              value={pattern}
              onChange={(e) => setPattern(e.target.value)}
              placeholder="e.g. ([a-z]+)@([a-z]+)"
              className="flex-1 bg-transparent text-zinc-900 dark:text-zinc-100 focus:outline-none"
            />
            <span className="text-zinc-400 select-none pl-1">/</span>
          </div>

          {/* Flags Buttons */}
          <div className="flex items-center gap-1 rounded-xl border border-zinc-200 dark:border-[#1F2937] bg-zinc-100 dark:bg-[#0D1117] p-1">
            {(['g', 'i', 'm', 's', 'u'] as const).map((flag) => {
              const active = flags[flag];
              const descriptions: Record<string, string> = {
                g: 'Global (don\'t return after first match)',
                i: 'Case-insensitive',
                m: 'Multiline (^ and $ match each line)',
                s: 'Dot matches newline (dotAll)',
                u: 'Unicode support',
              };
              return (
                <button
                  key={flag}
                  type="button"
                  onClick={() => toggleFlag(flag)}
                  title={descriptions[flag]}
                  className={`w-7 h-7 rounded-lg text-xs font-mono font-bold transition-colors ${
                    active
                      ? 'bg-primary text-primary-foreground shadow-xs'
                      : 'text-zinc-500 hover:text-zinc-900 dark:hover:text-white'
                  }`}
                >
                  {flag}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      {error && <ErrorMessage type="error" message={error} />}

      {/* Test String Input */}
      <div className="space-y-2">
        <div className="flex items-center justify-between text-xs font-semibold text-zinc-700 dark:text-zinc-300">
          <span>Test String</span>
          <span className="text-primary">
            {matches.length} {matches.length === 1 ? 'match' : 'matches'} found
          </span>
        </div>

        <div className="rounded-xl border border-zinc-200 dark:border-[#1F2937] bg-zinc-50 dark:bg-[#0B111A] overflow-hidden focus-within:ring-2 focus-within:ring-primary/40 focus-within:border-primary">
          <textarea
            value={testString}
            onChange={(e) => setTestString(e.target.value)}
            placeholder="Enter test text to match against..."
            rows={5}
            spellCheck={false}
            className="w-full p-3.5 font-mono-code text-xs sm:text-sm bg-transparent text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-400 focus:outline-none resize-y leading-relaxed"
          />
        </div>
      </div>

      {/* Live Highlighted Preview */}
      <div className="space-y-2">
        <label className="text-xs font-semibold text-zinc-700 dark:text-zinc-300">
          Live Match Highlighting
        </label>
        <div className="p-4 rounded-xl border border-zinc-200 dark:border-[#1F2937] bg-white dark:bg-[#0D1117]/80 font-mono-code text-xs sm:text-sm text-zinc-800 dark:text-zinc-200 whitespace-pre-wrap leading-loose overflow-x-auto min-h-[60px]">
          {highlightedNodes}
        </div>
      </div>

      {/* Capturing Groups Table */}
      {matches.length > 0 && (
        <div className="space-y-2.5">
          <h4 className="text-xs font-bold text-zinc-800 dark:text-zinc-200">
            Match Breakdown & Capturing Groups ({matches.length})
          </h4>
          <div className="overflow-x-auto rounded-xl border border-zinc-200 dark:border-[#1F2937] bg-white dark:bg-[#0D1117]">
            <table className="w-full text-left text-xs font-mono-code">
              <thead className="bg-zinc-100 dark:bg-zinc-800/80 text-zinc-700 dark:text-zinc-300 border-b border-zinc-200 dark:border-[#1F2937]">
                <tr>
                  <th className="py-2.5 px-3">#</th>
                  <th className="py-2.5 px-3">Index</th>
                  <th className="py-2.5 px-3">Full Match</th>
                  <th className="py-2.5 px-3">Capturing Groups</th>
                  <th className="py-2.5 px-3 text-right">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-zinc-200 dark:divide-zinc-800 text-zinc-800 dark:text-zinc-200">
                {matches.map((item, idx) => (
                  <tr key={idx} className="hover:bg-zinc-50 dark:hover:bg-zinc-800/40">
                    <td className="py-2.5 px-3 text-zinc-400 font-bold">{idx + 1}</td>
                    <td className="py-2.5 px-3 text-zinc-500">{item.index}</td>
                    <td className="py-2.5 px-3 font-semibold text-primary">
                      {item.match}
                    </td>
                    <td className="py-2.5 px-3">
                      {item.groups.length > 0 ? (
                        <div className="flex flex-wrap gap-1.5">
                          {item.groups.map((grp, gIdx) => (
                            <span
                              key={gIdx}
                              className="px-2 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 text-[11px] border border-zinc-200 dark:border-zinc-700"
                            >
                              ${gIdx + 1}: &ldquo;{grp}&rdquo;
                            </span>
                          ))}
                        </div>
                      ) : (
                        <span className="text-zinc-400 italic">None</span>
                      )}
                    </td>
                    <td className="py-2.5 px-3 text-right">
                      <CopyButton text={item.match} label="Copy Match" size="sm" />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      )}

      {/* Regex Cheat Sheet */}
      <div className="p-4 rounded-2xl border border-zinc-200 dark:border-[#1F2937] bg-zinc-50 dark:bg-[#0B111A]/60 space-y-3">
        <div className="flex items-center gap-2 text-xs font-bold text-zinc-900 dark:text-zinc-100">
          <BookOpen className="w-4 h-4 text-primary" />
          <span>Quick Regex Syntax Cheat Sheet</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 text-xs">
          <div className="p-2.5 rounded-lg bg-white dark:bg-[#0D1117] border border-zinc-200 dark:border-[#1F2937]/80 space-y-1">
            <span className="font-bold text-primary">Character Classes</span>
            <div className="font-mono text-zinc-600 dark:text-zinc-400 space-y-0.5">
              <div><code className="text-zinc-900 dark:text-zinc-200">.</code> Any character</div>
              <div><code className="text-zinc-900 dark:text-zinc-200">\d</code> Digit [0-9]</div>
              <div><code className="text-zinc-900 dark:text-zinc-200">\w</code> Word [a-zA-Z0-9_]</div>
              <div><code className="text-zinc-900 dark:text-zinc-200">\s</code> Whitespace</div>
            </div>
          </div>

          <div className="p-2.5 rounded-lg bg-white dark:bg-[#0D1117] border border-zinc-200 dark:border-[#1F2937]/80 space-y-1">
            <span className="font-bold text-primary">Quantifiers</span>
            <div className="font-mono text-zinc-600 dark:text-zinc-400 space-y-0.5">
              <div><code className="text-zinc-900 dark:text-zinc-200">*</code> 0 or more</div>
              <div><code className="text-zinc-900 dark:text-zinc-200">+</code> 1 or more</div>
              <div><code className="text-zinc-900 dark:text-zinc-200">?</code> 0 or 1 (optional)</div>
              <div><code className="text-zinc-900 dark:text-zinc-200">{`{n,m}`}</code> Between n and m</div>
            </div>
          </div>

          <div className="p-2.5 rounded-lg bg-white dark:bg-[#0D1117] border border-zinc-200 dark:border-[#1F2937]/80 space-y-1">
            <span className="font-bold text-primary">Anchors & Groups</span>
            <div className="font-mono text-zinc-600 dark:text-zinc-400 space-y-0.5">
              <div><code className="text-zinc-900 dark:text-zinc-200">^</code> Start of line</div>
              <div><code className="text-zinc-900 dark:text-zinc-200">$</code> End of line</div>
              <div><code className="text-zinc-900 dark:text-zinc-200">(abc)</code> Capturing group</div>
              <div><code className="text-zinc-900 dark:text-zinc-200">(?:abc)</code> Non-capturing</div>
            </div>
          </div>

          <div className="p-2.5 rounded-lg bg-white dark:bg-[#0D1117] border border-zinc-200 dark:border-[#1F2937]/80 space-y-1">
            <span className="font-bold text-primary">Flags</span>
            <div className="font-mono text-zinc-600 dark:text-zinc-400 space-y-0.5">
              <div><code className="text-zinc-900 dark:text-zinc-200">g</code> Global match</div>
              <div><code className="text-zinc-900 dark:text-zinc-200">i</code> Case insensitive</div>
              <div><code className="text-zinc-900 dark:text-zinc-200">m</code> Multiline</div>
              <div><code className="text-zinc-900 dark:text-zinc-200">s</code> Dot matches \n</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

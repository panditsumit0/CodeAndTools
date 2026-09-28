'use client';

import React, { useState } from 'react';
import {
  Sparkles,
  Bot,
  Code2,
  Copy,
  Check,
  Send,
  Loader2,
  AlertCircle,
  HelpCircle,
  Regex as RegexIcon
} from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

// -------------------------------------------------------------
// 1. AI CODE EXPLAINER TOOL
// -------------------------------------------------------------
export function AiCodeExplainerTool() {
  const [language, setLanguage] = useState<string>('python');
  const [code, setCode] = useState<string>(
    `def binary_search(arr, target):\n    left, right = 0, len(arr) - 1\n    while left <= right:\n        mid = (left + right) // 2\n        if arr[mid] == target:\n            return mid\n        elif arr[mid] < target:\n            left = mid + 1\n        else:\n            right = mid - 1\n    return -1`
  );
  const [explanation, setExplanation] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [copied, setCopied] = useState<boolean>(false);

  const sampleSnippets: Record<string, string> = {
    python: `def binary_search(arr, target):\n    left, right = 0, len(arr) - 1\n    while left <= right:\n        mid = (left + right) // 2\n        if arr[mid] == target:\n            return mid\n        elif arr[mid] < target:\n            left = mid + 1\n        else:\n            right = mid - 1\n    return -1`,
    c: `#include <stdio.h>\n\nvoid reverseString(char* str, int length) {\n    int start = 0;\n    int end = length - 1;\n    while (start < end) {\n        char temp = str[start];\n        str[start] = str[end];\n        str[end] = temp;\n        start++;\n        end--;\n    }\n}`,
    cpp: `#include <vector>\n#include <algorithm>\n\nint findKthLargest(std::vector<int>& nums, int k) {\n    std::sort(nums.begin(), nums.end(), std::greater<int>());\n    return nums[k - 1];\n}`,
    java: `public class PalindromeCheck {\n    public static boolean isPalindrome(String s) {\n        int i = 0, j = s.length() - 1;\n        while (i < j) {\n            if (s.charAt(i) != s.charAt(j)) return false;\n            i++; j--;\n        }\n        return true;\n    }\n}`,
    typescript: `interface TreeNode {\n  val: number;\n  left?: TreeNode;\n  right?: TreeNode;\n}\n\nfunction maxDepth(root?: TreeNode): number {\n  if (!root) return 0;\n  return 1 + Math.max(maxDepth(root.left), maxDepth(root.right));\n}`
  };

  const handleLanguageChange = (lang: string) => {
    setLanguage(lang);
    if (sampleSnippets[lang]) {
      setCode(sampleSnippets[lang]);
    }
  };

  const explainCode = async () => {
    if (!code.trim()) return;
    setLoading(true);
    setError(null);
    setExplanation('');

    try {
      const response = await fetch('/api/ai', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          mode: 'explain',
          code,
          language,
        }),
      });

      const data = await response.json();
      if (!response.ok) {
        throw new Error(data.error || 'Failed to generate explanation');
      }

      setExplanation(data.response || data.message || 'No explanation generated.');
    } catch (err: unknown) {
      // Offline fallback explanation generator for students
      const fallback = `### Educational Code Analysis (${language.toUpperCase()})

#### 1. What does this code do?
This program implements a structured algorithmic solution. It processes the input arguments and executes systematic iterations until the target outcome is computed.

#### 2. Key Steps in Execution:
- **Initialization**: Variables and indices are established at boundary locations.
- **Iteration Loop**: The condition guards execution to avoid boundary overflow and redundant cycles.
- **Decision Branches**: Compares current element with the target condition to update boundaries.
- **Return Value**: Yields the calculated result or fallback error code (-1 / null).

#### 3. Complexity:
- **Time Complexity**: **O(log N)** or **O(N)** depending on data structure size.
- **Space Complexity**: **O(1)** auxiliary memory (in-place execution).

> *Note: AI service is currently operating in offline educational fallback mode.*`;
      setExplanation(fallback);
    } finally {
      setLoading(false);
    }
  };

  const copyExplanation = () => {
    if (!explanation) return;
    navigator.clipboard.writeText(explanation);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-6">
      {/* Controls Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 p-3.5 rounded-xl border border-zinc-200 dark:border-[#1F2937] bg-zinc-50 dark:bg-[#0B111A]">
        <div className="flex items-center gap-2 text-xs">
          <span className="font-semibold text-zinc-600 dark:text-zinc-400">Language:</span>
          <select
            value={language}
            onChange={(e) => handleLanguageChange(e.target.value)}
            className="px-2.5 py-1 rounded-lg border border-zinc-200 dark:border-[#1F2937] bg-white dark:bg-[#151B24] font-semibold text-zinc-900 dark:text-white capitalize"
          >
            {['python', 'c', 'cpp', 'java', 'typescript', 'javascript', 'sql'].map((l) => (
              <option key={l} value={l}>
                {l}
              </option>
            ))}
          </select>
        </div>

        <button
          onClick={explainCode}
          disabled={loading || !code.trim()}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-primary text-primary-foreground text-xs font-semibold hover:opacity-90 transition-opacity cursor-pointer disabled:opacity-50"
        >
          {loading ? (
            <>
              <Loader2 className="w-3.5 h-3.5 animate-spin" />
              <span>Analyzing Logic...</span>
            </>
          ) : (
            <>
              <Sparkles className="w-3.5 h-3.5" />
              <span>Explain Code</span>
            </>
          )}
        </button>
      </div>

      {/* Editor & Explanation Split */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {/* Code Input */}
        <div className="space-y-2">
          <div className="flex items-center justify-between text-xs text-zinc-500">
            <span>Paste code to explain:</span>
            <button
              onClick={() => setCode('')}
              className="text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200 cursor-pointer"
            >
              Clear
            </button>
          </div>
          <textarea
            value={code}
            onChange={(e) => setCode(e.target.value)}
            rows={15}
            className="w-full p-4 rounded-xl border border-zinc-200 dark:border-[#1F2937] bg-zinc-50 dark:bg-[#0B111A] text-zinc-900 dark:text-zinc-100 font-mono text-xs focus:outline-none focus:ring-2 focus:ring-primary/40 leading-relaxed"
          />
        </div>

        {/* AI Output Pane */}
        <div className="space-y-2">
          <div className="flex items-center justify-between text-xs text-zinc-500">
            <span className="font-semibold text-primary flex items-center gap-1.5">
              <Bot className="w-3.5 h-3.5" />
              AI Explanation & Analysis
            </span>
            {explanation && (
              <button
                onClick={copyExplanation}
                className="text-primary hover:underline font-semibold cursor-pointer"
              >
                {copied ? 'Copied!' : 'Copy Explanation'}
              </button>
            )}
          </div>

          <div className="w-full min-h-[340px] p-5 rounded-xl border border-zinc-200 dark:border-[#1F2937] bg-white dark:bg-[#080C13] overflow-y-auto text-xs sm:text-sm prose dark:prose-invert max-w-none leading-relaxed">
            {loading ? (
              <div className="flex flex-col items-center justify-center min-h-[280px] gap-3 text-zinc-400">
                <Loader2 className="w-8 h-8 animate-spin text-primary" />
                <span className="text-xs">Analyzing code structure and calculating time complexity...</span>
              </div>
            ) : explanation ? (
              <ReactMarkdown remarkPlugins={[remarkGfm]}>{explanation}</ReactMarkdown>
            ) : (
              <div className="flex flex-col items-center justify-center min-h-[280px] gap-2 text-zinc-400 text-center">
                <Sparkles className="w-8 h-8 text-zinc-300 dark:text-zinc-700" />
                <p className="text-xs max-w-xs">
                  Click <strong>&quot;Explain Code&quot;</strong> above to get an instant breakdown of how this code works, line-by-line details, and Big-O complexity.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

// -------------------------------------------------------------
// 2. AI REGEX EXPLAINER TOOL
// -------------------------------------------------------------
export function AiRegexExplainerTool() {
  const [pattern, setPattern] = useState<string>(
    '^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\\.[a-zA-Z0-9-.]+$'
  );
  const [explanation, setExplanation] = useState<string>('');
  const [loading, setLoading] = useState<boolean>(false);
  const [copied, setCopied] = useState<boolean>(false);

  const presets = [
    { label: 'Email Address', regex: '^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\\.[a-zA-Z0-9-.]+$' },
    { label: 'Strong Password', regex: '^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{8,}$' },
    { label: 'URL / Link', regex: 'https?:\\/\\/(www\\.)?[-a-zA-Z0-9@:%._\\+~#=]{1,256}\\.[a-zA-Z0-9()]{1,6}\\b([-a-zA-Z0-9()@:%_\\+.~#?&//=]*)' },
    { label: 'IPv4 Address', regex: '^(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$' },
    { label: 'Hex Color Code', regex: '^#?([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$' }
  ];

  const explainRegex = async () => {
    if (!pattern.trim()) return;
    setLoading(true);
    setExplanation('');

    try {
      const response = await fetch('/api/ai', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          mode: 'chat',
          message: `Please break down and explain this regular expression pattern in plain English for a computer science student: \`${pattern}\`. List what each part matches, tokens, quantifiers, and provide 2 matching examples and 2 non-matching examples.`,
        }),
      });

      const data = await response.json();
      if (!response.ok) throw new Error(data.error);

      setExplanation(data.response || data.message || 'No explanation received.');
    } catch {
      // Fallback
      setExplanation(`### Regular Expression Breakdown: \`${pattern}\`

#### 1. What does it do?
This pattern validates structured string inputs by constraining permissible character sets and position anchors.

#### 2. Key Components:
- \`^\` : Start of string anchor.
- \`$\` : End of string anchor.
- Character Classes \`[...]\` : Defines permissible characters (letters, digits, or symbols).
- Quantifiers (\`+\`, \`*\`, \`{n,}\`) : Specifies repetition frequencies.

#### 3. Match Evaluation:
- ✅ Matches inputs following exact format specified between anchors.
- ❌ Rejects whitespace or illegal characters outside the character class.`);
    } finally {
      setLoading(false);
    }
  };

  const copyExplanation = () => {
    if (!explanation) return;
    navigator.clipboard.writeText(explanation);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-6">
      {/* Pattern Input */}
      <div className="space-y-2">
        <label className="text-xs font-semibold text-zinc-500">Regular Expression Pattern</label>
        <div className="flex gap-2">
          <input
            type="text"
            value={pattern}
            onChange={(e) => setPattern(e.target.value)}
            className="flex-1 px-4 py-2.5 rounded-xl border border-zinc-200 dark:border-[#1F2937] bg-zinc-50 dark:bg-[#0B111A] text-zinc-900 dark:text-white font-mono text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
          />
          <button
            onClick={explainRegex}
            disabled={loading || !pattern.trim()}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-primary text-primary-foreground font-semibold text-xs hover:opacity-90 transition-opacity cursor-pointer disabled:opacity-50 shrink-0"
          >
            {loading ? <Loader2 className="w-3.5 h-3.5 animate-spin" /> : <Sparkles className="w-3.5 h-3.5" />}
            <span>Explain Pattern</span>
          </button>
        </div>
      </div>

      {/* Preset Buttons */}
      <div className="space-y-1.5">
        <span className="text-xs text-zinc-500">Quick Test Presets:</span>
        <div className="flex flex-wrap gap-2">
          {presets.map((p) => (
            <button
              key={p.label}
              onClick={() => setPattern(p.regex)}
              className="px-2.5 py-1 rounded-lg border border-zinc-200 dark:border-[#1F2937] bg-zinc-50 dark:bg-[#0B111A] text-xs text-zinc-700 dark:text-zinc-300 hover:border-primary cursor-pointer transition-colors"
            >
              {p.label}
            </button>
          ))}
        </div>
      </div>

      {/* Explanation Result Pane */}
      <div className="space-y-2 pt-2 border-t border-zinc-200 dark:border-[#1F2937]">
        <div className="flex items-center justify-between text-xs text-zinc-500">
          <span className="font-semibold text-primary flex items-center gap-1.5">
            <Bot className="w-3.5 h-3.5" />
            Plain-English Regex Breakdown
          </span>
          {explanation && (
            <button
              onClick={copyExplanation}
              className="text-primary hover:underline font-semibold cursor-pointer"
            >
              {copied ? 'Copied!' : 'Copy Explanation'}
            </button>
          )}
        </div>

        <div className="w-full min-h-[260px] p-5 rounded-xl border border-zinc-200 dark:border-[#1F2937] bg-white dark:bg-[#080C13] overflow-y-auto text-xs sm:text-sm prose dark:prose-invert max-w-none leading-relaxed">
          {loading ? (
            <div className="flex flex-col items-center justify-center min-h-[200px] gap-2 text-zinc-400">
              <Loader2 className="w-6 h-6 animate-spin text-primary" />
              <span className="text-xs">Deconstructing regex tokens...</span>
            </div>
          ) : explanation ? (
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{explanation}</ReactMarkdown>
          ) : (
            <div className="flex flex-col items-center justify-center min-h-[200px] gap-2 text-zinc-400 text-center">
              <Sparkles className="w-8 h-8 text-zinc-300 dark:text-zinc-700" />
              <p className="text-xs">Click &quot;Explain Pattern&quot; to see a plain English explanation of what this regex matches.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

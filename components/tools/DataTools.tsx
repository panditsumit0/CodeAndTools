'use client';

import React, { useState, useMemo } from 'react';
import {
  Check,
  Copy,
  Download,
  AlertCircle,
  FileSpreadsheet,
  FileCode,
  Sparkles,
  RefreshCw,
  Table as TableIcon
} from 'lucide-react';

// -------------------------------------------------------------
// 1. JSON VALIDATOR TOOL
// -------------------------------------------------------------
export function JsonValidatorTool() {
  const [jsonInput, setJsonInput] = useState<string>(
    '{\n  "name": "Code&Tools",\n  "type": "Developer Platform",\n  "openSource": true,\n  "toolsCount": 50,\n  "languages": ["C", "C++", "Java", "Python", "TypeScript"]\n}'
  );
  const [copied, setCopied] = useState<boolean>(false);

  const validationResult = useMemo(() => {
    if (!jsonInput.trim()) {
      return { isValid: null, error: null, formatted: '', stats: null };
    }
    try {
      const parsed = JSON.parse(jsonInput);
      const formatted = JSON.stringify(parsed, null, 2);
      const isArray = Array.isArray(parsed);
      const keyCount = typeof parsed === 'object' && parsed !== null ? Object.keys(parsed).length : 0;
      return {
        isValid: true,
        error: null,
        formatted,
        stats: {
          type: isArray ? 'Array' : typeof parsed,
          keys: keyCount,
          bytes: new Blob([jsonInput]).size,
        },
      };
    } catch (err: unknown) {
      const errorMsg = err instanceof Error ? err.message : String(err);
      return {
        isValid: false,
        error: errorMsg,
        formatted: '',
        stats: null,
      };
    }
  }, [jsonInput]);

  const loadBrokenSample = () => {
    setJsonInput('{\n  "title": "Broken JSON",\n  "missingQuote": value,\n  "trailingComma": true,\n}');
  };

  const copyFormatted = () => {
    if (!validationResult.formatted) return;
    navigator.clipboard.writeText(validationResult.formatted);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-6">
      {/* Validation Status Banner */}
      {validationResult.isValid === true && (
        <div className="p-4 rounded-xl border border-emerald-500/25 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-between">
          <div className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold">
            <Check className="w-5 h-5 text-emerald-500 shrink-0" />
            <span>Valid JSON Document! Structure conforms strictly to RFC 8259.</span>
          </div>
          {validationResult.stats && (
            <div className="hidden sm:flex items-center gap-3 text-xs text-emerald-700 dark:text-emerald-300 font-medium">
              <span>Type: {validationResult.stats.type}</span>
              <span>•</span>
              <span>{validationResult.stats.bytes} bytes</span>
            </div>
          )}
        </div>
      )}

      {validationResult.isValid === false && (
        <div className="p-4 rounded-xl border border-rose-500/25 bg-rose-500/10 text-rose-600 dark:text-rose-400 space-y-1.5">
          <div className="flex items-center gap-2.5 text-xs sm:text-sm font-semibold">
            <AlertCircle className="w-5 h-5 text-rose-500 shrink-0" />
            <span>Invalid JSON Syntax Detected:</span>
          </div>
          <p className="font-mono text-xs pl-7 text-rose-700 dark:text-rose-300 break-words">
            {validationResult.error}
          </p>
        </div>
      )}

      {/* Editor & Actions */}
      <div className="space-y-2">
        <div className="flex items-center justify-between text-xs text-zinc-500">
          <span>JSON Input:</span>
          <div className="flex items-center gap-2">
            <button
              onClick={loadBrokenSample}
              className="text-amber-600 dark:text-amber-400 hover:underline cursor-pointer"
            >
              Test Broken Sample
            </button>
            <span>•</span>
            <button
              onClick={() => setJsonInput('')}
              className="text-zinc-500 hover:text-zinc-700 dark:hover:text-zinc-300 cursor-pointer"
            >
              Clear
            </button>
          </div>
        </div>
        <textarea
          value={jsonInput}
          onChange={(e) => setJsonInput(e.target.value)}
          placeholder="Paste JSON string here to validate syntax..."
          rows={14}
          className={`w-full p-4 rounded-xl border bg-zinc-50 dark:bg-[#0B111A] text-zinc-900 dark:text-zinc-100 font-mono text-xs sm:text-sm focus:outline-none focus:ring-2 leading-relaxed ${
            validationResult.isValid === false
              ? 'border-rose-500/50 focus:ring-rose-500/30'
              : 'border-zinc-200 dark:border-[#1F2937] focus:ring-primary/40'
          }`}
        />
      </div>

      {validationResult.isValid && (
        <div className="flex justify-end">
          <button
            onClick={copyFormatted}
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-primary text-primary-foreground text-xs font-semibold hover:opacity-90 transition-opacity cursor-pointer"
          >
            {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copied ? 'Copied Formatted JSON' : 'Copy Formatted JSON'}</span>
          </button>
        </div>
      )}
    </div>
  );
}

// -------------------------------------------------------------
// 2. JSON MINIFIER TOOL
// -------------------------------------------------------------
export function JsonMinifierTool() {
  const [input, setInput] = useState<string>(
    '{\n  "service": "Code&Tools",\n  "status": "online",\n  "features": [\n    "Formatter",\n    "Minifier",\n    "Converter"\n  ]\n}'
  );
  const [copied, setCopied] = useState<boolean>(false);

  const minifiedResult = useMemo(() => {
    if (!input.trim()) return { minified: '', error: null, origSize: 0, minSize: 0, percentSaved: 0 };
    try {
      const parsed = JSON.parse(input);
      const minified = JSON.stringify(parsed);
      const origSize = new Blob([input]).size;
      const minSize = new Blob([minified]).size;
      const percentSaved = origSize > 0 ? Math.round(((origSize - minSize) / origSize) * 100) : 0;
      return { minified, error: null, origSize, minSize, percentSaved };
    } catch (err: unknown) {
      return { minified: '', error: err instanceof Error ? err.message : String(err), origSize: 0, minSize: 0, percentSaved: 0 };
    }
  }, [input]);

  const copyMinified = () => {
    if (!minifiedResult.minified) return;
    navigator.clipboard.writeText(minifiedResult.minified);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-6">
      {/* Savings Metric Header */}
      {minifiedResult.minified && (
        <div className="grid grid-cols-3 gap-3">
          <div className="p-3.5 rounded-xl border border-zinc-200 dark:border-[#1F2937] bg-zinc-50 dark:bg-[#0B111A]">
            <span className="text-xs text-zinc-500">Original Size</span>
            <p className="text-lg font-bold text-zinc-900 dark:text-white mt-0.5">{minifiedResult.origSize} B</p>
          </div>
          <div className="p-3.5 rounded-xl border border-zinc-200 dark:border-[#1F2937] bg-zinc-50 dark:bg-[#0B111A]">
            <span className="text-xs text-zinc-500">Minified Size</span>
            <p className="text-lg font-bold text-zinc-900 dark:text-white mt-0.5">{minifiedResult.minSize} B</p>
          </div>
          <div className="p-3.5 rounded-xl border border-zinc-200 dark:border-[#1F2937] bg-zinc-50 dark:bg-[#0B111A]">
            <span className="text-xs text-zinc-500">Space Saved</span>
            <p className="text-lg font-bold text-emerald-600 dark:text-emerald-400 mt-0.5">{minifiedResult.percentSaved}%</p>
          </div>
        </div>
      )}

      {minifiedResult.error && (
        <div className="p-3.5 rounded-xl border border-rose-500/25 bg-rose-500/10 text-rose-600 dark:text-rose-400 text-xs font-mono">
          Syntax Error: {minifiedResult.error}
        </div>
      )}

      {/* Editor & Output */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <label className="text-xs font-semibold text-zinc-500">Input Formatted JSON</label>
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            rows={10}
            className="w-full p-3.5 rounded-xl border border-zinc-200 dark:border-[#1F2937] bg-zinc-50 dark:bg-[#0B111A] text-zinc-900 dark:text-zinc-100 font-mono text-xs focus:outline-none focus:ring-2 focus:ring-primary/40 leading-relaxed"
          />
        </div>
        <div className="space-y-2">
          <div className="flex items-center justify-between text-xs text-zinc-500">
            <span className="font-semibold">Compact Minified JSON</span>
            <button
              onClick={copyMinified}
              disabled={!minifiedResult.minified}
              className="text-primary hover:underline font-semibold cursor-pointer disabled:opacity-50"
            >
              {copied ? 'Copied!' : 'Copy Result'}
            </button>
          </div>
          <textarea
            readOnly
            value={minifiedResult.minified}
            rows={10}
            className="w-full p-3.5 rounded-xl border border-zinc-200 dark:border-[#1F2937] bg-zinc-100/50 dark:bg-[#080C13] text-zinc-900 dark:text-zinc-100 font-mono text-xs focus:outline-none leading-relaxed select-all"
          />
        </div>
      </div>
    </div>
  );
}

// -------------------------------------------------------------
// 3. JSON TO CSV CONVERTER
// -------------------------------------------------------------
export function JsonToCsvTool() {
  const [jsonInput, setJsonInput] = useState<string>(
    JSON.stringify(
      [
        { id: 1, name: "Aarav Sharma", role: "Frontend Dev", location: "Bangalore", salary: 85000 },
        { id: 2, name: "Priya Nair", role: "AI Engineer", location: "Hyderabad", salary: 92000 },
        { id: 3, name: "Vikram Das", role: "DevOps Lead", location: "Pune", salary: 88000 }
      ],
      null,
      2
    )
  );
  const [copied, setCopied] = useState<boolean>(false);

  const { csvOutput, error, parsedData } = useMemo(() => {
    if (!jsonInput.trim()) return { csvOutput: '', error: null, parsedData: [] };
    try {
      let data = JSON.parse(jsonInput);
      if (!Array.isArray(data)) {
        if (typeof data === 'object' && data !== null) {
          data = [data]; // wrap single object into array
        } else {
          return { csvOutput: '', error: 'JSON root must be an array of objects or a single object.', parsedData: [] };
        }
      }

      if (data.length === 0) return { csvOutput: '', error: null, parsedData: [] };

      // Collect all distinct keys
      const headers: string[] = Array.from(
        new Set<string>(data.flatMap((item: Record<string, unknown>) => Object.keys(item || {})))
      );

      const csvRows = [
        headers.join(','),
        ...data.map((row: Record<string, unknown>) =>
          headers
            .map((h: string) => {
              const val = row[h];
              if (val === null || val === undefined) return '';
              const str = typeof val === 'object' ? JSON.stringify(val) : String(val);
              // Escape quotes
              if (str.includes(',') || str.includes('"') || str.includes('\n')) {
                return `"${str.replace(/"/g, '""')}"`;
              }
              return str;
            })
            .join(',')
        ),
      ];

      return { csvOutput: csvRows.join('\n'), error: null, parsedData: data };
    } catch (err: unknown) {
      return { csvOutput: '', error: err instanceof Error ? err.message : String(err), parsedData: [] };
    }
  }, [jsonInput]);

  const copyCsv = () => {
    if (!csvOutput) return;
    navigator.clipboard.writeText(csvOutput);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const downloadCsv = () => {
    if (!csvOutput) return;
    const blob = new Blob([csvOutput], { type: 'text/csv;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'data.csv';
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="space-y-6">
      {error && (
        <div className="p-3.5 rounded-xl border border-rose-500/25 bg-rose-500/10 text-rose-600 dark:text-rose-400 text-xs font-mono">
          {error}
        </div>
      )}

      {/* Editor & Output Split */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="space-y-2">
          <label className="text-xs font-semibold text-zinc-500">JSON Input (Array of Objects)</label>
          <textarea
            value={jsonInput}
            onChange={(e) => setJsonInput(e.target.value)}
            rows={10}
            className="w-full p-3.5 rounded-xl border border-zinc-200 dark:border-[#1F2937] bg-zinc-50 dark:bg-[#0B111A] text-zinc-900 dark:text-zinc-100 font-mono text-xs focus:outline-none focus:ring-2 focus:ring-primary/40 leading-relaxed"
          />
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between text-xs text-zinc-500">
            <span className="font-semibold">Generated CSV</span>
            <div className="flex items-center gap-2">
              <button
                onClick={downloadCsv}
                disabled={!csvOutput}
                className="text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white font-medium cursor-pointer disabled:opacity-50"
              >
                Download .csv
              </button>
              <span>•</span>
              <button
                onClick={copyCsv}
                disabled={!csvOutput}
                className="text-primary hover:underline font-semibold cursor-pointer disabled:opacity-50"
              >
                {copied ? 'Copied!' : 'Copy CSV'}
              </button>
            </div>
          </div>
          <textarea
            readOnly
            value={csvOutput}
            rows={10}
            className="w-full p-3.5 rounded-xl border border-zinc-200 dark:border-[#1F2937] bg-zinc-100/50 dark:bg-[#080C13] text-zinc-900 dark:text-zinc-100 font-mono text-xs focus:outline-none leading-relaxed select-all"
          />
        </div>
      </div>

      {/* Live Table Preview */}
      {parsedData.length > 0 && (
        <div className="rounded-xl border border-zinc-200 dark:border-[#1F2937] bg-white dark:bg-[#080C13] overflow-hidden text-xs">
          <div className="p-3 bg-zinc-50 dark:bg-[#0F1622] border-b border-zinc-200 dark:border-[#1F2937] font-semibold text-zinc-700 dark:text-zinc-300 flex items-center gap-2">
            <TableIcon className="w-4 h-4 text-emerald-500" />
            <span>Table Preview ({parsedData.length} records)</span>
          </div>
          <div className="overflow-x-auto max-h-60">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="border-b border-zinc-200 dark:border-[#1F2937] bg-zinc-50/50 dark:bg-[#0B111A] text-zinc-500 font-mono text-[11px]">
                  {Object.keys(parsedData[0] || {}).map((k) => (
                    <th key={k} className="p-2.5 font-semibold">
                      {k}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {parsedData.map((row: Record<string, unknown>, idx: number) => (
                  <tr key={idx} className="border-b border-zinc-100 dark:border-zinc-900/60 font-mono">
                    {Object.values(row).map((val, cellIdx) => (
                      <td key={cellIdx} className="p-2.5 text-zinc-800 dark:text-zinc-200">
                        {String(val ?? '')}
                      </td>
                    ))}
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

// -------------------------------------------------------------
// 4. CSV TO JSON CONVERTER
// -------------------------------------------------------------
export function CsvToJsonTool() {
  const [csvInput, setCsvInput] = useState<string>(
    `id,name,role,department,active\n101,Aman Gupta,Software Engineer,Engineering,true\n102,Sneha Roy,Product Manager,Design,true\n103,Rohan Mehta,QA Specialist,Testing,false`
  );
  const [copied, setCopied] = useState<boolean>(false);

  const { jsonOutput, error } = useMemo(() => {
    if (!csvInput.trim()) return { jsonOutput: '', error: null };
    try {
      const lines = csvInput.trim().split(/\r\n|\r|\n/).filter(Boolean);
      if (lines.length < 1) return { jsonOutput: '[]', error: null };

      // Helper to parse CSV line respecting quotes
      const parseLine = (line: string) => {
        const result = [];
        let cur = '';
        let inQuotes = false;
        for (let i = 0; i < line.length; i++) {
          const char = line[i];
          if (char === '"') {
            inQuotes = !inQuotes;
          } else if (char === ',' && !inQuotes) {
            result.push(cur.trim());
            cur = '';
          } else {
            cur += char;
          }
        }
        result.push(cur.trim());
        return result.map((item) => item.replace(/^"|"$/g, '').replace(/""/g, '"'));
      };

      const headers = parseLine(lines[0]);
      const objects = lines.slice(1).map((line) => {
        const values = parseLine(line);
        const obj: Record<string, unknown> = {};
        headers.forEach((h, idx) => {
          let val: unknown = values[idx] ?? '';
          if (val === 'true') val = true;
          else if (val === 'false') val = false;
          else if (!isNaN(Number(val)) && val !== '') val = Number(val);
          obj[h] = val;
        });
        return obj;
      });

      return { jsonOutput: JSON.stringify(objects, null, 2), error: null };
    } catch (err: unknown) {
      return { jsonOutput: '', error: err instanceof Error ? err.message : String(err) };
    }
  }, [csvInput]);

  const copyJson = () => {
    if (!jsonOutput) return;
    navigator.clipboard.writeText(jsonOutput);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const downloadJson = () => {
    if (!jsonOutput) return;
    const blob = new Blob([jsonOutput], { type: 'application/json;charset=utf-8;' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'data.json';
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="space-y-6">
      {error && (
        <div className="p-3.5 rounded-xl border border-rose-500/25 bg-rose-500/10 text-rose-600 dark:text-rose-400 text-xs font-mono">
          {error}
        </div>
      )}

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="space-y-2">
          <label className="text-xs font-semibold text-zinc-500">CSV Input</label>
          <textarea
            value={csvInput}
            onChange={(e) => setCsvInput(e.target.value)}
            rows={12}
            className="w-full p-3.5 rounded-xl border border-zinc-200 dark:border-[#1F2937] bg-zinc-50 dark:bg-[#0B111A] text-zinc-900 dark:text-zinc-100 font-mono text-xs focus:outline-none focus:ring-2 focus:ring-primary/40 leading-relaxed"
          />
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between text-xs text-zinc-500">
            <span className="font-semibold">Formatted JSON Output</span>
            <div className="flex items-center gap-2">
              <button
                onClick={downloadJson}
                disabled={!jsonOutput}
                className="text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white font-medium cursor-pointer disabled:opacity-50"
              >
                Download .json
              </button>
              <span>•</span>
              <button
                onClick={copyJson}
                disabled={!jsonOutput}
                className="text-primary hover:underline font-semibold cursor-pointer disabled:opacity-50"
              >
                {copied ? 'Copied!' : 'Copy JSON'}
              </button>
            </div>
          </div>
          <textarea
            readOnly
            value={jsonOutput}
            rows={12}
            className="w-full p-3.5 rounded-xl border border-zinc-200 dark:border-[#1F2937] bg-zinc-100/50 dark:bg-[#080C13] text-zinc-900 dark:text-zinc-100 font-mono text-xs focus:outline-none leading-relaxed select-all"
          />
        </div>
      </div>
    </div>
  );
}

// -------------------------------------------------------------
// 5. XML FORMATTER & VALIDATOR
// -------------------------------------------------------------
export function XmlFormatterTool() {
  const [xmlInput, setXmlInput] = useState<string>(
    `<?xml version="1.0" encoding="UTF-8"?><catalog><book id="bk101"><author>Gambardella, Matthew</author><title>XML Developer's Guide</title><genre>Computer</genre><price>44.95</price><publish_date>2000-10-01</publish_date></book></catalog>`
  );
  const [indentSize, setIndentSize] = useState<number>(2);
  const [copied, setCopied] = useState<boolean>(false);

  const { formattedXml, error } = useMemo(() => {
    if (!xmlInput.trim()) return { formattedXml: '', error: null };
    try {
      // Basic formatting algorithm
      let formatted = '';
      let indent = 0;
      const tab = ' '.repeat(indentSize);

      // Strip whitespace between tags
      const clean = xmlInput.replace(/>\s+</g, '><').trim();

      const regex = /(<[^>]+>)/g;
      const tokens = clean.split(regex).filter(Boolean);

      for (let i = 0; i < tokens.length; i++) {
        const token = tokens[i].trim();
        if (!token) continue;

        if (token.startsWith('</')) {
          indent = Math.max(0, indent - 1);
          formatted += tab.repeat(indent) + token + '\n';
        } else if (token.startsWith('<?') || token.startsWith('<!')) {
          formatted += tab.repeat(indent) + token + '\n';
        } else if (token.startsWith('<') && token.endsWith('/>')) {
          formatted += tab.repeat(indent) + token + '\n';
        } else if (token.startsWith('<')) {
          formatted += tab.repeat(indent) + token + '\n';
          indent++;
        } else {
          // Text content
          formatted += tab.repeat(indent) + token + '\n';
        }
      }

      return { formattedXml: formatted.trim(), error: null };
    } catch (err: unknown) {
      return { formattedXml: '', error: err instanceof Error ? err.message : String(err) };
    }
  }, [xmlInput, indentSize]);

  const copyXml = () => {
    if (!formattedXml) return;
    navigator.clipboard.writeText(formattedXml);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between p-3.5 rounded-xl border border-zinc-200 dark:border-[#1F2937] bg-zinc-50 dark:bg-[#0B111A] text-xs">
        <div className="flex items-center gap-2">
          <span>Indent spaces:</span>
          <select
            value={indentSize}
            onChange={(e) => setIndentSize(Number(e.target.value))}
            className="p-1 rounded border border-zinc-200 dark:border-[#1F2937] bg-white dark:bg-[#151B24] text-xs font-semibold"
          >
            <option value={2}>2 spaces</option>
            <option value={4}>4 spaces</option>
          </select>
        </div>
        <button
          onClick={copyXml}
          disabled={!formattedXml}
          className="text-primary hover:underline font-semibold cursor-pointer disabled:opacity-50"
        >
          {copied ? 'Copied!' : 'Copy Formatted XML'}
        </button>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="space-y-2">
          <label className="text-xs font-semibold text-zinc-500">Raw XML</label>
          <textarea
            value={xmlInput}
            onChange={(e) => setXmlInput(e.target.value)}
            rows={12}
            className="w-full p-3.5 rounded-xl border border-zinc-200 dark:border-[#1F2937] bg-zinc-50 dark:bg-[#0B111A] text-zinc-900 dark:text-zinc-100 font-mono text-xs focus:outline-none focus:ring-2 focus:ring-primary/40 leading-relaxed"
          />
        </div>

        <div className="space-y-2">
          <label className="text-xs font-semibold text-zinc-500">Formatted & Beautified XML</label>
          <textarea
            readOnly
            value={formattedXml}
            rows={12}
            className="w-full p-3.5 rounded-xl border border-zinc-200 dark:border-[#1F2937] bg-zinc-100/50 dark:bg-[#080C13] text-zinc-900 dark:text-zinc-100 font-mono text-xs focus:outline-none leading-relaxed select-all"
          />
        </div>
      </div>
    </div>
  );
}

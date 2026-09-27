'use client';

import React, { useState, useRef } from 'react';
import * as yaml from 'js-yaml';
import { CopyButton } from '@/components/ui/CopyButton';
import { DownloadButton } from '@/components/ui/DownloadButton';
import { ErrorMessage } from '@/components/ui/ErrorMessage';
import { ArrowRightLeft, Upload, Trash2 } from 'lucide-react';

export function JsonYamlTool() {
  const [direction, setDirection] = useState<'json-to-yaml' | 'yaml-to-json'>('json-to-yaml');
  const [input, setInput] = useState<string>('');
  const [output, setOutput] = useState<string>('');
  const [yamlIndent, setYamlIndent] = useState<number>(2);
  const [error, setError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const convert = (source: string, dir: 'json-to-yaml' | 'yaml-to-json') => {
    if (!source.trim()) {
      setOutput('');
      setError(null);
      return;
    }

    try {
      if (dir === 'json-to-yaml') {
        const obj = JSON.parse(source);
        const yamlStr = yaml.dump(obj, { indent: yamlIndent, noRefs: true });
        setOutput(yamlStr);
        setError(null);
      } else {
        const obj = yaml.load(source);
        const jsonStr = JSON.stringify(obj, null, 2);
        setOutput(jsonStr);
        setError(null);
      }
    } catch (err: unknown) {
      if (err instanceof Error) {
        setError(`Conversion Error: ${err.message}`);
      } else {
        setError('Unable to parse input data.');
      }
      setOutput('');
    }
  };

  const handleInputChange = (val: string) => {
    setInput(val);
    convert(val, direction);
  };

  const handleSwitchDirection = () => {
    const nextDir = direction === 'json-to-yaml' ? 'yaml-to-json' : 'json-to-yaml';
    setDirection(nextDir);
    // Swap input and output if output is valid
    if (output) {
      setInput(output);
      convert(output, nextDir);
    } else {
      convert(input, nextDir);
    }
  };

  const handleClear = () => {
    setInput('');
    setOutput('');
    setError(null);
  };

  const handleLoadSample = () => {
    if (direction === 'json-to-yaml') {
      const sample = {
        apiVersion: 'apps/v1',
        kind: 'Deployment',
        metadata: {
          name: 'devkit-web',
          labels: {
            app: 'devkit',
            tier: 'frontend',
          },
        },
        spec: {
          replicas: 3,
          template: {
            metadata: { labels: { app: 'devkit' } },
            spec: {
              containers: [
                {
                  name: 'web',
                  image: 'devkit:latest',
                  ports: [{ containerPort: 3000 }],
                },
              ],
            },
          },
        },
      };
      const str = JSON.stringify(sample, null, 2);
      setInput(str);
      convert(str, 'json-to-yaml');
    } else {
      const sampleYaml = `apiVersion: v1
kind: Service
metadata:
  name: devkit-service
spec:
  type: ClusterIP
  ports:
    - port: 80
      targetPort: 3000
  selector:
    app: devkit`;
      setInput(sampleYaml);
      convert(sampleYaml, 'yaml-to-json');
    }
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (event) => {
      const content = event.target?.result as string;
      setInput(content);
      convert(content, direction);
    };
    reader.readAsText(file);
    e.target.value = '';
  };

  const isJsonToYaml = direction === 'json-to-yaml';

  return (
    <div className="space-y-4">
      {/* Top Action Bar */}
      <div className="flex flex-wrap items-center justify-between gap-3 pb-3 border-b border-zinc-200 dark:border-[#1F2937]">
        <div className="flex items-center gap-2">
          {/* Direction toggle button */}
          <button
            type="button"
            onClick={handleSwitchDirection}
            className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-primary hover:bg-blue-500 text-white text-xs sm:text-sm font-semibold shadow-sm transition-all focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary"
          >
            <ArrowRightLeft className="w-4 h-4" />
            <span>
              {isJsonToYaml ? 'JSON → YAML' : 'YAML → JSON'}
            </span>
          </button>

          {isJsonToYaml && (
            <div className="flex items-center gap-1 text-xs text-zinc-500 pl-2">
              <span>YAML Indent:</span>
              <select
                value={yamlIndent}
                onChange={(e) => {
                  const val = Number(e.target.value);
                  setYamlIndent(val);
                  if (input) {
                    try {
                      const obj = JSON.parse(input);
                      setOutput(yaml.dump(obj, { indent: val, noRefs: true }));
                    } catch {
                      // ignore
                    }
                  }
                }}
                className="bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-zinc-800 dark:text-zinc-200 rounded px-1.5 py-0.5 text-xs focus:outline-none"
              >
                <option value={2}>2 spaces</option>
                <option value={4}>4 spaces</option>
              </select>
            </div>
          )}
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <button
            type="button"
            onClick={handleLoadSample}
            className="text-xs text-primary hover:underline px-2 py-1"
          >
            Load Sample
          </button>

          <input
            ref={fileInputRef}
            type="file"
            accept=".json,.yaml,.yml,.txt"
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

          <button
            type="button"
            onClick={handleClear}
            disabled={!input && !output}
            title="Clear all"
            className="p-1.5 rounded-lg text-zinc-400 hover:text-rose-500 hover:bg-rose-500/10 transition-colors disabled:opacity-30 disabled:cursor-not-allowed"
          >
            <Trash2 className="w-4 h-4" />
          </button>
        </div>
      </div>

      {error && (
        <ErrorMessage
          type="error"
          message={error}
          onClear={() => setError(null)}
        />
      )}

      {/* Two Panel Layout: Input & Output */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {/* Input Panel */}
        <div className="flex flex-col space-y-2">
          <div className="flex items-center justify-between text-xs font-medium text-zinc-600 dark:text-zinc-400 px-1">
            <span>INPUT ({isJsonToYaml ? 'JSON' : 'YAML'})</span>
            <span>{input ? `${input.length} chars` : 'Empty'}</span>
          </div>

          <div className="relative rounded-xl border border-zinc-200 dark:border-[#1F2937] bg-zinc-50 dark:bg-[#0B111A] overflow-hidden focus-within:ring-2 focus-within:ring-primary/40 focus-within:border-primary">
            <textarea
              value={input}
              onChange={(e) => handleInputChange(e.target.value)}
              placeholder={
                isJsonToYaml
                  ? 'Paste valid JSON here...'
                  : 'Paste valid YAML here...'
              }
              rows={16}
              spellCheck={false}
              className="w-full p-4 font-mono-code text-xs sm:text-sm bg-transparent text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-400 dark:placeholder:text-zinc-600 focus:outline-none resize-y leading-relaxed"
            />
          </div>
        </div>

        {/* Output Panel */}
        <div className="flex flex-col space-y-2">
          <div className="flex items-center justify-between text-xs font-medium text-zinc-600 dark:text-zinc-400 px-1">
            <span>OUTPUT ({isJsonToYaml ? 'YAML' : 'JSON'})</span>
            <div className="flex items-center gap-1.5">
              <CopyButton text={output} label="Copy Output" size="sm" />
              <DownloadButton
                filename={isJsonToYaml ? 'converted.yaml' : 'converted.json'}
                content={output}
                mimeType={isJsonToYaml ? 'text/yaml' : 'application/json'}
                label="Download"
                size="sm"
              />
            </div>
          </div>

          <div className="relative rounded-xl border border-zinc-200 dark:border-[#1F2937] bg-zinc-100/70 dark:bg-[#0B111A]/80 overflow-hidden">
            <textarea
              value={output}
              readOnly
              placeholder="Converted output will appear here automatically..."
              rows={16}
              spellCheck={false}
              className="w-full p-4 font-mono-code text-xs sm:text-sm bg-transparent text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-400 dark:placeholder:text-zinc-600 focus:outline-none resize-y leading-relaxed cursor-text"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

'use client';

import React, { useState } from 'react';
import { CopyButton } from '@/components/ui/CopyButton';
import { DownloadButton } from '@/components/ui/DownloadButton';
import { RefreshCw, Check } from 'lucide-react';
import { copyToClipboard } from '@/lib/utils';

function buildUuid(uppercase: boolean, hyphens: boolean, braces: boolean): string {
  let id = '';
  if (typeof crypto !== 'undefined' && crypto.randomUUID) {
    id = crypto.randomUUID();
  } else {
    id = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, (c) => {
      const r = (Math.random() * 16) | 0;
      const v = c === 'x' ? r : (r & 0x3) | 0x8;
      return v.toString(16);
    });
  }

  if (!hyphens) {
    id = id.replace(/-/g, '');
  }
  if (uppercase) {
    id = id.toUpperCase();
  } else {
    id = id.toLowerCase();
  }
  if (braces) {
    id = `{${id}}`;
  }

  return id;
}

function generateUuids(count: number, uppercase: boolean, hyphens: boolean, braces: boolean): string[] {
  const list: string[] = [];
  for (let i = 0; i < count; i++) {
    list.push(buildUuid(uppercase, hyphens, braces));
  }
  return list;
}

export function UuidGeneratorTool() {
  const [quantity, setQuantity] = useState<number>(5);
  const [uppercase, setUppercase] = useState<boolean>(false);
  const [hyphens, setHyphens] = useState<boolean>(true);
  const [braces, setBraces] = useState<boolean>(false);
  const [uuids, setUuids] = useState<string[]>(() => generateUuids(5, false, true, false));
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const handleRegenerate = (qty = quantity, uc = uppercase, hy = hyphens, br = braces) => {
    setUuids(generateUuids(qty, uc, hy, br));
  };

  const handleCopySingle = async (uuid: string, idx: number) => {
    const success = await copyToClipboard(uuid);
    if (success) {
      setCopiedIndex(idx);
      setTimeout(() => setCopiedIndex(null), 1500);
    }
  };

  const allUuidsText = uuids.join('\n');
  const allUuidsJson = JSON.stringify(uuids, null, 2);

  return (
    <div className="space-y-6">
      {/* Configuration Toolbar */}
      <div className="flex flex-wrap items-center justify-between gap-4 p-4 rounded-xl bg-zinc-50 dark:bg-[#0B111A] border border-zinc-200 dark:border-[#1F2937]">
        <div className="flex flex-wrap items-center gap-4">
          {/* Quantity selector */}
          <div className="flex items-center gap-2">
            <label className="text-xs font-semibold text-zinc-700 dark:text-zinc-300">
              Quantity:
            </label>
            <div className="flex items-center rounded-lg bg-zinc-200 dark:bg-zinc-800 p-0.5">
              {[1, 5, 10, 50, 100].map((num) => (
                <button
                  key={num}
                  type="button"
                  onClick={() => {
                    setQuantity(num);
                    handleRegenerate(num, uppercase, hyphens, braces);
                  }}
                  className={`px-2.5 py-1 text-xs font-semibold rounded-md transition-colors ${
                    quantity === num
                      ? 'bg-primary text-primary-foreground shadow-sm'
                      : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white'
                  }`}
                >
                  {num}
                </button>
              ))}
            </div>
          </div>

          {/* Toggles */}
          <div className="flex flex-wrap items-center gap-4 text-xs text-zinc-700 dark:text-zinc-300">
            <label className="flex items-center gap-1.5 cursor-pointer">
              <input
                type="checkbox"
                checked={uppercase}
                onChange={(e) => {
                  setUppercase(e.target.checked);
                  handleRegenerate(quantity, e.target.checked, hyphens, braces);
                }}
                className="rounded border-zinc-300 text-emerald-600 focus:ring-primary"
              />
              <span>Uppercase</span>
            </label>

            <label className="flex items-center gap-1.5 cursor-pointer">
              <input
                type="checkbox"
                checked={hyphens}
                onChange={(e) => {
                  setHyphens(e.target.checked);
                  handleRegenerate(quantity, uppercase, e.target.checked, braces);
                }}
                className="rounded border-zinc-300 text-emerald-600 focus:ring-primary"
              />
              <span>Hyphens</span>
            </label>

            <label className="flex items-center gap-1.5 cursor-pointer">
              <input
                type="checkbox"
                checked={braces}
                onChange={(e) => {
                  setBraces(e.target.checked);
                  handleRegenerate(quantity, uppercase, hyphens, e.target.checked);
                }}
                className="rounded border-zinc-300 text-emerald-600 focus:ring-primary"
              />
              <span>Braces {`{}`}</span>
            </label>
          </div>
        </div>

        {/* Regenerate Button */}
        <button
          type="button"
          onClick={() => handleRegenerate()}
          className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-primary hover:bg-blue-500 text-white text-xs sm:text-sm font-semibold shadow-sm transition-all focus:outline-none focus:ring-2 focus:ring-primary/40 focus:border-primary"
        >
          <RefreshCw className="w-4 h-4" />
          <span>Regenerate</span>
        </button>
      </div>

      {/* Global Actions */}
      <div className="flex items-center justify-between px-1">
        <span className="text-xs text-zinc-500 font-medium">
          Generated {uuids.length} cryptographically secure UUID v4
        </span>
        <div className="flex items-center gap-2">
          <CopyButton text={allUuidsText} label="Copy All" />
          <DownloadButton
            filename="uuids.txt"
            content={allUuidsText}
            label="Download .txt"
            size="sm"
          />
          <DownloadButton
            filename="uuids.json"
            content={allUuidsJson}
            mimeType="application/json"
            label="Download .json"
            size="sm"
          />
        </div>
      </div>

      {/* UUID List View */}
      <div className="rounded-xl border border-zinc-200 dark:border-[#1F2937] bg-zinc-50 dark:bg-[#0B111A] overflow-hidden divide-y divide-zinc-200 dark:divide-zinc-800/80 max-h-[480px] overflow-y-auto">
        {uuids.map((uuid, idx) => (
          <div
            key={idx}
            className="flex items-center justify-between px-4 py-2.5 hover:bg-zinc-100/70 dark:hover:bg-zinc-900/60 transition-colors group"
          >
            <div className="flex items-center gap-3 font-mono-code text-xs sm:text-sm text-zinc-800 dark:text-zinc-200">
              <span className="text-zinc-400 dark:text-zinc-600 text-xs w-6 select-none">
                {idx + 1}.
              </span>
              <span className="select-all tracking-wide">{uuid}</span>
            </div>

            <button
              type="button"
              onClick={() => handleCopySingle(uuid, idx)}
              className="text-xs text-zinc-400 group-hover:text-zinc-700 dark:group-hover:text-zinc-200 p-1 rounded hover:bg-zinc-200 dark:hover:bg-zinc-800 transition-colors"
              title="Copy this UUID"
            >
              {copiedIndex === idx ? (
                <span className="flex items-center gap-1 text-emerald-500 text-xs font-semibold">
                  <Check className="w-3.5 h-3.5" /> Copied
                </span>
              ) : (
                <span>Copy</span>
              )}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

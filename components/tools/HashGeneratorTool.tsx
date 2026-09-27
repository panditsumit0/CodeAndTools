'use client';

import React, { useState, useEffect } from 'react';
import { CopyButton } from '@/components/ui/CopyButton';
import { computeMD5, computeWebCryptoHash } from '@/lib/crypto-hashes';
import { Hash, ShieldCheck, Trash2 } from 'lucide-react';
import { formatBytes } from '@/lib/utils';

interface HashResults {
  sha256: string;
  sha384: string;
  sha512: string;
  sha1: string;
  md5: string;
}

export function HashGeneratorTool() {
  const [input, setInput] = useState<string>('Code&Tools: Build. Learn. Create. u2014 Complete toolkit for developers.');
  const [uppercase, setUppercase] = useState<boolean>(false);
  const [hashes, setHashes] = useState<HashResults>({
    sha256: '',
    sha384: '',
    sha512: '',
    sha1: '',
    md5: '',
  });

  useEffect(() => {
    let isCancelled = false;

    async function computeAll() {
      if (!input) {
        setHashes({
          sha256: '',
          sha384: '',
          sha512: '',
          sha1: '',
          md5: '',
        });
        return;
      }

      try {
        const md5Val = computeMD5(input);
        const [sha1Val, sha256Val, sha384Val, sha512Val] = await Promise.all([
          computeWebCryptoHash('SHA-1', input),
          computeWebCryptoHash('SHA-256', input),
          computeWebCryptoHash('SHA-384', input),
          computeWebCryptoHash('SHA-512', input),
        ]);

        if (!isCancelled) {
          setHashes({
            md5: md5Val,
            sha1: sha1Val,
            sha256: sha256Val,
            sha384: sha384Val,
            sha512: sha512Val,
          });
        }
      } catch (err) {
        console.error('Hash generation error:', err);
      }
    }

    computeAll();

    return () => {
      isCancelled = true;
    };
  }, [input]);

  const formatHash = (h: string) => {
    if (!h) return '';
    return uppercase ? h.toUpperCase() : h.toLowerCase();
  };

  const handleClear = () => {
    setInput('');
  };

  const handleLoadSample = () => {
    setInput('secret-token-sample-payload-2026');
  };

  const algorithms = [
    {
      name: 'SHA-256',
      bits: 256,
      value: formatHash(hashes.sha256),
      recommended: true,
      description: 'Standard for secure modern systems, Bitcoin, SSL certificates, and HMAC.',
    },
    {
      name: 'SHA-512',
      bits: 512,
      value: formatHash(hashes.sha512),
      recommended: true,
      description: 'High-security 512-bit digest with superior collision resistance on 64-bit architectures.',
    },
    {
      name: 'SHA-384',
      bits: 384,
      value: formatHash(hashes.sha384),
      recommended: false,
      description: 'Common in US government Suite B cryptographic profiles.',
    },
    {
      name: 'SHA-1',
      bits: 160,
      value: formatHash(hashes.sha1),
      recommended: false,
      description: 'Legacy 160-bit digest. Used in Git object IDs. Avoid for passwords or secure signatures.',
    },
    {
      name: 'MD5',
      bits: 128,
      value: formatHash(hashes.md5),
      recommended: false,
      description: '128-bit checksum. Fast for file integrity verification, but cryptographically broken.',
    },
  ];

  const byteSize = new Blob([input]).size;

  return (
    <div className="space-y-6">
      {/* Privacy Callout */}
      <div className="p-3.5 rounded-xl border border-blue-500/30 bg-blue-500/10 text-blue-800 dark:text-blue-300 text-xs sm:text-sm flex items-center justify-between gap-3">
        <div className="flex items-center gap-2">
          <ShieldCheck className="w-5 h-5 text-primary shrink-0" />
          <span>
            <strong>100% Client-Side Cryptography:</strong> All hashes are computed locally via the browser Web Crypto API. Your passwords and sensitive strings are never sent over the network.
          </span>
        </div>
      </div>

      {/* Input Area */}
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <label className="text-xs font-semibold text-zinc-700 dark:text-zinc-300 flex items-center gap-1.5">
            <Hash className="w-3.5 h-3.5 text-primary" />
            Plain Text String
          </label>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handleLoadSample}
              className="text-xs text-primary hover:underline"
            >
              Load Sample Text
            </button>
            {input && (
              <button
                type="button"
                onClick={handleClear}
                className="text-zinc-400 hover:text-rose-500 p-1"
                title="Clear input"
              >
                <Trash2 className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        <div className="rounded-xl border border-zinc-200 dark:border-[#1F2937] bg-zinc-50 dark:bg-[#0B111A] overflow-hidden focus-within:ring-2 focus-within:ring-primary/40 focus-within:border-primary">
          <textarea
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type or paste text to compute cryptographic hashes..."
            rows={4}
            spellCheck={false}
            className="w-full p-4 font-mono-code text-xs sm:text-sm bg-transparent text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-400 focus:outline-none resize-y leading-relaxed"
          />
        </div>

        <div className="flex items-center justify-between text-xs text-zinc-500 px-1">
          <div className="flex items-center gap-3">
            <span>{input.length} characters</span>
            <span>{formatBytes(byteSize)}</span>
          </div>

          <label className="flex items-center gap-1.5 cursor-pointer">
            <input
              type="checkbox"
              checked={uppercase}
              onChange={(e) => setUppercase(e.target.checked)}
              className="rounded border-zinc-300 text-emerald-600 focus:ring-primary"
            />
            <span>Uppercase Hex</span>
          </label>
        </div>
      </div>

      {/* Computed Hash Cards */}
      <div className="space-y-3 pt-2">
        <h3 className="text-xs font-bold uppercase tracking-wider text-zinc-600 dark:text-zinc-400">
          Computed Cryptographic Digests
        </h3>

        <div className="space-y-3">
          {algorithms.map((algo) => (
            <div
              key={algo.name}
              className="p-4 rounded-xl border border-zinc-200 dark:border-[#1F2937] bg-white dark:bg-[#0D1117] shadow-xs space-y-2"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <span className="text-sm font-bold text-zinc-900 dark:text-zinc-100 font-mono">
                    {algo.name}
                  </span>
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 font-mono">
                    {algo.bits} bits
                  </span>
                  {algo.recommended && (
                    <span className="text-[10px] px-1.5 py-0.5 rounded bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20 font-semibold">
                      Recommended
                    </span>
                  )}
                </div>
                <CopyButton text={algo.value} label="Copy Hash" size="sm" />
              </div>

              <div className="p-3 rounded-lg bg-zinc-50 dark:bg-[#0B111A] border border-zinc-200 dark:border-[#1F2937] font-mono-code text-xs text-zinc-800 dark:text-zinc-200 break-all select-all leading-relaxed">
                {algo.value || (
                  <span className="text-zinc-400 italic">Enter text above to compute hash...</span>
                )}
              </div>

              <p className="text-[11px] text-zinc-500">
                {algo.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

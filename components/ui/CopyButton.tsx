'use client';

import React, { useState } from 'react';
import { Copy, Check } from 'lucide-react';
import { copyToClipboard } from '@/lib/utils';

interface CopyButtonProps {
  text: string;
  label?: string;
  className?: string;
  size?: 'sm' | 'md';
}

export function CopyButton({ text, label = 'Copy', className = '', size = 'md' }: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async () => {
    if (!text) return;
    const success = await copyToClipboard(text);
    if (success) {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  const isSmall = size === 'sm';

  return (
    <button
      type="button"
      onClick={handleCopy}
      disabled={!text}
      title={label}
      aria-label={label}
      className={`inline-flex items-center gap-1.5 font-medium rounded-lg transition-all focus:outline-none focus:ring-2 focus:ring-blue-500/40 disabled:opacity-40 disabled:cursor-not-allowed ${
        copied
          ? 'bg-[#22C55E]/10 text-[#22C55E] border border-[#22C55E]/30'
          : 'bg-zinc-100 hover:bg-zinc-200 dark:bg-[#151B24] dark:hover:bg-[#1F2937] text-zinc-700 dark:text-[#E2E8F0] border border-zinc-200 dark:border-[#1F2937]'
      } ${isSmall ? 'px-2 py-1 text-xs' : 'px-3 py-1.5 text-xs'} ${className}`}
    >
      {copied ? (
        <>
          <Check className={`${isSmall ? 'w-3 h-3' : 'w-3.5 h-3.5'} text-[#22C55E]`} />
          <span>Copied!</span>
        </>
      ) : (
        <>
          <Copy className={`${isSmall ? 'w-3 h-3' : 'w-3.5 h-3.5'}`} />
          {label && <span>{label}</span>}
        </>
      )}
    </button>
  );
}

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
      className={`inline-flex items-center gap-1.5 font-medium rounded-lg transition-all focus:outline-none focus:ring-2 focus:ring-emerald-500/40 disabled:opacity-40 disabled:cursor-not-allowed ${
        copied
          ? 'bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/30'
          : 'bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-700/80 text-zinc-700 dark:text-zinc-200 border border-zinc-200 dark:border-zinc-700/60'
      } ${isSmall ? 'px-2 py-1 text-xs' : 'px-3 py-1.5 text-xs'} ${className}`}
    >
      {copied ? (
        <>
          <Check className={`${isSmall ? 'w-3 h-3' : 'w-3.5 h-3.5'} text-emerald-500`} />
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

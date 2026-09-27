'use client';

import React from 'react';
import { Download } from 'lucide-react';
import { downloadFile } from '@/lib/utils';

interface DownloadButtonProps {
  filename: string;
  content: string;
  mimeType?: string;
  label?: string;
  className?: string;
  size?: 'sm' | 'md';
}

export function DownloadButton({
  filename,
  content,
  mimeType = 'text/plain',
  label = 'Download',
  className = '',
  size = 'md',
}: DownloadButtonProps) {
  const handleDownload = () => {
    if (!content) return;
    downloadFile(filename, content, mimeType);
  };

  const isSmall = size === 'sm';

  return (
    <button
      type="button"
      onClick={handleDownload}
      disabled={!content}
      title={label}
      aria-label={label}
      className={`inline-flex items-center gap-1.5 font-medium rounded-lg transition-all focus:outline-none focus:ring-2 focus:ring-emerald-500/40 disabled:opacity-40 disabled:cursor-not-allowed bg-zinc-100 hover:bg-zinc-200 dark:bg-zinc-800 dark:hover:bg-zinc-700/80 text-zinc-700 dark:text-zinc-200 border border-zinc-200 dark:border-zinc-700/60 ${
        isSmall ? 'px-2 py-1 text-xs' : 'px-3 py-1.5 text-xs'
      } ${className}`}
    >
      <Download className={`${isSmall ? 'w-3 h-3' : 'w-3.5 h-3.5'}`} />
      {label && <span>{label}</span>}
    </button>
  );
}

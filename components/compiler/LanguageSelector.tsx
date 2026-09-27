'use client';

import React from 'react';
import { LANGUAGE_LIST } from '@/lib/compiler/languages';
import { SupportedLanguageId } from '@/lib/compiler/types';
import { Code2 } from 'lucide-react';

interface LanguageSelectorProps {
  currentLanguage: SupportedLanguageId;
  onSelectLanguage: (lang: SupportedLanguageId) => void;
  disabled?: boolean;
}

export function LanguageSelector({
  currentLanguage,
  onSelectLanguage,
  disabled = false,
}: LanguageSelectorProps) {
  return (
    <div className="flex items-center gap-2">
      <div className="flex items-center gap-1.5 text-xs text-zinc-500 dark:text-zinc-400 font-medium">
        <Code2 className="w-4 h-4 text-primary" />
        <span className="hidden sm:inline">Language:</span>
      </div>
      <div className="flex items-center p-1 rounded-xl bg-zinc-100 dark:bg-[#151B24] border border-zinc-200 dark:border-[#1F2937]">
        {LANGUAGE_LIST.map((lang) => {
          const isActive = lang.id === currentLanguage;
          return (
            <button
              key={lang.id}
              type="button"
              onClick={() => onSelectLanguage(lang.id)}
              disabled={disabled}
              className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all focus:outline-none focus:ring-1 focus:ring-primary ${
                isActive
                  ? 'bg-primary text-white shadow-xs'
                  : 'text-zinc-600 dark:text-[#E2E8F0] hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-200/60 dark:hover:bg-[#1F2937]'
              } disabled:opacity-50 disabled:cursor-not-allowed`}
              title={`${lang.name} (${lang.version})`}
            >
              <span>{lang.name}</span>
            </button>
          );
        })}
      </div>
    </div>
  );
}

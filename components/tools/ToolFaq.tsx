'use client';

import React, { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';
import { ToolFaqItem } from '@/types/tool';

interface ToolFaqProps {
  faq: ToolFaqItem[];
}

export function ToolFaq({ faq }: ToolFaqProps) {
  const [openIndices, setOpenIndices] = useState<number[]>([0]);

  const toggle = (idx: number) => {
    setOpenIndices((prev) =>
      prev.includes(idx) ? prev.filter((i) => i !== idx) : [...prev, idx]
    );
  };

  if (!faq || faq.length === 0) return null;

  return (
    <section className="mt-10 pt-8 border-t border-zinc-200 dark:border-zinc-800">
      <div className="flex items-center gap-2 mb-6">
        <HelpCircle className="w-5 h-5 text-emerald-500" />
        <h3 className="text-lg font-bold text-zinc-900 dark:text-white">
          Frequently Asked Questions
        </h3>
      </div>

      <div className="space-y-3">
        {faq.map((item, idx) => {
          const isOpen = openIndices.includes(idx);
          return (
            <div
              key={idx}
              className="rounded-xl border border-zinc-200 dark:border-zinc-800/80 bg-white dark:bg-zinc-900/60 overflow-hidden transition-colors"
            >
              <button
                type="button"
                onClick={() => toggle(idx)}
                className="w-full flex items-center justify-between p-4 text-left font-semibold text-sm sm:text-base text-zinc-900 dark:text-zinc-100 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors focus:outline-none"
              >
                <span>{item.question}</span>
                <ChevronDown
                  className={`w-4 h-4 text-zinc-400 shrink-0 transition-transform duration-200 ${
                    isOpen ? 'rotate-180 text-emerald-500' : ''
                  }`}
                />
              </button>

              {isOpen && (
                <div className="px-4 pb-4 pt-1 text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 leading-relaxed border-t border-zinc-100 dark:border-zinc-800/50">
                  {item.answer}
                </div>
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
}

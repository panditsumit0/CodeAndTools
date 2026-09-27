'use client';

import React, { useState, useRef, useEffect } from 'react';
import { Sun, Moon, Laptop, Check } from 'lucide-react';
import { useTheme } from './ThemeProvider';

export function ThemeToggle() {
  const { theme, resolvedTheme, setTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle theme"
        className="p-2 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500/40"
      >
        {resolvedTheme === 'dark' ? (
          <Moon className="w-4 h-4 text-emerald-400" />
        ) : (
          <Sun className="w-4 h-4 text-amber-500" />
        )}
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-36 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-xl z-50 p-1 py-1.5 animate-in fade-in slide-in-from-top-1 duration-150">
          <button
            type="button"
            onClick={() => {
              setTheme('dark');
              setIsOpen(false);
            }}
            className="w-full flex items-center justify-between px-3 py-1.5 text-xs font-medium rounded-lg text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
          >
            <span className="flex items-center gap-2">
              <Moon className="w-3.5 h-3.5 text-emerald-400" />
              Dark
            </span>
            {theme === 'dark' && <Check className="w-3.5 h-3.5 text-emerald-500" />}
          </button>
          <button
            type="button"
            onClick={() => {
              setTheme('light');
              setIsOpen(false);
            }}
            className="w-full flex items-center justify-between px-3 py-1.5 text-xs font-medium rounded-lg text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
          >
            <span className="flex items-center gap-2">
              <Sun className="w-3.5 h-3.5 text-amber-500" />
              Light
            </span>
            {theme === 'light' && <Check className="w-3.5 h-3.5 text-emerald-500" />}
          </button>
          <button
            type="button"
            onClick={() => {
              setTheme('system');
              setIsOpen(false);
            }}
            className="w-full flex items-center justify-between px-3 py-1.5 text-xs font-medium rounded-lg text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
          >
            <span className="flex items-center gap-2">
              <Laptop className="w-3.5 h-3.5 text-zinc-400" />
              System
            </span>
            {theme === 'system' && <Check className="w-3.5 h-3.5 text-emerald-500" />}
          </button>
        </div>
      )}
    </div>
  );
}

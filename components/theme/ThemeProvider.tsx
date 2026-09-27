'use client';

import React, { createContext, useContext, useEffect, useState, useSyncExternalStore } from 'react';

type Theme = 'dark' | 'light' | 'system';

interface ThemeContextType {
  theme: Theme;
  resolvedTheme: 'dark' | 'light';
  setTheme: (theme: Theme) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

function subscribe(callback: () => void) {
  window.addEventListener('storage', callback);
  return () => window.removeEventListener('storage', callback);
}

function getStoredThemeSnapshot(): Theme {
  try {
    const stored = localStorage.getItem('devkit_theme');
    if (stored === 'dark' || stored === 'light' || stored === 'system') {
      return stored;
    }
  } catch {
    // fallback
  }
  return 'dark';
}

function getServerThemeSnapshot(): Theme {
  return 'dark';
}

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const syncedTheme = useSyncExternalStore(subscribe, getStoredThemeSnapshot, getServerThemeSnapshot);
  const [theme, setThemeState] = useState<Theme>(syncedTheme);
  const [resolvedTheme, setResolvedTheme] = useState<'dark' | 'light'>('dark');

  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
    try {
      localStorage.setItem('devkit_theme', newTheme);
      window.dispatchEvent(new Event('storage'));
    } catch {
      // ignore
    }
  };

  useEffect(() => {
    const root = document.documentElement;
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)');

    const applyTheme = () => {
      let activeTheme: 'dark' | 'light' = 'dark';
      if (theme === 'system') {
        activeTheme = mediaQuery.matches ? 'dark' : 'light';
      } else {
        activeTheme = theme;
      }

      setResolvedTheme(activeTheme);

      if (activeTheme === 'dark') {
        root.classList.add('dark');
        root.classList.remove('light');
        root.style.colorScheme = 'dark';
      } else {
        root.classList.remove('dark');
        root.classList.add('light');
        root.style.colorScheme = 'light';
      }
    };

    applyTheme();

    const listener = () => {
      if (theme === 'system') applyTheme();
    };

    mediaQuery.addEventListener('change', listener);
    return () => mediaQuery.removeEventListener('change', listener);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ theme, resolvedTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useTheme() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}

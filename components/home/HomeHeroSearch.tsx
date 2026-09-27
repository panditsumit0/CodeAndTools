'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { Search, Sparkles } from 'lucide-react';
import { TOOLS } from '@/lib/tools-registry';

export function HomeHeroSearch() {
  const [query, setQuery] = useState('');
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (!query.trim()) return;

    // Direct match check in tools
    const q = query.trim().toLowerCase();
    const directMatch = TOOLS.find(
      (t) =>
        t.name.toLowerCase() === q ||
        t.slug === q ||
        t.keywords.some((k) => k.toLowerCase() === q)
    );

    if (directMatch) {
      router.push(`/tools/${directMatch.slug}`);
      return;
    }

    // Direct match in learn courses
    if (q === 'c') return router.push('/learn/c');
    if (q === 'cpp' || q === 'c++') return router.push('/learn/cpp');
    if (q === 'java') return router.push('/learn/java');
    if (q === 'python' || q === 'py') return router.push('/learn/python');
    if (q === 'typescript' || q === 'ts') return router.push('/learn/typescript');
    if (q === 'learn' || q === 'tutorials' || q === 'btech') return router.push('/learn');

    router.push(`/tools?search=${encodeURIComponent(query.trim())}`);
  };

  const sampleQuickSearches = ['compiler', 'c++', 'python', 'jwt decoder', 'typescript', 'json formatter'];

  return (
    <div className="w-full max-w-2xl mx-auto space-y-3">
      <form onSubmit={handleSearch} className="relative">
        <Search className="w-5 h-5 text-zinc-400 absolute left-4 top-1/2 -translate-y-1/2" />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search 10+ developer tools (e.g. JWT, JSON, UUID, Hash, Regex)..."
          className="w-full pl-12 pr-28 py-4 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white/90 dark:bg-zinc-900/90 backdrop-blur-md shadow-xl text-sm sm:text-base text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 transition-all"
        />
        <button
          type="submit"
          className="absolute right-2 top-1/2 -translate-y-1/2 px-4 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-xs sm:text-sm transition-all shadow-md"
        >
          Search
        </button>
      </form>

      {/* Quick suggestions */}
      <div className="flex flex-wrap items-center justify-center gap-1.5 text-xs text-zinc-500">
        <span className="flex items-center gap-1">
          <Sparkles className="w-3 h-3 text-amber-500" /> Popular:
        </span>
        {sampleQuickSearches.map((item) => (
          <button
            key={item}
            type="button"
            onClick={() => {
              setQuery(item);
              const match = TOOLS.find((t) => t.keywords.includes(item) || t.slug.includes(item));
              if (match) {
                router.push(`/tools/${match.slug}`);
              } else {
                router.push(`/tools?search=${encodeURIComponent(item)}`);
              }
            }}
            className="px-2 py-0.5 rounded-full bg-zinc-100 dark:bg-zinc-800/80 hover:bg-zinc-200 dark:hover:bg-zinc-700 text-zinc-600 dark:text-zinc-300 transition-colors"
          >
            {item}
          </button>
        ))}
      </div>
    </div>
  );
}

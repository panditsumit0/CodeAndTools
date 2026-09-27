'use client';

import React, { useState, useMemo } from 'react';
import { TOOLS, CATEGORIES } from '@/lib/tools-registry';
import { ToolCard } from './ToolCard';
import { ToolCategory } from '@/types/tool';
import { Search, Sparkles, SlidersHorizontal, X } from 'lucide-react';

export function ToolsExplorer() {
  const [search, setSearch] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<ToolCategory | 'all'>('all');
  const [sortBy, setSortBy] = useState<'popular' | 'name-asc' | 'name-desc'>('popular');

  const filteredTools = useMemo(() => {
    let result = [...TOOLS];

    // Filter by category
    if (selectedCategory !== 'all') {
      result = result.filter((t) => t.category === selectedCategory);
    }

    // Filter by search query
    if (search.trim()) {
      const q = search.trim().toLowerCase();
      result = result.filter(
        (t) =>
          t.name.toLowerCase().includes(q) ||
          t.shortDescription.toLowerCase().includes(q) ||
          t.categoryLabel.toLowerCase().includes(q) ||
          t.keywords.some((k) => k.toLowerCase().includes(q))
      );
    }

    // Sorting
    if (sortBy === 'popular') {
      result.sort((a, b) => (b.popular ? 1 : 0) - (a.popular ? 1 : 0));
    } else if (sortBy === 'name-asc') {
      result.sort((a, b) => a.name.localeCompare(b.name));
    } else if (sortBy === 'name-desc') {
      result.sort((a, b) => b.name.localeCompare(a.name));
    }

    return result;
  }, [search, selectedCategory, sortBy]);

  const popularTools = useMemo(() => TOOLS.filter((t) => t.popular), []);

  return (
    <div className="space-y-8">
      {/* Search and Filters Header */}
      <div className="p-5 sm:p-6 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/80 shadow-md dark:shadow-xl space-y-4">
        {/* Search Input */}
        <div className="relative">
          <Search className="w-5 h-5 text-zinc-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search all tools by name, description, or keyword (e.g. jwt, hash, base64, yaml)..."
            className="w-full pl-11 pr-10 py-3 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-950 text-sm sm:text-base text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/40"
          />
          {search && (
            <button
              type="button"
              onClick={() => setSearch('')}
              className="absolute right-3.5 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Filter Controls Row */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pt-2">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-1.5">
            <button
              type="button"
              onClick={() => setSelectedCategory('all')}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-colors ${
                selectedCategory === 'all'
                  ? 'bg-emerald-600 text-white shadow-xs'
                  : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white'
              }`}
            >
              All Tools ({TOOLS.length})
            </button>
            {CATEGORIES.map((cat) => {
              const count = TOOLS.filter((t) => t.category === cat.id).length;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-colors ${
                    selectedCategory === cat.id
                      ? 'bg-emerald-600 text-white shadow-xs'
                      : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white'
                  }`}
                >
                  {cat.label} ({count})
                </button>
              );
            })}
          </div>

          {/* Sort By Dropdown */}
          <div className="flex items-center gap-2 self-end sm:self-auto text-xs text-zinc-500">
            <SlidersHorizontal className="w-3.5 h-3.5" />
            <span>Sort by:</span>
            <select
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value as 'popular' | 'name-asc' | 'name-desc')}
              className="bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-zinc-800 dark:text-zinc-200 rounded-lg px-2.5 py-1 text-xs focus:outline-none"
            >
              <option value="popular">Popular First</option>
              <option value="name-asc">Name (A → Z)</option>
              <option value="name-desc">Name (Z → A)</option>
            </select>
          </div>
        </div>
      </div>

      {/* Popular Tools Highlight (shown if no active search and 'all' is selected) */}
      {!search && selectedCategory === 'all' && (
        <section className="space-y-4">
          <div className="flex items-center gap-2">
            <Sparkles className="w-4 h-4 text-amber-500" />
            <h2 className="text-base font-bold text-zinc-900 dark:text-white">
              Most Popular Tools
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {popularTools.slice(0, 3).map((tool) => (
              <ToolCard key={`pop-${tool.slug}`} tool={tool} />
            ))}
          </div>
        </section>
      )}

      {/* All / Filtered Tools Grid */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-base font-bold text-zinc-900 dark:text-white">
            {selectedCategory === 'all'
              ? 'All Utilities'
              : `${CATEGORIES.find((c) => c.id === selectedCategory)?.label} Tools`}
          </h2>
          <span className="text-xs text-zinc-500">
            Showing {filteredTools.length} {filteredTools.length === 1 ? 'tool' : 'tools'}
          </span>
        </div>

        {filteredTools.length === 0 ? (
          <div className="p-12 text-center rounded-2xl border border-dashed border-zinc-300 dark:border-zinc-800">
            <p className="text-sm text-zinc-500">
              No developer tools found matching your search.
            </p>
            <button
              type="button"
              onClick={() => {
                setSearch('');
                setSelectedCategory('all');
              }}
              className="mt-3 text-xs text-emerald-600 dark:text-emerald-400 font-semibold hover:underline"
            >
              Reset filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredTools.map((tool) => (
              <ToolCard key={tool.slug} tool={tool} />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}

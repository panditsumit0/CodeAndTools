'use client';

import React, { useState, useMemo, useEffect, useRef } from 'react';
import { TOOLS, CATEGORIES, getToolBySlug } from '@/lib/tools-registry';
import { ToolCard } from './ToolCard';
import { ToolCategory, ToolDefinition } from '@/types/tool';
import {
  Search,
  Sparkles,
  SlidersHorizontal,
  X,
  Star,
  Clock,
  GraduationCap,
  Command,
  ArrowRight,
} from 'lucide-react';
import Link from 'next/link';

type FilterTab = 'all' | 'favorites' | 'students' | ToolCategory;

export function ToolsExplorer() {
  const [search, setSearch] = useState<string>('');
  const [activeTab, setActiveTab] = useState<FilterTab>('all');
  const [sortBy, setSortBy] = useState<'popular' | 'name-asc' | 'name-desc'>('popular');
  const [favorites, setFavorites] = useState<string[]>([]);
  const [recentSlugs, setRecentSlugs] = useState<string[]>([]);
  const searchInputRef = useRef<HTMLInputElement>(null);

  // Load favorites & recently used from localStorage on mount
  useEffect(() => {
    try {
      const savedFavs = localStorage.getItem('devforge_favorite_tools');
      if (savedFavs) {
        setFavorites(JSON.parse(savedFavs));
      }
      const savedRecents = localStorage.getItem('devforge_recent_tools');
      if (savedRecents) {
        setRecentSlugs(JSON.parse(savedRecents));
      }
    } catch {
      // localStorage may fail in restricted/private modes
    }
  }, []);

  // Keyboard shortcut Ctrl/Cmd + K
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        searchInputRef.current?.focus();
        searchInputRef.current?.select();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Toggle favorite
  const handleToggleFavorite = (slug: string) => {
    setFavorites((prev) => {
      const updated = prev.includes(slug)
        ? prev.filter((s) => s !== slug)
        : [...prev, slug];
      try {
        localStorage.setItem('devforge_favorite_tools', JSON.stringify(updated));
      } catch {}
      return updated;
    });
  };

  // Record tool usage
  const handleToolClick = (slug: string) => {
    setRecentSlugs((prev) => {
      const updated = [slug, ...prev.filter((s) => s !== slug)].slice(0, 6);
      try {
        localStorage.setItem('devforge_recent_tools', JSON.stringify(updated));
      } catch {}
      return updated;
    });
  };

  const clearRecents = () => {
    setRecentSlugs([]);
    try {
      localStorage.removeItem('devforge_recent_tools');
    } catch {}
  };

  // Compute recently visited tool objects
  const recentTools = useMemo(() => {
    return recentSlugs
      .map((slug) => getToolBySlug(slug))
      .filter((t): t is ToolDefinition => !!t);
  }, [recentSlugs]);

  // Compute filtered tools
  const filteredTools = useMemo(() => {
    let result = [...TOOLS];

    // Filter by tab
    if (activeTab === 'favorites') {
      result = result.filter((t) => favorites.includes(t.slug));
    } else if (activeTab === 'students') {
      result = result.filter((t) => t.studentEssential);
    } else if (activeTab !== 'all') {
      result = result.filter((t) => t.category === activeTab);
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
  }, [search, activeTab, sortBy, favorites]);

  const popularTools = useMemo(() => TOOLS.filter((t) => t.popular), []);
  const studentTools = useMemo(() => TOOLS.filter((t) => t.studentEssential), []);

  return (
    <div className="space-y-8">
      {/* Search and Filters Header */}
      <div className="p-5 sm:p-6 rounded-2xl border border-zinc-200 dark:border-[#1F2937] bg-white dark:bg-[#0D1117] shadow-md dark:shadow-xl space-y-4">
        {/* Search Input with Cmd+K hint */}
        <div className="relative">
          <Search className="w-5 h-5 text-zinc-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
          <input
            ref={searchInputRef}
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search developer tools (e.g. json, jwt, regex, uuid, password, diff)..."
            className="w-full pl-11 pr-24 py-3 rounded-xl border border-zinc-200 dark:border-[#1F2937] bg-zinc-50 dark:bg-[#0B111A] text-sm sm:text-base text-zinc-900 dark:text-[#F8FAFC] placeholder:text-[#64748B] focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/40 transition-all"
          />
          <div className="absolute right-3 top-1/2 -translate-y-1/2 flex items-center gap-1.5">
            {search ? (
              <button
                type="button"
                onClick={() => setSearch('')}
                className="p-1 rounded-md text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200"
              >
                <X className="w-4 h-4" />
              </button>
            ) : (
              <kbd className="hidden sm:inline-flex items-center gap-1 px-2 py-0.5 text-[11px] font-mono font-medium text-zinc-400 bg-zinc-200/60 dark:bg-zinc-800 rounded border border-zinc-300 dark:border-zinc-700">
                <Command className="w-3 h-3" /> K
              </kbd>
            )}
          </div>
        </div>

        {/* Filter Controls Row */}
        <div className="flex flex-col gap-3 pt-2">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center gap-1.5">
            <button
              type="button"
              onClick={() => setActiveTab('all')}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                activeTab === 'all'
                  ? 'bg-primary text-primary-foreground shadow-xs'
                  : 'bg-zinc-100 dark:bg-[#151B24] text-zinc-600 dark:text-[#94A3B8] hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-200 dark:hover:bg-[#1F2937]'
              }`}
            >
              All Tools ({TOOLS.length})
            </button>

            {/* Favorites Tab */}
            <button
              type="button"
              onClick={() => setActiveTab('favorites')}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                activeTab === 'favorites'
                  ? 'bg-amber-500 text-white shadow-xs'
                  : 'bg-zinc-100 dark:bg-[#151B24] text-zinc-600 dark:text-[#94A3B8] hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-200 dark:hover:bg-[#1F2937]'
              }`}
            >
              <Star className={`w-3.5 h-3.5 ${activeTab === 'favorites' ? 'fill-white' : 'text-amber-500 fill-amber-500'}`} />
              Favorites ({favorites.length})
            </button>

            {/* Student Essentials Tab */}
            <button
              type="button"
              onClick={() => setActiveTab('students')}
              className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                activeTab === 'students'
                  ? 'bg-emerald-600 text-white shadow-xs'
                  : 'bg-zinc-100 dark:bg-[#151B24] text-zinc-600 dark:text-[#94A3B8] hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-200 dark:hover:bg-[#1F2937]'
              }`}
            >
              <GraduationCap className="w-3.5 h-3.5 text-emerald-500" />
              Student Essentials ({studentTools.length})
            </button>

            {CATEGORIES.map((cat) => {
              const count = TOOLS.filter((t) => t.category === cat.id).length;
              if (count === 0) return null;
              return (
                <button
                  key={cat.id}
                  type="button"
                  onClick={() => setActiveTab(cat.id)}
                  className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition-all ${
                    activeTab === cat.id
                      ? 'bg-primary text-primary-foreground shadow-xs'
                      : 'bg-zinc-100 dark:bg-[#151B24] text-zinc-600 dark:text-[#94A3B8] hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-200 dark:hover:bg-[#1F2937]'
                  }`}
                >
                  {cat.label} ({count})
                </button>
              );
            })}
          </div>

          {/* Sort By Dropdown */}
          <div className="flex items-center justify-between pt-2 border-t border-zinc-100 dark:border-zinc-800/60 text-xs text-zinc-500">
            <span>
              Showing <strong className="text-zinc-900 dark:text-zinc-100">{filteredTools.length}</strong> of {TOOLS.length} tools
            </span>

            <div className="flex items-center gap-2">
              <SlidersHorizontal className="w-3.5 h-3.5" />
              <span>Sort:</span>
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
      </div>

      {/* Recently Used Tools (shown if exists and no active search) */}
      {!search && recentTools.length > 0 && activeTab === 'all' && (
        <section className="space-y-3">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4 text-blue-500" />
              <h2 className="text-base font-bold text-zinc-900 dark:text-white">
                Recently Used
              </h2>
            </div>
            <button
              type="button"
              onClick={clearRecents}
              className="text-xs text-zinc-400 hover:text-rose-500 transition-colors"
            >
              Clear history
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {recentTools.slice(0, 4).map((tool) => (
              <ToolCard
                key={`recent-${tool.slug}`}
                tool={tool}
                compact
                isFavorite={favorites.includes(tool.slug)}
                onToggleFavorite={handleToggleFavorite}
                onToolClick={handleToolClick}
              />
            ))}
          </div>
        </section>
      )}

      {/* Popular Tools Highlight (shown if no active search and 'all' is selected) */}
      {!search && activeTab === 'all' && (
        <section className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-amber-500" />
              <h2 className="text-base font-bold text-zinc-900 dark:text-white">
                Popular Developer Tools
              </h2>
            </div>
            <span className="text-xs text-zinc-500">Most bookmarked by developers</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {popularTools.slice(0, 6).map((tool) => (
              <ToolCard
                key={`pop-${tool.slug}`}
                tool={tool}
                isFavorite={favorites.includes(tool.slug)}
                onToggleFavorite={handleToggleFavorite}
                onToolClick={handleToolClick}
              />
            ))}
          </div>
        </section>
      )}

      {/* Student Essentials Highlight (shown if 'all' is selected and no search) */}
      {!search && activeTab === 'all' && (
        <section className="p-6 rounded-2xl border border-emerald-500/20 bg-emerald-500/[0.03] dark:bg-emerald-950/10 space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
            <div>
              <div className="flex items-center gap-2">
                <GraduationCap className="w-5 h-5 text-emerald-500" />
                <h2 className="text-base font-bold text-zinc-900 dark:text-white">
                  Student Essentials — B.Tech & CS Toolkit
                </h2>
              </div>
              <p className="text-xs text-zinc-500 dark:text-zinc-400 mt-1">
                Handpicked tools for Computer Science students: compilers, algorithms, number systems, and cheat sheets.
              </p>
            </div>
            <button
              type="button"
              onClick={() => setActiveTab('students')}
              className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-600 dark:text-emerald-400 hover:underline self-start sm:self-auto"
            >
              View all ({studentTools.length}) <ArrowRight className="w-3.5 h-3.5" />
            </button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {studentTools.slice(0, 4).map((tool) => (
              <ToolCard
                key={`stu-${tool.slug}`}
                tool={tool}
                compact
                isFavorite={favorites.includes(tool.slug)}
                onToggleFavorite={handleToggleFavorite}
                onToolClick={handleToolClick}
              />
            ))}
          </div>
        </section>
      )}

      {/* Filtered Tools Grid */}
      <section className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-base font-bold text-zinc-900 dark:text-white">
            {activeTab === 'all'
              ? 'All Tools & Utilities'
              : activeTab === 'favorites'
              ? '⭐ Your Favorite Tools'
              : activeTab === 'students'
              ? '🎓 Student Essentials'
              : `${CATEGORIES.find((c) => c.id === activeTab)?.label} Tools`}
          </h2>
          <span className="text-xs text-zinc-500">
            {filteredTools.length} {filteredTools.length === 1 ? 'utility' : 'utilities'} available
          </span>
        </div>

        {filteredTools.length === 0 ? (
          <div className="p-12 text-center rounded-2xl border border-dashed border-zinc-300 dark:border-zinc-800 bg-zinc-50/50 dark:bg-zinc-900/50">
            <div className="w-12 h-12 mx-auto rounded-full bg-zinc-100 dark:bg-zinc-800 flex items-center justify-center text-zinc-400 mb-3">
              <Search className="w-5 h-5" />
            </div>
            <h3 className="text-base font-semibold text-zinc-900 dark:text-white mb-1">
              No developer tools found
            </h3>
            <p className="text-sm text-zinc-500 max-w-sm mx-auto mb-4">
              {activeTab === 'favorites'
                ? "You haven't starred any tools yet. Click the star icon on any tool card to add it to your favorites."
                : `We couldn't find any tools matching "${search}". Try searching for something else like "JSON", "JWT", or "Regex".`}
            </p>
            <div className="flex flex-wrap items-center justify-center gap-2">
              <button
                type="button"
                onClick={() => {
                  setSearch('');
                  setActiveTab('all');
                }}
                className="px-4 py-2 rounded-xl text-xs font-semibold bg-primary text-white hover:bg-primary/90 transition-colors"
              >
                Clear all filters
              </button>
              {['json', 'jwt', 'regex', 'uuid', 'password', 'git'].map((kw) => (
                <button
                  key={kw}
                  type="button"
                  onClick={() => {
                    setSearch(kw);
                    setActiveTab('all');
                  }}
                  className="px-2.5 py-1.5 rounded-lg text-xs font-mono bg-zinc-200/60 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-300 hover:bg-zinc-300 dark:hover:bg-zinc-700"
                >
                  {kw}
                </button>
              ))}
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {filteredTools.map((tool) => (
              <ToolCard
                key={tool.slug}
                tool={tool}
                isFavorite={favorites.includes(tool.slug)}
                onToggleFavorite={handleToggleFavorite}
                onToolClick={handleToolClick}
              />
            ))}
          </div>
        )}
      </section>
    </div>
  );
}

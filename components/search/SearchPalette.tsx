'use client';

import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { Search, X, ArrowRight, CornerDownLeft } from 'lucide-react';
import { TOOLS } from '@/lib/tools-registry';
import { COURSE_LIST, getAllSearchableTopics } from '@/lib/learn';
import { DynamicIcon } from '@/components/icons/DynamicIcon';

interface SearchPaletteProps {
  isOpen: boolean;
  onClose: () => void;
}

interface UnifiedSearchItem {
  id: string;
  type: 'tool' | 'course' | 'topic';
  title: string;
  subtitle: string;
  badge: string;
  icon: string;
  url: string;
  keywords: string[];
}

export function SearchPalette({ isOpen, onClose }: SearchPaletteProps) {
  const [query, setQuery] = useState('');
  const [selectedIndex, setSelectedIndex] = useState(0);
  const router = useRouter();
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  // Build unified index once
  const allItems: UnifiedSearchItem[] = useMemo(() => {
    const list: UnifiedSearchItem[] = [];

    // 1. Tools
    for (const tool of TOOLS) {
      list.push({
        id: `tool-${tool.slug}`,
        type: 'tool',
        title: tool.name,
        subtitle: tool.shortDescription,
        badge: tool.slug === 'compiler' ? 'Online IDE' : tool.categoryLabel,
        icon: tool.icon,
        url:
          tool.category === 'converters'
            ? `/converters/${tool.slug}`
            : tool.category === 'compressors'
            ? `/compressors/${tool.slug}`
            : `/tools/${tool.slug}`,
        keywords: [
          tool.name.toLowerCase(),
          tool.categoryLabel.toLowerCase(),
          ...tool.keywords.map((k) => k.toLowerCase()),
        ],
      });
    }

    // 2. Language Courses
    for (const course of COURSE_LIST) {
      list.push({
        id: `course-${course.slug}`,
        type: 'course',
        title: `Learn ${course.name} Programming`,
        subtitle: course.shortDescription,
        badge: 'Course',
        icon: course.icon,
        url: `/learn/${course.slug}`,
        keywords: [
          course.name.toLowerCase(),
          course.slug,
          `${course.name.toLowerCase()} tutorial`,
          `${course.name.toLowerCase()} programming`,
          'btech syllabus',
          'learn',
        ],
      });
    }

    // 3. Learning Topics (Pointers, OOP, STL, Interfaces, etc.)
    const topics = getAllSearchableTopics();
    for (const topic of topics) {
      list.push({
        id: `topic-${topic.courseSlug}-${topic.topicId}`,
        type: 'topic',
        title: `${topic.courseName}: ${topic.topicTitle}`,
        subtitle: topic.summary,
        badge: `${topic.courseName} Topic`,
        icon: 'BookOpen',
        url: `/learn/${topic.courseSlug}#${topic.topicId}`,
        keywords: [
          topic.courseName.toLowerCase(),
          topic.courseSlug,
          topic.topicTitle.toLowerCase(),
          topic.topicId,
          ...topic.keywords,
        ],
      });
    }

    return list;
  }, []);

  // Filter items matching query
  const filteredItems = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) {
      // Default view: all tools + courses
      return allItems.filter((i) => i.type !== 'topic');
    }

    const queryParts = q.split(/\s+/).filter(Boolean);

    return allItems.filter((item) => {
      const matchTitle = item.title.toLowerCase();
      const matchSubtitle = item.subtitle.toLowerCase();
      const matchBadge = item.badge.toLowerCase();

      return queryParts.every(
        (part) =>
          matchTitle.includes(part) ||
          matchSubtitle.includes(part) ||
          matchBadge.includes(part) ||
          item.keywords.some((k) => k.includes(part))
      );
    });
  }, [allItems, query]);

  // Keep selected index within bounds
  const clampedIndex = Math.min(selectedIndex, Math.max(0, filteredItems.length - 1));

  const handleSelect = useCallback(
    (item: UnifiedSearchItem) => {
      onClose();
      setQuery('');
      setSelectedIndex(0);
      router.push(item.url);
    },
    [onClose, router]
  );

  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if (!isOpen) return;

      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
      } else if (e.key === 'ArrowDown') {
        e.preventDefault();
        setSelectedIndex((prev) => (prev + 1 < filteredItems.length ? prev + 1 : 0));
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        setSelectedIndex((prev) => (prev - 1 >= 0 ? prev - 1 : filteredItems.length - 1));
      } else if (e.key === 'Enter') {
        e.preventDefault();
        if (filteredItems[clampedIndex]) {
          handleSelect(filteredItems[clampedIndex]);
        }
      }
    }

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, clampedIndex, filteredItems, handleSelect, onClose]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 px-4 bg-zinc-950/60 backdrop-blur-sm animate-in fade-in duration-150">
      <div
        className="w-full max-w-2xl rounded-2xl border border-zinc-200 dark:border-[#1F2937] bg-white dark:bg-[#0D1117] shadow-2xl overflow-hidden flex flex-col max-h-[80vh] animate-in zoom-in-95 duration-150"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Search Input Bar */}
        <div className="flex items-center gap-3 px-4 py-3.5 border-b border-zinc-200 dark:border-[#1F2937]">
          <Search className="w-5 h-5 text-zinc-400 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
            placeholder="Search tools & tutorials (e.g. pointers, c++ stl, java oop, typescript interface)..."
            className="flex-1 bg-transparent text-sm sm:text-base text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-400 focus:outline-none"
          />
          {query && (
            <button
              type="button"
              onClick={() => {
                setQuery('');
                setSelectedIndex(0);
              }}
              className="text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200"
            >
              <X className="w-4 h-4" />
            </button>
          )}
          <kbd className="hidden sm:inline-block px-1.5 py-0.5 text-[10px] font-mono font-medium rounded border border-zinc-300 dark:border-zinc-700 bg-zinc-100 dark:bg-zinc-800 text-zinc-500 dark:text-zinc-400">
            ESC
          </kbd>
        </div>

        {/* Results List */}
        <div className="overflow-y-auto p-2 divide-y divide-transparent flex-1">
          {filteredItems.length === 0 ? (
            <div className="py-12 text-center text-sm text-zinc-500 dark:text-zinc-400">
              No developer tools or tutorials found matching &ldquo;{query}&rdquo;.
            </div>
          ) : (
            filteredItems.map((item, idx) => {
              const isSelected = idx === clampedIndex;
              return (
                <div
                  key={item.id}
                  onClick={() => handleSelect(item)}
                  onMouseEnter={() => setSelectedIndex(idx)}
                  className={`flex items-center justify-between p-3 rounded-xl cursor-pointer transition-colors ${
                    isSelected
                      ? 'bg-blue-50 dark:bg-[#172033] text-blue-950 dark:text-[#F8FAFC]'
                      : 'hover:bg-zinc-100 dark:hover:bg-[#111827] text-zinc-800 dark:text-[#E2E8F0]'
                  }`}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <div
                      className={`w-9 h-9 rounded-lg flex items-center justify-center shrink-0 ${
                        isSelected
                          ? 'bg-primary text-white'
                          : item.type === 'course'
                          ? 'bg-blue-500/10 text-blue-600 dark:text-blue-400'
                          : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400'
                      }`}
                    >
                      <DynamicIcon name={item.icon} className="w-4 h-4" />
                    </div>
                    <div className="min-w-0">
                      <div className="flex items-center gap-2">
                        <span className="text-sm font-semibold truncate">{item.title}</span>
                        <span
                          className={`text-[10px] uppercase font-bold tracking-wider px-1.5 py-0.5 rounded border ${
                            item.type === 'course'
                              ? 'bg-blue-500/10 text-blue-700 dark:text-blue-300 border-blue-500/20'
                              : item.type === 'topic'
                              ? 'bg-blue-500/10 text-blue-700 dark:text-blue-300 border-blue-500/20'
                              : 'bg-zinc-200 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 border-zinc-300 dark:border-zinc-700'
                          }`}
                        >
                          {item.badge}
                        </span>
                      </div>
                      <p className="text-xs text-zinc-500 dark:text-zinc-400 truncate mt-0.5">
                        {item.subtitle}
                      </p>
                    </div>
                  </div>

                  <div className="shrink-0 flex items-center gap-2 pl-3">
                    {isSelected && (
                      <span className="text-xs text-blue-600 dark:text-blue-400 hidden sm:flex items-center gap-1 font-medium">
                        Open <CornerDownLeft className="w-3 h-3" />
                      </span>
                    )}
                    <ArrowRight className="w-4 h-4 text-zinc-400" />
                  </div>
                </div>
              );
            })
          )}
        </div>

        {/* Footer shortcuts */}
        <div className="px-4 py-2.5 border-t border-zinc-200 dark:border-[#1F2937] bg-zinc-50 dark:bg-[#090D14] text-[11px] text-[#94A3B8] flex items-center justify-between">
          <div className="flex items-center gap-3">
            <span>
              <kbd className="px-1 py-0.5 rounded border border-zinc-300 dark:border-[#1F2937] bg-white dark:bg-[#151B24] text-zinc-600 dark:text-[#E2E8F0] font-mono">
                ↑
              </kbd>{' '}
              <kbd className="px-1 py-0.5 rounded border border-zinc-300 dark:border-[#1F2937] bg-white dark:bg-[#151B24] text-zinc-600 dark:text-[#E2E8F0] font-mono">
                ↓
              </kbd>{' '}
              Navigate
            </span>
            <span>
              <kbd className="px-1.5 py-0.5 rounded border border-zinc-300 dark:border-[#1F2937] bg-white dark:bg-[#151B24] text-zinc-600 dark:text-[#E2E8F0] font-mono">
                ↵
              </kbd>{' '}
              Select
            </span>
          </div>
          <span className="hidden sm:inline">Unified tools & tutorial search</span>
        </div>
      </div>
    </div>
  );
}

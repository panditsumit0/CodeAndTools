'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import {
  Terminal,
  Search,
  Menu,
  X,
  ShieldCheck,
  ChevronRight,
  ChevronDown,
  BookOpen,
  Code2,
  Coffee,
  Braces,
  Sparkles,
} from 'lucide-react';
import { ThemeToggle } from '@/components/theme/ThemeToggle';
import { SearchPalette } from '@/components/search/SearchPalette';

function subscribeNoop() {
  return () => {};
}
function getIsMacSnapshot() {
  return typeof navigator !== 'undefined' && navigator.userAgent.toLowerCase().includes('mac');
}
function getIsMacServerSnapshot() {
  return false;
}

export function Navbar() {
  const [searchOpen, setSearchOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [learnDropdownOpen, setLearnDropdownOpen] = useState(false);
  const [mobileLearnOpen, setMobileLearnOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const isMac = React.useSyncExternalStore(subscribeNoop, getIsMacSnapshot, getIsMacServerSnapshot);
  const pathname = usePathname();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setSearchOpen((prev) => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setLearnDropdownOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  // Close menus on navigation
  const handleNavClick = () => {
    setMobileMenuOpen(false);
    setLearnDropdownOpen(false);
  };

  const learnItems = [
    { label: 'C Programming', href: '/learn/c', desc: 'Pointers, memory & systems', icon: Code2 },
    { label: 'C++ Programming', href: '/learn/cpp', desc: 'OOP, STL & DSA', icon: Code2 },
    { label: 'Java', href: '/learn/java', desc: 'Enterprise OOP & Collections', icon: Coffee },
    { label: 'Python', href: '/learn/python', desc: 'Readability, scripting & AI/ML', icon: Terminal },
    { label: 'TypeScript', href: '/learn/typescript', desc: 'Type-safe modern web & React', icon: Braces },
  ];

  return (
    <>
      <header className="sticky top-0 z-40 w-full border-b border-zinc-200 dark:border-[#1F2937] bg-white/85 dark:bg-[#070A0F]/85 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex items-center gap-6">
          <Link
              href="/"
              onClick={handleNavClick}
              aria-label="Code&Tools home"
              className="flex items-center gap-2 group focus:outline-none focus:ring-2 focus:ring-blue-500/40 rounded-lg p-1 transition-all"
            >
              {/* Icon mark — always visible */}
              <div className="relative w-9 h-9 shrink-0 group-hover:scale-105 group-hover:brightness-110 transition-all duration-200">
                <Image
                  src="/branding/devforge-icon.png"
                  alt="Code&Tools icon"
                  width={36}
                  height={36}
                  priority
                  className="w-full h-full object-contain"
                />
              </div>
              {/* Wordmark — hidden on very small screens */}
              <span className="hidden sm:flex flex-col leading-none">
                <span className="font-extrabold text-base tracking-tight text-zinc-900 dark:text-white">
                  Code&Tools
                </span>
                <span className="text-[9px] font-semibold tracking-widest uppercase text-blue-500/80 dark:text-blue-400/80">
                  Build. Learn. Create.
                </span>
              </span>
            </Link>

            {/* Desktop Navigation Links */}
            <nav className="hidden md:flex items-center gap-1 text-sm font-medium">
              <Link
                href="/tools"
                className={`px-3 py-1.5 rounded-lg transition-colors ${
                  pathname === '/tools' || (pathname.startsWith('/tools') && pathname !== '/tools/compiler')
                    ? 'text-blue-600 dark:text-blue-400 bg-blue-50/80 dark:bg-blue-500/10 font-semibold'
                    : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-[#111827]'
                }`}
              >
                Tools
              </Link>

              <Link
                href="/converters"
                className={`px-3 py-1.5 rounded-lg transition-colors ${
                  pathname.startsWith('/converters')
                    ? 'text-blue-600 dark:text-blue-400 bg-blue-50/80 dark:bg-blue-500/10 font-semibold'
                    : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-[#111827]'
                }`}
              >
                Converters
              </Link>

              <Link
                href="/compressors"
                className={`px-3 py-1.5 rounded-lg transition-colors ${
                  pathname.startsWith('/compressors')
                    ? 'text-blue-600 dark:text-blue-400 bg-blue-50/80 dark:bg-blue-500/10 font-semibold'
                    : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-[#111827]'
                }`}
              >
                Compressors
              </Link>

              {/* AI Assistant — prominent link */}
              <Link
                href="/ai"
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl transition-all border ${
                  pathname.startsWith('/ai')
                    ? 'text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-950/30 font-semibold border-blue-200 dark:border-blue-800/60'
                    : 'text-zinc-600 dark:text-zinc-400 hover:text-blue-600 dark:hover:text-blue-400 bg-transparent border-transparent hover:border-blue-200 dark:hover:border-blue-800/60 hover:bg-blue-50/60 dark:hover:bg-blue-950/20'
                }`}
              >
                <Sparkles className="w-3.5 h-3.5 text-blue-500" />
                AI
              </Link>

              {/* Learn Dropdown */}
              <div className="relative" ref={dropdownRef}>
                <button
                  type="button"
                  onClick={() => setLearnDropdownOpen((prev) => !prev)}
                  className={`inline-flex items-center gap-1 px-3 py-1.5 rounded-lg transition-colors ${
                    pathname.startsWith('/learn')
                      ? 'text-blue-600 dark:text-blue-400 bg-blue-50/80 dark:bg-blue-500/10 font-semibold'
                      : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-[#111827]'
                  }`}
                  aria-expanded={learnDropdownOpen}
                >
                  <BookOpen className="w-4 h-4 text-blue-500 mr-0.5" />
                  <span>Learn</span>
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-150 ${learnDropdownOpen ? 'rotate-180' : ''}`} />
                </button>

                {learnDropdownOpen && (
                  <div className="absolute left-0 top-full mt-2 w-72 rounded-2xl border border-zinc-200 dark:border-[#1F2937] bg-white dark:bg-[#0D1117] shadow-xl shadow-zinc-900/10 dark:shadow-black/60 p-2 animate-in fade-in zoom-in-95 duration-100">
                    <div className="px-3 py-2 text-[11px] font-bold uppercase tracking-wider text-zinc-400 border-b border-zinc-100 dark:border-[#1F2937] mb-1 flex items-center justify-between">
                      <span>B.Tech Tutorials</span>
                      <Link
                        href="/learn"
                        onClick={handleNavClick}
                        className="text-blue-600 dark:text-blue-400 hover:underline normal-case font-semibold"
                      >
                        All Guides →
                      </Link>
                    </div>

                    {learnItems.map((item) => {
                      const Icon = item.icon;
                      const isItemActive = pathname === item.href;
                      return (
                        <Link
                          key={item.href}
                          href={item.href}
                          onClick={handleNavClick}
                          className={`flex items-start gap-2.5 p-2 rounded-xl transition-colors ${
                            isItemActive
                              ? 'bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400'
                              : 'hover:bg-zinc-100 dark:hover:bg-zinc-900 text-zinc-700 dark:text-zinc-200'
                          }`}
                        >
                          <div className="w-7 h-7 rounded-lg bg-zinc-100 dark:bg-zinc-800 text-blue-600 dark:text-blue-400 flex items-center justify-center shrink-0 mt-0.5">
                            <Icon className="w-3.5 h-3.5" />
                          </div>
                          <div>
                            <div className="text-xs font-semibold">{item.label}</div>
                            <div className="text-[11px] text-zinc-500 dark:text-zinc-400 leading-tight">
                              {item.desc}
                            </div>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>

              {/* Prominent Compiler Link */}
              <Link
                href="/tools/compiler"
                className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl transition-all ${
                  pathname === '/tools/compiler'
                    ? 'text-blue-600 dark:text-blue-400 bg-blue-500/10 font-bold border border-blue-500/30'
                    : 'text-zinc-700 dark:text-zinc-200 hover:text-blue-600 dark:hover:text-blue-400 bg-zinc-100/80 dark:bg-[#0D1117] border border-zinc-200 dark:border-[#1F2937] hover:border-blue-500/30 hover:bg-[#111827]'
                }`}
              >
                <Terminal className="w-3.5 h-3.5 text-blue-500 stroke-[2.5]" />
                <span className="font-semibold">Compiler</span>
                <span className="flex h-1.5 w-1.5 rounded-full bg-blue-500 animate-pulse" />
              </Link>

              <Link
                href="/about"
                className={`px-3 py-1.5 rounded-lg transition-colors ${
                  pathname === '/about'
                    ? 'text-blue-600 dark:text-blue-400 bg-blue-50/80 dark:bg-blue-500/10 font-semibold'
                    : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-[#111827]'
                }`}
              >
                About
              </Link>
            </nav>
          </div>

          {/* Right Side Controls */}
          <div className="flex items-center gap-2 sm:gap-3">
            {/* Search Trigger Button */}
            <button
              type="button"
              onClick={() => setSearchOpen(true)}
              className="flex items-center gap-2 px-3 py-1.5 rounded-xl border border-zinc-200 dark:border-[#1F2937] bg-zinc-50 dark:bg-[#0D1117] border-zinc-200 dark:border-[#1F2937] text-zinc-500 dark:text-zinc-400 hover:border-zinc-300 dark:hover:border-zinc-700 hover:bg-zinc-100 dark:hover:bg-[#111827] hover:text-zinc-800 dark:hover:text-zinc-200 transition-colors text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/40"
              aria-label="Search tools"
            >
              <Search className="w-4 h-4 text-zinc-400" />
              <span className="hidden sm:inline">Search tools & topics...</span>
              <span className="inline sm:hidden">Search</span>
              <kbd className="hidden sm:inline-flex items-center px-1.5 py-0.5 text-[10px] font-mono rounded border border-zinc-300 dark:border-zinc-700 bg-white dark:bg-zinc-800 text-zinc-500 dark:text-zinc-400">
                {isMac ? '⌘K' : 'Ctrl+K'}
              </kbd>
            </button>

            {/* Theme Toggle */}
            <ThemeToggle />

            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg border border-zinc-200 dark:border-[#1F2937] bg-zinc-50 dark:bg-[#0D1117] text-zinc-700 dark:text-zinc-300 border-zinc-200 dark:border-[#1F2937] hover:text-zinc-900 dark:hover:text-white transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-zinc-200 dark:border-[#1F2937] bg-white dark:bg-[#070A0F] px-4 pt-3 pb-5 space-y-2 animate-in slide-in-from-top-2 duration-150">
            <Link
              href="/tools"
              onClick={handleNavClick}
              className={`flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                pathname === '/tools'
                  ? 'bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400'
                  : 'text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-[#111827]'
              }`}
            >
              <span>Tools</span>
              <ChevronRight className="w-4 h-4 text-zinc-400" />
            </Link>

            <Link
              href="/converters"
              onClick={handleNavClick}
              className={`flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                pathname.startsWith('/converters')
                  ? 'bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400'
                  : 'text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-[#111827]'
              }`}
            >
              <span>Converters</span>
              <ChevronRight className="w-4 h-4 text-zinc-400" />
            </Link>

            <Link
              href="/compressors"
              onClick={handleNavClick}
              className={`flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                pathname.startsWith('/compressors')
                  ? 'bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400'
                  : 'text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-[#111827]'
              }`}
            >
              <span>Compressors</span>
              <ChevronRight className="w-4 h-4 text-zinc-400" />
            </Link>

            {/* AI Assistant in Mobile */}
            <Link
              href="/ai"
              onClick={handleNavClick}
              className={`flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-medium transition-colors border ${
                pathname.startsWith('/ai')
                  ? 'bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 border-blue-200 dark:border-blue-800'
                  : 'text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-[#111827] border-transparent'
              }`}
            >
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-blue-500" />
                <span>AI Assistant</span>
              </div>
              <ChevronRight className="w-4 h-4 text-zinc-400" />
            </Link>

            {/* Prominent Compiler in Mobile */}
            <Link
              href="/tools/compiler"
              onClick={handleNavClick}
              className={`flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-bold border ${
                pathname === '/tools/compiler'
                  ? 'bg-blue-600 text-white border-blue-500'
                  : 'bg-blue-500/10 text-blue-700 dark:text-blue-300 border-blue-500/25'
              }`}
            >
              <div className="flex items-center gap-2">
                <Terminal className="w-4 h-4 stroke-[2.5]" />
                <span>Code&Tools Compiler (Online IDE)</span>
              </div>
              <ChevronRight className="w-4 h-4" />
            </Link>

            {/* Learn Submenu in Mobile */}
            <div className="rounded-xl border border-zinc-200 dark:border-[#1F2937] p-2 space-y-1 bg-zinc-50/50 dark:bg-[#0D1117]">
              <button
                type="button"
                onClick={() => setMobileLearnOpen(!mobileLearnOpen)}
                className="w-full flex items-center justify-between px-2 py-1.5 text-sm font-semibold text-zinc-800 dark:text-zinc-200"
              >
                <div className="flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-blue-500" />
                  <span>Learn Languages</span>
                </div>
                <ChevronDown className={`w-4 h-4 transition-transform ${mobileLearnOpen ? 'rotate-180' : ''}`} />
              </button>

              {mobileLearnOpen && (
                <div className="pt-2 pl-6 space-y-1.5 border-t border-zinc-200 dark:border-[#1F2937]">
                  <Link
                    href="/learn"
                    onClick={handleNavClick}
                    className="block text-xs font-semibold text-blue-600 dark:text-blue-400 py-1"
                  >
                    Comparison Overview →
                  </Link>
                  {learnItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={handleNavClick}
                      className="block text-xs text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white py-1"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/about"
              onClick={handleNavClick}
              className={`flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                pathname === '/about'
                  ? 'bg-blue-50 dark:bg-blue-500/10 text-blue-600 dark:text-blue-400'
                  : 'text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-[#111827]'
              }`}
            >
              <span>About</span>
              <ChevronRight className="w-4 h-4 text-zinc-400" />
            </Link>

            <div className="pt-3 border-t border-zinc-200 dark:border-[#1F2937] flex items-center justify-center text-xs text-zinc-500 px-3">
              <span className="flex items-center gap-1.5 text-blue-600 dark:text-blue-400 font-medium">
                <ShieldCheck className="w-4 h-4" />
                100% Client-Side Privacy
              </span>
            </div>
          </div>
        )}
      </header>

      {/* Global Search Palette */}
      <SearchPalette isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}

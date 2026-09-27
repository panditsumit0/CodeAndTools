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
  ExternalLink,
  Sparkles,
} from 'lucide-react';
import { GithubIcon } from '@/components/icons/GithubIcon';
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
      <header className="sticky top-0 z-40 w-full border-b border-zinc-200/80 dark:border-zinc-800/80 bg-white/80 dark:bg-zinc-950/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between gap-4">
          {/* Logo */}
          <div className="flex items-center gap-6">
          <Link
              href="/"
              onClick={handleNavClick}
              aria-label="DevForge home"
              className="flex items-center gap-2 group focus:outline-none focus:ring-2 focus:ring-blue-500/40 rounded-lg p-1 transition-all"
            >
              {/* Icon mark — always visible */}
              <div className="relative w-9 h-9 shrink-0 group-hover:scale-105 group-hover:brightness-110 transition-all duration-200">
                <Image
                  src="/branding/devforge-icon.png"
                  alt="DevForge icon"
                  width={36}
                  height={36}
                  priority
                  className="w-full h-full object-contain"
                />
              </div>
              {/* Wordmark — hidden on very small screens */}
              <span className="hidden sm:flex flex-col leading-none">
                <span className="font-extrabold text-base tracking-tight text-zinc-900 dark:text-white">
                  DevForge
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
                    ? 'text-emerald-600 dark:text-emerald-400 bg-emerald-50/60 dark:bg-emerald-950/30 font-semibold'
                    : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800/60'
                }`}
              >
                Tools
              </Link>

              <Link
                href="/converters"
                className={`px-3 py-1.5 rounded-lg transition-colors ${
                  pathname.startsWith('/converters')
                    ? 'text-emerald-600 dark:text-emerald-400 bg-emerald-50/60 dark:bg-emerald-950/30 font-semibold'
                    : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800/60'
                }`}
              >
                Converters
              </Link>

              <Link
                href="/compressors"
                className={`px-3 py-1.5 rounded-lg transition-colors ${
                  pathname.startsWith('/compressors')
                    ? 'text-emerald-600 dark:text-emerald-400 bg-emerald-50/60 dark:bg-emerald-950/30 font-semibold'
                    : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800/60'
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
                      ? 'text-emerald-600 dark:text-emerald-400 bg-emerald-50/60 dark:bg-emerald-950/30 font-semibold'
                      : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800/60'
                  }`}
                  aria-expanded={learnDropdownOpen}
                >
                  <BookOpen className="w-4 h-4 text-emerald-500 mr-0.5" />
                  <span>Learn</span>
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-150 ${learnDropdownOpen ? 'rotate-180' : ''}`} />
                </button>

                {learnDropdownOpen && (
                  <div className="absolute left-0 top-full mt-2 w-72 rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 shadow-xl shadow-zinc-900/10 dark:shadow-black/40 p-2 animate-in fade-in zoom-in-95 duration-100">
                    <div className="px-3 py-2 text-[11px] font-bold uppercase tracking-wider text-zinc-400 border-b border-zinc-100 dark:border-zinc-800/80 mb-1 flex items-center justify-between">
                      <span>B.Tech Tutorials</span>
                      <Link
                        href="/learn"
                        onClick={handleNavClick}
                        className="text-emerald-600 dark:text-emerald-400 hover:underline normal-case font-semibold"
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
                              ? 'bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400'
                              : 'hover:bg-zinc-100 dark:hover:bg-zinc-900 text-zinc-700 dark:text-zinc-200'
                          }`}
                        >
                          <div className="w-7 h-7 rounded-lg bg-zinc-100 dark:bg-zinc-800 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shrink-0 mt-0.5">
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
                    ? 'text-emerald-600 dark:text-emerald-400 bg-emerald-500/10 font-bold border border-emerald-500/30'
                    : 'text-zinc-700 dark:text-zinc-200 hover:text-emerald-600 dark:hover:text-emerald-400 bg-zinc-100/80 dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 hover:border-emerald-500/30'
                }`}
              >
                <Terminal className="w-3.5 h-3.5 text-emerald-500 stroke-[2.5]" />
                <span className="font-semibold">Compiler</span>
                <span className="flex h-1.5 w-1.5 rounded-full bg-emerald-500 animate-pulse" />
              </Link>

              <Link
                href="/about"
                className={`px-3 py-1.5 rounded-lg transition-colors ${
                  pathname === '/about'
                    ? 'text-emerald-600 dark:text-emerald-400 bg-emerald-50/60 dark:bg-emerald-950/30 font-semibold'
                    : 'text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800/60'
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
              className="flex items-center gap-2 px-3 py-1.5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/90 text-zinc-500 dark:text-zinc-400 hover:border-zinc-300 dark:hover:border-zinc-700 hover:text-zinc-800 dark:hover:text-zinc-200 transition-colors text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500/40"
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

            {/* GitHub Button */}
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white hover:border-zinc-300 dark:hover:border-zinc-700 transition-colors focus:outline-none focus:ring-2 focus:ring-emerald-500/40"
              aria-label="GitHub Repository"
            >
              <GithubIcon className="w-4 h-4" />
            </a>

            {/* Mobile Menu Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white transition-colors"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden border-t border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-950 px-4 pt-3 pb-5 space-y-2 animate-in slide-in-from-top-2 duration-150">
            <Link
              href="/tools"
              onClick={handleNavClick}
              className={`flex items-center justify-between px-3 py-2.5 rounded-xl text-sm font-medium transition-colors ${
                pathname === '/tools'
                  ? 'bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400'
                  : 'text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-900'
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
                  ? 'bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400'
                  : 'text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-900'
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
                  ? 'bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400'
                  : 'text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-900'
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
                  : 'text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-900 border-transparent'
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
                  ? 'bg-emerald-600 text-white border-emerald-500'
                  : 'bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border-emerald-500/25'
              }`}
            >
              <div className="flex items-center gap-2">
                <Terminal className="w-4 h-4 stroke-[2.5]" />
                <span>DevForge Compiler (Online IDE)</span>
              </div>
              <ChevronRight className="w-4 h-4" />
            </Link>

            {/* Learn Submenu in Mobile */}
            <div className="rounded-xl border border-zinc-100 dark:border-zinc-800 p-2 space-y-1 bg-zinc-50/50 dark:bg-zinc-900/40">
              <button
                type="button"
                onClick={() => setMobileLearnOpen(!mobileLearnOpen)}
                className="w-full flex items-center justify-between px-2 py-1.5 text-sm font-semibold text-zinc-800 dark:text-zinc-200"
              >
                <div className="flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-emerald-500" />
                  <span>Learn Languages</span>
                </div>
                <ChevronDown className={`w-4 h-4 transition-transform ${mobileLearnOpen ? 'rotate-180' : ''}`} />
              </button>

              {mobileLearnOpen && (
                <div className="pt-2 pl-6 space-y-1.5 border-t border-zinc-200 dark:border-zinc-800">
                  <Link
                    href="/learn"
                    onClick={handleNavClick}
                    className="block text-xs font-semibold text-emerald-600 dark:text-emerald-400 py-1"
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
                  ? 'bg-emerald-50 dark:bg-emerald-950/40 text-emerald-600 dark:text-emerald-400'
                  : 'text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-900'
              }`}
            >
              <span>About</span>
              <ChevronRight className="w-4 h-4 text-zinc-400" />
            </Link>

            <div className="pt-3 border-t border-zinc-200 dark:border-zinc-800 flex items-center justify-between text-xs text-zinc-500 px-3">
              <span className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400">
                <ShieldCheck className="w-4 h-4" />
                100% Client-Side Privacy
              </span>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 text-zinc-600 dark:text-zinc-400 hover:underline"
              >
                GitHub <ExternalLink className="w-3 h-3" />
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Global Search Palette */}
      <SearchPalette isOpen={searchOpen} onClose={() => setSearchOpen(false)} />
    </>
  );
}

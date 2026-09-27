import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Lock } from 'lucide-react';

export function Footer() {
  return (
    <footer className="border-t border-zinc-200 dark:border-[#1F2937] bg-zinc-50 dark:bg-[#070A0F] text-zinc-600 dark:text-zinc-400 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand info */}
          <div className="md:col-span-2 space-y-3">
            <Link
              href="/"
              aria-label="DevForge home"
              className="flex items-center gap-3 group"
            >
              <div className="relative w-10 h-10 shrink-0 group-hover:scale-105 group-hover:brightness-110 transition-all duration-200">
                <Image
                  src="/branding/devforge-icon.png"
                  alt="DevForge — Build. Learn. Create."
                  width={40}
                  height={40}
                  className="w-full h-full object-contain"
                />
              </div>
              <span className="flex flex-col leading-none">
                <span className="font-extrabold text-lg text-zinc-900 dark:text-white">DevForge</span>
                <span className="text-[10px] font-semibold tracking-widest uppercase text-blue-500/70 dark:text-blue-400/70">Build. Learn. Create.</span>
              </span>
            </Link>
            <p className="text-sm text-zinc-600 dark:text-zinc-400 max-w-sm leading-relaxed">
              A complete toolkit for developers and B.Tech students. Private, browser-based, zero server uploads.
            </p>
            <div className="flex items-center gap-2 pt-1">
              <span className="inline-flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 border border-blue-500/20">
                <Lock className="w-3 h-3" />
                Zero data sent to servers
              </span>
            </div>
          </div>

          {/* Tools & Categories */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-900 dark:text-zinc-100">
              Utilities
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/tools" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  All Tools
                </Link>
              </li>
              <li>
                <Link href="/tools/json-formatter" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  JSON Formatter
                </Link>
              </li>
              <li>
                <Link href="/tools/jwt-decoder" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  JWT Decoder
                </Link>
              </li>
              <li>
                <Link href="/tools/regex-tester" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Regex Tester
                </Link>
              </li>
              <li>
                <Link href="/tools/hash-generator" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Hash Generator
                </Link>
              </li>
            </ul>
          </div>

          {/* Navigation & Legal */}
          <div className="space-y-3">
            <h4 className="text-xs font-semibold uppercase tracking-wider text-zinc-900 dark:text-zinc-100">
              Project
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  About DevForge
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link href="/categories" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                  Browse Categories
                </Link>
              </li>
              
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-zinc-200 dark:border-[#1F2937] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs">
          <p className="text-zinc-500">
            &copy; {new Date().getFullYear()} DevForge. Build. Learn. Create.
          </p>
          <div className="flex items-center gap-1 text-zinc-500">
            <span>Crafted with privacy in mind. Everything stays in your browser.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

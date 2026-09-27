import React from 'react';
import type { Metadata } from 'next';
import Link from 'next/link';
import {
  Zap,
  Lock,
  Cpu,
  EyeOff,
  Sparkles,
  ArrowRight,
  Terminal,
  ServerOff,
  CheckCircle2,
} from 'lucide-react';

export const metadata: Metadata = {
  title: 'About Code&Tools — Private Browser Utilities for Developers & B.Tech Students',
  description:
    'Learn about Code&Tools architecture, our zero-network-transfer privacy promise, and our developer-first philosophy.',
  openGraph: {
    title: 'About Code&Tools — Private Browser Utilities for Developers',
    description: 'Build. Learn. Create. — A complete toolkit, private and browser-based.',
  },
};

export default function AboutPage() {
  const comparison = [
    {
      feature: 'Data Processing Location',
      devkit: '100% Client-side in your browser memory',
      typical: 'Sent over HTTP to third-party cloud servers',
      isAdvantage: true,
    },
    {
      feature: 'Network Ingestion & Logging',
      devkit: 'Zero payloads or code sent over the network',
      typical: 'Logged in access logs, Sentry, or cloud analytics',
      isAdvantage: true,
    },
    {
      feature: 'Secret & JWT Privacy',
      devkit: 'Completely private — immune to MITM interception',
      typical: 'Exposed to server admin & logging middleware',
      isAdvantage: true,
    },
    {
      feature: 'Execution Speed',
      devkit: 'Sub-millisecond native JavaScript / Web Crypto',
      typical: 'Latency bottlenecked by network roundtrips',
      isAdvantage: true,
    },
    {
      feature: 'Offline Operation',
      devkit: 'Works without an active internet connection once loaded',
      typical: 'Fails immediately when offline',
      isAdvantage: true,
    },
    {
      feature: 'Account & Sign-up Requirements',
      devkit: 'None. Instant access with zero friction',
      typical: 'Forced sign-up forms, email gates, paywalls',
      isAdvantage: true,
    },
  ];

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 space-y-16">
      {/* Hero */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-semibold border border-emerald-500/20">
          <Terminal className="w-3.5 h-3.5" />
          <span>Our Mission & Architecture</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-zinc-900 dark:text-white">
          Fast, private, browser-based tools for developers.
        </h1>
        <p className="text-base sm:text-xl text-zinc-600 dark:text-zinc-400 leading-relaxed">
          Code&Tools was built with a single guiding principle: <strong>developer data belongs on developer machines</strong>.
        </p>
      </div>

      {/* Architecture Deep Dive */}
      <section className="p-8 rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900/70 shadow-lg space-y-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 flex items-center justify-center">
            <ServerOff className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-white">
              The Client-Only Architecture
            </h2>
            <p className="text-xs sm:text-sm text-zinc-500">
              Why we never process your payloads on a backend
            </p>
          </div>
        </div>

        <div className="text-sm sm:text-base text-zinc-600 dark:text-zinc-400 space-y-4 leading-relaxed">
          <p>
            Most online utility sites send your JSON payloads, bearer tokens, passwords, and database configurations straight to their backend servers. Even if unintentional, this creates enormous risks: logs get indexed, third-party CDNs inspect packets, and corporate secrets risk leakage.
          </p>
          <p>
            Code&Tools eliminates this entire vulnerability class by executing 100% of compute operations client-side in your browser. We leverage standard Web APIs:
          </p>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs sm:text-sm font-medium text-zinc-800 dark:text-zinc-200">
            <li className="flex items-start gap-2 p-3 rounded-xl bg-zinc-50 dark:bg-zinc-800/60 border border-zinc-200 dark:border-zinc-700/60">
              <Cpu className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
              <span><strong>Web Crypto API:</strong> Native hardware-accelerated SHA and UUID v4 generation directly in your browser kernel.</span>
            </li>
            <li className="flex items-start gap-2 p-3 rounded-xl bg-zinc-50 dark:bg-zinc-800/60 border border-zinc-200 dark:border-zinc-700/60">
              <Lock className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
              <span><strong>TextEncoder / TextDecoder:</strong> Memory-safe Unicode and UTF-8 Base64 conversions without Latin-1 truncations.</span>
            </li>
            <li className="flex items-start gap-2 p-3 rounded-xl bg-zinc-50 dark:bg-zinc-800/60 border border-zinc-200 dark:border-zinc-700/60">
              <EyeOff className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
              <span><strong>Zero Telemetry:</strong> No analytics tracking on input fields, no server ingestion scripts, no keylogging.</span>
            </li>
            <li className="flex items-start gap-2 p-3 rounded-xl bg-zinc-50 dark:bg-zinc-800/60 border border-zinc-200 dark:border-zinc-700/60">
              <Zap className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
              <span><strong>Instant Interactivity:</strong> Zero network roundtrip delay. Transformations execute synchronously as you type.</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Comparison Table */}
      <section className="space-y-6">
        <div>
          <h2 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-white">
            Code&Tools vs Traditional Online Tools
          </h2>
          <p className="text-xs sm:text-sm text-zinc-500 mt-1">
            An honest comparison of privacy and technical tradeoffs.
          </p>
        </div>

        <div className="overflow-x-auto rounded-2xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 shadow-sm">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead className="bg-zinc-50 dark:bg-zinc-800/80 text-zinc-700 dark:text-zinc-300 font-bold border-b border-zinc-200 dark:border-zinc-800">
              <tr>
                <th className="py-3 px-4">Feature / Metric</th>
                <th className="py-3 px-4 text-emerald-600 dark:text-emerald-400">Code&Tools</th>
                <th className="py-3 px-4 text-zinc-500">Typical Online Tool</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-zinc-200 dark:divide-zinc-800 text-zinc-700 dark:text-zinc-300">
              {comparison.map((item, idx) => (
                <tr key={idx} className="hover:bg-zinc-50 dark:hover:bg-zinc-800/40">
                  <td className="py-3 px-4 font-semibold text-zinc-900 dark:text-zinc-100">
                    {item.feature}
                  </td>
                  <td className="py-3 px-4 font-medium text-emerald-700 dark:text-emerald-300 flex items-center gap-1.5">
                    <CheckCircle2 className="w-4 h-4 text-emerald-500 shrink-0" />
                    <span>{item.devkit}</span>
                  </td>
                  <td className="py-3 px-4 text-zinc-500">{item.typical}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {/* Roadmap & Future Pro Features */}
      <section id="roadmap" className="p-8 rounded-3xl border border-zinc-200 dark:border-zinc-800 bg-zinc-50 dark:bg-zinc-900/40 space-y-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-purple-500/10 text-purple-600 dark:text-purple-400 flex items-center justify-center">
            <Sparkles className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl font-bold text-zinc-900 dark:text-white">
              Product Roadmap & Future Pro Plans
            </h2>
            <p className="text-xs sm:text-sm text-zinc-500">
              Our vision for sustaining Code&Tools without annoying ads
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs sm:text-sm">
          <div className="p-4 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 space-y-2">
            <span className="font-bold text-zinc-900 dark:text-zinc-100">Offline PWA & Desktop App</span>
            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Installable Progressive Web App and lightweight Raycast / Alfred extensions for instant native shortcut invocation.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 space-y-2">
            <span className="font-bold text-zinc-900 dark:text-zinc-100">Team Shared Presets (Code&Tools Pro)</span>
            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Encrypted end-to-end cloud sync for shared company regex libraries, curl templates, and schema validators.
            </p>
          </div>
          <div className="p-4 rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-800 space-y-2">
            <span className="font-bold text-zinc-900 dark:text-zinc-100">Local CLI Companion</span>
            <p className="text-zinc-600 dark:text-zinc-400 leading-relaxed">
              Run the exact same fast parsing engines inside your terminal via <code className="text-emerald-500">code-tools-cli</code>.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className="text-center pt-6 space-y-4">
        <h3 className="text-xl font-bold text-zinc-900 dark:text-white">
          Ready to experience frictionless utilities?
        </h3>
        <div className="flex items-center justify-center gap-3">
          <Link
            href="/tools"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm transition-all shadow-md shadow-emerald-600/20"
          >
            <span>Explore All 10 Tools</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
          <a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-zinc-200 dark:border-zinc-800 bg-white dark:bg-zinc-900 hover:bg-zinc-100 dark:hover:bg-zinc-800 text-zinc-900 dark:text-zinc-100 font-semibold text-sm transition-colors"
          >
            <span>GitHub Repository</span>
          </a>
        </div>
      </div>
    </div>
  );
}

import React from 'react';
import type { Metadata } from 'next';
import { ShieldCheck, Lock } from 'lucide-react';

export const metadata: Metadata = {
  title: 'Privacy Policy — DevForge',
  description: 'DevForge privacy policy: 100% client-side data processing, zero logging, zero telemetry.',
};

export default function PrivacyPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-20 space-y-12">
      <div className="space-y-3">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-semibold border border-emerald-500/20">
          <ShieldCheck className="w-3.5 h-3.5" />
          <span>Privacy-By-Design Guarantee</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-white">
          Privacy Policy
        </h1>
        <p className="text-sm text-zinc-500">
          Last updated: September 26, 2026 • Effective immediately
        </p>
      </div>

      <div className="p-6 rounded-2xl border border-emerald-500/30 bg-emerald-500/5 dark:bg-emerald-950/20 text-emerald-900 dark:text-emerald-200 text-sm leading-relaxed flex items-start gap-4">
        <Lock className="w-6 h-6 text-emerald-500 shrink-0 mt-0.5" />
        <div>
          <strong className="block text-base font-bold mb-1">Our Core Commitment:</strong>
          DevForge does not send your tool inputs, outputs, tokens, or files to any server. Everything is executed purely within your browser runtime using client-side JavaScript and the Web Crypto API.
        </div>
      </div>

      <div className="space-y-8 text-sm sm:text-base text-zinc-600 dark:text-zinc-400 leading-relaxed">
        <section className="space-y-3">
          <h2 className="text-xl font-bold text-zinc-900 dark:text-white flex items-center gap-2">
            1. Zero Server-Side Processing
          </h2>
          <p>
            When you format JSON, decode a JWT, compute a SHA-256 digest, or encode a URL on DevForge, that data never leaves your browser window. You can disconnect your internet connection or verify in the browser Network Inspector tab that <strong>zero HTTP POST or GET requests contain your input data</strong>.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-zinc-900 dark:text-white flex items-center gap-2">
            2. Local Browser Storage
          </h2>
          <p>
            DevForge may use your browser&apos;s native <code className="text-emerald-500">localStorage</code> exclusively for:
          </p>
          <ul className="list-disc pl-5 space-y-1 text-zinc-700 dark:text-zinc-300">
            <li>Your theme preference (dark mode, light mode, or system).</li>
            <li>Optional user UI preferences (e.g. indentation spacing).</li>
          </ul>
          <p>
            None of this storage is synced to our servers or accessible to anyone outside your local machine.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-zinc-900 dark:text-white flex items-center gap-2">
            3. No Tracking & No Third-Party Ad Trackers
          </h2>
          <p>
            We do not embed third-party surveillance scripts, cross-site cookies, pixel trackers, or fingerprinting code. We do not sell developer data because we do not collect developer data.
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-zinc-900 dark:text-white flex items-center gap-2">
            4. Cryptographic Operations
          </h2>
          <p>
            For hashing (SHA-256, SHA-384, SHA-512) and UUID generation, DevForge uses the standardized W3C <code className="text-emerald-500">window.crypto</code> API, which invokes your operating system&apos;s CSPRNG (Cryptographically Secure Pseudo-Random Number Generator).
          </p>
        </section>

        <section className="space-y-3">
          <h2 className="text-xl font-bold text-zinc-900 dark:text-white flex items-center gap-2">
            5. Contact
          </h2>
          <p>
            If you have questions, security audits, or concerns regarding DevForge&apos;s client-side implementation, inspect the open source code on GitHub or open an issue.
          </p>
        </section>
      </div>
    </div>
  );
}

import React from "react";
import type { Metadata } from "next";
import { ToolsExplorer } from "@/components/tools/ToolsExplorer";
import { Terminal } from "lucide-react";
import { buildMetadata, getBreadcrumbJsonLd } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "All Developer Tools — JSON, JWT, Base64, UUID & Regex Utilities",
  description:
    "Browse 100% private, browser-based utilities for software engineers: JSON formatter, JWT decoder, Base64 encoder, UUID generator, Regex tester, and more.",
  path: "/tools",
  keywords: [
    "all developer tools",
    "developer utilities directory",
    "json formatter online",
    "jwt decoder free",
    "base64 encoder online",
    "regex tester client-side",
    "uuid generator v4",
  ],
});

export default function ToolsPage() {
  const breadcrumbSchema = getBreadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Developer Tools", path: "/tools" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16">
        {/* Page Title & Intro */}
        <div className="mb-10 space-y-3">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-xs font-semibold border border-emerald-500/20">
            <Terminal className="w-3.5 h-3.5" />
            <span>Local Developer Utilities</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-900 dark:text-white">
            Developer Tools Directory
          </h1>
          <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 max-w-2xl">
            Everything runs entirely in your local browser runtime. Zero tracking, zero telemetry, zero server storage.
          </p>
        </div>

        {/* Main Explorer with Search, Filters, and Cards */}
        <ToolsExplorer />
      </div>
    </>
  );
}

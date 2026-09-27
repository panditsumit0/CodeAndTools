import React from "react";
import type { Metadata } from "next";
import { getToolsByCategory } from "@/lib/tools-registry";
import { ToolCard } from "@/components/tools/ToolCard";
import { Minimize2, ShieldCheck, Zap, Sparkles, CheckCircle2 } from "lucide-react";

export const metadata: Metadata = {
  title: "Online File Compressors | Code&Tools",
  description:
    "Compress images, optimize PDF files, and build ZIP archives directly in your browser. 100% private, free, and runs locally with zero uploads.",
  openGraph: {
    title: "Online File Compressors | Code&Tools",
    description: "Fast, 100% private browser-based file compression tools.",
    url: "https://devkit.dev/compressors",
  },
};

export default function CompressorsHubPage() {
  const compressorTools = getToolsByCategory("compressors");

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-12">
      {/* Hero Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-teal-500/10 text-teal-600 dark:text-teal-400 text-xs font-semibold border border-teal-500/20">
          <Minimize2 className="w-3.5 h-3.5" />
          <span>Local File Compressors</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-foreground">
          Reduce File Size Without Losing Quality
        </h1>
        <p className="text-base sm:text-lg text-muted-foreground">
          Shrink photos, clean up bloated PDF documents, and bundle files into compact ZIP archives directly in your browser.
        </p>

        {/* Feature Highlights */}
        <div className="flex flex-wrap items-center justify-center gap-6 pt-2 text-xs text-muted-foreground font-medium">
          <div className="flex items-center gap-1.5 text-emerald-500">
            <ShieldCheck className="w-4 h-4" />
            <span>100% Private (No Uploads)</span>
          </div>
          <div className="flex items-center gap-1.5 text-teal-500">
            <Zap className="w-4 h-4" />
            <span>Instant Local Processing</span>
          </div>
          <div className="flex items-center gap-1.5 text-amber-500">
            <Sparkles className="w-4 h-4" />
            <span>Accurate Savings Stats</span>
          </div>
        </div>
      </div>

      {/* Grid of Compressors */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {compressorTools.map((tool) => (
          <ToolCard key={tool.slug} tool={tool} />
        ))}
      </div>

      {/* Comparison and Benefits */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="p-6 rounded-2xl border border-border/70 bg-card/60 backdrop-blur-sm space-y-3">
          <div className="w-10 h-10 rounded-xl bg-teal-500/10 text-teal-500 flex items-center justify-center">
            <Zap className="w-5 h-5" />
          </div>
          <h3 className="text-base font-semibold text-foreground">High-Speed Processing</h3>
          <p className="text-xs text-muted-foreground leading-relaxed">
            By leveraging HTML5 Canvas bicubic interpolation and local deflate algorithms, your files compress immediately without waiting for server network queues.
          </p>
        </div>

        <div className="p-6 rounded-2xl border border-border/70 bg-card/60 backdrop-blur-sm space-y-3">
          <div className="w-10 h-10 rounded-xl bg-emerald-500/10 text-emerald-500 flex items-center justify-center">
            <ShieldCheck className="w-5 h-5" />
          </div>
          <h3 className="text-base font-semibold text-foreground">Absolute Data Privacy</h3>
          <p className="text-xs text-muted-foreground leading-relaxed">
            Personal photos, financial statements, and contracts stay on your device. Code&Tools uses zero remote servers or telemetry on file operations.
          </p>
        </div>

        <div className="p-6 rounded-2xl border border-border/70 bg-card/60 backdrop-blur-sm space-y-3">
          <div className="w-10 h-10 rounded-xl bg-blue-500/10 text-blue-500 flex items-center justify-center">
            <CheckCircle2 className="w-5 h-5" />
          </div>
          <h3 className="text-base font-semibold text-foreground">Honest Size Reporting</h3>
          <p className="text-xs text-muted-foreground leading-relaxed">
            We display real byte counts and percentage reductions. If a file is already optimized, we let you know honestly rather than degrading your media.
          </p>
        </div>
      </div>
    </div>
  );
}

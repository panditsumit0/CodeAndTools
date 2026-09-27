import React from "react";
import type { Metadata } from "next";
import { getToolsByCategory } from "@/lib/tools-registry";
import { ToolCard } from "@/components/tools/ToolCard";
import { Repeat, ShieldCheck, Zap, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Online File Converters | Free & Private — Code&Tools",
  description:
    "Convert PDF to Word, Word to PDF, Image to PDF, JPG to PNG, WebP, and text files directly in your browser. 100% private with zero cloud uploads.",
  openGraph: {
    title: "Online File Converters | Code&Tools",
    description: "Fast, 100% private browser-based file converters.",
    url: "https://devkit.dev/converters",
  },
};

export default function ConvertersHubPage() {
  const converterTools = getToolsByCategory("converters");

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-12">
      {/* Hero Header */}
      <div className="text-center max-w-3xl mx-auto space-y-4">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 text-xs font-semibold border border-blue-500/20">
          <Repeat className="w-3.5 h-3.5" />
          <span>Client-Side File Converters</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-foreground">
          Convert Files Instantly & Privately
        </h1>
        <p className="text-base sm:text-lg text-muted-foreground">
          Transform documents and images right inside your browser. No files are ever sent to remote servers or stored in third-party clouds.
        </p>

        {/* Feature Highlights */}
        <div className="flex flex-wrap items-center justify-center gap-6 pt-2 text-xs text-muted-foreground font-medium">
          <div className="flex items-center gap-1.5 text-emerald-500">
            <ShieldCheck className="w-4 h-4" />
            <span>Zero Server Uploads</span>
          </div>
          <div className="flex items-center gap-1.5 text-blue-500">
            <Zap className="w-4 h-4" />
            <span>Instant Processing</span>
          </div>
          <div className="flex items-center gap-1.5 text-amber-500">
            <Sparkles className="w-4 h-4" />
            <span>100% Free Forever</span>
          </div>
        </div>
      </div>

      {/* Grid of Converters */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {converterTools.map((tool) => (
          <ToolCard key={tool.slug} tool={tool} />
        ))}
      </div>

      {/* Security & Architecture Explainer */}
      <div className="p-8 rounded-3xl border border-border/80 bg-card/60 backdrop-blur-sm space-y-4">
        <h2 className="text-xl font-bold text-foreground flex items-center gap-2">
          <ShieldCheck className="w-5 h-5 text-emerald-500" />
          <span>How Code&Tools Converters Protect Your Privacy</span>
        </h2>
        <p className="text-sm text-muted-foreground leading-relaxed">
          Most online file conversion services require you to upload your sensitive personal documents, resumes, and proprietary images to an unknown remote server queue. Code&Tools breaks this pattern: our conversion engines compile WebAssembly, HTML5 Canvas, and specialized open-source document engines (like <code className="text-xs bg-muted px-1.5 py-0.5 rounded font-mono">pdf-lib</code> and <code className="text-xs bg-muted px-1.5 py-0.5 rounded font-mono">docx</code>) to run completely within your local browser sandbox.
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
          <div className="p-4 rounded-xl border border-border/50 bg-background/50 text-xs space-y-1">
            <div className="font-semibold text-foreground">1. Local Memory Only</div>
            <div className="text-muted-foreground">Files are loaded into your device&apos;s RAM via File and Blob APIs.</div>
          </div>
          <div className="p-4 rounded-xl border border-border/50 bg-background/50 text-xs space-y-1">
            <div className="font-semibold text-foreground">2. Offline Capable</div>
            <div className="text-muted-foreground">Conversions run even without an active internet connection once loaded.</div>
          </div>
          <div className="p-4 rounded-xl border border-border/50 bg-background/50 text-xs space-y-1">
            <div className="font-semibold text-foreground">3. Instant Discard</div>
            <div className="text-muted-foreground">Refreshing or closing the tab immediately releases all file buffers.</div>
          </div>
        </div>
      </div>
    </div>
  );
}

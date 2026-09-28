import React from "react";
import type { Metadata } from "next";
import { getToolsByCategory } from "@/lib/tools-registry";
import { ToolCard } from "@/components/tools/ToolCard";
import { Minimize2, ShieldCheck, Zap, HardDrive } from "lucide-react";
import { buildMetadata, getBreadcrumbJsonLd } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Online File Compressors — Compress Images, PDF & ZIP Files Privately",
  description:
    "Compress images (JPEG, PNG, WebP), PDFs, and ZIP archives directly in your browser. Maximum compression ratio with 100% client-side privacy.",
  path: "/compressors",
  keywords: [
    "file compressor",
    "image compressor",
    "pdf compressor",
    "compress zip",
    "reduce pdf size",
    "compress image online",
    "client-side compressor",
    "private file compression",
  ],
});

export default function CompressorsHubPage() {
  const compressorTools = getToolsByCategory("compressors");
  const breadcrumbSchema = getBreadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "File Compressors", path: "/compressors" },
  ]);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 sm:py-16 space-y-12">
        {/* Hero Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 text-blue-600 dark:text-blue-400 text-xs font-semibold border border-blue-500/20">
            <Minimize2 className="w-3.5 h-3.5" />
            <span>High-Ratio File Compressors</span>
          </div>
          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-foreground">
            Shrink Files with Zero Quality Loss
          </h1>
          <p className="text-base sm:text-lg text-muted-foreground">
            Reduce file sizes on your device instantly. Images, PDF documents, and archives compressed without uploading a single byte to remote servers.
          </p>

          {/* Highlights */}
          <div className="flex flex-wrap items-center justify-center gap-6 pt-2 text-xs text-muted-foreground font-medium">
            <div className="flex items-center gap-1.5 text-emerald-500">
              <ShieldCheck className="w-4 h-4" />
              <span>100% Client-Side Privacy</span>
            </div>
            <div className="flex items-center gap-1.5 text-blue-500">
              <HardDrive className="w-4 h-4" />
              <span>Save Storage Space</span>
            </div>
            <div className="flex items-center gap-1.5 text-amber-500">
              <Zap className="w-4 h-4" />
              <span>Batch File Support</span>
            </div>
          </div>
        </div>

        {/* Compressors Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {compressorTools.map((tool) => (
            <ToolCard key={tool.slug} tool={tool} />
          ))}
        </div>

        {/* Feature Explainer */}
        <div className="p-8 rounded-3xl border border-border/80 bg-card/60 backdrop-blur-sm space-y-4">
          <h2 className="text-xl font-bold text-foreground flex items-center gap-2">
            <ShieldCheck className="w-5 h-5 text-emerald-500" />
            <span>Why Client-Side File Compression Matters</span>
          </h2>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Personal photos, financial statements, and contracts stay on your device. Code&Tools uses zero remote servers or telemetry on file operations.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
            <div className="p-4 rounded-xl border border-border/50 bg-background/50 text-xs space-y-1">
              <div className="font-semibold text-foreground">No File Size Limits</div>
              <div className="text-muted-foreground">Compress large files directly utilizing your local system hardware.</div>
            </div>
            <div className="p-4 rounded-xl border border-border/50 bg-background/50 text-xs space-y-1">
              <div className="font-semibold text-foreground">Zero Bandwidth Usage</div>
              <div className="text-muted-foreground">No waiting for slow file uploads or downloads across the network.</div>
            </div>
            <div className="p-4 rounded-xl border border-border/50 bg-background/50 text-xs space-y-1">
              <div className="font-semibold text-foreground">Enterprise Safe</div>
              <div className="text-muted-foreground">Compliant with strict data privacy guidelines and zero data leakage.</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

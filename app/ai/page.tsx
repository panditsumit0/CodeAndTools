import { buildMetadata, getBreadcrumbJsonLd } from "@/lib/seo";
import type { Metadata } from 'next';
import { Sparkles } from 'lucide-react';
import { AIChatPage } from '@/components/ai/AIChatPage';

export const metadata: Metadata = buildMetadata({
  title: "AI Coding Assistant — Explain, Debug & Convert Code in Real-Time",
  description:
    "Ask Code&Tools AI to explain code, debug compiler errors, optimize algorithms, convert between programming languages, and learn engineering concepts.",
  path: "/ai",
  keywords: ["ai coding assistant", "debug code ai", "explain code", "code converter ai", "programming tutor"],
});

export default function AIPage() {
  const breadcrumbSchema = getBreadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "AI Assistant", path: "/ai" },
  ]);
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-8">
      {/* Header */}
      <div className="text-center space-y-3 max-w-2xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold uppercase tracking-wider">
          <Sparkles className="w-3.5 h-3.5" />
          <span>AI-Powered</span>
        </div>
        <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-zinc-900 dark:text-white">
          Code&Tools AI
        </h1>
        <p className="text-base sm:text-lg text-zinc-600 dark:text-zinc-400 leading-relaxed">
          Your AI assistant for coding, debugging, learning, and building.
        </p>
      </div>

      {/* AI Workspace */}
      <AIChatPage />
    </div>
    </>
  );
}

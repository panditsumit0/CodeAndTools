import React from "react";
import type { Metadata } from "next";
import { getToolBySlug } from "@/lib/tools-registry";
import { ToolLayout } from "@/components/tools/ToolLayout";
import { Compiler } from "@/components/compiler/Compiler";
import { notFound } from "next/navigation";
import {
  buildMetadata,
  getSoftwareApplicationJsonLd,
  getBreadcrumbJsonLd,
  getFaqJsonLd,
} from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Online Compiler — C, C++, Java, Python & TypeScript",
  description:
    "Compile and run C, C++, Java, Python, and TypeScript code online with Code&Tools fast browser-based IDE. Features Monaco editor, stdin input, line-numbered diagnostics, and sandboxed execution.",
  path: "/tools/compiler",
  keywords: [
    "online compiler",
    "c online compiler",
    "c++ online compiler",
    "java online compiler",
    "python online compiler",
    "typescript online compiler",
    "online code runner",
    "browser ide",
    "cloud compiler",
    "free online ide",
    "btech programming compiler",
  ],
});

export default function CompilerPage() {
  const tool = getToolBySlug("compiler");
  if (!tool) {
    notFound();
  }

  const appSchema = getSoftwareApplicationJsonLd(tool);
  const breadcrumbSchema = getBreadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Developer Tools", path: "/tools" },
    { name: "Online Compiler", path: "/tools/compiler" },
  ]);
  const faqSchema = getFaqJsonLd(tool.faq);
  const schemas = [appSchema, breadcrumbSchema, faqSchema].filter(Boolean);

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
      />
      <ToolLayout tool={tool}>
        <Compiler />
      </ToolLayout>
    </>
  );
}

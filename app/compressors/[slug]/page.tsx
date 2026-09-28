import React from "react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getToolBySlug, getToolsByCategory } from "@/lib/tools-registry";
import { ToolLayout } from "@/components/tools/ToolLayout";
import { FileCompressorWorkspace, type CompressorMode } from "@/components/compressors/FileCompressorWorkspace";
import {
  buildMetadata,
  getSoftwareApplicationJsonLd,
  getBreadcrumbJsonLd,
  getFaqJsonLd,
} from "@/lib/seo";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  const tools = getToolsByCategory("compressors");
  return tools.map((tool) => ({
    slug: tool.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const tool = getToolBySlug(slug);

  if (!tool || tool.category !== "compressors") {
    return buildMetadata({
      title: "Compressor Not Found",
      description: "The requested file compressor utility could not be found.",
      path: `/compressors/${slug}`,
      noIndex: true,
    });
  }

  return buildMetadata({
    title: `${tool.name} Online — Free & Private File Compressor`,
    description: `${tool.shortDescription} 100% private, runs entirely inside your browser with maximum compression.`,
    path: `/compressors/${tool.slug}`,
    keywords: [
      ...tool.keywords,
      "file compressor",
      "compress files online",
      "browser compressor",
      "privacy-first",
      tool.name.toLowerCase(),
    ],
  });
}

export default async function CompressorDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const tool = getToolBySlug(slug);

  if (!tool || tool.category !== "compressors") {
    notFound();
  }

  const appSchema = getSoftwareApplicationJsonLd(tool);
  const breadcrumbSchema = getBreadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Compressors", path: "/compressors" },
    { name: tool.name, path: `/compressors/${tool.slug}` },
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
        <FileCompressorWorkspace
          mode={tool.slug as CompressorMode}
          toolName={tool.name}
          toolDescription={tool.shortDescription}
        />
      </ToolLayout>
    </>
  );
}

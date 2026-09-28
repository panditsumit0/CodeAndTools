import React from "react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getToolBySlug, getToolsByCategory } from "@/lib/tools-registry";
import { ToolLayout } from "@/components/tools/ToolLayout";
import { FileConverterWorkspace, type ConverterMode } from "@/components/converters/FileConverterWorkspace";
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
  const tools = getToolsByCategory("converters");
  return tools.map((tool) => ({
    slug: tool.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const tool = getToolBySlug(slug);

  if (!tool || tool.category !== "converters") {
    return buildMetadata({
      title: "Converter Not Found",
      description: "The requested file converter utility could not be found.",
      path: `/converters/${slug}`,
      noIndex: true,
    });
  }

  return buildMetadata({
    title: `${tool.name} Online — Free & Private File Converter`,
    description: `${tool.shortDescription} 100% private, processed directly in your browser with zero server uploads.`,
    path: `/converters/${tool.slug}`,
    keywords: [
      ...tool.keywords,
      "file converter",
      "free converter",
      "browser-based",
      "privacy-first",
      tool.name.toLowerCase(),
    ],
  });
}

export default async function ConverterDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const tool = getToolBySlug(slug);

  if (!tool || tool.category !== "converters") {
    notFound();
  }

  const appSchema = getSoftwareApplicationJsonLd(tool);
  const breadcrumbSchema = getBreadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Converters", path: "/converters" },
    { name: tool.name, path: `/converters/${tool.slug}` },
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
        <FileConverterWorkspace
          mode={tool.slug as ConverterMode}
          toolName={tool.name}
          toolDescription={tool.shortDescription}
        />
      </ToolLayout>
    </>
  );
}

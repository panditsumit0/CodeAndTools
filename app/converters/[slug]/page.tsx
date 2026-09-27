import React from "react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getToolBySlug, getToolsByCategory } from "@/lib/tools-registry";
import { ToolLayout } from "@/components/tools/ToolLayout";
import { FileConverterWorkspace, type ConverterMode } from "@/components/converters/FileConverterWorkspace";

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
    return {
      title: "Converter Not Found — Code&Tools",
      description: "The requested file converter utility could not be found.",
    };
  }

  const title = `${tool.name} Online | Free & Private — Code&Tools`;
  const description = `${tool.shortDescription} 100% private, processed directly in your browser with zero server uploads.`;

  return {
    title,
    description,
    keywords: [...tool.keywords, "file converter", "free converter", "browser-based", "privacy-first"],
    openGraph: {
      title,
      description,
      type: "website",
      url: `https://devkit.dev/converters/${tool.slug}`,
      siteName: "Code&Tools",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
    alternates: {
      canonical: `https://devkit.dev/converters/${tool.slug}`,
    },
  };
}

export default async function ConverterDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const tool = getToolBySlug(slug);

  if (!tool || tool.category !== "converters") {
    notFound();
  }

  return (
    <ToolLayout tool={tool}>
      <FileConverterWorkspace
        mode={tool.slug as ConverterMode}
        toolName={tool.name}
        toolDescription={tool.shortDescription}
      />
    </ToolLayout>
  );
}

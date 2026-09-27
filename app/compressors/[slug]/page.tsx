import React from "react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { getToolBySlug, getToolsByCategory } from "@/lib/tools-registry";
import { ToolLayout } from "@/components/tools/ToolLayout";
import { FileCompressorWorkspace, type CompressorMode } from "@/components/compressors/FileCompressorWorkspace";

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
    return {
      title: "Compressor Not Found — Code&Tools",
      description: "The requested file compressor utility could not be found.",
    };
  }

  const title = `${tool.name} Online | Free & Private — Code&Tools`;
  const description = `${tool.shortDescription} 100% private, runs entirely in your browser with zero server uploads.`;

  return {
    title,
    description,
    keywords: [...tool.keywords, "file compressor", "free compressor", "reduce file size", "browser-based", "privacy-first"],
    openGraph: {
      title,
      description,
      type: "website",
      url: `https://devkit.dev/compressors/${tool.slug}`,
      siteName: "Code&Tools",
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
    alternates: {
      canonical: `https://devkit.dev/compressors/${tool.slug}`,
    },
  };
}

export default async function CompressorDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const tool = getToolBySlug(slug);

  if (!tool || tool.category !== "compressors") {
    notFound();
  }

  return (
    <ToolLayout tool={tool}>
      <FileCompressorWorkspace
        mode={tool.slug as CompressorMode}
        toolName={tool.name}
        toolDescription={tool.shortDescription}
      />
    </ToolLayout>
  );
}

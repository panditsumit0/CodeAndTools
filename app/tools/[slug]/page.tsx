import React from "react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { TOOLS, getToolBySlug } from "@/lib/tools-registry";
import { ToolLayout } from "@/components/tools/ToolLayout";
import { JsonFormatterTool } from "@/components/tools/JsonFormatterTool";
import { JsonYamlTool } from "@/components/tools/JsonYamlTool";
import { JwtDecoderTool } from "@/components/tools/JwtDecoderTool";
import { Base64Tool } from "@/components/tools/Base64Tool";
import { UuidGeneratorTool } from "@/components/tools/UuidGeneratorTool";
import { TimestampTool } from "@/components/tools/TimestampTool";
import { UrlEncoderTool } from "@/components/tools/UrlEncoderTool";
import { RegexTesterTool } from "@/components/tools/RegexTesterTool";
import { HashGeneratorTool } from "@/components/tools/HashGeneratorTool";
import { ColorConverterTool } from "@/components/tools/ColorConverterTool";
import { Compiler } from "@/components/compiler/Compiler";
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
  return TOOLS.map((tool) => ({
    slug: tool.slug,
  }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const tool = getToolBySlug(slug);

  if (!tool) {
    return buildMetadata({
      title: "Tool Not Found",
      description: "The requested developer utility could not be found.",
      path: `/tools/${slug}`,
      noIndex: true,
    });
  }

  return buildMetadata({
    title: `${tool.name} — Free Online Developer Tool`,
    description: `${tool.shortDescription} 100% private, runs entirely in your browser with zero server uploads.`,
    path: `/tools/${tool.slug}`,
    keywords: [
      ...tool.keywords,
      "developer tools",
      "free utility",
      "browser-based",
      "privacy-first",
      tool.name.toLowerCase(),
    ],
  });
}

export default async function ToolDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const tool = getToolBySlug(slug);

  if (!tool) {
    notFound();
  }

  const appSchema = getSoftwareApplicationJsonLd(tool);
  const breadcrumbSchema = getBreadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Developer Tools", path: "/tools" },
    { name: tool.name, path: `/tools/${tool.slug}` },
  ]);
  const faqSchema = getFaqJsonLd(tool.faq);

  const schemas = [appSchema, breadcrumbSchema, faqSchema].filter(Boolean);

  const renderToolComponent = () => {
    switch (tool.slug) {
      case "json-formatter":
        return <JsonFormatterTool />;
      case "json-yaml":
        return <JsonYamlTool />;
      case "jwt-decoder":
        return <JwtDecoderTool />;
      case "base64":
        return <Base64Tool />;
      case "uuid-generator":
        return <UuidGeneratorTool />;
      case "timestamp":
        return <TimestampTool />;
      case "url-encoder":
        return <UrlEncoderTool />;
      case "regex-tester":
        return <RegexTesterTool />;
      case "hash-generator":
        return <HashGeneratorTool />;
      case "color-converter":
        return <ColorConverterTool />;
      case "compiler":
        return <Compiler />;
      default:
        return <div>Tool implementation pending.</div>;
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
      />
      <ToolLayout tool={tool}>{renderToolComponent()}</ToolLayout>
    </>
  );
}

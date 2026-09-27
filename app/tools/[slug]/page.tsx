import React from 'react';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { TOOLS, getToolBySlug } from '@/lib/tools-registry';
import { ToolLayout } from '@/components/tools/ToolLayout';
import { JsonFormatterTool } from '@/components/tools/JsonFormatterTool';
import { JsonYamlTool } from '@/components/tools/JsonYamlTool';
import { JwtDecoderTool } from '@/components/tools/JwtDecoderTool';
import { Base64Tool } from '@/components/tools/Base64Tool';
import { UuidGeneratorTool } from '@/components/tools/UuidGeneratorTool';
import { TimestampTool } from '@/components/tools/TimestampTool';
import { UrlEncoderTool } from '@/components/tools/UrlEncoderTool';
import { RegexTesterTool } from '@/components/tools/RegexTesterTool';
import { HashGeneratorTool } from '@/components/tools/HashGeneratorTool';
import { ColorConverterTool } from '@/components/tools/ColorConverterTool';
import { Compiler } from '@/components/compiler/Compiler';

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
    return {
      title: 'Tool Not Found — DevForge',
      description: 'The requested developer utility could not be found.',
    };
  }

  const title = `${tool.name} — Free Browser-Based Developer Tool | DevForge`;
  const description = `${tool.shortDescription} 100% private, runs entirely in your browser with zero server uploads.`;

  return {
    title,
    description,
    keywords: [...tool.keywords, 'developer tools', 'free utility', 'browser-based', 'privacy-first'],
    openGraph: {
      title,
      description,
      type: 'website',
      url: `https://devkit.dev/tools/${tool.slug}`,
      siteName: 'DevForge',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
    },
    alternates: {
      canonical: `https://devkit.dev/tools/${tool.slug}`,
    },
  };
}

export default async function ToolDetailPage({ params }: PageProps) {
  const { slug } = await params;
  const tool = getToolBySlug(slug);

  if (!tool) {
    notFound();
  }

  const renderToolComponent = () => {
    switch (tool.slug) {
      case 'json-formatter':
        return <JsonFormatterTool />;
      case 'json-yaml':
        return <JsonYamlTool />;
      case 'jwt-decoder':
        return <JwtDecoderTool />;
      case 'base64':
        return <Base64Tool />;
      case 'uuid-generator':
        return <UuidGeneratorTool />;
      case 'timestamp':
        return <TimestampTool />;
      case 'url-encoder':
        return <UrlEncoderTool />;
      case 'regex-tester':
        return <RegexTesterTool />;
      case 'hash-generator':
        return <HashGeneratorTool />;
      case 'color-converter':
        return <ColorConverterTool />;
      case 'compiler':
        return <Compiler />;
      default:
        return <div>Tool implementation pending.</div>;
    }
  };

  return <ToolLayout tool={tool}>{renderToolComponent()}</ToolLayout>;
}

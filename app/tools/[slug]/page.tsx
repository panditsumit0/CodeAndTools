import React from "react";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { TOOLS, getToolBySlug } from "@/lib/tools-registry";
import { ToolLayout } from "@/components/tools/ToolLayout";

// Core Tools
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

// Compressors and Converters
import { FileCompressorWorkspace, type CompressorMode } from "@/components/compressors/FileCompressorWorkspace";
import { FileConverterWorkspace, type ConverterMode } from "@/components/converters/FileConverterWorkspace";

// Text Tools
import {
  WordCounterTool,
  CaseConverterTool,
  WhitespaceCleanerTool,
  LoremIpsumTool,
  MarkdownPreviewTool,
  DiffCheckerTool,
} from "@/components/tools/TextTools";

// Data Tools
import {
  JsonValidatorTool,
  JsonMinifierTool,
  JsonToCsvTool,
  CsvToJsonTool,
  XmlFormatterTool,
} from "@/components/tools/DataTools";

// Security Tools
import {
  PasswordGeneratorTool,
  JwtGeneratorTool,
  RandomTokenTool,
  ChecksumGeneratorTool,
} from "@/components/tools/SecurityTools";

// Web Dev Tools
import {
  MetaTagGeneratorTool,
  RobotsTxtGeneratorTool,
  UrlParserTool,
  HttpStatusCodeTool,
  UserAgentParserTool,
  MimeTypesTool,
  QrGeneratorTool,
  SqlFormatterTool,
} from "@/components/tools/WebDevTools";

// Time & Date Tools
import {
  DateDifferenceTool,
  CronExplainerTool,
} from "@/components/tools/TimeTools";

// Math & Number Tools
import {
  UnitConverterTool,
  NumberSystemConverterTool,
  PercentageCalculatorTool,
} from "@/components/tools/MathTools";

// Student Essentials Tools
import {
  GitCheatsheetTool,
  LinuxCheatsheetTool,
  AsciiTableTool,
} from "@/components/tools/StudentTools";

// AI Tools
import {
  AiCodeExplainerTool,
  AiRegexExplainerTool,
} from "@/components/tools/AiTools";

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
      // Existing Core Tools
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
      case "c-compiler":
      case "cpp-compiler":
      case "java-compiler":
      case "python-compiler":
      case "typescript-playground":
        return <Compiler />;

      // Converters & Compressors
      case "pdf-to-word":
      case "word-to-pdf":
      case "pdf-to-text":
      case "image-to-pdf":
      case "jpg-to-png":
      case "png-to-jpg":
      case "webp-converter":
      case "image-to-webp":
        return (
          <FileConverterWorkspace
            mode={tool.slug as ConverterMode}
            toolName={tool.name}
            toolDescription={tool.shortDescription}
          />
        );
      case "image":
      case "pdf":
      case "zip":
        return (
          <FileCompressorWorkspace
            mode={tool.slug as CompressorMode}
            toolName={tool.name}
            toolDescription={tool.shortDescription}
          />
        );

      // Text Tools
      case "word-counter":
      case "character-counter":
        return <WordCounterTool />;
      case "case-converter":
        return <CaseConverterTool />;
      case "whitespace-cleaner":
      case "duplicate-line-remover":
      case "text-sorter":
        return <WhitespaceCleanerTool />;
      case "lorem-ipsum":
        return <LoremIpsumTool />;
      case "markdown-preview":
        return <MarkdownPreviewTool />;
      case "diff-checker":
        return <DiffCheckerTool />;

      // JSON & Data Tools
      case "json-validator":
        return <JsonValidatorTool />;
      case "json-minifier":
        return <JsonMinifierTool />;
      case "json-to-csv":
        return <JsonToCsvTool />;
      case "csv-to-json":
        return <CsvToJsonTool />;
      case "xml-formatter":
        return <XmlFormatterTool />;

      // Security Tools
      case "password-generator":
        return <PasswordGeneratorTool />;
      case "jwt-generator":
        return <JwtGeneratorTool />;
      case "random-token-generator":
        return <RandomTokenTool />;
      case "checksum-generator":
        return <ChecksumGeneratorTool />;

      // Web Dev Tools
      case "meta-tag-generator":
        return <MetaTagGeneratorTool />;
      case "robots-txt-generator":
        return <RobotsTxtGeneratorTool />;
      case "url-parser":
        return <UrlParserTool />;
      case "http-status-codes":
        return <HttpStatusCodeTool />;
      case "user-agent-parser":
        return <UserAgentParserTool />;
      case "mime-types":
        return <MimeTypesTool />;
      case "qr-generator":
        return <QrGeneratorTool />;
      case "sql-formatter":
        return <SqlFormatterTool />;

      // Time & Date Tools
      case "date-difference":
        return <DateDifferenceTool />;
      case "cron-explainer":
        return <CronExplainerTool />;

      // Math & Number Tools
      case "unit-converter":
        return <UnitConverterTool />;
      case "number-system-converter":
      case "binary-converter":
        return <NumberSystemConverterTool />;
      case "percentage-calculator":
        return <PercentageCalculatorTool />;

      // Student Essentials
      case "git-cheatsheet":
        return <GitCheatsheetTool />;
      case "linux-cheatsheet":
        return <LinuxCheatsheetTool />;
      case "ascii-table":
        return <AsciiTableTool />;

      // AI Tools
      case "ai-code-explainer":
        return <AiCodeExplainerTool />;
      case "ai-regex-explainer":
        return <AiRegexExplainerTool />;

      default:
        return (
          <div className="p-8 text-center text-zinc-400 bg-zinc-900 border border-zinc-800 rounded-xl">
            <p className="text-lg font-medium text-white mb-2">Workspace Coming Soon</p>
            <p className="text-sm">This tool is scheduled for release in the upcoming toolkit update.</p>
          </div>
        );
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

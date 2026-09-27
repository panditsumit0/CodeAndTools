import React from 'react';
import type { Metadata } from 'next';
import { getToolBySlug } from '@/lib/tools-registry';
import { ToolLayout } from '@/components/tools/ToolLayout';
import { Compiler } from '@/components/compiler/Compiler';
import { notFound } from 'next/navigation';

export const metadata: Metadata = {
  title: 'Online Compiler — C, C++, Java, Python & TypeScript | Code&Tools',
  description:
    "Run C, C++, Java, Python, and TypeScript code online with Code&Tools' fast browser-based compiler. Features Monaco editor, stdin input, line-numbered diagnostics, and sandboxed execution.",
  keywords: [
    'online compiler',
    'C compiler',
    'C++ compiler',
    'Java compiler',
    'Python compiler',
    'TypeScript compiler',
    'TypeScript runner',
    'online code runner',
    'programming compiler',
    'gcc online',
    'devkit compiler',
  ],
  openGraph: {
    title: 'Online Compiler — C, C++, Java, Python & TypeScript | Code&Tools',
    description:
      "Run C, C++, Java, Python, and TypeScript code online with Code&Tools' fast browser-based compiler.",
    url: 'https://devkit.dev/tools/compiler',
    siteName: 'Code&Tools',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Online Compiler — C, C++, Java, Python & TypeScript | Code&Tools',
    description: 'Fast, secure online code runner for C, C++, Java, Python, and TypeScript.',
  },
};

export default function CompilerPage() {
  const tool = getToolBySlug('compiler');
  if (!tool) {
    notFound();
  }

  return (
    <ToolLayout tool={tool}>
      <Compiler />
    </ToolLayout>
  );
}

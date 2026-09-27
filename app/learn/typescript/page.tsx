import React from 'react';
import type { Metadata } from 'next';
import { TYPESCRIPT_COURSE } from '@/lib/learn/typescript';
import { CourseLayout } from '@/components/learn/CourseLayout';

export const metadata: Metadata = {
  title: 'Learn TypeScript for Beginners & Web Developers | DevForge',
  description:
    'Learn modern TypeScript for full-stack web development and engineering projects. Learn static typing, interfaces, type aliases, union types, generics, and React/Node integration.',
  keywords: [
    'learn typescript',
    'typescript tutorial for beginners',
    'typescript vs javascript',
    'typescript interfaces and types',
    'typescript generics',
    'typescript with react nextjs',
    'typescript interview questions',
  ],
};

export default function LearnTypeScriptPage() {
  return <CourseLayout course={TYPESCRIPT_COURSE} />;
}

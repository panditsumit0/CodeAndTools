import React from 'react';
import type { Metadata } from 'next';
import { JAVA_COURSE } from '@/lib/learn/java';
import { CourseLayout } from '@/components/learn/CourseLayout';

export const metadata: Metadata = {
  title: 'Learn Java Programming for B.Tech Students | DevForge',
  description:
    'Core Java programming guide for B.Tech engineering exams and IT campus placements. Learn JDK vs JRE vs JVM, OOP architecture, Strings, exception handling, and the Collections Framework.',
  keywords: [
    'learn java programming',
    'core java for btech',
    'jdk vs jre vs jvm',
    'java oop concepts',
    'java collections arraylist hashmap',
    'java exception handling',
    'java interview questions campus placement',
  ],
};

export default function LearnJavaPage() {
  return <CourseLayout course={JAVA_COURSE} />;
}

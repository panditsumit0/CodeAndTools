import React from 'react';
import type { Metadata } from 'next';
import { C_COURSE } from '@/lib/learn/c';
import { CourseLayout } from '@/components/learn/CourseLayout';

export const metadata: Metadata = {
  title: 'Learn C Programming for B.Tech Students | DevForge',
  description:
    'Comprehensive C programming guide for engineering students. Learn syntax, variables, data types, loops, pointers, memory allocation, structures, file handling, and viva preparation.',
  keywords: [
    'learn c programming',
    'c programming for btech',
    'c language tutorial',
    'pointers in c',
    'dynamic memory allocation malloc free',
    'c viva questions',
    'c gate syllabus',
  ],
};

export default function LearnCPage() {
  return <CourseLayout course={C_COURSE} />;
}

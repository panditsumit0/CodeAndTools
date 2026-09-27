import React from 'react';
import type { Metadata } from 'next';
import { PYTHON_COURSE } from '@/lib/learn/python';
import { CourseLayout } from '@/components/learn/CourseLayout';

export const metadata: Metadata = {
  title: 'Learn Python Programming for B.Tech Students | Code&Tools',
  description:
    'Learn Python programming from scratch for engineering coursework, AI/ML, and automation. Covers indentation, data structures, list comprehensions, OOP, file handling, and generators.',
  keywords: [
    'learn python programming',
    'python for btech students',
    'python data structures list dict',
    'list comprehensions python',
    'python for ai ml data science',
    'python interview viva questions',
  ],
};

export default function LearnPythonPage() {
  return <CourseLayout course={PYTHON_COURSE} />;
}

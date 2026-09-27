import React from 'react';
import type { Metadata } from 'next';
import { CPP_COURSE } from '@/lib/learn/cpp';
import { CourseLayout } from '@/components/learn/CourseLayout';

export const metadata: Metadata = {
  title: 'Learn C++ Programming for B.Tech Students | DevForge',
  description:
    'Master C++ programming for engineering students and competitive coders. Learn OOP concepts, classes, inheritance, polymorphism, templates, STL vectors, maps, and algorithms.',
  keywords: [
    'learn cpp programming',
    'c++ for btech students',
    'c++ oop tutorial',
    'c++ stl vector map algorithms',
    'dsa in cpp',
    'competitive programming c++',
    'c++ viva interview questions',
  ],
};

export default function LearnCppPage() {
  return <CourseLayout course={CPP_COURSE} />;
}

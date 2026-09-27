import { CourseData, LanguageComparisonItem } from './types';
import { C_COURSE } from './c';
import { CPP_COURSE } from './cpp';
import { JAVA_COURSE } from './java';
import { PYTHON_COURSE } from './python';
import { TYPESCRIPT_COURSE } from './typescript';
import { SupportedLanguageId } from '@/lib/compiler/types';

export const COURSES: Record<SupportedLanguageId, CourseData> = {
  c: C_COURSE,
  cpp: CPP_COURSE,
  java: JAVA_COURSE,
  python: PYTHON_COURSE,
  typescript: TYPESCRIPT_COURSE,
};

export const COURSE_LIST: CourseData[] = [
  C_COURSE,
  CPP_COURSE,
  JAVA_COURSE,
  PYTHON_COURSE,
  TYPESCRIPT_COURSE,
];

export function getCourseBySlug(slug: string): CourseData | undefined {
  const normalized = slug.toLowerCase().trim();
  if (normalized === 'c++') return CPP_COURSE;
  if (normalized === 'ts') return TYPESCRIPT_COURSE;
  if (normalized === 'py') return PYTHON_COURSE;
  return COURSES[normalized as SupportedLanguageId];
}

export const LANGUAGE_COMPARISON: LanguageComparisonItem[] = [
  {
    language: 'C',
    slug: 'c',
    bestFor: 'Fundamentals / Systems / OS / Embedded',
    difficulty: 'Medium',
    difficultyLevel: 'Medium',
    mainStrength: 'Direct memory layout, pointers & zero runtime overhead',
    paradigms: 'Procedural / Imperative',
    typing: 'Static / Weakly Typed',
    popularFrameworks: ['POSIX', 'Linux Kernel', 'Win32 API', 'GLib'],
    industryDemand: 'Operating Systems, IoT, Automotive, Embedded Runtimes',
  },
  {
    language: 'C++',
    slug: 'cpp',
    bestFor: 'DSA / Competitive Programming / Game Engines',
    difficulty: 'Medium-Hard',
    difficultyLevel: 'Medium-Hard',
    mainStrength: 'High performance + rich Standard Template Library (STL)',
    paradigms: 'Multi-paradigm (OOP, Generic, Procedural)',
    typing: 'Static / Strong',
    popularFrameworks: ['STL', 'Boost', 'Unreal Engine', 'Qt', 'OpenCV'],
    industryDemand: 'Competitive Programming, High Frequency Trading, AAA Games',
  },
  {
    language: 'Java',
    slug: 'java',
    bestFor: 'Enterprise / OOP / Android / Campus Placements',
    difficulty: 'Medium',
    difficultyLevel: 'Medium',
    mainStrength: 'WORA portability, robust garbage collection & ecosystem',
    paradigms: 'Object-Oriented (Class-based)',
    typing: 'Static / Strong',
    popularFrameworks: ['Spring Boot', 'Quarkus', 'Hibernate', 'Android SDK'],
    industryDemand: 'Fintech, Banking, Enterprise Cloud, Big Data (Spark/Kafka)',
  },
  {
    language: 'Python',
    slug: 'python',
    bestFor: 'AI/ML / Data Science / Automation / Web APIs',
    difficulty: 'Easy',
    difficultyLevel: 'Easy',
    mainStrength: 'Expressive readability, concise syntax & vast packages',
    paradigms: 'Multi-paradigm (Imperative, OOP, Functional)',
    typing: 'Dynamic / Strong',
    popularFrameworks: ['PyTorch', 'TensorFlow', 'FastAPI', 'Pandas', 'Django'],
    industryDemand: 'AI Engineering, Data Analytics, DevOps Scripting, Research',
  },
  {
    language: 'TypeScript',
    slug: 'typescript',
    bestFor: 'Modern Web Development / Full-Stack Applications',
    difficulty: 'Medium',
    difficultyLevel: 'Medium',
    mainStrength: 'Type safety on top of JavaScript with excellent tooling',
    paradigms: 'Multi-paradigm (Functional, OOP, Event-Driven)',
    typing: 'Static / Structural',
    popularFrameworks: ['Next.js', 'React', 'NestJS', 'Express', 'Node.js'],
    industryDemand: 'Full-Stack Software Engineering, SaaS Startups, Cloud Web Apps',
  },
];

export interface SearchableTopicItem {
  courseName: string;
  courseSlug: string;
  topicId: string;
  topicTitle: string;
  summary: string;
  keywords: string[];
}

export function getAllSearchableTopics(): SearchableTopicItem[] {
  const items: SearchableTopicItem[] = [];

  for (const course of COURSE_LIST) {
    for (const topic of course.topics) {
      items.push({
        courseName: course.name,
        courseSlug: course.slug,
        topicId: topic.id,
        topicTitle: topic.title,
        summary: topic.summary,
        keywords: [
          course.name.toLowerCase(),
          course.slug,
          topic.title.toLowerCase(),
          topic.id,
          'learn',
          'tutorial',
          'btech',
        ],
      });
    }
  }

  return items;
}

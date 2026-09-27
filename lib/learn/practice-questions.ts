import { SupportedLanguageId } from '@/lib/compiler/types';
import { cQuestions } from './c-questions';
import { cppQuestions } from './cpp-questions';
import { javaQuestions } from './java-questions';
import { pythonQuestions } from './python-questions';
import { typescriptQuestions } from './typescript-questions';

export interface PracticeQuestion {
  id: string;
  language?: SupportedLanguageId;
  title: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  topic: string;
  question: string;
  hint: string;
  solution: string;
  starterCode: string;
  sampleStdin: string;
  expectedOutput: string;
}

export function getQuestionLanguage(question: { id: string; language?: string }): SupportedLanguageId {
  if (question.language && ['c', 'cpp', 'java', 'python', 'typescript'].includes(question.language)) {
    return question.language as SupportedLanguageId;
  }
  if (question.id.startsWith('c-')) return 'c';
  if (question.id.startsWith('cpp-')) return 'cpp';
  if (question.id.startsWith('java-')) return 'java';
  if (question.id.startsWith('py-') || question.id.startsWith('python-')) return 'python';
  if (question.id.startsWith('ts-') || question.id.startsWith('typescript-')) return 'typescript';
  return 'c';
}

export const practiceQuestionsByLanguage: Record<string, PracticeQuestion[]> = {
  c: cQuestions,
  cpp: cppQuestions,
  java: javaQuestions,
  python: pythonQuestions,
  typescript: typescriptQuestions,
};

export const allPracticeQuestions: PracticeQuestion[] = [
  ...cQuestions,
  ...cppQuestions,
  ...javaQuestions,
  ...pythonQuestions,
  ...typescriptQuestions,
];

export function getPracticeQuestionsByLanguage(lang: string): PracticeQuestion[] {
  const normalized = lang.toLowerCase().trim();
  if (normalized === 'c++') return cppQuestions;
  return practiceQuestionsByLanguage[normalized] || [];
}

export function getPracticeQuestionById(id: string): PracticeQuestion | undefined {
  return allPracticeQuestions.find((q) => q.id === id);
}

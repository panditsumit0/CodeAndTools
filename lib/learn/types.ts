import { SupportedLanguageId } from '@/lib/compiler/types';

export interface PracticeQuestion {
  question: string;
  difficulty: 'Easy' | 'Medium' | 'Hard';
  starterCode: string;
  hint: string;
  solution: string;
}

export interface MCQOption {
  label: string; // 'A' | 'B' | 'C' | 'D'
  text: string;
}

export interface MCQ {
  question: string;
  options: MCQOption[];
  answer: string; // 'A' | 'B' | 'C' | 'D'
  explanation: string;
}

export interface QuickRevisionPoint {
  point: string;
  detail?: string;
}

export interface ExamQuestion {
  marks: number; // 2 | 5 | 10
  question: string;
}

/**
 * Rich, structured topic content for B.Tech-level learning.
 * All fields are optional so existing topics keep working unchanged.
 */
export interface TopicExplanation {
  /** Simple 1-line intro (shown in the summary area) */
  intro?: string;
  /** WHY this concept exists — the problem it solves */
  why?: string;
  /** Real-world analogy to make abstract concepts concrete */
  analogy?: string;
  /** Step-by-step conceptual explanation */
  concept?: string;
  /** ASCII memory diagram or table (shown in monospace) */
  memoryDiagram?: string;
  /** Explanation of syntax fields, one entry per symbol/keyword */
  syntaxBreakdown?: { part: string; meaning: string }[];
  /** Line-by-line explanation of the primary code example */
  codeExplanation?: { line: string; explanation: string }[];
  /** Step-by-step execution trace */
  executionSteps?: string[];
  /** Key points to remember */
  keyPoints?: string[];
  /** Exam-specific tip */
  examTip?: string;
  /** Interview-specific tip */
  interviewTip?: string;
  /** Beginner level extra example (code string) */
  beginnerExample?: { code: string; output: string; description: string };
  /** Intermediate level extra example */
  intermediateExample?: { code: string; output: string; description: string };
  /** Advanced level extra example */
  advancedExample?: { code: string; output: string; description: string };
  /** Comparison table rows — e.g. comparing two constructs */
  comparisonTable?: { aspect: string; a: string; b: string; aLabel?: string; bLabel?: string }[];
  /** MCQs specific to this topic */
  mcqs?: MCQ[];
  /** Short quick-revision bullet points */
  quickRevision?: QuickRevisionPoint[];
  /** Exam questions (2-mark, 5-mark, 10-mark) */
  examQuestions?: ExamQuestion[];
  /** Multiple practice questions (Easy/Medium/Hard) */
  practiceSet?: PracticeQuestion[];
}

export interface CourseTopic {
  id: string;
  title: string;
  summary: string;
  syntax?: string;
  codeExample: string;
  expectedOutput: string;
  commonMistake?: string;
  practice?: PracticeQuestion;
  /** Rich structured explanation content (optional — backward compatible) */
  explanation?: TopicExplanation;
}

export interface BTechPriority {
  semesterExams: string[];
  vivaQuestions: { q: string; a: string }[];
  dsaPrerequisites: string[];
  interviewTips: string[];
}

export interface CourseData {
  id: SupportedLanguageId;
  slug: string;
  name: string;
  tagline: string;
  shortDescription: string;
  difficulty: string;
  bestFor: string;
  icon: string;
  color: string;
  intro: {
    whatIs: string;
    whyLearn: string;
    whereUsed: string[];
    advantages: string[];
    limitations: string[];
  };
  visualCallout?: {
    title: string;
    description: string;
    items: { label: string; detail: string; badge?: string }[];
  };
  topics: CourseTopic[];
  bTechPriority: BTechPriority;
}

export interface LanguageComparisonItem {
  language: string;
  slug: string;
  bestFor: string;
  difficulty: string;
  difficultyLevel: 'Easy' | 'Medium' | 'Medium-Hard' | 'Hard';
  mainStrength: string;
  paradigms: string;
  typing: string;
  popularFrameworks: string[];
  industryDemand: string;
}

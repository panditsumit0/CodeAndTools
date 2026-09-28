export type ToolCategory =
  | 'developer'
  | 'text'
  | 'data'
  | 'security'
  | 'web'
  | 'images'
  | 'documents'
  | 'time'
  | 'math'
  | 'ai'
  | 'utilities'
  | 'converters'
  | 'compressors';

export interface ToolFaqItem {
  question: string;
  answer: string;
}

export interface ToolDefinition {
  slug: string;
  name: string;
  tagline: string;
  shortDescription: string;
  longDescription: string;
  category: ToolCategory;
  categoryLabel: string;
  icon: string;
  keywords: string[];
  popular?: boolean;
  studentEssential?: boolean;
  howToUse: string[];
  features: string[];
  faq: ToolFaqItem[];
  relatedSlugs: string[];
}

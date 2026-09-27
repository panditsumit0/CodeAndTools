export type ToolCategory = 'data' | 'security' | 'web' | 'developer' | 'converters' | 'compressors';

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
  howToUse: string[];
  features: string[];
  faq: ToolFaqItem[];
  relatedSlugs: string[];
}

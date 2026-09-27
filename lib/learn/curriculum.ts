import { C_COURSE } from "./c";
import { CPP_COURSE } from "./cpp";
import { JAVA_COURSE } from "./java";
import { PYTHON_COURSE } from "./python";
import { TYPESCRIPT_COURSE } from "./typescript";
import { CourseData } from "./types";

export interface CurriculumSection {
  id: string;
  title: string;
  badge?: string;
  isSpecial?: boolean;
}

export interface CurriculumConfig {
  language: string;
  title: string;
  course: CourseData;
  sections: CurriculumSection[];
}

function buildCurriculum(course: CourseData): CurriculumConfig {
  const sections: CurriculumSection[] = [
    {
      id: "introduction",
      title: "Introduction",
    },
    ...course.topics.map((t) => ({
      id: t.id,
      title: t.title,
    })),
    {
      id: "btech-priority",
      title: "Important for B.Tech",
      badge: "Exam & Viva",
      isSpecial: true,
    },
    {
      id: "practice-questions",
      title: "Practice Questions",
      badge: "25+ Qs",
      isSpecial: true,
    },
  ];

  return {
    language: course.id,
    title: `${course.name} Programming`,
    course,
    sections,
  };
}

export const CURRICULA: Record<string, CurriculumConfig> = {
  c: buildCurriculum(C_COURSE),
  cpp: buildCurriculum(CPP_COURSE),
  java: buildCurriculum(JAVA_COURSE),
  python: buildCurriculum(PYTHON_COURSE),
  typescript: buildCurriculum(TYPESCRIPT_COURSE),
};

export function getCurriculum(languageId: string): CurriculumConfig | undefined {
  return CURRICULA[languageId.toLowerCase()];
}

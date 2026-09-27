import { LanguageConfig, SupportedLanguageId } from './types';

export const LANGUAGES: Record<SupportedLanguageId, LanguageConfig> = {
  c: {
    id: 'c',
    name: 'C',
    version: 'GCC 9.2.0',
    extension: '.c',
    editorLanguage: 'c',
    starterCode: `#include <stdio.h>

int main() {
    printf("Hello, World!\\n");
    return 0;
}
`,
    sampleStdin: '10 20',
    judge0Id: 50, // C (GCC 9.2.0)
    pistonLanguage: 'c',
    pistonVersion: '10.2.0',
  },
  cpp: {
    id: 'cpp',
    name: 'C++',
    version: 'GCC 9.2.0',
    extension: '.cpp',
    editorLanguage: 'cpp',
    starterCode: `#include <iostream>
using namespace std;

int main() {
    cout << "Hello, World!" << endl;
    return 0;
}
`,
    sampleStdin: '10 20',
    judge0Id: 54, // C++ (GCC 9.2.0)
    pistonLanguage: 'cpp',
    pistonVersion: '10.2.0',
  },
  java: {
    id: 'java',
    name: 'Java',
    version: 'OpenJDK 13.0.1',
    extension: '.java',
    editorLanguage: 'java',
    starterCode: `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, World!");
    }
}
`,
    sampleStdin: "DevForge\n20",
    judge0Id: 62, // Java (OpenJDK 13.0.1)
    pistonLanguage: 'java',
    pistonVersion: '15.0.2',
  },
  python: {
    id: 'python',
    name: 'Python',
    version: '3.8.1 / 3.10',
    extension: '.py',
    editorLanguage: 'python',
    starterCode: `print("Hello, World!")
`,
    sampleStdin: "10\n20",
    judge0Id: 71, // Python (3.8.1)
    pistonLanguage: 'python',
    pistonVersion: '3.10.0',
  },
  typescript: {
    id: 'typescript',
    name: 'TypeScript',
    version: '5.6.2 (Node 22)',
    extension: '.ts',
    editorLanguage: 'typescript',
    starterCode: `// DevForge TypeScript Online Runner
interface Student {
    id: number;
    name: string;
    branch: string;
    semester: number;
}

function displayStudent(student: Student): void {
    console.log(\`Student: \${student.name} (Roll No: \${student.id})\`);
    console.log(\`Department: \${student.branch} | Semester: \${student.semester}\`);
}

const engineeringStudent: Student = {
    id: 101,
    name: "Alex Rivera",
    branch: "Computer Science & Engineering",
    semester: 4,
};

displayStudent(engineeringStudent);
`,
    sampleStdin: "DevForge\n2026",
    judge0Id: 101, // TypeScript (5.6.2) on Judge0 CE
    pistonLanguage: 'typescript',
    pistonVersion: '5.0.3',
  },
};

export const LANGUAGE_LIST: LanguageConfig[] = [
  LANGUAGES.c,
  LANGUAGES.cpp,
  LANGUAGES.java,
  LANGUAGES.python,
  LANGUAGES.typescript,
];

export function getLanguageConfig(id: string): LanguageConfig | undefined {
  const normalized = id.toLowerCase().trim();
  if (normalized === 'c++') return LANGUAGES.cpp;
  if (normalized === 'ts') return LANGUAGES.typescript;
  if (normalized === 'py') return LANGUAGES.python;
  return LANGUAGES[normalized as SupportedLanguageId];
}

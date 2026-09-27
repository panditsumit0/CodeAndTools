import { SupportedLanguageId } from './types';

export interface DetectedInputPrompt {
  id: string;
  label: string;
  variableName?: string;
  typeHint?: string;
  defaultValue?: string;
}

export interface InputDetectionResult {
  hasInput: boolean;
  prompts: DetectedInputPrompt[];
  estimatedCount: number;
}

/**
 * Analyzes source code to detect if program expects standard input,
 * and extracts natural prompt strings from printf/cout/System.out/input calls.
 */
export function detectProgramInputs(code: string, language: SupportedLanguageId | string): InputDetectionResult {
  if (!code || !code.trim()) {
    return { hasInput: false, prompts: [], estimatedCount: 0 };
  }

  const lang = language.toLowerCase();
  const prompts: DetectedInputPrompt[] = [];

  if (lang === 'c') {
    // Detect scanf("%d %d", &a, &b) or scanf("%d", &age)
    const scanfRegex = /scanf\s*\(\s*["']([^"']+)["']\s*,?\s*([^)]*)\)/g;
    let match: RegExpExecArray | null;

    // Also look for preceding printf statements with prompt text
    const printfPrompts: string[] = [];
    const printfRegex = /printf\s*\(\s*["']([^"']+)["']\s*\)/g;
    let pMatch: RegExpExecArray | null;
    while ((pMatch = printfRegex.exec(code)) !== null) {
      const text = pMatch[1].replace(/\\n/g, '').trim();
      if (text && (text.endsWith(':') || text.toLowerCase().includes('enter') || text.toLowerCase().includes('input'))) {
        printfPrompts.push(text);
      }
    }

    let promptIdx = 0;
    while ((match = scanfRegex.exec(code)) !== null) {
      const formatStr = match[1];
      const argsStr = match[2];
      const formatSpecifiers = formatStr.match(/%[0-9]*[a-zA-Z]/g) || ['%s'];
      const argNames = argsStr ? argsStr.split(',').map((s) => s.replace(/&/g, '').trim()) : [];

      formatSpecifiers.forEach((spec, i) => {
        const varName = argNames[i] || `var${prompts.length + 1}`;
        const associatedPrompt = printfPrompts[promptIdx] || `Enter ${varName}:`;
        promptIdx++;

        let typeHint = 'text';
        if (spec.includes('d') || spec.includes('i')) typeHint = 'integer';
        else if (spec.includes('f') || spec.includes('lf')) typeHint = 'float';
        else if (spec.includes('c')) typeHint = 'char';

        prompts.push({
          id: `c-input-${prompts.length + 1}`,
          label: associatedPrompt,
          variableName: varName,
          typeHint,
        });
      });
    }

    // Also check for getchar / fgets
    if (prompts.length === 0 && (code.includes('getchar') || code.includes('fgets') || code.includes('scanf'))) {
      prompts.push({
        id: 'c-input-generic-1',
        label: printfPrompts[0] || 'Enter program input:',
        typeHint: 'text',
      });
    }
  } else if (lang === 'cpp') {
    // Detect cin >> a >> b;
    const coutPrompts: string[] = [];
    const coutRegex = /cout\s*<<\s*["']([^"']+)["']/g;
    let cMatch: RegExpExecArray | null;
    while ((cMatch = coutRegex.exec(code)) !== null) {
      const text = cMatch[1].replace(/\\n/g, '').trim();
      if (text && (text.endsWith(':') || text.toLowerCase().includes('enter') || text.toLowerCase().includes('input'))) {
        coutPrompts.push(text);
      }
    }

    const cinRegex = /cin\s*>>\s*([^;]+);/g;
    let match: RegExpExecArray | null;
    let promptIdx = 0;

    while ((match = cinRegex.exec(code)) !== null) {
      const vars = match[1].split('>>').map((v) => v.trim());
      vars.forEach((v) => {
        const cleanVar = v.split('[')[0].trim();
        const associatedPrompt = coutPrompts[promptIdx] || `Enter ${cleanVar}:`;
        promptIdx++;

        prompts.push({
          id: `cpp-input-${prompts.length + 1}`,
          label: associatedPrompt,
          variableName: cleanVar,
          typeHint: 'value',
        });
      });
    }

    if (prompts.length === 0 && (code.includes('cin') || code.includes('getline'))) {
      prompts.push({
        id: 'cpp-input-generic-1',
        label: coutPrompts[0] || 'Enter program input:',
        typeHint: 'value',
      });
    }
  } else if (lang === 'java') {
    // Detect System.out.print(...) preceding sc.next...
    const printPrompts: string[] = [];
    const printRegex = /System\.out\.print(?:ln)?\s*\(\s*["']([^"']+)["']\s*\)/g;
    let pMatch: RegExpExecArray | null;
    while ((pMatch = printRegex.exec(code)) !== null) {
      const text = pMatch[1].trim();
      if (text && (text.endsWith(':') || text.toLowerCase().includes('enter') || text.toLowerCase().includes('input'))) {
        printPrompts.push(text);
      }
    }

    const scannerRegex = /(?:nextInt|nextDouble|nextFloat|nextLine|nextLong|next)\s*\(\s*\)/g;
    let match: RegExpExecArray | null;
    let promptIdx = 0;

    while ((match = scannerRegex.exec(code)) !== null) {
      const associatedPrompt = printPrompts[promptIdx] || `Enter input value #${prompts.length + 1}:`;
      promptIdx++;

      const fn = match[0];
      let typeHint = 'text';
      if (fn.includes('Int') || fn.includes('Long')) typeHint = 'integer';
      else if (fn.includes('Double') || fn.includes('Float')) typeHint = 'number';

      prompts.push({
        id: `java-input-${prompts.length + 1}`,
        label: associatedPrompt,
        typeHint,
      });
    }

    if (prompts.length === 0 && (code.includes('Scanner') || code.includes('System.in') || code.includes('BufferedReader'))) {
      prompts.push({
        id: 'java-input-generic-1',
        label: printPrompts[0] || 'Enter program input:',
        typeHint: 'text',
      });
    }
  } else if (lang === 'python') {
    // Detect input("prompt") or input()
    const inputRegex = /input\s*\(\s*(?:["']([^"']*)["'])?\s*\)/g;
    let match: RegExpExecArray | null;

    while ((match = inputRegex.exec(code)) !== null) {
      const promptString = match[1]?.trim() || `Enter input value #${prompts.length + 1}:`;
      prompts.push({
        id: `py-input-${prompts.length + 1}`,
        label: promptString,
        typeHint: 'text',
      });
    }

    if (prompts.length === 0 && (code.includes('sys.stdin') || code.includes('input('))) {
      prompts.push({
        id: 'py-input-generic-1',
        label: 'Enter program input:',
        typeHint: 'text',
      });
    }
  } else if (lang === 'typescript') {
    const hasStdin =
      code.includes('readFileSync(0') ||
      code.includes('process.stdin') ||
      code.includes('readline');

    if (hasStdin) {
      prompts.push({
        id: 'ts-input-1',
        label: 'Enter standard input (stdin):',
        typeHint: 'text',
      });
    }
  }

  return {
    hasInput: prompts.length > 0,
    prompts,
    estimatedCount: prompts.length,
  };
}

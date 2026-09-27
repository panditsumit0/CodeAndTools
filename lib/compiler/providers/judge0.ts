import { CompilerProvider, ExecutionRequest, ExecutionResult, ExecutionStatus } from '../types';
import { getLanguageConfig } from '../languages';

interface Judge0SubmissionResponse {
  status?: { id: number; description: string };
  stdout?: string | null;
  compile_output?: string | null;
  stderr?: string | null;
  message?: string | null;
  exit_code?: number | null;
  time?: string | null;
  memory?: number | null;
  token?: string;
}

export class Judge0Provider implements CompilerProvider {
  public name = 'Judge0 Sandbox';
  private apiUrl: string;
  private apiKey?: string;
  private apiHost?: string;

  constructor() {
    this.apiUrl = process.env.CODE_EXECUTION_API_URL || 'https://ce.judge0.com';
    this.apiKey = process.env.CODE_EXECUTION_API_KEY;
    this.apiHost = process.env.CODE_EXECUTION_API_HOST;
  }

  private encodeBase64(text: string): string {
    return Buffer.from(text, 'utf-8').toString('base64');
  }

  private decodeBase64(text: string | null | undefined): string {
    if (!text) return '';
    try {
      return Buffer.from(text, 'base64').toString('utf-8');
    } catch {
      return text;
    }
  }

  public async execute(request: ExecutionRequest): Promise<ExecutionResult> {
    const lang = getLanguageConfig(request.language);
    if (!lang) {
      return {
        status: 'error',
        stdout: '',
        stderr: `Unsupported language: "${request.language}". Code&Tools Compiler supports C, C++, Java, Python, and TypeScript.`,
        exitCode: 1,
        executionTime: null,
      };
    }

    const headers: Record<string, string> = {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    };

    if (this.apiKey) {
      headers['X-RapidAPI-Key'] = this.apiKey;
      if (this.apiHost) {
        headers['X-RapidAPI-Host'] = this.apiHost;
      }
    }

    // Prepare code payload, auto-injecting ambient Node declarations for TypeScript if reading stdin/fs
    let codeToRun = request.code;
    if (lang.id === 'typescript') {
      const nodePreamble = `// @ts-nocheck\n/* eslint-disable */\ndeclare const require: any;\ndeclare const process: any;\ndeclare const Buffer: any;\n`;
      if (!codeToRun.includes('// @ts-nocheck')) {
        codeToRun = `${nodePreamble}${codeToRun}`;
      }
    }

    // Using base64_encoded=true to handle all special characters, quotes, and binary outputs cleanly
    const rawStdin = request.stdin ?? '';
    const payload = {
      language_id: lang.judge0Id,
      source_code: this.encodeBase64(codeToRun),
      stdin: this.encodeBase64(rawStdin),
      cpu_time_limit: 5,
      wall_time_limit: 10,
      memory_limit: 128000,
    };

    const startTime = Date.now();

    try {
      const submitUrl = `${this.apiUrl.replace(/\/$/, '')}/submissions?base64_encoded=true&wait=true`;
      const response = await fetch(submitUrl, {
        method: 'POST',
        headers,
        body: JSON.stringify(payload),
        cache: 'no-store',
      });

      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Execution environment error (${response.status}): ${errorText.slice(0, 300)}`);
      }

      const data = await response.json();

      // If queued or processing, poll for completion
      if (data.status && data.status.id <= 2 && data.token) {
        return await this.pollSubmission(data.token, headers, rawStdin);
      }

      return this.formatJudge0Result(data, startTime, rawStdin);
    } catch (err: unknown) {
      const msg = err instanceof Error ? err.message : 'Unknown execution error';
      return {
        status: 'error',
        stdout: '',
        stderr: `Execution service error: ${msg}`,
        exitCode: 1,
        executionTime: Date.now() - startTime,
        provider: this.name,
      };
    }
  }

  private async pollSubmission(token: string, headers: Record<string, string>, rawStdin: string): Promise<ExecutionResult> {
    const pollUrl = `${this.apiUrl.replace(/\/$/, '')}/submissions/${token}?base64_encoded=true`;
    const maxAttempts = 10;
    const pollStartTime = Date.now();

    for (let attempt = 0; attempt < maxAttempts; attempt++) {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      const res = await fetch(pollUrl, { headers, cache: 'no-store' });
      if (!res.ok) continue;

      const data = await res.json();
      if (data.status && data.status.id > 2) {
        return this.formatJudge0Result(data, pollStartTime, rawStdin);
      }
    }

    return {
      status: 'timeout',
      stdout: '',
      stderr: 'Execution timed out waiting for the sandbox environment to complete.\n\nNote: The program may be waiting for standard input. Check the Input panel and try again.',
      exitCode: null,
      executionTime: null,
      provider: this.name,
    };
  }

  private formatJudge0Result(data: Judge0SubmissionResponse, fallbackStartTime: number, rawStdin: string): ExecutionResult {
    const statusId = data.status?.id;
    let status: ExecutionStatus = 'success';

    if (statusId === 3) {
      status = 'success';
    } else if (statusId === 5) {
      status = 'timeout';
    } else if (statusId === 6) {
      status = 'compilation_error';
    } else if (typeof statusId === 'number' && statusId >= 7 && statusId <= 12) {
      status = 'runtime_error';
    } else {
      status = 'error';
    }

    const stdout = this.decodeBase64(data.stdout);
    const compileOutput = this.decodeBase64(data.compile_output);
    const stderrRaw = this.decodeBase64(data.stderr);
    const message = this.decodeBase64(data.message);

    let stderr = compileOutput || stderrRaw || message || '';

    // Helpful timeout diagnostic if waiting on stdin
    if (status === 'timeout') {
      const isInputEmpty = !rawStdin || !rawStdin.trim();
      const inputHint = isInputEmpty
        ? '\n\nNote: The program may be waiting for standard input. Check the Input panel and try again.'
        : '\n\nNote: Time limit exceeded. If the program expects more input than was provided, check the Input panel or look for infinite loops.';
      stderr = stderr ? `${stderr}${inputHint}` : `Time Limit Exceeded.${inputHint}`;
    } else if (status === 'runtime_error' && (!rawStdin || !rawStdin.trim())) {
      if (
        stderr.includes('EOFError') ||
        stderr.includes('NoSuchElementException') ||
        stderr.includes('Scanner') ||
        stderr.includes('input()')
      ) {
        stderr += '\n\nNote: The program expected standard input (stdin), but the Input panel was empty. Enter the required values in the "Standard Input (stdin)" panel and run again.';
      }
    }

    const exitCode =
      typeof data.exit_code === 'number'
        ? data.exit_code
        : status === 'success'
        ? 0
        : 1;

    let timeMs: number | null = null;
    if (data.time) {
      timeMs = Math.round(parseFloat(data.time) * 1000);
    } else {
      timeMs = Date.now() - fallbackStartTime;
    }

    const memoryKb = data.memory ? Math.round(data.memory) : null;

    return {
      status,
      stdout,
      stderr,
      exitCode,
      executionTime: timeMs,
      memory: memoryKb,
      provider: this.name,
    };
  }
}

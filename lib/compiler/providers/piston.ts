import { CompilerProvider, ExecutionRequest, ExecutionResult, ExecutionStatus } from '../types';
import { getLanguageConfig } from '../languages';

interface PistonRunResponse {
  language: string;
  version: string;
  run: {
    stdout: string;
    stderr: string;
    output: string;
    code: number;
    signal: string | null;
  };
  compile?: {
    stdout: string;
    stderr: string;
    output: string;
    code: number;
  };
}

export class PistonProvider implements CompilerProvider {
  public name = 'Piston Sandbox';
  private apiUrl: string;

  constructor() {
    this.apiUrl = process.env.PISTON_API_URL || 'https://emkc.org/api/v2/piston/execute';
  }

  public async execute(request: ExecutionRequest): Promise<ExecutionResult> {
    const lang = getLanguageConfig(request.language);
    if (!lang) {
      return {
        status: 'error',
        stdout: '',
        stderr: `Unsupported language: ${request.language}`,
        exitCode: 1,
        executionTime: null,
      };
    }

    const filename = lang.id === 'java' ? 'Main.java' : `main${lang.extension}`;
    const payload = {
      language: lang.pistonLanguage,
      version: lang.pistonVersion,
      files: [
        {
          name: filename,
          content: request.code,
        },
      ],
      stdin: request.stdin || '',
      run_timeout: 5000,
      compile_timeout: 10000,
    };

    const startTime = Date.now();

    try {
      const response = await fetch(this.apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json',
        },
        body: JSON.stringify(payload),
        cache: 'no-store',
      });

      const executionTime = Date.now() - startTime;

      if (!response.ok) {
        const errText = await response.text();
        throw new Error(`Piston API returned HTTP ${response.status}: ${errText.slice(0, 250)}`);
      }

      const data: PistonRunResponse = await response.json();

      // Check compilation error first
      if (data.compile && data.compile.code !== 0) {
        return {
          status: 'compilation_error',
          stdout: data.compile.stdout || '',
          stderr: data.compile.stderr || data.compile.output || 'Compilation failed.',
          exitCode: data.compile.code,
          executionTime,
          provider: this.name,
        };
      }

      // Check runtime status
      let status: ExecutionStatus = 'success';
      if (data.run.signal === 'SIGKILL' || data.run.signal === 'SIGXCPU') {
        status = 'timeout';
      } else if (data.run.code !== 0) {
        status = 'runtime_error';
      }

      return {
        status,
        stdout: data.run.stdout || '',
        stderr: data.run.stderr || '',
        exitCode: data.run.code,
        executionTime,
        provider: this.name,
      };
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
}

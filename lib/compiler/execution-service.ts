import { CompilerProvider, ExecutionRequest, ExecutionResult } from './types';
import { getLanguageConfig } from './languages';
import { Judge0Provider } from './providers/judge0';
import { PistonProvider } from './providers/piston';

const MAX_CODE_SIZE_BYTES = 64 * 1024; // 64 KB
const MAX_STDIN_SIZE_BYTES = 16 * 1024; // 16 KB

export class CodeExecutionService {
  private provider: CompilerProvider;

  constructor() {
    const providerType = process.env.CODE_EXECUTION_PROVIDER?.toLowerCase();

    if (providerType === 'piston') {
      this.provider = new PistonProvider();
    } else {
      // Default to Judge0 (configurable via CODE_EXECUTION_API_URL and CODE_EXECUTION_API_KEY)
      this.provider = new Judge0Provider();
    }
  }

  public async execute(request: ExecutionRequest): Promise<ExecutionResult> {
    // 1. Language validation
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

    // 2. Code presence check
    if (!request.code || !request.code.trim()) {
      return {
        status: 'error',
        stdout: '',
        stderr: 'Source code cannot be empty. Please enter code to compile and run.',
        exitCode: 1,
        executionTime: null,
      };
    }

    // 3. Security guards: payload size limit
    const codeBytes = new Blob([request.code]).size;
    if (codeBytes > MAX_CODE_SIZE_BYTES) {
      return {
        status: 'error',
        stdout: '',
        stderr: `Source code exceeds maximum permitted size of 64KB (submitted: ${Math.round(codeBytes / 1024)}KB).`,
        exitCode: 1,
        executionTime: null,
      };
    }

    // 4. Stdin size limit
    if (request.stdin) {
      const stdinBytes = new Blob([request.stdin]).size;
      if (stdinBytes > MAX_STDIN_SIZE_BYTES) {
        return {
          status: 'error',
          stdout: '',
          stderr: 'Standard input exceeds maximum permitted size of 16KB.',
          exitCode: 1,
          executionTime: null,
        };
      }
    }

    // 5. Delegate to isolated sandbox provider
    return await this.provider.execute({
      language: lang.id,
      code: request.code,
      stdin: request.stdin || '',
    });
  }
}

// Global execution service singleton
export const executionService = new CodeExecutionService();

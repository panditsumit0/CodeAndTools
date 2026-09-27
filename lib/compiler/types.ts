export type SupportedLanguageId = 'c' | 'cpp' | 'java' | 'python' | 'typescript';

export interface LanguageConfig {
  id: SupportedLanguageId;
  name: string;
  version: string;
  extension: string;
  editorLanguage: string;
  starterCode: string;
  sampleStdin: string;
  judge0Id: number;
  pistonLanguage: string;
  pistonVersion: string;
}

export type ExecutionStatus =
  | 'success'
  | 'compilation_error'
  | 'runtime_error'
  | 'timeout'
  | 'rate_limited'
  | 'error';

export interface ExecutionRequest {
  language: SupportedLanguageId | string;
  code: string;
  stdin?: string;
}

export interface ExecutionResult {
  status: ExecutionStatus;
  stdout: string;
  stderr: string;
  exitCode: number | null;
  executionTime: number | null; // in milliseconds
  memory?: number | null; // in KB
  provider?: string;
  error?: string;
}

export interface CompilerProvider {
  name: string;
  execute(request: ExecutionRequest): Promise<ExecutionResult>;
}

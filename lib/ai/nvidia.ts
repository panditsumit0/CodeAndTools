export const DEFAULT_NVIDIA_MODEL = 'meta/llama-3.3-70b-instruct';

export function getNvidiaModel(): string {
  return process.env.NVIDIA_MODEL?.trim() || DEFAULT_NVIDIA_MODEL;
}

export function getNvidiaBaseUrl(): string {
  return process.env.NVIDIA_BASE_URL?.trim() || 'https://integrate.api.nvidia.com/v1';
}

export function verifyNvidiaConfig(): boolean {
  const key = process.env.NVIDIA_API_KEY;
  return Boolean(key && key.trim() !== '' && key !== '***HIDDEN***');
}

export function getNvidiaApiKey(): string {
  const key = process.env.NVIDIA_API_KEY;
  if (!key || key.trim() === '' || key === '***HIDDEN***') {
    throw new Error('NVIDIA_API_KEY_MISSING');
  }
  return key.trim();
}

export interface ParsedError {
  status: number;
  code: string;
  userMessage: string;
  technicalDetails: string;
}

export function parseNvidiaError(error: unknown, model: string): ParsedError {
  let status = 500;
  let code = 'UNKNOWN_ERROR';
  let message = 'An unexpected error occurred.';

  if (error instanceof Error) {
    message = error.message;
    if (message === 'NVIDIA_API_KEY_MISSING') {
      status = 401;
      code = 'API_KEY_MISSING';
      message = 'NVIDIA_API_KEY is not configured on the server. Please check .env.local.';
    } else if (message.includes('401')) {
      status = 401;
      code = 'UNAUTHORIZED';
    } else if (message.includes('403')) {
      status = 403;
      code = 'FORBIDDEN';
    } else if (message.includes('429')) {
      status = 429;
      code = 'RATE_LIMIT';
    } else if (message.includes('400')) {
      status = 400;
      code = 'BAD_REQUEST';
    } else if (message.includes('500') || message.includes('502') || message.includes('503')) {
      status = 503;
      code = 'UNAVAILABLE';
    } else if (message.includes('fetch') || message.includes('network')) {
      status = 502;
      code = 'NETWORK_ERROR';
    }
  } else if (typeof error === 'object' && error !== null) {
    const anyErr = error as Record<string, unknown>;
    if (typeof anyErr.status === 'number') status = anyErr.status;
    if (typeof anyErr.code === 'string') code = anyErr.code;
    if (typeof anyErr.message === 'string') message = anyErr.message;
  }

  let userMessage = 'Unable to connect to NVIDIA AI. Please try again.';
  if (status === 401) {
    userMessage = 'Invalid NVIDIA API key. Please check NVIDIA_API_KEY.';
  } else if (status === 403) {
    userMessage = 'NVIDIA API access was denied.';
  } else if (status === 404) {
    userMessage = `NVIDIA API endpoint or model not found.`;
  } else if (status === 410) {
    userMessage = `The requested model is no longer available.`;
  } else if (status === 429) {
    userMessage = 'NVIDIA API rate limit or quota reached. Please try again later.';
  } else if (status === 400 || status === 422) {
    userMessage = 'Invalid request sent to NVIDIA AI.';
  } else if (status >= 500 && status < 600) {
    userMessage = 'NVIDIA AI service is temporarily unavailable.';
  } else if (status) {
    userMessage = `NVIDIA API returned an unexpected error: ${status}`;
  }

  const sanitizedMessage = message.replace(process.env.NVIDIA_API_KEY || 'no_key', '***HIDDEN***');
  const technicalDetails = `Status: ${status} | Code: ${code} | Model: ${model} | Details: ${sanitizedMessage.slice(0, 180)}`;

  // The user explicitly requested to see the sanitized response instead of a generic message
  // if the request fails (e.g. 404 for model not found). We will append the sanitized detail.
  userMessage = `${userMessage} (Details: ${sanitizedMessage.slice(0, 100)})`;

  return { status, code, userMessage, technicalDetails };
}

export function logNvidiaServerError(parsed: ParsedError, context: { requestId: string; attempt?: number }) {
  if (process.env.NODE_ENV !== 'development') return;
  
  console.error('[NVIDIA API Error]', {
    requestId: context.requestId,
    attempt: context.attempt || 1,
    status: parsed.status,
    code: parsed.code,
    message: parsed.userMessage,
    technicalDetails: parsed.technicalDetails
  });
}

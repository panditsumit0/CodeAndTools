import { NextRequest, NextResponse } from 'next/server';
import { executionService } from '@/lib/compiler/execution-service';
import { executionRateLimiter } from '@/lib/compiler/rate-limiter';
import { ExecutionRequest } from '@/lib/compiler/types';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function POST(req: NextRequest) {
  try {
    // 1. Rate Limiting Check
    const ip =
      req.headers.get('x-forwarded-for')?.split(',')[0]?.trim() ||
      req.headers.get('x-real-ip') ||
      '127.0.0.1';

    const rateLimit = executionRateLimiter.check(ip);
    if (!rateLimit.success) {
      return NextResponse.json(
        {
          status: 'rate_limited',
          stdout: '',
          stderr: 'Rate limit exceeded (15 executions / min). Please wait a moment before running code again.',
          exitCode: 429,
          executionTime: null,
          error: 'Too many execution requests.',
        },
        {
          status: 429,
          headers: {
            'Retry-After': Math.ceil((rateLimit.resetTime - Date.now()) / 1000).toString(),
          },
        }
      );
    }

    // 2. Parse and validate JSON request
    let body: ExecutionRequest;
    try {
      body = await req.json();
    } catch {
      return NextResponse.json(
        {
          status: 'error',
          stdout: '',
          stderr: 'Invalid JSON request payload.',
          exitCode: 400,
          executionTime: null,
        },
        { status: 400 }
      );
    }

    if (!body || typeof body !== 'object') {
      return NextResponse.json(
        {
          status: 'error',
          stdout: '',
          stderr: 'Missing request body.',
          exitCode: 400,
          executionTime: null,
        },
        { status: 400 }
      );
    }

    const { language, code } = body;
    const stdin = typeof body.stdin === 'string' ? body.stdin : '';

    if (!language || typeof language !== 'string') {
      return NextResponse.json(
        {
          status: 'error',
          stdout: '',
          stderr: 'Missing or invalid "language" field.',
          exitCode: 400,
          executionTime: null,
        },
        { status: 400 }
      );
    }

    if (typeof code !== 'string') {
      return NextResponse.json(
        {
          status: 'error',
          stdout: '',
          stderr: 'Missing or invalid "code" field.',
          exitCode: 400,
          executionTime: null,
        },
        { status: 400 }
      );
    }

    // 3. Delegate to execution service (safely passing stdin with preserved newlines)
    const result = await executionService.execute({
      language,
      code,
      stdin,
    });

    return NextResponse.json(result);
  } catch (err: unknown) {
    const errorMsg = err instanceof Error ? err.message : 'Internal execution error';
    return NextResponse.json(
      {
        status: 'error',
        stdout: '',
        stderr: `Execution service error: ${errorMsg}`,
        exitCode: 500,
        executionTime: null,
      },
      { status: 500 }
    );
  }
}

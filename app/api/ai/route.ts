import { NextRequest, NextResponse } from 'next/server';
import {
  getNvidiaApiKey,
  getNvidiaModel,
  getNvidiaBaseUrl,
  parseNvidiaError,
  logNvidiaServerError,
} from '@/lib/ai/nvidia';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

// In-memory rate limiting: 30 requests per minute per IP
const rateMap = new Map<string, { count: number; resetAt: number }>();
const RATE_LIMIT = 30;
const RATE_WINDOW = 60 * 1000;

function checkRateLimit(ip: string): boolean {
  const now = Date.now();
  const entry = rateMap.get(ip);
  if (!entry || now > entry.resetAt) {
    rateMap.set(ip, { count: 1, resetAt: now + RATE_WINDOW });
    return true;
  }
  if (entry.count >= RATE_LIMIT) return false;
  entry.count++;
  return true;
}

const SYSTEM_PROMPT = `You are Code&Tools AI — an expert coding assistant and learning companion built into the Code&Tools developer toolkit. Your primary audience is B.Tech engineering students and professional software developers.

Your personality:
- Precise, knowledgeable, and friendly
- Use clear, structured explanations with headings and bullet points
- For students: explain concepts simply before going into depth
- For code: always show corrected/improved code in fenced code blocks with the language identifier
- Be concise but complete

Formatting rules:
- Use markdown formatting (headings, bold, code blocks, lists)
- Always use fenced code blocks with language identifiers: \`\`\`c, \`\`\`cpp, \`\`\`java, \`\`\`python, \`\`\`typescript
- For time/space complexity, use Big-O notation
- Keep explanations structured and scannable

You support: C, C++, Java, Python, TypeScript, JavaScript.`;

interface ConversationMessage {
  role: 'user' | 'assistant';
  content: string;
}

interface AIRequest {
  mode?: 'chat' | 'explain' | 'debug' | 'optimize' | 'add-comments' | 'convert' | 'explain-error';
  message?: string;
  code?: string;
  language?: string;
  errorOutput?: string;
  targetLanguage?: string;
  conversationHistory?: ConversationMessage[];
  stream?: boolean;
}

function buildPrompt(payload: AIRequest): string {
  const { mode, message, code, language, errorOutput, targetLanguage, conversationHistory } = payload;
  const langLabel = language ? language.toUpperCase() : '';
  const codeBlock = code ? '```' + (language || '') + '\n' + code + '\n```' : '';
  const errorBlock = errorOutput ? '```\n' + errorOutput + '\n```' : '';

  switch (mode) {
    case 'explain':
      return `Explain the following ${langLabel} code to a B.Tech student.\n\nCode:\n${codeBlock}\n\nStructure your response with these sections:\n## What this code does\n## How it works (step-by-step)\n## Key concepts used\n## Time & Space Complexity\n## Beginner Tip`;

    case 'debug':
      return `Debug the following ${langLabel} code. Identify all bugs and issues.\n\nCode:\n${codeBlock}${errorOutput ? '\n\nError Output:\n' + errorBlock : ''}\n\nStructure your response:\n## Problem Found\n## Why it happens\n## Fixed Code\n## What changed\n## Pro Tip`;

    case 'optimize':
      return `Optimize the following ${langLabel} code for performance and quality.\n\nCode:\n${codeBlock}\n\nStructure your response:\n## Current Analysis\n## Optimized Code\n## What improved and why\n## Complexity comparison`;

    case 'add-comments':
      return `Add clear, meaningful comments to this ${langLabel} code. Comment complex logic and non-obvious decisions only.\n\nCode:\n${codeBlock}\n\nReturn the commented code in a fenced code block, then briefly describe what you added.`;

    case 'convert':
      return `Convert the following ${langLabel} code to ${(targetLanguage || '').toUpperCase()}.\n\nOriginal Code:\n${codeBlock}\n\nProvide:\n## Converted Code\n## Key differences between ${langLabel} and ${(targetLanguage || '').toUpperCase()}\n## Anything that doesn't translate directly`;

    case 'explain-error':
      return `A B.Tech student got this error in their ${langLabel} code. Explain what went wrong simply and show the fix.\n\nCode:\n${codeBlock}\n\nError:\n${errorBlock}\n\nStructure:\n## What happened\n## Why it happened\n## How to fix it\n## Corrected Code`;

    case 'chat':
    default: {
      const historyContext = conversationHistory && conversationHistory.length > 0
        ? conversationHistory.slice(-8).map((m: ConversationMessage) =>
            `${m.role === 'user' ? 'User' : 'Assistant'}: ${m.content}`
          ).join('\n\n')
        : '';
      return historyContext ? `${historyContext}\n\nUser: ${message}` : (message || '');
    }
  }
}

export async function POST(req: NextRequest) {
  // Unique request ID for diagnostic logging (never exposed to client)
  const requestId = 'df-' + Math.random().toString(36).slice(2, 9);
  const ip = req.headers.get('x-forwarded-for')?.split(',')[0]?.trim()
    || req.headers.get('x-real-ip')
    || '127.0.0.1';

  if (process.env.NODE_ENV === 'development') {
    console.log('[Code&Tools AI] Request', { requestId, ip: ip.slice(0, 8) + '...', ts: new Date().toISOString() });
  }

  if (!checkRateLimit(ip)) {
    return NextResponse.json(
      {
        error: 'Rate limit reached. Please wait a moment before sending more requests.',
        technicalDetails: 'Status: 429 | Client Rate Limit Exceeded',
      },
      { status: 429 }
    );
  }

  let payload: AIRequest;
  try {
    payload = await req.json();
  } catch {
    return NextResponse.json(
      {
        error: 'Invalid request body.',
        technicalDetails: 'Status: 400 | JSON Parse Failed',
      },
      { status: 400 }
    );
  }

  const { stream = true } = payload;
  const prompt = buildPrompt(payload);

  if (!prompt || prompt.trim().length === 0) {
    return NextResponse.json(
      {
        error: 'No prompt content provided.',
        technicalDetails: 'Status: 400 | Empty Prompt',
      },
      { status: 400 }
    );
  }

  let apiKey: string;
  let model: string;
  let baseUrl: string;
  try {
    apiKey = getNvidiaApiKey();
    model = getNvidiaModel();
    baseUrl = getNvidiaBaseUrl();
  } catch (err: unknown) {
    const parsed = parseNvidiaError(err, 'unknown');
    logNvidiaServerError(parsed, { requestId });
    return NextResponse.json(
      {
        error: parsed.userMessage,
        technicalDetails: parsed.technicalDetails,
      },
      { status: parsed.status }
    );
  }

  try {
    const messages = [
      { role: 'system', content: SYSTEM_PROMPT },
    ];

    if (payload.conversationHistory && payload.conversationHistory.length > 0) {
      messages.push(...payload.conversationHistory.slice(-8));
    }
    
    // For non-chat modes, prompt already has everything. For chat, we just add the latest user message.
    if (payload.mode !== 'chat' || !payload.conversationHistory || payload.conversationHistory.length === 0) {
      messages.push({ role: 'user', content: prompt });
    } else {
      messages.push({ role: 'user', content: payload.message || '' });
    }

    const requestBody = {
      model,
      messages,
      temperature: 0.6,
      max_tokens: 2048,
      stream,
    };

    const response = await fetch(`${baseUrl}/chat/completions`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${apiKey}`
      },
      body: JSON.stringify(requestBody),
    });

    if (!response.ok) {
      throw new Error(`NVIDIA API Error: ${response.status} ${response.statusText}`);
    }

    if (stream) {
      if (!response.body) throw new Error('Response body is null');
      
      const encoder = new TextEncoder();
      const decoder = new TextDecoder();
      const reader = response.body.getReader();

      const readable = new ReadableStream({
        async start(controller) {
          try {
            let buffer = '';
            while (true) {
              const { done, value } = await reader.read();
              if (done) break;
              
              buffer += decoder.decode(value, { stream: true });
              const lines = buffer.split('\\n');
              buffer = lines.pop() || '';
              
              for (const line of lines) {
                if (line.startsWith('data: ')) {
                  const dataStr = line.slice(6);
                  if (dataStr.trim() === '[DONE]') {
                    controller.enqueue(encoder.encode('data: [DONE]\\n\\n'));
                    continue;
                  }
                  try {
                    const data = JSON.parse(dataStr);
                    const text = data.choices[0]?.delta?.content;
                    if (text) {
                      controller.enqueue(encoder.encode(`data: ${JSON.stringify({ text })}\\n\\n`));
                    }
                  } catch {
                    // Ignore malformed JSON chunks
                  }
                }
              }
            }
            if (buffer.trim() !== '') {
               // process remaining
            }
          } catch (err: unknown) {
            const parsed = parseNvidiaError(err, model);
            logNvidiaServerError(parsed, { requestId });
            controller.enqueue(
              encoder.encode(`data: ${JSON.stringify({
                error: parsed.userMessage,
                technicalDetails: parsed.technicalDetails,
              })}\\n\\n`)
            );
          } finally {
            controller.close();
          }
        },
      });

      return new Response(readable, {
        headers: {
          'Content-Type': 'text/event-stream',
          'Cache-Control': 'no-cache',
          Connection: 'keep-alive',
        },
      });
    } else {
      const data = await response.json();
      return NextResponse.json({ text: data.choices[0]?.message?.content || '' });
    }
  } catch (err: unknown) {
    const parsed = parseNvidiaError(err, model);
    logNvidiaServerError(parsed, { requestId });
    return NextResponse.json(
      {
        error: parsed.userMessage,
        technicalDetails: parsed.technicalDetails,
      },
      { status: parsed.status }
    );
  }
}

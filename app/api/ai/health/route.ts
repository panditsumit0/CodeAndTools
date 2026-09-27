import { NextResponse } from 'next/server';
import { verifyNvidiaConfig, getNvidiaModel, getNvidiaBaseUrl, getNvidiaApiKey } from '@/lib/ai/nvidia';

export const runtime = 'nodejs';
export const dynamic = 'force-dynamic';

export async function GET() {
  if (process.env.NODE_ENV === 'production') {
    return NextResponse.json({ error: 'Not available in production' }, { status: 403 });
  }

  try {
    const configured = verifyNvidiaConfig();
    const model = getNvidiaModel();
    let reachable = false;
    let authorized = false;
    let status = 'unhealthy';
    
    if (configured) {
        try {
            const response = await fetch(`${getNvidiaBaseUrl()}/chat/completions`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${getNvidiaApiKey()}`
                },
                body: JSON.stringify({
                    model: model,
                    messages: [{ role: 'user', content: 'test' }],
                    max_tokens: 1
                })
            });
            
            reachable = true;
            if (response.ok) {
                authorized = true;
                status = 'healthy';
            } else if (response.status === 401 || response.status === 403) {
                authorized = false;
            }
        } catch(e) {
            reachable = false;
        }
    }
    
    const health = { configured, model, reachable, authorized, status };
    const httpStatus = health.status === 'healthy' ? 200 : (!health.authorized ? 401 : 503);
    return NextResponse.json(health, { status: httpStatus });
  } catch (err: unknown) {
    return NextResponse.json(
      {
        configured: false,
        model: 'unknown',
        reachable: false,
        authorized: false,
        status: 'unhealthy',
        error: 'Code&Tools AI health check encountered an unexpected error.',
      },
      { status: 500 }
    );
  }
}

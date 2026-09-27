'use client';

import React, { useState, useMemo } from 'react';
import { CopyButton } from '@/components/ui/CopyButton';
import { ErrorMessage } from '@/components/ui/ErrorMessage';
import {
  KeyRound,
  Clock,
  ShieldAlert,
  CheckCircle2,
  XCircle,
  Trash2,
} from 'lucide-react';

interface DecodedToken {
  header: Record<string, unknown> | null;
  payload: Record<string, unknown> | null;
  signature: string;
  isExpired: boolean | null;
  expiresAt: string | null;
  issuedAt: string | null;
  notBefore: string | null;
  rawHeader: string;
  rawPayload: string;
}

// Safely decode Base64Url
function decodeBase64Url(str: string): string {
  let output = str.replace(/-/g, '+').replace(/_/g, '/');
  switch (output.length % 4) {
    case 0:
      break;
    case 2:
      output += '==';
      break;
    case 3:
      output += '=';
      break;
    default:
      throw new Error('Illegal base64url string length');
  }
  const binary = atob(output);
  const bytes = Uint8Array.from(binary, (char) => char.charCodeAt(0));
  return new TextDecoder().decode(bytes);
}

export function JwtDecoderTool() {
  const [tokenInput, setTokenInput] = useState<string>('');
  const [nowTimestamp] = useState<number>(() => Math.floor(Date.now() / 1000));

  const { decoded, parseException } = useMemo<{
    decoded: DecodedToken | null;
    parseException: string | null;
  }>(() => {
    if (!tokenInput.trim()) {
      return { decoded: null, parseException: null };
    }

    try {
      const parts = tokenInput.trim().split('.');
      if (parts.length !== 3) {
        throw new Error('A valid JWT must contain exactly 3 dot-separated segments (Header.Payload.Signature).');
      }

      const [headerB64, payloadB64, signatureB64] = parts;

      let headerObj = null;
      let payloadObj = null;

      try {
        headerObj = JSON.parse(decodeBase64Url(headerB64));
      } catch {
        throw new Error('Failed to decode JWT Header. Please check that the header is valid base64url JSON.');
      }

      try {
        payloadObj = JSON.parse(decodeBase64Url(payloadB64));
      } catch {
        throw new Error('Failed to decode JWT Payload. Please check that the payload is valid base64url JSON.');
      }

      let isExpired: boolean | null = null;
      let expiresAt: string | null = null;
      let issuedAt: string | null = null;
      let notBefore: string | null = null;

      if (payloadObj && typeof payloadObj === 'object') {
        const p = payloadObj as Record<string, unknown>;

        if (typeof p.exp === 'number') {
          const expDate = new Date(p.exp * 1000);
          isExpired = p.exp < nowTimestamp;
          expiresAt = `${expDate.toUTCString()} (Local: ${expDate.toLocaleString()})`;
        }

        if (typeof p.iat === 'number') {
          const iatDate = new Date(p.iat * 1000);
          issuedAt = `${iatDate.toUTCString()} (Local: ${iatDate.toLocaleString()})`;
        }

        if (typeof p.nbf === 'number') {
          const nbfDate = new Date(p.nbf * 1000);
          notBefore = `${nbfDate.toUTCString()} (Local: ${nbfDate.toLocaleString()})`;
        }
      }

      return {
        decoded: {
          header: headerObj,
          payload: payloadObj,
          signature: signatureB64,
          isExpired,
          expiresAt,
          issuedAt,
          notBefore,
          rawHeader: headerB64,
          rawPayload: payloadB64,
        },
        parseException: null,
      };
    } catch (e: unknown) {
      return {
        decoded: null,
        parseException: e instanceof Error ? e.message : 'Invalid token structure.',
      };
    }
  }, [tokenInput, nowTimestamp]);

  const handleLoadSample = () => {
    const header = { alg: 'HS256', typ: 'JWT' };
    const now = Math.floor(Date.now() / 1000);
    const payload = {
      sub: 'usr_98a7c2f1e4b',
      name: 'Alex Developer',
      email: 'alex@example.com',
      role: 'admin',
      iat: now - 3600,
      exp: now + 86400,
      iss: 'https://auth.devkit.local',
    };

    const b64UrlEncode = (str: string) =>
      btoa(str).replace(/\+/g, '-').replace(/\//g, '_').replace(/=+$/, '');

    const token = `${b64UrlEncode(JSON.stringify(header))}.${b64UrlEncode(
      JSON.stringify(payload)
    )}.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c`;

    setTokenInput(token);
  };

  const handleClear = () => {
    setTokenInput('');
  };

  return (
    <div className="space-y-6">
      {/* Security Disclaimer Banner */}
      <div className="p-3.5 rounded-xl border border-amber-500/30 bg-amber-500/10 text-amber-700 dark:text-amber-300 text-xs sm:text-sm flex items-start gap-3">
        <ShieldAlert className="w-5 h-5 shrink-0 text-amber-500 mt-0.5" />
        <div className="leading-relaxed">
          <strong>Important Security Notice:</strong> This tool decodes JWTs locally in your browser. It does <strong>NOT</strong> verify the token signature. Never consider an unverified token secure in a production backend.
        </div>
      </div>

      {/* Input Field */}
      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <label className="text-xs font-semibold text-zinc-700 dark:text-zinc-300 flex items-center gap-1.5">
            <KeyRound className="w-3.5 h-3.5 text-primary" />
            Encoded JWT Token
          </label>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={handleLoadSample}
              className="text-xs text-primary hover:underline"
            >
              Load Sample Token
            </button>
            {tokenInput && (
              <button
                type="button"
                onClick={handleClear}
                className="text-zinc-400 hover:text-rose-500 p-1"
                title="Clear token"
              >
                <Trash2 className="w-3.5 h-3.5" />
              </button>
            )}
          </div>
        </div>

        <div className="relative rounded-xl border border-zinc-200 dark:border-[#1F2937] bg-zinc-50 dark:bg-[#0B111A] overflow-hidden focus-within:ring-2 focus-within:ring-primary/40 focus-within:border-primary">
          <textarea
            value={tokenInput}
            onChange={(e) => setTokenInput(e.target.value)}
            placeholder="Paste your JWT here (e.g. eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIi...)"
            rows={4}
            spellCheck={false}
            className="w-full p-3.5 font-mono-code text-xs sm:text-sm bg-transparent text-zinc-900 dark:text-zinc-100 placeholder:text-zinc-400 focus:outline-none resize-y leading-relaxed break-all"
          />
        </div>
      </div>

      {parseException && (
        <ErrorMessage type="error" message={parseException} />
      )}

      {/* Decoded Token Display */}
      {decoded && (
        <div className="space-y-6 pt-2">
          {/* Expiration Status Alert */}
          {decoded.isExpired !== null && (
            <div
              className={`p-4 rounded-xl border flex items-center justify-between gap-3 text-xs sm:text-sm font-semibold ${
                decoded.isExpired
                  ? 'bg-rose-500/10 border-rose-500/30 text-rose-600 dark:text-rose-400'
                  : 'bg-[#22C55E]/10 border-[#22C55E]/30 text-[#22C55E]'
              }`}
            >
              <div className="flex items-center gap-2.5">
                {decoded.isExpired ? (
                  <XCircle className="w-5 h-5 text-rose-500 shrink-0" />
                ) : (
                  <CheckCircle2 className="w-5 h-5 text-[#22C55E] shrink-0" />
                )}
                <span>
                  {decoded.isExpired
                    ? 'TOKEN HAS EXPIRED'
                    : 'TOKEN IS CURRENTLY ACTIVE'}
                </span>
              </div>
              <div className="text-xs font-normal opacity-90 hidden sm:block">
                {decoded.expiresAt ? `Exp: ${decoded.expiresAt}` : ''}
              </div>
            </div>
          )}

          {/* Three Column Breakdown */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Header Section (Red/Coral) */}
            <div className="rounded-xl border border-rose-500/30 bg-rose-500/[0.02] dark:bg-rose-950/10 p-4 space-y-3">
              <div className="flex items-center justify-between pb-2 border-b border-rose-500/20">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-rose-500" />
                  <span className="text-xs font-bold uppercase tracking-wider text-rose-600 dark:text-rose-400">
                    Header (Algorithm & Token Type)
                  </span>
                </div>
                <CopyButton
                  text={JSON.stringify(decoded.header, null, 2)}
                  label="Copy"
                  size="sm"
                />
              </div>
              <pre className="font-mono-code text-xs text-zinc-900 dark:text-zinc-100 bg-white dark:bg-[#0D1117]/90 p-3.5 rounded-lg border border-zinc-200 dark:border-[#1F2937] overflow-x-auto">
                {JSON.stringify(decoded.header, null, 2)}
              </pre>
            </div>

            {/* Signature Section (Cyan/Blue) */}
            <div className="rounded-xl border border-sky-500/30 bg-sky-500/[0.02] dark:bg-sky-950/10 p-4 space-y-3">
              <div className="flex items-center justify-between pb-2 border-b border-sky-500/20">
                <div className="flex items-center gap-2">
                  <span className="w-2.5 h-2.5 rounded-full bg-sky-500" />
                  <span className="text-xs font-bold uppercase tracking-wider text-sky-600 dark:text-sky-400">
                    Signature (Local Verification Notice)
                  </span>
                </div>
                <CopyButton text={decoded.signature} label="Copy" size="sm" />
              </div>
              <div className="bg-white dark:bg-[#0D1117]/90 p-3.5 rounded-lg border border-zinc-200 dark:border-[#1F2937] font-mono-code text-xs break-all text-zinc-700 dark:text-zinc-300">
                {decoded.signature}
              </div>
              <p className="text-[11px] text-zinc-500 leading-relaxed">
                The signature is computed via{' '}
                <code className="text-zinc-700 dark:text-zinc-300">
                  {String(decoded.header?.alg || 'HMACSHA256')}(base64Url(header) + &quot;.&quot; + base64Url(payload), secret)
                </code>
                . Verification requires server-side secret key or certificate.
              </p>
            </div>
          </div>

          {/* Payload Section (Purple/Indigo) */}
          <div className="rounded-xl border border-purple-500/30 bg-purple-500/[0.02] dark:bg-purple-950/10 p-4 space-y-3">
            <div className="flex items-center justify-between pb-2 border-b border-purple-500/20">
              <div className="flex items-center gap-2">
                <span className="w-2.5 h-2.5 rounded-full bg-purple-500" />
                <span className="text-xs font-bold uppercase tracking-wider text-purple-600 dark:text-purple-400">
                  Payload (Claims & Data)
                </span>
              </div>
              <CopyButton
                text={JSON.stringify(decoded.payload, null, 2)}
                label="Copy Payload"
                size="sm"
              />
            </div>
            <pre className="font-mono-code text-xs text-zinc-900 dark:text-zinc-100 bg-white dark:bg-[#0D1117]/90 p-4 rounded-lg border border-zinc-200 dark:border-[#1F2937] overflow-x-auto leading-relaxed">
              {JSON.stringify(decoded.payload, null, 2)}
            </pre>

            {/* Human Readable Timestamps Card */}
            {(decoded.expiresAt || decoded.issuedAt || decoded.notBefore) && (
              <div className="mt-3 p-3.5 rounded-lg bg-zinc-100 dark:bg-zinc-800/60 border border-zinc-200 dark:border-zinc-700/60 space-y-2 text-xs">
                <span className="font-semibold text-zinc-800 dark:text-zinc-200 flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5 text-purple-500" />
                  Standard Claim Timestamps:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-zinc-600 dark:text-zinc-400">
                  {decoded.issuedAt && (
                    <div>
                      <strong className="text-zinc-800 dark:text-zinc-200">iat (Issued At):</strong> {decoded.issuedAt}
                    </div>
                  )}
                  {decoded.expiresAt && (
                    <div>
                      <strong className="text-zinc-800 dark:text-zinc-200">exp (Expires At):</strong> {decoded.expiresAt}
                    </div>
                  )}
                  {decoded.notBefore && (
                    <div>
                      <strong className="text-zinc-800 dark:text-zinc-200">nbf (Not Before):</strong> {decoded.notBefore}
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

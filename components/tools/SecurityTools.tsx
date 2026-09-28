'use client';

import React, { useState, useMemo, useEffect, useCallback } from 'react';
import {
  Copy,
  Check,
  RefreshCw,
  Shield,
  ShieldAlert,
  ShieldCheck,
  Key,
  Lock,
  FileCheck,
  UploadCloud,
  FileCode,
  Download
} from 'lucide-react';

// -------------------------------------------------------------
// 1. PASSWORD GENERATOR & STRENGTH METER
// -------------------------------------------------------------
export function PasswordGeneratorTool() {
  const [length, setLength] = useState<number>(16);
  const [includeUpper, setIncludeUpper] = useState<boolean>(true);
  const [includeLower, setIncludeLower] = useState<boolean>(true);
  const [includeNumbers, setIncludeNumbers] = useState<boolean>(true);
  const [includeSymbols, setIncludeSymbols] = useState<boolean>(true);
  const [avoidAmbiguous, setAvoidAmbiguous] = useState<boolean>(true);
  const [password, setPassword] = useState<string>('');
  const [copied, setCopied] = useState<boolean>(false);

  const generate = useCallback(() => {
    let chars = '';
    const upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const lower = 'abcdefghijklmnopqrstuvwxyz';
    const numbers = '0123456789';
    const symbols = '!@#$%^&*()_+-=[]{}|;:,.<>?';

    if (includeUpper) chars += upper;
    if (includeLower) chars += lower;
    if (includeNumbers) chars += numbers;
    if (includeSymbols) chars += symbols;

    if (avoidAmbiguous) {
      chars = chars.replace(/[0O1lI|]/g, '');
    }

    if (!chars) {
      setPassword('');
      return;
    }

    const randomValues = new Uint32Array(length);
    window.crypto.getRandomValues(randomValues);
    let result = '';
    for (let i = 0; i < length; i++) {
      result += chars[randomValues[i] % chars.length];
    }
    setPassword(result);
  }, [length, includeUpper, includeLower, includeNumbers, includeSymbols, avoidAmbiguous]);

  useEffect(() => {
    generate();
  }, [generate]);

  // Calculate entropy and strength
  const { entropy, strength, strengthColor, strengthLabel } = useMemo(() => {
    if (!password) return { entropy: 0, strength: 0, strengthColor: 'bg-zinc-300', strengthLabel: 'None' };
    let pool = 0;
    if (/[a-z]/.test(password)) pool += 26;
    if (/[A-Z]/.test(password)) pool += 26;
    if (/[0-9]/.test(password)) pool += 10;
    if (/[^a-zA-Z0-9]/.test(password)) pool += 32;

    const bits = Math.round(password.length * Math.log2(pool || 1));
    if (bits < 40) return { entropy: bits, strength: 25, strengthColor: 'bg-rose-500', strengthLabel: 'Weak' };
    if (bits < 60) return { entropy: bits, strength: 50, strengthColor: 'bg-amber-500', strengthLabel: 'Fair' };
    if (bits < 80) return { entropy: bits, strength: 75, strengthColor: 'bg-blue-500', strengthLabel: 'Strong' };
    return { entropy: bits, strength: 100, strengthColor: 'bg-emerald-500', strengthLabel: 'Very Strong' };
  }, [password]);

  const copyPassword = () => {
    if (!password) return;
    navigator.clipboard.writeText(password);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-6">
      {/* Generated Password Box */}
      <div className="p-4 rounded-xl border border-zinc-200 dark:border-[#1F2937] bg-zinc-50 dark:bg-[#0B111A] flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="w-full font-mono text-lg sm:text-xl font-bold tracking-wider text-zinc-900 dark:text-white break-all select-all">
          {password || 'Select at least one character set'}
        </div>
        <div className="flex items-center gap-2 shrink-0 self-end sm:self-auto">
          <button
            onClick={generate}
            className="p-2.5 rounded-xl border border-zinc-200 dark:border-[#1F2937] text-zinc-700 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-800 cursor-pointer transition-colors"
            title="Generate New Password"
          >
            <RefreshCw className="w-4 h-4" />
          </button>
          <button
            onClick={copyPassword}
            disabled={!password}
            className="inline-flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-primary text-primary-foreground font-semibold text-xs hover:opacity-90 transition-opacity cursor-pointer disabled:opacity-50"
          >
            {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
            <span>{copied ? 'Copied' : 'Copy'}</span>
          </button>
        </div>
      </div>

      {/* Strength Indicator */}
      <div className="space-y-1.5">
        <div className="flex items-center justify-between text-xs">
          <span className="font-semibold text-zinc-600 dark:text-zinc-400">Password Strength:</span>
          <span className="font-bold text-zinc-900 dark:text-white">
            {strengthLabel} ({entropy} bits entropy)
          </span>
        </div>
        <div className="w-full h-2 rounded-full bg-zinc-200 dark:bg-zinc-800 overflow-hidden">
          <div
            className={`h-full transition-all duration-300 ${strengthColor}`}
            style={{ width: `${strength}%` }}
          />
        </div>
      </div>

      {/* Options Controls */}
      <div className="p-4 rounded-xl border border-zinc-200 dark:border-[#1F2937] bg-zinc-50 dark:bg-[#0B111A] space-y-4">
        {/* Length Slider */}
        <div className="space-y-2">
          <div className="flex justify-between text-xs font-semibold text-zinc-700 dark:text-zinc-300">
            <span>Password Length</span>
            <span className="px-2 py-0.5 rounded bg-zinc-200 dark:bg-zinc-800 text-primary">
              {length} characters
            </span>
          </div>
          <input
            type="range"
            min={8}
            max={64}
            value={length}
            onChange={(e) => setLength(Number(e.target.value))}
            className="w-full accent-primary cursor-pointer"
          />
        </div>

        {/* Character Toggles */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs">
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={includeUpper}
              onChange={(e) => setIncludeUpper(e.target.checked)}
              className="rounded text-primary focus:ring-0"
            />
            <span className="text-zinc-700 dark:text-zinc-300 font-medium">Uppercase Letters (A-Z)</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={includeLower}
              onChange={(e) => setIncludeLower(e.target.checked)}
              className="rounded text-primary focus:ring-0"
            />
            <span className="text-zinc-700 dark:text-zinc-300 font-medium">Lowercase Letters (a-z)</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={includeNumbers}
              onChange={(e) => setIncludeNumbers(e.target.checked)}
              className="rounded text-primary focus:ring-0"
            />
            <span className="text-zinc-700 dark:text-zinc-300 font-medium">Numbers (0-9)</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer">
            <input
              type="checkbox"
              checked={includeSymbols}
              onChange={(e) => setIncludeSymbols(e.target.checked)}
              className="rounded text-primary focus:ring-0"
            />
            <span className="text-zinc-700 dark:text-zinc-300 font-medium">Special Symbols (!@#$%)</span>
          </label>
          <label className="flex items-center gap-2 cursor-pointer sm:col-span-2">
            <input
              type="checkbox"
              checked={avoidAmbiguous}
              onChange={(e) => setAvoidAmbiguous(e.target.checked)}
              className="rounded text-primary focus:ring-0"
            />
            <span className="text-zinc-700 dark:text-zinc-300 font-medium">
              Avoid Ambiguous Characters (e.g. 0, O, 1, l, I)
            </span>
          </label>
        </div>
      </div>
    </div>
  );
}

// -------------------------------------------------------------
// 2. JWT GENERATOR TOOL
// -------------------------------------------------------------
export function JwtGeneratorTool() {
  const [headerJson, setHeaderJson] = useState<string>(
    JSON.stringify({ alg: "HS256", typ: "JWT" }, null, 2)
  );
  const [payloadJson, setPayloadJson] = useState<string>(
    JSON.stringify(
      {
        sub: "1234567890",
        name: "Aarav Sharma",
        role: "admin",
        iat: Math.floor(Date.now() / 1000),
        exp: Math.floor(Date.now() / 1000) + 3600
      },
      null,
      2
    )
  );
  const [secretKey, setSecretKey] = useState<string>("my-super-secret-key-32-chars-long!");
  const [generatedToken, setGeneratedToken] = useState<string>('');
  const [copied, setCopied] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  // Base64URL encoder
  const base64UrlEncode = (str: string): string => {
    return btoa(str).replace(/=/g, '').replace(/\+/g, '-').replace(/\//g, '_');
  };

  const generateJwt = useCallback(async () => {
    try {
      setError(null);
      const parsedHeader = JSON.parse(headerJson);
      const parsedPayload = JSON.parse(payloadJson);

      const encodedHeader = base64UrlEncode(JSON.stringify(parsedHeader));
      const encodedPayload = base64UrlEncode(JSON.stringify(parsedPayload));
      const unsignedToken = `${encodedHeader}.${encodedPayload}`;

      // Sign with HMAC SHA-256 via Web Crypto API
      const encoder = new TextEncoder();
      const keyData = encoder.encode(secretKey);
      const cryptoKey = await window.crypto.subtle.importKey(
        'raw',
        keyData,
        { name: 'HMAC', hash: 'SHA-256' },
        false,
        ['sign']
      );

      const signatureBuffer = await window.crypto.subtle.sign(
        'HMAC',
        cryptoKey,
        encoder.encode(unsignedToken)
      );

      const signatureBytes = new Uint8Array(signatureBuffer);
      let binaryStr = '';
      for (let i = 0; i < signatureBytes.length; i++) {
        binaryStr += String.fromCharCode(signatureBytes[i]);
      }
      const encodedSignature = base64UrlEncode(binaryStr);

      setGeneratedToken(`${unsignedToken}.${encodedSignature}`);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : String(err));
      setGeneratedToken('');
    }
  }, [headerJson, payloadJson, secretKey]);

  useEffect(() => {
    generateJwt();
  }, [generateJwt]);

  const copyToken = () => {
    if (!generatedToken) return;
    navigator.clipboard.writeText(generatedToken);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-6">
      {/* Generated Token Result */}
      <div className="space-y-2">
        <div className="flex items-center justify-between text-xs text-zinc-500">
          <span className="font-semibold text-zinc-700 dark:text-zinc-300">Generated JWT Token (HS256):</span>
          <button
            onClick={copyToken}
            disabled={!generatedToken}
            className="text-primary hover:underline font-semibold cursor-pointer disabled:opacity-50"
          >
            {copied ? 'Copied Token!' : 'Copy Token'}
          </button>
        </div>
        <div className="p-3.5 rounded-xl border border-zinc-200 dark:border-[#1F2937] bg-zinc-50 dark:bg-[#0B111A] font-mono text-xs sm:text-sm break-all select-all leading-relaxed">
          {generatedToken ? (
            <div>
              <span className="text-rose-500">{generatedToken.split('.')[0]}</span>
              <span className="text-zinc-400">.</span>
              <span className="text-purple-500">{generatedToken.split('.')[1]}</span>
              <span className="text-zinc-400">.</span>
              <span className="text-blue-500">{generatedToken.split('.')[2]}</span>
            </div>
          ) : (
            <span className="text-zinc-400 italic">Invalid Header or Payload JSON</span>
          )}
        </div>
      </div>

      {error && (
        <div className="p-3.5 rounded-xl border border-rose-500/25 bg-rose-500/10 text-rose-600 dark:text-rose-400 text-xs font-mono">
          {error}
        </div>
      )}

      {/* Secret Key Input */}
      <div className="space-y-2">
        <label className="text-xs font-semibold text-zinc-700 dark:text-zinc-300">
          HMAC-SHA256 Secret Key (Used for browser-side signing)
        </label>
        <input
          type="text"
          value={secretKey}
          onChange={(e) => setSecretKey(e.target.value)}
          placeholder="Enter secret key..."
          className="w-full px-3.5 py-2 rounded-xl border border-zinc-200 dark:border-[#1F2937] bg-zinc-50 dark:bg-[#0B111A] text-zinc-900 dark:text-zinc-100 font-mono text-xs focus:outline-none focus:ring-2 focus:ring-primary/40"
        />
      </div>

      {/* Header and Payload Editors */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <label className="text-xs font-semibold text-rose-600 dark:text-rose-400">
            Header JSON
          </label>
          <textarea
            value={headerJson}
            onChange={(e) => setHeaderJson(e.target.value)}
            rows={8}
            className="w-full p-3 rounded-xl border border-zinc-200 dark:border-[#1F2937] bg-zinc-50 dark:bg-[#0B111A] text-zinc-900 dark:text-zinc-100 font-mono text-xs focus:outline-none focus:ring-2 focus:ring-primary/40 leading-relaxed"
          />
        </div>

        <div className="space-y-2">
          <label className="text-xs font-semibold text-purple-600 dark:text-purple-400">
            Payload Claims JSON
          </label>
          <textarea
            value={payloadJson}
            onChange={(e) => setPayloadJson(e.target.value)}
            rows={8}
            className="w-full p-3 rounded-xl border border-zinc-200 dark:border-[#1F2937] bg-zinc-50 dark:bg-[#0B111A] text-zinc-900 dark:text-zinc-100 font-mono text-xs focus:outline-none focus:ring-2 focus:ring-primary/40 leading-relaxed"
          />
        </div>
      </div>
    </div>
  );
}

// -------------------------------------------------------------
// 3. RANDOM TOKEN & API KEY GENERATOR
// -------------------------------------------------------------
export function RandomTokenTool() {
  const [tokenType, setTokenType] = useState<'hex' | 'base64' | 'alphanumeric' | 'uuid'>('hex');
  const [byteLength, setByteLength] = useState<number>(32);
  const [count, setCount] = useState<number>(5);
  const [tokens, setTokens] = useState<string[]>([]);
  const [copiedIdx, setCopiedIdx] = useState<number | null>(null);

  const generateTokens = useCallback(() => {
    const list: string[] = [];
    for (let c = 0; c < count; c++) {
      if (tokenType === 'uuid') {
        list.push(crypto.randomUUID());
        continue;
      }

      const randomBytes = new Uint8Array(byteLength);
      window.crypto.getRandomValues(randomBytes);

      if (tokenType === 'hex') {
        const hex = Array.from(randomBytes)
          .map((b) => b.toString(16).padStart(2, '0'))
          .join('');
        list.push(hex);
      } else if (tokenType === 'base64') {
        let binary = '';
        for (let i = 0; i < randomBytes.byteLength; i++) {
          binary += String.fromCharCode(randomBytes[i]);
        }
        list.push(btoa(binary).replace(/=/g, ''));
      } else {
        // Alphanumeric
        const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
        let str = '';
        for (let i = 0; i < byteLength; i++) {
          str += chars[randomBytes[i] % chars.length];
        }
        list.push(str);
      }
    }
    setTokens(list);
  }, [tokenType, byteLength, count]);

  useEffect(() => {
    generateTokens();
  }, [generateTokens]);

  const copyToken = (tok: string, idx: number) => {
    navigator.clipboard.writeText(tok);
    setCopiedIdx(idx);
    setTimeout(() => setCopiedIdx(null), 1500);
  };

  const copyAll = () => {
    navigator.clipboard.writeText(tokens.join('\n'));
    setCopiedIdx(-1);
    setTimeout(() => setCopiedIdx(null), 1500);
  };

  return (
    <div className="space-y-6">
      {/* Controls Bar */}
      <div className="p-4 rounded-xl border border-zinc-200 dark:border-[#1F2937] bg-zinc-50 dark:bg-[#0B111A] flex flex-wrap items-center justify-between gap-4 text-xs">
        <div className="flex flex-wrap items-center gap-3">
          <div className="flex items-center gap-1.5">
            <span className="font-semibold text-zinc-600 dark:text-zinc-400">Format:</span>
            <select
              value={tokenType}
              onChange={(e) => setTokenType(e.target.value as 'hex' | 'base64' | 'alphanumeric' | 'uuid')}
              className="px-2.5 py-1 rounded-lg border border-zinc-200 dark:border-[#1F2937] bg-white dark:bg-[#151B24] font-semibold text-zinc-900 dark:text-white"
            >
              <option value="hex">Hexadecimal (API Keys / Secrets)</option>
              <option value="base64">Base64 URL Safe</option>
              <option value="alphanumeric">Alphanumeric (Letters & Digits)</option>
              <option value="uuid">UUID v4</option>
            </select>
          </div>

          {tokenType !== 'uuid' && (
            <div className="flex items-center gap-1.5">
              <span className="text-zinc-600 dark:text-zinc-400">Length:</span>
              <select
                value={byteLength}
                onChange={(e) => setByteLength(Number(e.target.value))}
                className="px-2 py-1 rounded-lg border border-zinc-200 dark:border-[#1F2937] bg-white dark:bg-[#151B24] font-semibold text-zinc-900 dark:text-white"
              >
                <option value={16}>16 bytes (128-bit)</option>
                <option value={32}>32 bytes (256-bit)</option>
                <option value={64}>64 bytes (512-bit)</option>
              </select>
            </div>
          )}

          <div className="flex items-center gap-1.5">
            <span className="text-zinc-600 dark:text-zinc-400">Count:</span>
            <input
              type="number"
              min={1}
              max={20}
              value={count}
              onChange={(e) => setCount(Math.max(1, Math.min(20, Number(e.target.value) || 1)))}
              className="w-14 px-2 py-1 rounded-lg border border-zinc-200 dark:border-[#1F2937] bg-white dark:bg-[#151B24] text-center font-semibold text-zinc-900 dark:text-white"
            />
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={generateTokens}
            className="p-1.5 rounded-lg border border-zinc-200 dark:border-[#1F2937] text-zinc-700 dark:text-zinc-300 hover:bg-zinc-200 dark:hover:bg-zinc-800 cursor-pointer"
            title="Regenerate"
          >
            <RefreshCw className="w-4 h-4" />
          </button>
          <button
            onClick={copyAll}
            className="inline-flex items-center gap-1 px-3 py-1.5 rounded-lg bg-primary text-primary-foreground font-semibold hover:opacity-90 cursor-pointer"
          >
            {copiedIdx === -1 ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copiedIdx === -1 ? 'Copied All' : 'Copy All'}</span>
          </button>
        </div>
      </div>

      {/* Token List */}
      <div className="space-y-2.5">
        {tokens.map((tok, idx) => (
          <div
            key={idx}
            className="p-3 rounded-xl border border-zinc-200 dark:border-[#1F2937] bg-zinc-50 dark:bg-[#0B111A] flex items-center justify-between gap-3 font-mono text-xs select-all"
          >
            <span className="text-zinc-900 dark:text-zinc-100 break-all">{tok}</span>
            <button
              onClick={() => copyToken(tok, idx)}
              className="p-1.5 rounded-md hover:bg-zinc-200 dark:hover:bg-zinc-800 text-zinc-500 hover:text-zinc-900 dark:hover:text-white cursor-pointer shrink-0 transition-colors"
            >
              {copiedIdx === idx ? (
                <Check className="w-3.5 h-3.5 text-emerald-500" />
              ) : (
                <Copy className="w-3.5 h-3.5" />
              )}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

// -------------------------------------------------------------
// 4. CHECKSUM GENERATOR & VERIFIER
// -------------------------------------------------------------
export function ChecksumGeneratorTool() {
  const [inputText, setInputText] = useState<string>('Hello, Code&Tools Security Suite!');
  const [hashes, setHashes] = useState<Record<string, string>>({});
  const [expectedHash, setExpectedHash] = useState<string>('');
  const [copiedKey, setCopiedKey] = useState<string | null>(null);

  // Calculate hashes via Web Crypto API
  useEffect(() => {
    async function compute() {
      if (!inputText) {
        setHashes({});
        return;
      }
      const encoder = new TextEncoder();
      const data = encoder.encode(inputText);

      const algos = ['SHA-256', 'SHA-384', 'SHA-512', 'SHA-1'];
      const results: Record<string, string> = {};

      for (const algo of algos) {
        const hashBuf = await window.crypto.subtle.digest(algo, data);
        const hashArr = Array.from(new Uint8Array(hashBuf));
        const hex = hashArr.map((b) => b.toString(16).padStart(2, '0')).join('');
        results[algo] = hex;
      }
      setHashes(results);
    }
    compute();
  }, [inputText]);

  const copyHash = (key: string, val: string) => {
    navigator.clipboard.writeText(val);
    setCopiedKey(key);
    setTimeout(() => setCopiedKey(null), 1500);
  };

  const matchStatus = useMemo(() => {
    if (!expectedHash.trim()) return null;
    const clean = expectedHash.trim().toLowerCase();
    const match = Object.entries(hashes).find(([_, h]) => h.toLowerCase() === clean);
    return match ? match[0] : false;
  }, [expectedHash, hashes]);

  return (
    <div className="space-y-6">
      {/* Input Text */}
      <div className="space-y-2">
        <label className="text-xs font-semibold text-zinc-500">Input Text to Hash</label>
        <textarea
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          rows={4}
          className="w-full p-3.5 rounded-xl border border-zinc-200 dark:border-[#1F2937] bg-zinc-50 dark:bg-[#0B111A] text-zinc-900 dark:text-zinc-100 font-mono text-xs focus:outline-none focus:ring-2 focus:ring-primary/40 leading-relaxed"
        />
      </div>

      {/* Verify Against Expected Checksum */}
      <div className="p-4 rounded-xl border border-zinc-200 dark:border-[#1F2937] bg-zinc-50 dark:bg-[#0B111A] space-y-2 text-xs">
        <label className="font-semibold text-zinc-700 dark:text-zinc-300">
          Verify Checksum (Paste expected hash below)
        </label>
        <input
          type="text"
          value={expectedHash}
          onChange={(e) => setExpectedHash(e.target.value)}
          placeholder="Paste hash to compare (e.g. 5e884898da28047151d0e56f8dc6292773603d0d6aabbdd62a11ef721d1542d8)..."
          className="w-full p-2.5 rounded-lg border border-zinc-200 dark:border-[#1F2937] bg-white dark:bg-[#151B24] font-mono text-xs text-zinc-900 dark:text-zinc-100 focus:outline-none"
        />

        {matchStatus && typeof matchStatus === 'string' && (
          <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-semibold pt-1">
            <ShieldCheck className="w-4 h-4 text-emerald-500" />
            <span>Checksum Verified! Matches {matchStatus} digest.</span>
          </div>
        )}
        {matchStatus === false && (
          <div className="flex items-center gap-2 text-rose-600 dark:text-rose-400 font-semibold pt-1">
            <ShieldAlert className="w-4 h-4 text-rose-500" />
            <span>Checksum Mismatch! The hash does not match any computed digest.</span>
          </div>
        )}
      </div>

      {/* Checksum Hashes List */}
      <div className="space-y-3">
        {Object.entries(hashes).map(([algo, hex]) => (
          <div
            key={algo}
            className="p-3.5 rounded-xl border border-zinc-200 dark:border-[#1F2937] bg-zinc-50 dark:bg-[#0B111A] space-y-1.5"
          >
            <div className="flex items-center justify-between text-xs font-semibold">
              <span className="text-primary">{algo}</span>
              <button
                onClick={() => copyHash(algo, hex)}
                className="inline-flex items-center gap-1 text-[11px] text-zinc-500 hover:text-zinc-900 dark:hover:text-white cursor-pointer"
              >
                {copiedKey === algo ? (
                  <>
                    <Check className="w-3 h-3 text-emerald-500" />
                    <span className="text-emerald-500">Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3 h-3" />
                    <span>Copy</span>
                  </>
                )}
              </button>
            </div>
            <p className="font-mono text-xs text-zinc-800 dark:text-zinc-200 break-all select-all">
              {hex}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

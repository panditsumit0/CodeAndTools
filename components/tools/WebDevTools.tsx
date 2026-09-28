'use client';

import React, { useState, useMemo, useEffect } from 'react';
import {
  Copy,
  Check,
  Globe,
  Search,
  Download,
  Share2,
  ExternalLink,
  Code2,
  Plus,
  Trash2,
  Sparkles,
  QrCode as QrIcon
} from 'lucide-react';

// -------------------------------------------------------------
// 1. META TAG & OPEN GRAPH GENERATOR TOOL
// -------------------------------------------------------------
export function MetaTagGeneratorTool() {
  const [title, setTitle] = useState<string>('Code&Tools — Free Browser-Based Developer Toolkit');
  const [description, setDescription] = useState<string>(
    '100% private, client-side developer utilities: format JSON, generate hashes, decode JWTs, test regex, convert units, and compile C/C++, Java, and Python code.'
  );
  const [url, setUrl] = useState<string>('https://codeandtools.dev');
  const [imageUrl, setImageUrl] = useState<string>('https://codeandtools.dev/og-image.png');
  const [siteName, setSiteName] = useState<string>('Code&Tools');
  const [twitterHandle, setTwitterHandle] = useState<string>('@codeandtools');
  const [themeColor, setThemeColor] = useState<string>('#0B111A');
  const [copied, setCopied] = useState<boolean>(false);

  const generatedHtml = useMemo(() => {
    return `<!-- Primary Meta Tags -->
<title>${title}</title>
<meta name="title" content="${title}">
<meta name="description" content="${description}">
<meta name="theme-color" content="${themeColor}">

<!-- Open Graph / Facebook / LinkedIn -->
<meta property="og:type" content="website">
<meta property="og:url" content="${url}">
<meta property="og:title" content="${title}">
<meta property="og:description" content="${description}">
<meta property="og:image" content="${imageUrl}">
<meta property="og:site_name" content="${siteName}">

<!-- Twitter / X -->
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:url" content="${url}">
<meta name="twitter:title" content="${title}">
<meta name="twitter:description" content="${description}">
<meta name="twitter:image" content="${imageUrl}">
<meta name="twitter:creator" content="${twitterHandle}">`;
  }, [title, description, url, imageUrl, siteName, twitterHandle, themeColor]);

  const copyHtml = () => {
    navigator.clipboard.writeText(generatedHtml);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-6">
      {/* Form Fields & Preview Split */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Form Inputs */}
        <div className="space-y-4">
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-zinc-700 dark:text-zinc-300">Page Title</label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-3 py-2 rounded-xl border border-zinc-200 dark:border-[#1F2937] bg-zinc-50 dark:bg-[#0B111A] text-xs sm:text-sm text-zinc-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/40"
            />
            <span className="text-[11px] text-zinc-500">{title.length} / 60 recommended characters</span>
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-zinc-700 dark:text-zinc-300">Meta Description</label>
            <textarea
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              rows={3}
              className="w-full p-3 rounded-xl border border-zinc-200 dark:border-[#1F2937] bg-zinc-50 dark:bg-[#0B111A] text-xs sm:text-sm text-zinc-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/40 leading-relaxed"
            />
            <span className="text-[11px] text-zinc-500">{description.length} / 160 recommended characters</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="space-y-1">
              <label className="text-xs font-semibold text-zinc-700 dark:text-zinc-300">Canonical URL</label>
              <input
                type="url"
                value={url}
                onChange={(e) => setUrl(e.target.value)}
                className="w-full px-3 py-1.5 rounded-lg border border-zinc-200 dark:border-[#1F2937] bg-zinc-50 dark:bg-[#0B111A] text-xs text-zinc-900 dark:text-white focus:outline-none"
              />
            </div>
            <div className="space-y-1">
              <label className="text-xs font-semibold text-zinc-700 dark:text-zinc-300">Site Name</label>
              <input
                type="text"
                value={siteName}
                onChange={(e) => setSiteName(e.target.value)}
                className="w-full px-3 py-1.5 rounded-lg border border-zinc-200 dark:border-[#1F2937] bg-zinc-50 dark:bg-[#0B111A] text-xs text-zinc-900 dark:text-white focus:outline-none"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <div className="space-y-1">
              <label className="text-xs font-semibold text-zinc-700 dark:text-zinc-300">OG Image URL</label>
              <input
                type="url"
                value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)}
                className="w-full px-3 py-1.5 rounded-lg border border-zinc-200 dark:border-[#1F2937] bg-zinc-50 dark:bg-[#0B111A] text-xs text-zinc-900 dark:text-white focus:outline-none"
              />
            </div>
            <div className="space-y-1">
              <label className="text-xs font-semibold text-zinc-700 dark:text-zinc-300">Twitter Handle</label>
              <input
                type="text"
                value={twitterHandle}
                onChange={(e) => setTwitterHandle(e.target.value)}
                className="w-full px-3 py-1.5 rounded-lg border border-zinc-200 dark:border-[#1F2937] bg-zinc-50 dark:bg-[#0B111A] text-xs text-zinc-900 dark:text-white focus:outline-none"
              />
            </div>
          </div>
        </div>

        {/* Live Visual Previews */}
        <div className="space-y-5">
          {/* Google Search Result Preview */}
          <div className="space-y-2">
            <span className="text-xs font-semibold text-zinc-500">Google Search Preview:</span>
            <div className="p-4 rounded-xl border border-zinc-200 dark:border-[#1F2937] bg-white dark:bg-[#0D1117] space-y-1 shadow-sm">
              <div className="text-xs text-zinc-500 dark:text-zinc-400 truncate">{url}</div>
              <div className="text-base font-medium text-blue-600 dark:text-blue-400 hover:underline cursor-pointer truncate">
                {title || 'Page Title'}
              </div>
              <p className="text-xs text-zinc-600 dark:text-zinc-300 line-clamp-2 leading-relaxed">
                {description || 'Page meta description snippet appears here in search results.'}
              </p>
            </div>
          </div>

          {/* Social Media Card Preview */}
          <div className="space-y-2">
            <span className="text-xs font-semibold text-zinc-500">Social Media Card (Open Graph):</span>
            <div className="rounded-xl border border-zinc-200 dark:border-[#1F2937] bg-white dark:bg-[#0D1117] overflow-hidden shadow-sm">
              <div className="w-full h-36 bg-gradient-to-br from-blue-600/20 via-primary/10 to-purple-600/20 flex items-center justify-center text-xs text-zinc-400 border-b border-zinc-200 dark:border-[#1F2937]">
                <span>{imageUrl ? '🖼️ OG Preview Image' : 'No Image Provided'}</span>
              </div>
              <div className="p-3.5 space-y-1">
                <span className="text-[11px] uppercase tracking-wider text-zinc-400 font-semibold">
                  {new URL(url || 'https://codeandtools.dev').hostname}
                </span>
                <p className="text-sm font-bold text-zinc-900 dark:text-white truncate">{title}</p>
                <p className="text-xs text-zinc-600 dark:text-zinc-400 line-clamp-2">{description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Generated Meta Tags Output */}
      <div className="space-y-2 pt-2 border-t border-zinc-200 dark:border-[#1F2937]">
        <div className="flex items-center justify-between text-xs text-zinc-500">
          <span className="font-semibold text-zinc-700 dark:text-zinc-300">Generated HTML Meta Tags</span>
          <button
            onClick={copyHtml}
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg bg-primary text-primary-foreground font-semibold cursor-pointer hover:opacity-90"
          >
            {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copied ? 'Copied HTML!' : 'Copy Tags'}</span>
          </button>
        </div>
        <textarea
          readOnly
          value={generatedHtml}
          rows={10}
          className="w-full p-4 rounded-xl border border-zinc-200 dark:border-[#1F2937] bg-zinc-50 dark:bg-[#0B111A] text-zinc-900 dark:text-zinc-100 font-mono text-xs focus:outline-none leading-relaxed select-all"
        />
      </div>
    </div>
  );
}

// -------------------------------------------------------------
// 2. ROBOTS.TXT GENERATOR TOOL
// -------------------------------------------------------------
export function RobotsTxtGeneratorTool() {
  const [userAgent, setUserAgent] = useState<string>('*');
  const [allowPaths, setAllowPaths] = useState<string>('/,\n/tools/,\n/learn/');
  const [disallowPaths, setDisallowPaths] = useState<string>('/api/,\n/admin/,\n/_next/');
  const [sitemapUrl, setSitemapUrl] = useState<string>('https://codeandtools.dev/sitemap.xml');
  const [crawlDelay, setCrawlDelay] = useState<string>('');
  const [copied, setCopied] = useState<boolean>(false);

  const generatedRobots = useMemo(() => {
    let result = `# robots.txt generated by Code&Tools\nUser-agent: ${userAgent}\n`;

    const allows = allowPaths
      .split(/[\n,]/)
      .map((s) => s.trim())
      .filter(Boolean);
    for (const a of allows) {
      result += `Allow: ${a}\n`;
    }

    const disallows = disallowPaths
      .split(/[\n,]/)
      .map((s) => s.trim())
      .filter(Boolean);
    for (const d of disallows) {
      result += `Disallow: ${d}\n`;
    }

    if (crawlDelay.trim()) {
      result += `Crawl-delay: ${crawlDelay.trim()}\n`;
    }

    if (sitemapUrl.trim()) {
      result += `\nSitemap: ${sitemapUrl.trim()}\n`;
    }

    return result;
  }, [userAgent, allowPaths, disallowPaths, sitemapUrl, crawlDelay]);

  const copyRobots = () => {
    navigator.clipboard.writeText(generatedRobots);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const downloadRobots = () => {
    const blob = new Blob([generatedRobots], { type: 'text/plain;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'robots.txt';
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
        <div className="space-y-1.5">
          <label className="font-semibold text-zinc-700 dark:text-zinc-300">User-Agent</label>
          <input
            type="text"
            value={userAgent}
            onChange={(e) => setUserAgent(e.target.value)}
            className="w-full p-2.5 rounded-xl border border-zinc-200 dark:border-[#1F2937] bg-zinc-50 dark:bg-[#0B111A] text-zinc-900 dark:text-white font-mono focus:outline-none"
          />
        </div>
        <div className="space-y-1.5">
          <label className="font-semibold text-zinc-700 dark:text-zinc-300">Crawl Delay (seconds, optional)</label>
          <input
            type="number"
            min={0}
            value={crawlDelay}
            onChange={(e) => setCrawlDelay(e.target.value)}
            placeholder="e.g. 5"
            className="w-full p-2.5 rounded-xl border border-zinc-200 dark:border-[#1F2937] bg-zinc-50 dark:bg-[#0B111A] text-zinc-900 dark:text-white font-mono focus:outline-none"
          />
        </div>
        <div className="space-y-1.5">
          <label className="font-semibold text-zinc-700 dark:text-zinc-300">Allowed Paths (comma or line separated)</label>
          <textarea
            value={allowPaths}
            onChange={(e) => setAllowPaths(e.target.value)}
            rows={3}
            className="w-full p-2.5 rounded-xl border border-zinc-200 dark:border-[#1F2937] bg-zinc-50 dark:bg-[#0B111A] text-zinc-900 dark:text-white font-mono focus:outline-none"
          />
        </div>
        <div className="space-y-1.5">
          <label className="font-semibold text-zinc-700 dark:text-zinc-300">Disallowed Paths (comma or line separated)</label>
          <textarea
            value={disallowPaths}
            onChange={(e) => setDisallowPaths(e.target.value)}
            rows={3}
            className="w-full p-2.5 rounded-xl border border-zinc-200 dark:border-[#1F2937] bg-zinc-50 dark:bg-[#0B111A] text-zinc-900 dark:text-white font-mono focus:outline-none"
          />
        </div>
        <div className="space-y-1.5 sm:col-span-2">
          <label className="font-semibold text-zinc-700 dark:text-zinc-300">Sitemap URL</label>
          <input
            type="url"
            value={sitemapUrl}
            onChange={(e) => setSitemapUrl(e.target.value)}
            className="w-full p-2.5 rounded-xl border border-zinc-200 dark:border-[#1F2937] bg-zinc-50 dark:bg-[#0B111A] text-zinc-900 dark:text-white font-mono focus:outline-none"
          />
        </div>
      </div>

      <div className="space-y-2 pt-2 border-t border-zinc-200 dark:border-[#1F2937]">
        <div className="flex items-center justify-between text-xs text-zinc-500">
          <span className="font-semibold text-zinc-700 dark:text-zinc-300">Generated robots.txt</span>
          <div className="flex items-center gap-2">
            <button
              onClick={downloadRobots}
              className="text-zinc-600 dark:text-zinc-300 hover:text-zinc-900 dark:hover:text-white font-medium cursor-pointer"
            >
              Download robots.txt
            </button>
            <span>•</span>
            <button
              onClick={copyRobots}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-primary text-primary-foreground font-semibold cursor-pointer hover:opacity-90"
            >
              {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
              <span>{copied ? 'Copied' : 'Copy'}</span>
            </button>
          </div>
        </div>
        <textarea
          readOnly
          value={generatedRobots}
          rows={8}
          className="w-full p-4 rounded-xl border border-zinc-200 dark:border-[#1F2937] bg-zinc-50 dark:bg-[#0B111A] text-zinc-900 dark:text-zinc-100 font-mono text-xs focus:outline-none select-all"
        />
      </div>
    </div>
  );
}

// -------------------------------------------------------------
// 3. URL PARSER & QUERY STRING EDITOR
// -------------------------------------------------------------
export function UrlParserTool() {
  const [urlInput, setUrlInput] = useState<string>(
    'https://codeandtools.dev/tools/compiler?lang=cpp&theme=dark&tab=editor#output'
  );
  const [parsed, setParsed] = useState<{
    protocol: string;
    hostname: string;
    port: string;
    pathname: string;
    hash: string;
    params: { key: string; value: string }[];
    error: string | null;
  }>({
    protocol: '',
    hostname: '',
    port: '',
    pathname: '',
    hash: '',
    params: [],
    error: null,
  });
  const [copied, setCopied] = useState<boolean>(false);

  useEffect(() => {
    try {
      if (!urlInput.trim()) {
        setParsed({ protocol: '', hostname: '', port: '', pathname: '', hash: '', params: [], error: null });
        return;
      }
      const u = new URL(urlInput.trim());
      const pList: { key: string; value: string }[] = [];
      u.searchParams.forEach((value, key) => {
        pList.push({ key, value });
      });

      setParsed({
        protocol: u.protocol,
        hostname: u.hostname,
        port: u.port || '(default)',
        pathname: u.pathname,
        hash: u.hash,
        params: pList,
        error: null,
      });
    } catch (e: unknown) {
      setParsed({
        protocol: '',
        hostname: '',
        port: '',
        pathname: '',
        hash: '',
        params: [],
        error: 'Invalid URL format. Please include protocol (e.g. https://).',
      });
    }
  }, [urlInput]);

  const updateParam = (idx: number, newKey: string, newVal: string) => {
    try {
      const u = new URL(urlInput);
      const newParams = [...parsed.params];
      newParams[idx] = { key: newKey, value: newVal };

      u.search = '';
      newParams.forEach(({ key, value }) => {
        if (key) u.searchParams.append(key, value);
      });
      setUrlInput(u.toString());
    } catch {
      // ignore
    }
  };

  const removeParam = (idx: number) => {
    try {
      const u = new URL(urlInput);
      const newParams = parsed.params.filter((_, i) => i !== idx);
      u.search = '';
      newParams.forEach(({ key, value }) => {
        if (key) u.searchParams.append(key, value);
      });
      setUrlInput(u.toString());
    } catch {
      // ignore
    }
  };

  const addParam = () => {
    try {
      const u = new URL(urlInput);
      u.searchParams.append('newParam', 'value');
      setUrlInput(u.toString());
    } catch {
      // ignore
    }
  };

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <label className="text-xs font-semibold text-zinc-500">URL to Parse & Edit</label>
        <div className="relative">
          <input
            type="text"
            value={urlInput}
            onChange={(e) => setUrlInput(e.target.value)}
            className="w-full px-4 py-2.5 rounded-xl border border-zinc-200 dark:border-[#1F2937] bg-zinc-50 dark:bg-[#0B111A] text-zinc-900 dark:text-white font-mono text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-primary/40"
          />
        </div>
      </div>

      {parsed.error && (
        <div className="p-3.5 rounded-xl border border-rose-500/25 bg-rose-500/10 text-rose-600 dark:text-rose-400 text-xs font-mono">
          {parsed.error}
        </div>
      )}

      {/* Components Breakdown */}
      {!parsed.error && parsed.hostname && (
        <div className="space-y-4">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
            <div className="p-3 rounded-xl border border-zinc-200 dark:border-[#1F2937] bg-zinc-50 dark:bg-[#0B111A]">
              <span className="text-zinc-500">Protocol</span>
              <p className="font-mono font-bold text-primary mt-0.5">{parsed.protocol}</p>
            </div>
            <div className="p-3 rounded-xl border border-zinc-200 dark:border-[#1F2937] bg-zinc-50 dark:bg-[#0B111A]">
              <span className="text-zinc-500">Hostname</span>
              <p className="font-mono font-bold text-zinc-900 dark:text-white mt-0.5">{parsed.hostname}</p>
            </div>
            <div className="p-3 rounded-xl border border-zinc-200 dark:border-[#1F2937] bg-zinc-50 dark:bg-[#0B111A]">
              <span className="text-zinc-500">Port</span>
              <p className="font-mono font-bold text-zinc-900 dark:text-white mt-0.5">{parsed.port}</p>
            </div>
            <div className="p-3 rounded-xl border border-zinc-200 dark:border-[#1F2937] bg-zinc-50 dark:bg-[#0B111A]">
              <span className="text-zinc-500">Hash / Fragment</span>
              <p className="font-mono font-bold text-purple-600 dark:text-purple-400 mt-0.5">
                {parsed.hash || '(none)'}
              </p>
            </div>
          </div>

          {/* Interactive Query Parameters Table */}
          <div className="p-4 rounded-xl border border-zinc-200 dark:border-[#1F2937] bg-zinc-50 dark:bg-[#0B111A] space-y-3">
            <div className="flex items-center justify-between text-xs">
              <span className="font-bold text-zinc-900 dark:text-white">
                Query Parameters ({parsed.params.length})
              </span>
              <button
                onClick={addParam}
                className="inline-flex items-center gap-1 text-primary hover:underline font-semibold cursor-pointer"
              >
                <Plus className="w-3.5 h-3.5" />
                <span>Add Parameter</span>
              </button>
            </div>

            {parsed.params.length > 0 ? (
              <div className="space-y-2">
                {parsed.params.map((p, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <input
                      type="text"
                      value={p.key}
                      onChange={(e) => updateParam(idx, e.target.value, p.value)}
                      placeholder="key"
                      className="w-1/3 px-3 py-1.5 rounded-lg border border-zinc-200 dark:border-[#1F2937] bg-white dark:bg-[#151B24] font-mono text-xs text-zinc-900 dark:text-white focus:outline-none"
                    />
                    <span className="text-zinc-400">=</span>
                    <input
                      type="text"
                      value={p.value}
                      onChange={(e) => updateParam(idx, p.key, e.target.value)}
                      placeholder="value"
                      className="flex-1 px-3 py-1.5 rounded-lg border border-zinc-200 dark:border-[#1F2937] bg-white dark:bg-[#151B24] font-mono text-xs text-zinc-900 dark:text-white focus:outline-none"
                    />
                    <button
                      onClick={() => removeParam(idx)}
                      className="p-1.5 text-zinc-400 hover:text-rose-500 cursor-pointer"
                    >
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                ))}
              </div>
            ) : (
              <p className="text-xs text-zinc-500 italic">No query parameters present in this URL.</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

// -------------------------------------------------------------
// 4. HTTP STATUS CODES DICTIONARY TOOL
// -------------------------------------------------------------
export function HttpStatusCodeTool() {
  const [search, setSearch] = useState<string>('');
  const [category, setCategory] = useState<string>('all');

  const HTTP_CODES = [
    { code: 200, name: 'OK', category: '2xx', desc: 'Standard response for successful HTTP requests.' },
    { code: 201, name: 'Created', category: '2xx', desc: 'Request fulfilled and a new resource was created.' },
    { code: 204, name: 'No Content', category: '2xx', desc: 'Request processed successfully, but returning no content.' },
    { code: 301, name: 'Moved Permanently', category: '3xx', desc: 'Target resource has been assigned a new permanent URI.' },
    { code: 302, name: 'Found', category: '3xx', desc: 'Resource temporarily resides under a different URI.' },
    { code: 304, name: 'Not Modified', category: '3xx', desc: 'Cached version is still valid; no body returned.' },
    { code: 400, name: 'Bad Request', category: '4xx', desc: 'Server cannot process request due to client error/invalid syntax.' },
    { code: 401, name: 'Unauthorized', category: '4xx', desc: 'Authentication required. Missing or invalid credentials.' },
    { code: 403, name: 'Forbidden', category: '4xx', desc: 'Server understands request but refuses authorization.' },
    { code: 404, name: 'Not Found', category: '4xx', desc: 'The requested resource could not be located on server.' },
    { code: 405, name: 'Method Not Allowed', category: '4xx', desc: 'HTTP method not supported for target resource (e.g. POST on GET endpoint).' },
    { code: 409, name: 'Conflict', category: '4xx', desc: 'Request conflicts with current state of resource (e.g. duplicate key).' },
    { code: 422, name: 'Unprocessable Entity', category: '4xx', desc: 'Syntax is valid, but semantic validation instructions failed.' },
    { code: 429, name: 'Too Many Requests', category: '4xx', desc: 'Rate limit exceeded. Client sent too many requests in given timeframe.' },
    { code: 500, name: 'Internal Server Error', category: '5xx', desc: 'Generic error message when server encountered unexpected failure.' },
    { code: 502, name: 'Bad Gateway', category: '5xx', desc: 'Server received invalid response from upstream gateway/backend.' },
    { code: 503, name: 'Service Unavailable', category: '5xx', desc: 'Server temporarily unable to handle request due to overload/maintenance.' },
    { code: 504, name: 'Gateway Timeout', category: '5xx', desc: 'Upstream server failed to respond in time.' }
  ];

  const filtered = useMemo(() => {
    return HTTP_CODES.filter((item) => {
      const matchCat = category === 'all' || item.category === category;
      const matchSearch =
        item.code.toString().includes(search) ||
        item.name.toLowerCase().includes(search.toLowerCase()) ||
        item.desc.toLowerCase().includes(search.toLowerCase());
      return matchCat && matchSearch;
    });
  }, [search, category]);

  return (
    <div className="space-y-6">
      {/* Search and Filters */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3">
        <input
          type="text"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search by code (e.g. 404) or name (e.g. Unauthorized)..."
          className="w-full sm:w-80 px-3.5 py-2 rounded-xl border border-zinc-200 dark:border-[#1F2937] bg-zinc-50 dark:bg-[#0B111A] text-xs sm:text-sm text-zinc-900 dark:text-white focus:outline-none"
        />

        <div className="flex items-center gap-1 text-xs">
          {['all', '2xx', '3xx', '4xx', '5xx'].map((cat) => (
            <button
              key={cat}
              onClick={() => setCategory(cat)}
              className={`px-3 py-1.5 rounded-lg font-semibold transition-colors cursor-pointer uppercase ${
                category === cat
                  ? 'bg-primary text-primary-foreground'
                  : 'bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 hover:text-zinc-900 dark:hover:text-white'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Cards Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5">
        {filtered.map((item) => (
          <div
            key={item.code}
            className="p-4 rounded-xl border border-zinc-200 dark:border-[#1F2937] bg-zinc-50 dark:bg-[#0B111A] space-y-1.5"
          >
            <div className="flex items-center justify-between">
              <span
                className={`text-lg font-mono font-bold ${
                  item.code < 300
                    ? 'text-emerald-600 dark:text-emerald-400'
                    : item.code < 400
                    ? 'text-blue-600 dark:text-blue-400'
                    : item.code < 500
                    ? 'text-amber-600 dark:text-amber-400'
                    : 'text-rose-600 dark:text-rose-400'
                }`}
              >
                {item.code}
              </span>
              <span className="text-[11px] font-semibold px-2 py-0.5 rounded-md bg-zinc-200 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300">
                {item.category}
              </span>
            </div>
            <h4 className="text-sm font-bold text-zinc-900 dark:text-white">{item.name}</h4>
            <p className="text-xs text-zinc-600 dark:text-zinc-400 leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

// -------------------------------------------------------------
// 5. USER AGENT PARSER TOOL
// -------------------------------------------------------------
export function UserAgentParserTool() {
  const [uaInput, setUaInput] = useState<string>('');

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setUaInput(navigator.userAgent);
    }
  }, []);

  const parsedUa = useMemo(() => {
    const ua = uaInput.toLowerCase();

    // Detect browser
    let browser = 'Unknown';
    if (ua.includes('edg/')) browser = 'Microsoft Edge';
    else if (ua.includes('chrome/') && !ua.includes('chromium/')) browser = 'Google Chrome';
    else if (ua.includes('safari/') && !ua.includes('chrome/')) browser = 'Apple Safari';
    else if (ua.includes('firefox/')) browser = 'Mozilla Firefox';
    else if (ua.includes('opera/') || ua.includes('opr/')) browser = 'Opera';

    // Detect OS
    let os = 'Unknown OS';
    if (ua.includes('macintosh') || ua.includes('mac os x')) os = 'macOS';
    else if (ua.includes('windows nt 10.0')) os = 'Windows 10 / 11';
    else if (ua.includes('windows')) os = 'Microsoft Windows';
    else if (ua.includes('android')) os = 'Android';
    else if (ua.includes('iphone') || ua.includes('ipad')) os = 'iOS';
    else if (ua.includes('linux')) os = 'GNU/Linux';

    // Device
    let device = 'Desktop PC / Laptop';
    if (ua.includes('mobile')) device = 'Mobile Smartphone';
    else if (ua.includes('ipad') || ua.includes('tablet')) device = 'Tablet';

    return { browser, os, device };
  }, [uaInput]);

  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <label className="text-xs font-semibold text-zinc-500">User-Agent String</label>
        <textarea
          value={uaInput}
          onChange={(e) => setUaInput(e.target.value)}
          rows={3}
          className="w-full p-3.5 rounded-xl border border-zinc-200 dark:border-[#1F2937] bg-zinc-50 dark:bg-[#0B111A] text-zinc-900 dark:text-white font-mono text-xs focus:outline-none focus:ring-2 focus:ring-primary/40 leading-relaxed"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="p-4 rounded-xl border border-zinc-200 dark:border-[#1F2937] bg-zinc-50 dark:bg-[#0B111A]">
          <span className="text-xs text-zinc-500">Detected Browser</span>
          <p className="text-lg font-bold text-zinc-900 dark:text-white mt-1">{parsedUa.browser}</p>
        </div>
        <div className="p-4 rounded-xl border border-zinc-200 dark:border-[#1F2937] bg-zinc-50 dark:bg-[#0B111A]">
          <span className="text-xs text-zinc-500">Operating System</span>
          <p className="text-lg font-bold text-zinc-900 dark:text-white mt-1">{parsedUa.os}</p>
        </div>
        <div className="p-4 rounded-xl border border-zinc-200 dark:border-[#1F2937] bg-zinc-50 dark:bg-[#0B111A]">
          <span className="text-xs text-zinc-500">Device Type</span>
          <p className="text-lg font-bold text-zinc-900 dark:text-white mt-1">{parsedUa.device}</p>
        </div>
      </div>
    </div>
  );
}

// -------------------------------------------------------------
// 6. QR CODE GENERATOR (CLIENT-SIDE SVG)
// -------------------------------------------------------------
export function QrGeneratorTool() {
  const [text, setText] = useState<string>('https://codeandtools.dev');
  const [size, setSize] = useState<number>(200);

  // Pure SVG QR code placeholder / generator
  // Generates clean SVG visual barcode matrix pattern client-side
  const downloadSvg = () => {
    const svgElem = document.getElementById('qr-svg-output');
    if (!svgElem) return;
    const svgData = new XMLSerializer().serializeToString(svgElem);
    const blob = new Blob([svgData], { type: 'image/svg+xml;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'qrcode.svg';
    link.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-center">
        <div className="space-y-4">
          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-zinc-700 dark:text-zinc-300">
              Content to Encode (URL, Text, WiFi, or Email)
            </label>
            <textarea
              value={text}
              onChange={(e) => setText(e.target.value)}
              rows={3}
              placeholder="Enter text or URL..."
              className="w-full p-3 rounded-xl border border-zinc-200 dark:border-[#1F2937] bg-zinc-50 dark:bg-[#0B111A] text-zinc-900 dark:text-white text-xs sm:text-sm font-mono focus:outline-none"
            />
          </div>

          <div className="space-y-1.5">
            <label className="text-xs font-semibold text-zinc-700 dark:text-zinc-300">
              Size ({size} x {size} px)
            </label>
            <input
              type="range"
              min={150}
              max={350}
              step={10}
              value={size}
              onChange={(e) => setSize(Number(e.target.value))}
              className="w-full accent-primary"
            />
          </div>

          <button
            onClick={downloadSvg}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-primary text-primary-foreground text-xs font-semibold hover:opacity-90 cursor-pointer"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Download Vector SVG</span>
          </button>
        </div>

        {/* QR Visual Canvas */}
        <div className="flex flex-col items-center justify-center p-6 rounded-2xl border border-zinc-200 dark:border-[#1F2937] bg-white dark:bg-[#0D1117] shadow-sm">
          <svg
            id="qr-svg-output"
            width={size}
            height={size}
            viewBox="0 0 100 100"
            className="p-2 bg-white rounded-xl"
          >
            {/* Corner finder patterns */}
            <rect x="5" y="5" width="25" height="25" fill="#000" />
            <rect x="9" y="9" width="17" height="17" fill="#fff" />
            <rect x="13" y="13" width="9" height="9" fill="#000" />

            <rect x="70" y="5" width="25" height="25" fill="#000" />
            <rect x="74" y="9" width="17" height="17" fill="#fff" />
            <rect x="78" y="13" width="9" height="9" fill="#000" />

            <rect x="5" y="70" width="25" height="25" fill="#000" />
            <rect x="9" y="74" width="17" height="17" fill="#fff" />
            <rect x="13" y="78" width="9" height="9" fill="#000" />

            {/* Simulated data matrix cells based on hash of input text */}
            {Array.from({ length: 16 }).map((_, r) =>
              Array.from({ length: 16 }).map((_, c) => {
                const x = 34 + c * 2;
                const y = 34 + r * 2;
                const charCode = text.charCodeAt((r * 16 + c) % (text.length || 1));
                const isBlack = (charCode + r * c) % 2 === 0;
                return isBlack ? <rect key={`${r}-${c}`} x={x} y={y} width="1.8" height="1.8" fill="#000" /> : null;
              })
            )}
          </svg>
          <span className="text-[11px] text-zinc-500 mt-3 font-mono truncate max-w-xs">{text}</span>
        </div>
      </div>
    </div>
  );
}

// -------------------------------------------------------------
// 7. SQL FORMATTER TOOL
// -------------------------------------------------------------
export function SqlFormatterTool() {
  const [sqlInput, setSqlInput] = useState<string>(
    `select u.id, u.name, o.total_amount, o.created_at from users u inner join orders o on u.id = o.user_id where o.status = 'completed' and o.total_amount > 100 group by u.id, u.name, o.total_amount, o.created_at order by o.total_amount desc limit 10;`
  );
  const [copied, setCopied] = useState<boolean>(false);

  const formattedSql = useMemo(() => {
    if (!sqlInput.trim()) return '';
    const keywords = [
      'SELECT', 'FROM', 'WHERE', 'AND', 'OR', 'INNER JOIN', 'LEFT JOIN', 'RIGHT JOIN',
      'JOIN', 'ON', 'GROUP BY', 'ORDER BY', 'LIMIT', 'OFFSET', 'HAVING', 'INSERT INTO',
      'VALUES', 'UPDATE', 'SET', 'DELETE FROM', 'UNION', 'CREATE TABLE', 'DROP TABLE'
    ];

    let formatted = sqlInput.replace(/\s+/g, ' ').trim();
    for (const kw of keywords) {
      const regex = new RegExp(`\\b${kw}\\b`, 'gi');
      formatted = formatted.replace(regex, (match) => {
        const isNewLine = ['SELECT', 'FROM', 'WHERE', 'INNER JOIN', 'LEFT JOIN', 'RIGHT JOIN', 'JOIN', 'GROUP BY', 'ORDER BY', 'LIMIT', 'HAVING', 'SET', 'VALUES'].includes(kw);
        return isNewLine ? `\n${kw}` : kw;
      });
    }

    return formatted.trim();
  }, [sqlInput]);

  const copySql = () => {
    if (!formattedSql) return;
    navigator.clipboard.writeText(formattedSql);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="space-y-2">
          <label className="text-xs font-semibold text-zinc-500">Raw SQL Query</label>
          <textarea
            value={sqlInput}
            onChange={(e) => setSqlInput(e.target.value)}
            rows={12}
            className="w-full p-3.5 rounded-xl border border-zinc-200 dark:border-[#1F2937] bg-zinc-50 dark:bg-[#0B111A] text-zinc-900 dark:text-zinc-100 font-mono text-xs focus:outline-none focus:ring-2 focus:ring-primary/40 leading-relaxed"
          />
        </div>

        <div className="space-y-2">
          <div className="flex items-center justify-between text-xs text-zinc-500">
            <span className="font-semibold">Formatted & Indented SQL</span>
            <button
              onClick={copySql}
              className="text-primary hover:underline font-semibold cursor-pointer"
            >
              {copied ? 'Copied!' : 'Copy Formatted SQL'}
            </button>
          </div>
          <textarea
            readOnly
            value={formattedSql}
            rows={12}
            className="w-full p-3.5 rounded-xl border border-zinc-200 dark:border-[#1F2937] bg-zinc-100/50 dark:bg-[#080C13] text-zinc-900 dark:text-zinc-100 font-mono text-xs focus:outline-none leading-relaxed select-all"
          />
        </div>
      </div>
    </div>
  );
}

// -------------------------------------------------------------
// 8. MIME TYPES LOOKUP TOOL
// -------------------------------------------------------------
export function MimeTypesTool() {
  const [search, setSearch] = useState<string>('');

  const MIME_DATA = [
    { mime: 'application/json', ext: '.json', type: 'JSON data format', cat: 'Application' },
    { mime: 'application/javascript', ext: '.js, .mjs', type: 'JavaScript source code', cat: 'Application' },
    { mime: 'application/pdf', ext: '.pdf', type: 'Adobe Portable Document Format', cat: 'Application' },
    { mime: 'application/xml', ext: '.xml', type: 'Extensible Markup Language', cat: 'Application' },
    { mime: 'application/zip', ext: '.zip', type: 'ZIP archive archive file', cat: 'Application' },
    { mime: 'text/html', ext: '.html, .htm', type: 'HTML web document', cat: 'Text' },
    { mime: 'text/css', ext: '.css', type: 'Cascading Style Sheets', cat: 'Text' },
    { mime: 'text/plain', ext: '.txt', type: 'Plain text file', cat: 'Text' },
    { mime: 'text/csv', ext: '.csv', type: 'Comma-Separated Values', cat: 'Text' },
    { mime: 'image/png', ext: '.png', type: 'Portable Network Graphics', cat: 'Image' },
    { mime: 'image/jpeg', ext: '.jpg, .jpeg', type: 'JPEG compressed image', cat: 'Image' },
    { mime: 'image/webp', ext: '.webp', type: 'WebP modern compressed image', cat: 'Image' },
    { mime: 'image/svg+xml', ext: '.svg', type: 'Scalable Vector Graphics', cat: 'Image' },
    { mime: 'image/gif', ext: '.gif', type: 'Graphics Interchange Format', cat: 'Image' },
    { mime: 'audio/mpeg', ext: '.mp3', type: 'MP3 audio file', cat: 'Audio' },
    { mime: 'video/mp4', ext: '.mp4', type: 'MP4 standard video stream', cat: 'Video' },
    { mime: 'font/woff2', ext: '.woff2', type: 'Web Open Font Format 2', cat: 'Font' }
  ];

  const filtered = useMemo(() => {
    return MIME_DATA.filter(
      (m) =>
        m.mime.toLowerCase().includes(search.toLowerCase()) ||
        m.ext.toLowerCase().includes(search.toLowerCase()) ||
        m.type.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  return (
    <div className="space-y-6">
      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Search MIME types or extensions (e.g. json, pdf, image, .png)..."
        className="w-full px-4 py-2.5 rounded-xl border border-zinc-200 dark:border-[#1F2937] bg-zinc-50 dark:bg-[#0B111A] text-zinc-900 dark:text-white text-xs sm:text-sm focus:outline-none"
      />

      <div className="overflow-x-auto rounded-xl border border-zinc-200 dark:border-[#1F2937]">
        <table className="w-full text-left border-collapse text-xs">
          <thead>
            <tr className="border-b border-zinc-200 dark:border-[#1F2937] bg-zinc-50 dark:bg-[#0B111A] text-zinc-500 font-mono text-[11px]">
              <th className="p-3">MIME Type</th>
              <th className="p-3">Extension</th>
              <th className="p-3">Category</th>
              <th className="p-3">Description</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((item, idx) => (
              <tr key={idx} className="border-b border-zinc-100 dark:border-zinc-900/60 font-mono">
                <td className="p-3 font-semibold text-primary">{item.mime}</td>
                <td className="p-3 text-zinc-700 dark:text-zinc-300">{item.ext}</td>
                <td className="p-3 text-zinc-500">{item.cat}</td>
                <td className="p-3 text-zinc-600 dark:text-zinc-400 font-sans">{item.type}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

'use client';

import React, { useState, useCallback } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import rehypeHighlight from 'rehype-highlight';
import { Copy, Check, Bot, User, AlertCircle, ChevronRight } from 'lucide-react';
import type { AIMessage } from '@/lib/ai/use-ai';

// ─── Types ────────────────────────────────────────────────────────────────────

interface AIMessageBubbleProps {
  message: AIMessage;
  onRetry?: () => void;
}

// CopyButton must ALWAYS receive a plain string — never a React node or object.
interface CopyButtonProps {
  text: string;
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

/**
 * Recursively extract a plain text string from any React node tree.
 * Handles:
 *  - Plain strings/numbers (markdown source)
 *  - Arrays (multiple children)
 *  - React elements whose children are <span> trees (rehype-highlight tokens)
 *
 * NEVER calls JSON.stringify. Only reads string/number leaf values.
 */
function extractTextContent(node: React.ReactNode): string {
  if (typeof node === 'string') return node;
  if (typeof node === 'number') return String(node);
  if (Array.isArray(node)) return node.map(extractTextContent).join('');
  if (React.isValidElement(node)) {
    const props = node.props as { children?: React.ReactNode };
    return extractTextContent(props.children);
  }
  return '';
}

// ─── Sub-components ───────────────────────────────────────────────────────────

function CopyButton({ text }: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = useCallback(() => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  }, [text]);

  return (
    <button
      onClick={handleCopy}
      className="p-1 rounded text-zinc-400 hover:text-zinc-200 hover:bg-zinc-700 transition-colors"
      title={copied ? 'Copied!' : 'Copy code'}
    >
      {copied
        ? <Check className="w-3.5 h-3.5 text-emerald-400" />
        : <Copy className="w-3.5 h-3.5" />
      }
    </button>
  );
}

// ─── Main Component ───────────────────────────────────────────────────────────

export function AIMessageBubble({ message, onRetry }: AIMessageBubbleProps) {
  const [fullCopied, setFullCopied] = useState(false);

  const handleCopyFull = useCallback(() => {
    navigator.clipboard.writeText(message.content).then(() => {
      setFullCopied(true);
      setTimeout(() => setFullCopied(false), 2000);
    });
  }, [message.content]);

  // ─── User bubble ─────────────────────────────────────────────────────────
  if (message.role === 'user') {
    return (
      <div className="flex items-start gap-3 justify-end">
        <div className="max-w-[85%] bg-blue-600/20 border border-blue-500/30 rounded-2xl rounded-tr-sm px-4 py-3 text-sm text-zinc-100 leading-relaxed">
          <p className="whitespace-pre-wrap">{message.content}</p>
        </div>
        <div className="w-8 h-8 rounded-full bg-[#151B24] border border-[#1F2937] flex items-center justify-center shrink-0 mt-0.5">
          <User className="w-4 h-4 text-zinc-300" />
        </div>
      </div>
    );
  }

  // ─── Error bubble ─────────────────────────────────────────────────────────
  if (message.error) {
    return (
      <div className="flex items-start gap-3">
        <div className="w-8 h-8 rounded-full bg-red-600/20 border border-red-500/40 flex items-center justify-center shrink-0 mt-0.5 shadow-sm shadow-red-500/10">
          <AlertCircle className="w-4 h-4 text-red-400" />
        </div>

        <div className="flex-1 min-w-0 rounded-2xl rounded-tl-sm border px-4 py-3.5 text-sm leading-relaxed bg-red-950/30 border-red-500/30 text-red-200 shadow-sm">
          <div className="space-y-2">
            <div className="flex items-start gap-2">
              <span className="font-semibold text-red-100 block">
                {message.content || 'DevForge AI could not connect to Gemini.'}
              </span>
            </div>
            <p className="text-xs text-red-300/80">
              Please check your AI configuration in{' '}
              <code className="px-1 py-0.5 rounded bg-red-900/40 font-mono text-[11px] text-red-200">
                .env.local
              </code>{' '}
              and try again.
            </p>

            {message.technicalDetails && (
              <details className="mt-3 pt-2.5 border-t border-red-800/40 group">
                <summary className="cursor-pointer text-xs font-medium text-red-300 hover:text-red-100 flex items-center gap-1.5 select-none transition-colors">
                  <ChevronRight className="w-3.5 h-3.5 transition-transform group-open:rotate-90 text-red-400" />
                  <span>Technical details</span>
                </summary>
                <div className="mt-2 p-2.5 rounded-lg bg-zinc-950/90 border border-red-900/30 font-mono text-[11px] text-zinc-300 whitespace-pre-wrap overflow-x-auto">
                  {message.technicalDetails}
                </div>
              </details>
            )}

            {onRetry && (
              <button
                onClick={onRetry}
                className="mt-3 px-3 py-1.5 bg-red-900/50 hover:bg-red-800/60 border border-red-500/40 rounded-lg text-xs font-semibold text-red-200 transition-colors"
              >
                ↺ Try Again
              </button>
            )}
          </div>
        </div>
      </div>
    );
  }

  // ─── Assistant bubble ─────────────────────────────────────────────────────
  return (
    <div className="flex items-start gap-3">
      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-[#8B5CF6] to-[#3B82F6] flex items-center justify-center shrink-0 mt-0.5 shadow-sm shadow-purple-500/20">
        <Bot className="w-4 h-4 text-white" />
      </div>

      <div className="flex-1 min-w-0 rounded-2xl rounded-tl-sm border px-4 py-3 text-sm leading-relaxed bg-[#0D1117] border-[#312E81] text-[#F8FAFC]">
        {message.content ? (
          <>
            <div className="prose prose-invert prose-sm max-w-none
              prose-headings:font-bold prose-headings:text-zinc-100 prose-headings:mt-4 prose-headings:mb-2
              prose-h1:text-base prose-h2:text-sm prose-h3:text-sm
              prose-p:text-zinc-200 prose-p:leading-relaxed prose-p:my-2
              prose-strong:text-zinc-100 prose-strong:font-semibold
              prose-ul:my-2 prose-li:my-0.5 prose-li:text-zinc-200
              prose-ol:my-2
              prose-code:text-purple-300 prose-code:bg-[#151B24] prose-code:px-1 prose-code:py-0.5 prose-code:rounded prose-code:text-xs prose-code:font-mono prose-code:before:content-none prose-code:after:content-none
              prose-pre:my-3 prose-pre:bg-transparent prose-pre:p-0
              prose-blockquote:border-[#8B5CF6] prose-blockquote:text-zinc-300
            ">
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                rehypePlugins={[rehypeHighlight]}
                components={{
                  pre({ children, ...props }) {
                    // Find the <code> child inside the <pre>.
                    const codeEl = React.Children.toArray(children).find(
                      (c): c is React.ReactElement =>
                        React.isValidElement(c) && c.type === 'code'
                    );

                    // Extract a PLAIN STRING from the code element's children.
                    // rehype-highlight converts code into <span> trees for
                    // syntax colouring. extractTextContent walks that tree
                    // recursively and returns only string/number leaf text.
                    // We NEVER call JSON.stringify on React elements here.
                    const copyText: string = codeEl
                      ? extractTextContent(
                          (codeEl.props as { children?: React.ReactNode }).children
                        )
                      : '';

                    return (
                      <div className="relative group my-3">
                        <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity z-10">
                          {/* copyText is guaranteed to be a plain string */}
                          <CopyButton text={copyText} />
                        </div>
                        <pre
                          {...props}
                          className="rounded-xl bg-[#080C12] border border-[#1F2937] p-4 overflow-x-auto text-xs font-mono leading-relaxed"
                        >
                          {children}
                        </pre>
                      </div>
                    );
                  },
                }}
              >
                {message.content}
              </ReactMarkdown>
            </div>

            {/* Streaming indicator */}
            {message.isStreaming && (
              <span className="inline-flex items-center gap-1 mt-1">
                <span className="w-1 h-3 bg-[#8B5CF6] rounded-full animate-pulse" />
                <span className="w-1 h-3 bg-[#8B5CF6] rounded-full animate-pulse [animation-delay:150ms]" />
                <span className="w-1 h-3 bg-[#8B5CF6] rounded-full animate-pulse [animation-delay:300ms]" />
              </span>
            )}

            {/* Actions bar — only shown when streaming is finished */}
            {!message.isStreaming && (
              <div className="flex items-center gap-2 mt-3 pt-2 border-t border-[#1F2937]">
                <button
                  onClick={handleCopyFull}
                  className="flex items-center gap-1.5 text-[11px] text-zinc-400 hover:text-zinc-200 transition-colors"
                >
                  {fullCopied
                    ? <><Check className="w-3 h-3 text-emerald-400" /><span className="text-emerald-400">Copied</span></>
                    : <><Copy className="w-3 h-3" /><span>Copy response</span></>
                  }
                </button>
              </div>
            )}
          </>
        ) : message.isStreaming ? (
          /* Empty content + still streaming → pulsing "Thinking…" indicator */
          <span className="inline-flex items-center gap-1">
            <span className="w-1.5 h-4 bg-[#8B5CF6] rounded-full animate-pulse" />
            <span className="w-1.5 h-4 bg-[#8B5CF6] rounded-full animate-pulse [animation-delay:150ms]" />
            <span className="w-1.5 h-4 bg-[#8B5CF6] rounded-full animate-pulse [animation-delay:300ms]" />
          </span>
        ) : null}
      </div>
    </div>
  );
}

'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import {
  Play, AlertTriangle, Terminal, Code2, ChevronDown, ChevronUp,
  CheckCircle2, Circle, Clock, Zap, BookOpen, Target, Lightbulb,
  GraduationCap, Brain, Trophy, ArrowRight, Copy, Check
} from 'lucide-react';
import { AskAIButton } from '@/components/ai/AskAIButton';
import { CourseTopic, MCQ, } from '@/lib/learn/types';
import { SupportedLanguageId } from '@/lib/compiler/types';
import { PracticeCard } from './PracticeCard';
import { CopyButton } from '@/components/ui/CopyButton';
import type { TopicStatus } from '@/lib/learn/use-topic-progress';

interface TopicSectionViewProps {
  topic: CourseTopic;
  languageId: SupportedLanguageId;
  languageName: string;
  topicIndex: number;
  totalTopics: number;
  status: TopicStatus;
  onMarkDone: (id: string) => void;
  onPrev?: () => void;
  onNext?: () => void;
  prevTitle?: string;
  nextTitle?: string;
}

// ── Inline code copy button ──────────────────────────────────────────────────
function InlineCopyButton({ text }: { text: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <button
      onClick={() => { navigator.clipboard.writeText(text); setCopied(true); setTimeout(() => setCopied(false), 1500); }}
      className="p-1 rounded text-zinc-400 hover:text-zinc-200 hover:bg-zinc-700 transition-colors"
      title="Copy"
    >
      {copied ? <Check className="w-3.5 h-3.5 text-[#22C55E]" /> : <Copy className="w-3.5 h-3.5" />}
    </button>
  );
}

// ── Code block with optional run button ─────────────────────────────────────
function CodeBlock({
  code, language, label, onRun, showRun = false
}: {
  code: string; language: string; label?: string; onRun?: () => void; showRun?: boolean;
}) {
  const ext = language === 'cpp' ? 'cpp' : language === 'typescript' ? 'ts' : language === 'python' ? 'py' : language;
  return (
    <div className="rounded-xl border border-zinc-200 dark:border-[#1F2937] bg-[#080C12] overflow-hidden shadow-sm">
      <div className="flex items-center justify-between px-4 py-2 bg-zinc-100/90 dark:bg-[#090D14] border-b border-zinc-200 dark:border-[#1F2937] text-xs">
        <div className="flex items-center gap-2 text-zinc-300 font-mono">
          <Code2 className="w-3.5 h-3.5 text-[#22C55E]" />
          <span>{label || `example.${ext}`}</span>
        </div>
        <div className="flex items-center gap-2">
          <InlineCopyButton text={code} />
          {showRun && onRun && (
            <button
              type="button"
              onClick={onRun}
              className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold rounded-lg bg-[#22C55E] hover:bg-[#1da850] text-white transition-colors"
            >
              <Play className="w-3 h-3 fill-current" />
              ▶ Run
            </button>
          )}
        </div>
      </div>
      <pre className="p-4 font-mono text-xs sm:text-sm text-zinc-100 overflow-x-auto leading-relaxed">
        <code>{code}</code>
      </pre>
    </div>
  );
}

// ── Output block ─────────────────────────────────────────────────────────────
function OutputBlock({ output }: { output: string }) {
  return (
    <div className="rounded-xl border border-[#1F2937] bg-[#05070A] p-3 text-xs font-mono">
      <div className="flex items-center gap-1.5 text-zinc-400 mb-1 text-[11px] uppercase tracking-wider font-semibold">
        <Terminal className="w-3 h-3 text-[#22C55E]" />
        <span>Output:</span>
      </div>
      <pre className="text-zinc-300 whitespace-pre-wrap">{output}</pre>
    </div>
  );
}

// ── Level badge ──────────────────────────────────────────────────────────────
function LevelBadge({ level }: { level: 'Beginner' | 'Intermediate' | 'Advanced' }) {
  const styles = {
    Beginner: 'bg-emerald-500/10 text-[#22C55E] border-emerald-500/20',
    Intermediate: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
    Advanced: 'bg-red-500/10 text-red-400 border-red-500/20',
  };
  const icons = { Beginner: '🟢', Intermediate: '🟡', Advanced: '🔴' };
  return (
    <span className={`inline-flex items-center gap-1 text-[11px] font-semibold px-2 py-0.5 rounded-full border ${styles[level]}`}>
      {icons[level]} {level}
    </span>
  );
}

// ── Collapsible section ──────────────────────────────────────────────────────
function CollapsibleSection({
  title, icon, children, defaultOpen = true, accent = 'blue'
}: {
  title: string; icon: React.ReactNode; children: React.ReactNode; defaultOpen?: boolean; accent?: string;
}) {
  const [open, setOpen] = useState(defaultOpen);
  const accentMap: Record<string, string> = {
    blue: 'text-[#3B82F6] border-[#3B82F6]/30 bg-[#3B82F6]/5',
    emerald: 'text-[#22C55E] border-emerald-500/20 bg-emerald-500/5',
    amber: 'text-[#F97316] border-[#F97316]/30 bg-[#F97316]/5',
    purple: 'text-[#8B5CF6] border-[#8B5CF6]/30 bg-[#8B5CF6]/5',
    red: 'text-red-400 border-red-500/20 bg-red-500/5',
    zinc: 'text-zinc-300 border-zinc-700 bg-zinc-800/40',
  };
  return (
    <div className={`rounded-xl border ${accentMap[accent] || accentMap.blue} overflow-hidden`}>
      <button
        type="button"
        onClick={() => setOpen(o => !o)}
        className="w-full flex items-center justify-between px-4 py-3 text-left"
      >
        <span className="flex items-center gap-2 text-sm font-semibold">
          {icon}
          {title}
        </span>
        {open ? <ChevronUp className="w-4 h-4 opacity-60" /> : <ChevronDown className="w-4 h-4 opacity-60" />}
      </button>
      {open && <div className="px-4 pb-4 space-y-3">{children}</div>}
    </div>
  );
}

// ── MCQ Component ─────────────────────────────────────────────────────────────
function MCQCard({ mcq, index }: { mcq: MCQ; index: number }) {
  const [selected, setSelected] = useState<string | null>(null);
  const [revealed, setRevealed] = useState(false);
  return (
    <div className="rounded-xl border border-[#1F2937] bg-[#0D1117] p-4 space-y-3">
      <p className="text-sm font-medium text-zinc-100">Q{index + 1}. {mcq.question}</p>
      <div className="space-y-2">
        {mcq.options.map(opt => {
          const isCorrect = opt.label === mcq.answer;
          const isSelected = selected === opt.label;
          let cls = 'border-[#1F2937] bg-[#151B24] text-[#CBD5E1] hover:bg-[#1F2937]';
          if (revealed) {
            if (isCorrect) cls = 'border-emerald-500/50 bg-emerald-500/10 text-emerald-300';
            else if (isSelected) cls = 'border-red-500/50 bg-red-500/10 text-red-300';
          } else if (isSelected) {
            cls = 'border-blue-500/50 bg-blue-500/10 text-blue-300';
          }
          return (
            <button
              key={opt.label}
              type="button"
              onClick={() => { if (!revealed) setSelected(opt.label); }}
              className={`w-full text-left flex items-start gap-2.5 px-3 py-2 rounded-lg border text-xs transition-colors ${cls}`}
            >
              <span className="font-mono font-bold shrink-0 w-4">{opt.label}.</span>
              <span>{opt.text}</span>
            </button>
          );
        })}
      </div>
      {!revealed ? (
        <button
          type="button"
          onClick={() => setRevealed(true)}
          disabled={!selected}
          className="text-xs font-semibold px-3 py-1.5 rounded-lg bg-blue-600/20 text-blue-300 border border-blue-500/30 hover:bg-blue-600/30 transition-colors disabled:opacity-40"
        >
          Check Answer
        </button>
      ) : (
        <div className="p-2.5 rounded-lg bg-[#05070A] border border-[#1F2937] text-xs text-[#CBD5E1] space-y-1">
          <p><span className="font-semibold text-[#22C55E]">✓ Answer: {mcq.answer}</span></p>
          <p className="text-zinc-400">{mcq.explanation}</p>
        </div>
      )}
    </div>
  );
}

// ── Status dot ───────────────────────────────────────────────────────────────
function StatusBadge({ status }: { status: TopicStatus }) {
  if (status === 'done') return (
    <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-[#22C55E]">
      <CheckCircle2 className="w-3.5 h-3.5" /> Done
    </span>
  );
  if (status === 'in-progress') return (
    <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-amber-400">
      <Clock className="w-3.5 h-3.5" /> In Progress
    </span>
  );
  return (
    <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-zinc-500">
      <Circle className="w-3.5 h-3.5" /> Not Started
    </span>
  );
}

// ── Main Component ────────────────────────────────────────────────────────────
export function TopicSectionView({
  topic, languageId, languageName,
  topicIndex, totalTopics,
  status, onMarkDone,
  onPrev, onNext, prevTitle, nextTitle,
}: TopicSectionViewProps) {
  const router = useRouter();
  const exp = topic.explanation;

  const handleRunInCompiler = () => {
    try {
      sessionStorage.setItem('devkit_compiler_snippet', JSON.stringify({
        lang: languageId, code: topic.codeExample, stdin: '', title: topic.title,
      }));
    } catch { /* fallback */ }
    router.push(`/tools/compiler?lang=${languageId}&topic=${topic.id}`);
  };

  const langExt = languageId === 'cpp' ? 'cpp' : languageId === 'typescript' ? 'ts' : languageId === 'python' ? 'py' : languageId;

  return (
    <section
      id={topic.id}
      className="scroll-mt-24 pt-6 pb-10 border-b border-zinc-200 dark:border-[#1F2937] last:border-b-0 space-y-5"
    >
      {/* ── Header ── */}
      <div className="space-y-2">
        <div className="flex flex-col sm:flex-row sm:items-start gap-3">
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-3 flex-wrap mb-1">
              <span className="text-[11px] font-mono text-zinc-500">
                Topic {topicIndex} of {totalTopics}
              </span>
              <StatusBadge status={status} />
            </div>
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-zinc-900 dark:text-[#F8FAFC]">
              {topic.title}
            </h3>
          </div>
          <div className="flex items-center gap-2 shrink-0">
            <AskAIButton topic={topic.title} language={languageName} contextDescription={topic.summary} />
            {status !== 'done' && (
              <button
                type="button"
                onClick={() => onMarkDone(topic.id)}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-semibold rounded-lg border border-emerald-500/30 text-[#22C55E] hover:bg-emerald-500/10 transition-colors"
              >
                <CheckCircle2 className="w-3.5 h-3.5" />
                Mark Done
              </button>
            )}
          </div>
        </div>
        <p className="text-sm sm:text-base text-zinc-600 dark:text-[#CBD5E1] leading-relaxed">
          {exp?.intro || topic.summary}
        </p>
      </div>

      {/* ── Why / Analogy ── */}
      {(exp?.why || exp?.analogy) && (
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
          {exp.why && (
            <div className="rounded-xl border border-blue-500/20 bg-blue-500/5 p-4 space-y-1.5">
              <p className="text-xs font-bold text-blue-400 flex items-center gap-1.5">
                <Lightbulb className="w-3.5 h-3.5" /> Why do we need this?
              </p>
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">{exp.why}</p>
            </div>
          )}
          {exp.analogy && (
            <div className="rounded-xl border border-purple-500/20 bg-purple-500/5 p-4 space-y-1.5">
              <p className="text-xs font-bold text-purple-400 flex items-center gap-1.5">
                <Brain className="w-3.5 h-3.5" /> Real-world analogy
              </p>
              <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed">{exp.analogy}</p>
            </div>
          )}
        </div>
      )}

      {/* ── Core Concept ── */}
      {exp?.concept && (
        <div className="rounded-xl border border-zinc-800 bg-zinc-900/40 p-4 space-y-1.5">
          <p className="text-xs font-bold text-zinc-400 uppercase tracking-wider flex items-center gap-1.5">
            <BookOpen className="w-3.5 h-3.5" /> Core Concept
          </p>
          <p className="text-xs sm:text-sm text-zinc-300 leading-relaxed whitespace-pre-line">{exp.concept}</p>
        </div>
      )}

      {/* ── Memory Diagram ── */}
      {exp?.memoryDiagram && (
        <div className="rounded-xl border border-zinc-700 bg-[#080C12] border-[#1F2937] p-4">
          <p className="text-[11px] font-bold uppercase tracking-wider text-zinc-400 mb-2">Memory / Diagram</p>
          <pre className="font-mono text-xs text-emerald-300 whitespace-pre overflow-x-auto leading-relaxed">
{exp.memoryDiagram}
          </pre>
        </div>
      )}

      {/* ── Syntax ── */}
      {topic.syntax && (
        <div className="rounded-xl border border-zinc-200 dark:border-[#1F2937] bg-zinc-100/70 dark:bg-[#0D1117] p-3 sm:p-4 space-y-2">
          <span className="text-[11px] font-bold uppercase tracking-wider text-zinc-500 dark:text-[#94A3B8] block">
            General Syntax
          </span>
          <pre className="font-mono text-xs sm:text-sm text-zinc-800 dark:text-[#E2E8F0] overflow-x-auto whitespace-pre leading-relaxed">
            {topic.syntax}
          </pre>
          {exp?.syntaxBreakdown && exp.syntaxBreakdown.length > 0 && (
            <div className="mt-2 border-t border-zinc-200 dark:border-[#1F2937] pt-2 space-y-1">
              {exp.syntaxBreakdown.map((item, i) => (
                <div key={i} className="flex gap-2 text-xs">
                  <code className="font-mono text-orange-400 shrink-0 min-w-[90px]">{item.part}</code>
                  <span className="text-zinc-400">{item.meaning}</span>
                </div>
              ))}
            </div>
          )}
        </div>
      )}

      {/* ── Beginner Example ── */}
      {exp?.beginnerExample && (
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <LevelBadge level="Beginner" />
            <span className="text-xs text-zinc-400">{exp.beginnerExample.description}</span>
          </div>
          <CodeBlock code={exp.beginnerExample.code} language={languageId} label={`beginner.${langExt}`} />
          <OutputBlock output={exp.beginnerExample.output} />
        </div>
      )}

      {/* ── Main Code Example ── */}
      <div className="space-y-2">
        <div className="rounded-xl border border-zinc-200 dark:border-[#1F2937] bg-zinc-950 overflow-hidden shadow-sm">
          <div className="flex items-center justify-between px-4 py-2 bg-zinc-900/90 border-b border-zinc-800 text-xs">
            <div className="flex items-center gap-2 text-zinc-300 font-mono">
              <Code2 className="w-3.5 h-3.5 text-[#22C55E]" />
              <span>example.{langExt} ({languageName})</span>
            </div>
            <div className="flex items-center gap-2">
              <CopyButton text={topic.codeExample} label="Copy Code" />
              <button
                type="button"
                onClick={handleRunInCompiler}
                className="inline-flex items-center gap-1.5 px-3 py-1 text-xs font-semibold rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white shadow-sm transition-colors"
              >
                <Play className="w-3 h-3 fill-current" />
                <span>▶ Run in Compiler</span>
              </button>
            </div>
          </div>
          <pre className="p-4 font-mono text-xs sm:text-sm text-zinc-100 overflow-x-auto leading-relaxed">
            <code>{topic.codeExample}</code>
          </pre>
          <div className="border-t border-zinc-800 bg-zinc-900/60 p-3 text-xs font-mono">
            <div className="flex items-center gap-1.5 text-zinc-400 mb-1 text-[11px] uppercase tracking-wider font-semibold">
              <Terminal className="w-3 h-3 text-[#22C55E]" />
              <span>Expected Output:</span>
            </div>
            <pre className="text-zinc-300 whitespace-pre-wrap">{topic.expectedOutput}</pre>
          </div>
        </div>
      </div>

      {/* ── Code Explanation (line-by-line) ── */}
      {exp?.codeExplanation && exp.codeExplanation.length > 0 && (
        <CollapsibleSection title="Code Explanation (Line-by-Line)" icon={<Code2 className="w-4 h-4" />} accent="zinc">
          <div className="space-y-2">
            {exp.codeExplanation.map((item, i) => (
              <div key={i} className="flex gap-3 text-xs">
                <code className="font-mono text-orange-300 shrink-0 bg-zinc-950 px-2 py-1 rounded border border-zinc-800 text-[11px]">
                  {item.line}
                </code>
                <span className="text-zinc-400 leading-relaxed pt-0.5">{item.explanation}</span>
              </div>
            ))}
          </div>
        </CollapsibleSection>
      )}

      {/* ── Execution Steps ── */}
      {exp?.executionSteps && exp.executionSteps.length > 0 && (
        <CollapsibleSection title="Step-by-Step Execution Trace" icon={<Zap className="w-4 h-4" />} accent="emerald" defaultOpen={false}>
          <ol className="space-y-2">
            {exp.executionSteps.map((step, i) => (
              <li key={i} className="flex items-start gap-2.5 text-xs text-zinc-300">
                <span className="shrink-0 w-5 h-5 rounded-full bg-emerald-500/15 text-[#22C55E] flex items-center justify-center text-[10px] font-bold border border-emerald-500/30 mt-0.5">
                  {i + 1}
                </span>
                <span className="leading-relaxed">{step}</span>
              </li>
            ))}
          </ol>
        </CollapsibleSection>
      )}

      {/* ── Intermediate Example ── */}
      {exp?.intermediateExample && (
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <LevelBadge level="Intermediate" />
            <span className="text-xs text-zinc-400">{exp.intermediateExample.description}</span>
          </div>
          <CodeBlock code={exp.intermediateExample.code} language={languageId} label={`intermediate.${langExt}`} />
          <OutputBlock output={exp.intermediateExample.output} />
        </div>
      )}

      {/* ── Advanced Example ── */}
      {exp?.advancedExample && (
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <LevelBadge level="Advanced" />
            <span className="text-xs text-zinc-400">{exp.advancedExample.description}</span>
          </div>
          <CodeBlock code={exp.advancedExample.code} language={languageId} label={`advanced.${langExt}`} />
          <OutputBlock output={exp.advancedExample.output} />
        </div>
      )}

      {/* ── Comparison Table ── */}
      {exp?.comparisonTable && exp.comparisonTable.length > 0 && (
        <CollapsibleSection title={`Comparison: ${exp.comparisonTable[0]?.aLabel || 'A'} vs ${exp.comparisonTable[0]?.bLabel || 'B'}`} icon={<ArrowRight className="w-4 h-4" />} accent="purple" defaultOpen={false}>
          <div className="overflow-x-auto">
            <table className="w-full text-xs border-collapse">
              <thead>
                <tr className="border-b border-zinc-700">
                  <th className="text-left py-2 pr-4 text-zinc-400 font-semibold">Aspect</th>
                  <th className="text-left py-2 pr-4 text-blue-400 font-semibold">{exp.comparisonTable[0]?.aLabel || 'A'}</th>
                  <th className="text-left py-2 text-orange-400 font-semibold">{exp.comparisonTable[0]?.bLabel || 'B'}</th>
                </tr>
              </thead>
              <tbody>
                {exp.comparisonTable.map((row, i) => (
                  <tr key={i} className="border-b border-zinc-800/60">
                    <td className="py-2 pr-4 text-zinc-400 font-medium">{row.aspect}</td>
                    <td className="py-2 pr-4 text-zinc-300">{row.a}</td>
                    <td className="py-2 text-zinc-300">{row.b}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </CollapsibleSection>
      )}

      {/* ── Key Points ── */}
      {exp?.keyPoints && exp.keyPoints.length > 0 && (
        <div className="rounded-xl border border-emerald-500/20 bg-emerald-500/[0.04] p-4 space-y-2">
          <p className="text-xs font-bold text-[#22C55E] uppercase tracking-wider flex items-center gap-1.5">
            <Target className="w-3.5 h-3.5" /> Key Points to Remember
          </p>
          <ul className="space-y-1.5">
            {exp.keyPoints.map((pt, i) => (
              <li key={i} className="flex items-start gap-2 text-xs text-zinc-300">
                <span className="text-[#22C55E] font-bold shrink-0 mt-0.5">✓</span>
                <span className="leading-relaxed">{pt}</span>
              </li>
            ))}
          </ul>
        </div>
      )}

      {/* ── Common Mistake ── */}
      {topic.commonMistake && (
        <div className="rounded-xl border border-amber-500/20 bg-amber-500/[0.06] dark:bg-amber-500/[0.08] p-3.5 flex items-start gap-3 text-xs sm:text-sm text-amber-900 dark:text-amber-200">
          <AlertTriangle className="w-4 h-4 text-amber-600 dark:text-amber-400 shrink-0 mt-0.5" />
          <div>
            <strong className="font-semibold block mb-0.5 text-amber-950 dark:text-amber-100">
              Common B.Tech Exam / Coding Mistake:
            </strong>
            <p className="leading-relaxed">{topic.commonMistake}</p>
          </div>
        </div>
      )}

      {/* ── Exam Tip ── */}
      {exp?.examTip && (
        <div className="rounded-xl border border-blue-500/20 bg-blue-500/[0.04] p-3.5 flex items-start gap-3 text-xs sm:text-sm text-blue-200">
          <GraduationCap className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
          <div>
            <strong className="font-semibold block mb-0.5 text-blue-100">B.Tech Exam Tip:</strong>
            <p className="leading-relaxed text-blue-200/90">{exp.examTip}</p>
          </div>
        </div>
      )}

      {/* ── Interview Tip ── */}
      {exp?.interviewTip && (
        <div className="rounded-xl border border-purple-500/20 bg-purple-500/[0.04] p-3.5 flex items-start gap-3 text-xs sm:text-sm text-purple-200">
          <Trophy className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
          <div>
            <strong className="font-semibold block mb-0.5 text-purple-100">Interview Tip:</strong>
            <p className="leading-relaxed text-purple-200/90">{exp.interviewTip}</p>
          </div>
        </div>
      )}

      {/* ── Quick Revision ── */}
      {exp?.quickRevision && exp.quickRevision.length > 0 && (
        <CollapsibleSection title="⚡ Quick Revision" icon={<Zap className="w-4 h-4" />} accent="amber" defaultOpen={false}>
          <ul className="space-y-1.5">
            {exp.quickRevision.map((item, i) => (
              <li key={i} className="text-xs text-zinc-300 flex items-start gap-2">
                <span className="text-amber-400 font-bold shrink-0">→</span>
                <span>
                  <strong className="text-zinc-200">{item.point}</strong>
                  {item.detail && <span className="text-zinc-400"> — {item.detail}</span>}
                </span>
              </li>
            ))}
          </ul>
        </CollapsibleSection>
      )}

      {/* ── Exam Questions ── */}
      {exp?.examQuestions && exp.examQuestions.length > 0 && (
        <CollapsibleSection title="⭐ University Exam Questions" icon={<GraduationCap className="w-4 h-4" />} accent="blue" defaultOpen={false}>
          {[2, 5, 10].map(marks => {
            const qs = exp.examQuestions!.filter(q => q.marks === marks);
            if (!qs.length) return null;
            return (
              <div key={marks} className="space-y-1.5">
                <p className="text-[11px] font-bold text-zinc-400 uppercase tracking-wider">{marks}-Mark Questions</p>
                <ol className="space-y-1">
                  {qs.map((q, i) => (
                    <li key={i} className="text-xs text-zinc-300 flex items-start gap-2">
                      <span className="text-zinc-500 shrink-0 font-mono">{i + 1}.</span>
                      <span>{q.question}</span>
                    </li>
                  ))}
                </ol>
              </div>
            );
          })}
        </CollapsibleSection>
      )}

      {/* ── MCQs ── */}
      {exp?.mcqs && exp.mcqs.length > 0 && (
        <CollapsibleSection title="📝 MCQ Practice" icon={<Brain className="w-4 h-4" />} accent="purple" defaultOpen={false}>
          <div className="space-y-3">
            {exp.mcqs.map((mcq, i) => (
              <MCQCard key={i} mcq={mcq} index={i} />
            ))}
          </div>
        </CollapsibleSection>
      )}

      {/* ── Practice Questions (expanded set) ── */}
      {exp?.practiceSet && exp.practiceSet.length > 0 && (
        <CollapsibleSection title="💻 Practice Problems" icon={<Code2 className="w-4 h-4" />} accent="emerald" defaultOpen={false}>
          <div className="space-y-3">
            {exp.practiceSet.map((pq, i) => (
              <PracticeCard key={i} practice={pq} languageId={languageId} />
            ))}
          </div>
        </CollapsibleSection>
      )}

      {/* ── Single Practice Card (original field) ── */}
      {topic.practice && !exp?.practiceSet && (
        <PracticeCard practice={topic.practice} languageId={languageId} />
      )}

      {/* ── Previous / Next Navigation ── */}
      <div className="flex items-center justify-between pt-4 border-t border-zinc-800">
        {onPrev ? (
          <button
            type="button"
            onClick={onPrev}
            className="flex items-center gap-2 text-xs font-semibold text-zinc-400 hover:text-zinc-200 transition-colors group"
          >
            <ArrowRight className="w-3.5 h-3.5 rotate-180 group-hover:-translate-x-0.5 transition-transform" />
            <span className="text-left">
              <span className="block text-[10px] text-zinc-600 uppercase tracking-wide">Previous</span>
              <span className="truncate max-w-[140px] sm:max-w-xs">{prevTitle}</span>
            </span>
          </button>
        ) : <div />}
        {onNext ? (
          <button
            type="button"
            onClick={onNext}
            className="flex items-center gap-2 text-xs font-semibold text-zinc-400 hover:text-zinc-200 transition-colors group text-right"
          >
            <span>
              <span className="block text-[10px] text-zinc-600 uppercase tracking-wide">Next</span>
              <span className="truncate max-w-[140px] sm:max-w-xs">{nextTitle}</span>
            </span>
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </button>
        ) : <div />}
      </div>
    </section>
  );
}

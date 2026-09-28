import React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { COURSES, COURSE_LIST } from "@/lib/learn";
import { SupportedLanguageId } from "@/lib/compiler/types";
import {
  buildMetadata,
  getTechArticleJsonLd,
  getBreadcrumbJsonLd,
  getCourseJsonLd,
  getFaqJsonLd,
  } from "@/lib/seo";
import {
  ChevronRight,
  Home,
  BookOpen,
  Terminal,
  Play,
  AlertTriangle,
  CheckCircle2,
  HelpCircle,
  Lightbulb,
  GraduationCap,
  Sparkles,
  ArrowRight,
  ArrowLeft,
  Code2,
} from "lucide-react";
import { CopyButton } from "@/components/ui/CopyButton";
import { PracticeCard } from "@/components/learn/PracticeCard";

interface TopicPageProps {
  params: Promise<{
    language: string;
    topic: string;
  }>;
}

export async function generateStaticParams() {
  const params: { language: string; topic: string }[] = [];
  for (const course of COURSE_LIST) {
    for (const topic of course.topics) {
      params.push({
        language: course.slug,
        topic: topic.id,
      });
    }
  }
  return params;
}

export async function generateMetadata({ params }: TopicPageProps): Promise<Metadata> {
  const { language, topic: topicId } = await params;
  const course = COURSES[language as SupportedLanguageId];

  if (!course) {
    return buildMetadata({
      title: "Course Not Found",
      description: "The requested programming course could not be found.",
      path: `/learn/${language}/${topicId}`,
      noIndex: true,
    });
  }

  const topic = course.topics.find((t) => t.id === topicId);
  if (!topic) {
    return buildMetadata({
      title: "Topic Not Found",
      description: "The requested programming topic could not be found.",
      path: `/learn/${language}/${topicId}`,
      noIndex: true,
    });
  }

  const cleanTitle = `${topic.title} in ${course.name} — Syntax, Examples & Guide`;
  const cleanDescription = topic.explanation?.intro ||
    `Learn ${topic.title} in ${course.name}: comprehensive syntax, beginner and detailed code examples, common mistakes, and B.Tech exam viva questions.`;

  return buildMetadata({
    title: cleanTitle,
    description: cleanDescription.slice(0, 160),
    path: `/learn/${course.slug}/${topic.id}`,
    keywords: [
      topic.title.toLowerCase(),
      `${topic.title.toLowerCase()} in ${course.name.toLowerCase()}`,
      `${course.name.toLowerCase()} ${topic.id}`,
      `${course.name.toLowerCase()} tutorial`,
      `${course.name.toLowerCase()} syntax`,
      `${course.name.toLowerCase()} examples`,
      "btech engineering coding",
      "viva questions",
    ],
    ogType: "article",
  });
}

export default async function TopicDetailPage({ params }: TopicPageProps) {
  const { language, topic: topicId } = await params;
  const course = COURSES[language as SupportedLanguageId];

  if (!course) {
    notFound();
  }

  const topicIndex = course.topics.findIndex((t) => t.id === topicId);
  if (topicIndex === -1) {
    notFound();
  }

  const topic = course.topics[topicIndex];
  const prevTopic = topicIndex > 0 ? course.topics[topicIndex - 1] : null;
  const nextTopic = topicIndex < course.topics.length - 1 ? course.topics[topicIndex + 1] : null;

  const expl = topic.explanation;

  // JSON-LD structured data
  const articleSchema = getTechArticleJsonLd({
    title: `${topic.title} in ${course.name} Programming`,
    description: topic.summary,
    path: `/learn/${course.slug}/${topic.id}`,
  });

  const breadcrumbSchema = getBreadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Learn", path: "/learn" },
    { name: `${course.name} Course`, path: `/learn/${course.slug}` },
    { name: topic.title, path: `/learn/${course.slug}/${topic.id}` },
  ]);

  const courseSchema = getCourseJsonLd({
    name: `${course.name} Programming — ${topic.title}`,
    description: topic.summary,
    path: `/learn/${course.slug}`,
  });

  // Construct genuine educational FAQs for this topic
  const faqs: { question: string; answer: string }[] = [
    {
      question: `What is ${topic.title} in ${course.name}?`,
      answer: expl?.concept || expl?.intro || topic.summary,
    },
    {
      question: `Why is ${topic.title} used in ${course.name}?`,
      answer: expl?.why || expl?.analogy || `${topic.title} is an essential construct in ${course.name} for building efficient and maintainable applications.`,
    },
  ];

  if (topic.commonMistake) {
    faqs.push({
      question: `What is a common mistake when using ${topic.title} in ${course.name}?`,
      answer: topic.commonMistake,
    });
  }

  if (expl?.mcqs && expl.mcqs.length > 0) {
    expl.mcqs.slice(0, 2).forEach((m) => {
      faqs.push({
        question: m.question,
        answer: `Correct Answer: Option ${m.answer}. ${m.explanation}`,
      });
    });
  }

  const faqSchema = getFaqJsonLd(faqs);
  const schemas = [articleSchema, breadcrumbSchema, courseSchema, faqSchema].filter(Boolean);

  const compilerUrl = `/tools/compiler?lang=${course.id}`;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schemas) }}
      />

      <article className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-12">
        {/* 1. Breadcrumbs */}
        <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs text-muted-foreground flex-wrap">
          <Link href="/" className="hover:text-foreground flex items-center gap-1 transition-colors">
            <Home className="w-3.5 h-3.5" />
            <span>Home</span>
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-muted-foreground/60" />
          <Link href="/learn" className="hover:text-foreground transition-colors">
            Learn
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-muted-foreground/60" />
          <Link href={`/learn/${course.slug}`} className="hover:text-foreground transition-colors">
            {course.name}
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-muted-foreground/60" />
          <span className="text-foreground font-semibold">
            {topic.title}
          </span>
        </nav>

        {/* 2. Topic Header */}
        <header className="space-y-4 border-b border-border pb-8">
          <div className="flex flex-wrap items-center justify-between gap-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-500 border border-blue-500/20 text-xs font-bold uppercase tracking-wider">
              <BookOpen className="w-3.5 h-3.5" />
              <span>{course.name} Tutorial • Topic {topicIndex + 1} of {course.topics.length}</span>
            </div>

            <Link
              href={compilerUrl}
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-primary text-white text-xs font-semibold hover:bg-blue-600 transition-colors shadow-sm"
            >
              <Terminal className="w-3.5 h-3.5" />
              <span>Run {course.name} Online</span>
            </Link>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-foreground">
            {topic.title} in {course.name}
          </h1>

          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed">
            {expl?.intro || topic.summary}
          </p>
        </header>

        {/* 3. Conceptual Explanation */}
        <section className="space-y-6">
          <h2 className="text-xl sm:text-2xl font-bold text-foreground flex items-center gap-2">
            <Lightbulb className="w-5 h-5 text-amber-500" />
            <span>Understanding {topic.title}</span>
          </h2>

          <div className="prose dark:prose-invert max-w-none text-muted-foreground text-sm sm:text-base leading-relaxed space-y-4">
            {expl?.why && (
              <div className="p-4 rounded-xl border border-blue-500/20 bg-blue-500/5 text-foreground">
                <strong className="block text-blue-500 font-semibold mb-1">Why is this used?</strong>
                <p className="text-sm text-muted-foreground">{expl.why}</p>
              </div>
            )}

            {expl?.concept && (
              <p className="text-foreground/90">{expl.concept}</p>
            )}

            {expl?.analogy && (
              <div className="p-4 rounded-xl border border-border bg-card">
                <strong className="block text-foreground font-semibold mb-1">Real-World Analogy:</strong>
                <p className="text-sm text-muted-foreground">{expl.analogy}</p>
              </div>
            )}

            {expl?.memoryDiagram && (
              <div className="space-y-2">
                <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Memory Architecture / Execution Layout
                </span>
                <pre className="p-4 rounded-xl border border-border bg-zinc-950 font-mono text-xs text-emerald-400 overflow-x-auto leading-relaxed">
                  {expl.memoryDiagram}
                </pre>
              </div>
            )}
          </div>
        </section>

        {/* 4. Syntax & Syntax Breakdown */}
        {topic.syntax && (
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-foreground flex items-center gap-2">
              <Code2 className="w-5 h-5 text-blue-500" />
              <span>Syntax</span>
            </h2>

            <div className="rounded-xl border border-border bg-zinc-950 overflow-hidden shadow-sm">
              <div className="px-4 py-2 bg-zinc-900 border-b border-border flex items-center justify-between text-xs text-muted-foreground">
                <span className="font-mono">{course.name} Syntax Specification</span>
                <CopyButton text={topic.syntax} />
              </div>
              <pre className="p-4 font-mono text-sm text-zinc-100 overflow-x-auto leading-relaxed">
                <code>{topic.syntax}</code>
              </pre>
            </div>

            {expl?.syntaxBreakdown && expl.syntaxBreakdown.length > 0 && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                {expl.syntaxBreakdown.map((item, idx) => (
                  <div key={idx} className="p-3 rounded-xl border border-border bg-card text-xs space-y-1">
                    <code className="text-blue-500 font-mono font-bold">{item.part}</code>
                    <p className="text-muted-foreground">{item.meaning}</p>
                  </div>
                ))}
              </div>
            )}
          </section>
        )}

        {/* 5. Code Examples */}
        <section className="space-y-6">
          <h2 className="text-xl sm:text-2xl font-bold text-foreground flex items-center gap-2">
            <Terminal className="w-5 h-5 text-emerald-500" />
            <span>Code Example &amp; Execution</span>
          </h2>

          {expl?.beginnerExample && (
            <div className="space-y-3">
              <h3 className="text-base font-semibold text-foreground">Beginner Example</h3>
              <p className="text-xs text-muted-foreground">{expl.beginnerExample.description}</p>
              <div className="rounded-xl border border-border bg-zinc-950 overflow-hidden">
                <div className="px-4 py-2 bg-zinc-900 border-b border-border flex items-center justify-between text-xs text-muted-foreground">
                  <span className="font-mono">beginner_{topic.id}.{course.slug === "cpp" ? "cpp" : course.slug === "typescript" ? "ts" : course.slug}</span>
                  <CopyButton text={expl.beginnerExample.code} />
                </div>
                <pre className="p-4 font-mono text-xs sm:text-sm text-zinc-100 overflow-x-auto leading-relaxed">
                  <code>{expl.beginnerExample.code}</code>
                </pre>
                {expl.beginnerExample.output && (
                  <div className="border-t border-border px-4 py-3 bg-zinc-900/60 text-xs font-mono text-emerald-400">
                    <span className="text-muted-foreground block mb-1 text-[11px] uppercase">Output:</span>
                    <pre className="whitespace-pre-wrap">{expl.beginnerExample.output}</pre>
                  </div>
                )}
              </div>
            </div>
          )}

          {/* Primary / Detailed Example */}
          <div className="space-y-3">
            <h3 className="text-base font-semibold text-foreground">Comprehensive Example</h3>
            <div className="rounded-xl border border-border bg-zinc-950 overflow-hidden">
              <div className="px-4 py-2 bg-zinc-900 border-b border-border flex items-center justify-between text-xs text-muted-foreground">
                <span className="font-mono">example_{topic.id}.{course.slug === "cpp" ? "cpp" : course.slug === "typescript" ? "ts" : course.slug}</span>
                <div className="flex items-center gap-2">
                  <CopyButton text={topic.codeExample} />
                  <Link
                    href={compilerUrl}
                    className="inline-flex items-center gap-1 px-2.5 py-1 rounded bg-emerald-500/20 text-emerald-400 text-xs font-medium hover:bg-emerald-500/30 transition-colors"
                  >
                    <Play className="w-3 h-3 fill-current" />
                    <span>Run in IDE</span>
                  </Link>
                </div>
              </div>
              <pre className="p-4 font-mono text-xs sm:text-sm text-zinc-100 overflow-x-auto leading-relaxed">
                <code>{topic.codeExample}</code>
              </pre>

              {topic.expectedOutput && (
                <div className="border-t border-border px-4 py-3 bg-zinc-900/70 text-xs font-mono text-emerald-400">
                  <span className="text-muted-foreground block mb-1 text-[11px] uppercase">Expected Output:</span>
                  <pre className="whitespace-pre-wrap">{topic.expectedOutput}</pre>
                  {expl?.outputExplanation && (
                    <div className="mt-2.5 pt-2.5 border-t border-zinc-800 text-xs text-zinc-300 font-sans">
                      <span className="font-semibold text-emerald-400 block mb-0.5">Why this output appears:</span>
                      <p className="leading-relaxed">{expl.outputExplanation}</p>
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Code explanation */}
          {expl?.codeExplanation && expl.codeExplanation.length > 0 && (
            <div className="space-y-3 pt-2">
              <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider">Line-by-Line Breakdown</h3>
              <div className="space-y-2">
                {expl.codeExplanation.map((line, idx) => (
                  <div key={idx} className="flex flex-col sm:flex-row items-start sm:items-center gap-2 sm:gap-4 p-2.5 rounded-lg border border-border/60 bg-card text-xs">
                    <code className="text-blue-400 font-mono font-semibold shrink-0">{line.line}</code>
                    <span className="text-muted-foreground">{line.explanation}</span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </section>

        {/* 6. Common Mistakes & Best Practices */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {expl?.commonMistakes && expl.commonMistakes.length > 0 ? (
            <div className="p-5 rounded-2xl border border-rose-500/20 bg-rose-500/5 space-y-3">
              <h3 className="text-base font-bold text-rose-500 flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 shrink-0" />
                <span>Common Mistakes Beginners Make</span>
              </h3>
              <div className="space-y-3">
                {expl.commonMistakes.map((cm, idx) => (
                  <div key={idx} className="p-3 rounded-xl border border-border bg-card text-xs space-y-1">
                    <p className="text-rose-400"><strong className="text-rose-500">❌ Mistake:</strong> {cm.mistake}</p>
                    <p className="text-emerald-400 pt-0.5"><strong className="text-emerald-500">✅ How to Fix:</strong> {cm.fix}</p>
                  </div>
                ))}
              </div>
            </div>
          ) : topic.commonMistake ? (
            <div className="p-5 rounded-2xl border border-rose-500/20 bg-rose-500/5 space-y-3">
              <h3 className="text-base font-bold text-rose-500 flex items-center gap-2">
                <AlertTriangle className="w-4 h-4 shrink-0" />
                <span>Common Mistakes to Avoid</span>
              </h3>
              <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                {topic.commonMistake}
              </p>
            </div>
          ) : null}

          {expl?.keyPoints && expl.keyPoints.length > 0 && (
            <div className="p-5 rounded-2xl border border-emerald-500/20 bg-emerald-500/5 space-y-3">
              <h3 className="text-base font-bold text-emerald-500 flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 shrink-0" />
                <span>Important Points to Remember</span>
              </h3>
              <ul className="space-y-2 text-xs sm:text-sm text-muted-foreground">
                {expl.keyPoints.map((pt, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-emerald-500 shrink-0">•</span>
                    <span>{pt}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </section>

        {/* 6.5 In Simple Words (Quick Summary) */}
        {expl?.quickSummary && (
          <section className="p-6 rounded-2xl border border-blue-500/20 bg-blue-500/[0.04] space-y-2">
            <h3 className="text-base font-bold text-blue-500 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-blue-500 shrink-0" />
              <span>In Simple Words (Quick Summary)</span>
            </h3>
            <p className="text-sm text-foreground/90 leading-relaxed font-medium">
              {expl.quickSummary}
            </p>
          </section>
        )}

        {/* 7. Exam & Interview Preparation */}
        <section className="space-y-6 p-6 sm:p-8 rounded-3xl border border-border bg-card">
          <div className="space-y-1">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-blue-500">
              <GraduationCap className="w-4 h-4" />
              <span>Exam &amp; Placement Prep</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-foreground">
              Exam Questions &amp; Viva Voce
            </h2>
          </div>

          {expl?.examTip && (
            <div className="p-3.5 rounded-xl border border-amber-500/20 bg-amber-500/5 text-xs text-foreground flex items-start gap-2.5">
              <Lightbulb className="w-4 h-4 text-amber-500 shrink-0 mt-0.5" />
              <div>
                <strong className="text-amber-500">Semester Exam Tip: </strong>
                <span>{expl.examTip}</span>
              </div>
            </div>
          )}

          {expl?.interviewTip && (
            <div className="p-3.5 rounded-xl border border-purple-500/20 bg-purple-500/5 text-xs text-foreground flex items-start gap-2.5">
              <Sparkles className="w-4 h-4 text-purple-400 shrink-0 mt-0.5" />
              <div>
                <strong className="text-purple-400">Technical Interview Tip: </strong>
                <span>{expl.interviewTip}</span>
              </div>
            </div>
          )}

          {expl?.examQuestions && expl.examQuestions.length > 0 && (
            <div className="space-y-3 pt-2">
              <h3 className="text-sm font-semibold text-foreground uppercase tracking-wider">
                Likely University Exam Questions
              </h3>
              <div className="space-y-2">
                {expl.examQuestions.map((eq, idx) => (
                  <div key={idx} className="p-3 rounded-xl border border-border bg-background flex items-center justify-between gap-4 text-xs sm:text-sm">
                    <span className="text-foreground">{eq.question}</span>
                    <span className="shrink-0 px-2 py-0.5 rounded font-bold text-xs bg-muted text-muted-foreground border border-border">
                      {eq.marks} Marks
                    </span>
                  </div>
                ))}
              </div>
            </div>
          )}
        </section>

        {/* 7.5 Practice Problems */}
        {(expl?.practiceSet || topic.practice) && (
          <section className="space-y-4">
            <h2 className="text-xl sm:text-2xl font-bold text-foreground flex items-center gap-2">
              <Code2 className="w-5 h-5 text-emerald-500" />
              <span>Practice Questions</span>
            </h2>
            <div className="space-y-4">
              {expl?.practiceSet && expl.practiceSet.length > 0
                ? expl.practiceSet.map((pq, idx) => (
                    <PracticeCard key={idx} practice={pq} languageId={course.id} />
                  ))
                : topic.practice && (
                    <PracticeCard practice={topic.practice} languageId={course.id} />
                  )}
            </div>
          </section>
        )}

        {/* 8. Frequently Asked Questions */}
        <section className="space-y-4">
          <h2 className="text-xl sm:text-2xl font-bold text-foreground flex items-center gap-2">
            <HelpCircle className="w-5 h-5 text-blue-500" />
            <span>Frequently Asked Questions</span>
          </h2>
          <div className="space-y-3">
            {faqs.map((faq, idx) => (
              <details
                key={idx}
                className="p-4 rounded-xl border border-border bg-card group"
              >
                <summary className="font-semibold text-sm sm:text-base text-foreground cursor-pointer list-none flex items-center justify-between">
                  <span>{faq.question}</span>
                  <span className="text-muted-foreground group-open:rotate-180 transition-transform text-xs">▼</span>
                </summary>
                <p className="mt-3 text-xs sm:text-sm text-muted-foreground leading-relaxed border-t border-border/60 pt-3">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </section>

        {/* 9. Next / Prev & Related Navigation */}
        <footer className="space-y-6 pt-6 border-t border-border">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            {prevTopic ? (
              <Link
                href={`/learn/${course.slug}/${prevTopic.id}`}
                className="w-full sm:w-auto p-4 rounded-xl border border-border bg-card hover:border-blue-500/40 hover:bg-accent/40 text-left transition-all group flex items-center gap-3"
              >
                <ArrowLeft className="w-4 h-4 text-blue-500 group-hover:-translate-x-1 transition-transform" />
                <div>
                  <span className="text-[11px] text-muted-foreground uppercase block">Previous Topic</span>
                  <span className="text-sm font-semibold text-foreground">{prevTopic.title}</span>
                </div>
              </Link>
            ) : <div />}

            {nextTopic && (
              <Link
                href={`/learn/${course.slug}/${nextTopic.id}`}
                className="w-full sm:w-auto p-4 rounded-xl border border-border bg-card hover:border-blue-500/40 hover:bg-accent/40 text-right transition-all group flex items-center gap-3 ml-auto"
              >
                <div>
                  <span className="text-[11px] text-muted-foreground uppercase block">Next Topic</span>
                  <span className="text-sm font-semibold text-foreground">{nextTopic.title}</span>
                </div>
                <ArrowRight className="w-4 h-4 text-blue-500 group-hover:translate-x-1 transition-transform" />
              </Link>
            )}
          </div>

          <div className="p-6 rounded-2xl border border-border bg-muted/30 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="text-sm font-bold text-foreground">Want to practice all {course.name} concepts?</h3>
              <p className="text-xs text-muted-foreground mt-0.5">Explore the full curriculum with interactive progress tracking.</p>
            </div>
            <Link
              href={`/learn/${course.slug}`}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-primary text-white text-xs font-semibold hover:bg-blue-600 transition-colors shrink-0 shadow-sm"
            >
              <span>View Full {course.name} Syllabus</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </footer>
      </article>
    </>
  );
}

'use client';

import React, { useState, useEffect, useRef, useCallback, Suspense, useMemo } from 'react';
import { useSearchParams } from 'next/navigation';
import { LANGUAGES, getLanguageConfig } from '@/lib/compiler/languages';
import { SupportedLanguageId, ExecutionResult } from '@/lib/compiler/types';
import { CompilerToolbar } from './CompilerToolbar';
import { CodeEditor } from './CodeEditor';
import { TerminalPanel } from './TerminalPanel';
import { detectProgramInputs } from '@/lib/compiler/input-detector';
import { downloadFile } from '@/lib/utils';
import { LearnLanguagesSection } from './LearnLanguagesSection';
import { getPracticeQuestionById, getQuestionLanguage, PracticeQuestion } from '@/lib/learn/practice-questions';
import { getCourseBySlug } from '@/lib/learn';
import { BookOpen, HelpCircle, X } from 'lucide-react';
import { AICompilerPanel } from '@/components/ai/AICompilerPanel';

interface InitialParams {
  langId: SupportedLanguageId;
  initialCodeMap: Record<SupportedLanguageId, string>;
  initialStdin: string;
  question: PracticeQuestion | null;
  topicTitle: string | null;
}

function resolveInitialParams(searchParams: ReturnType<typeof useSearchParams>): InitialParams {
  const baseCodeMap: Record<SupportedLanguageId, string> = {
    c: LANGUAGES.c.starterCode,
    cpp: LANGUAGES.cpp.starterCode,
    java: LANGUAGES.java.starterCode,
    python: LANGUAGES.python.starterCode,
    typescript: LANGUAGES.typescript.starterCode,
  };

  let langId: SupportedLanguageId = 'c';
  let initialStdin = LANGUAGES.c.sampleStdin;
  let question: PracticeQuestion | null = null;
  let topicTitle: string | null = null;

  // 1. Check for session snippet first (safe state without massive URLs)
  if (typeof window !== 'undefined') {
    try {
      const sessionData = sessionStorage.getItem('devforge_compiler_snippet');
      if (sessionData) {
        sessionStorage.removeItem('devforge_compiler_snippet');
        const parsed = JSON.parse(sessionData);
        if (parsed.lang && LANGUAGES[parsed.lang as SupportedLanguageId]) {
          const lId = parsed.lang as SupportedLanguageId;
          langId = lId;
          if (parsed.code) {
            baseCodeMap[lId] = parsed.code;
          }
          if (typeof parsed.stdin === 'string') {
            initialStdin = parsed.stdin;
          } else {
            initialStdin = LANGUAGES[lId].sampleStdin;
          }
          if (parsed.title) {
            topicTitle = parsed.title;
          }
          return { langId, initialCodeMap: baseCodeMap, initialStdin, question, topicTitle };
        }
      }
    } catch {
      // Ignore sessionStorage errors
    }
  }

  const qId = searchParams.get('q');
  const topicId = searchParams.get('topic');
  const mode = searchParams.get('mode');
  const urlLang = searchParams.get('lang') || searchParams.get('language');
  const urlCode = searchParams.get('code');
  const urlStdin = searchParams.get('stdin');

  // 2. Check for practice question by ID
  if (qId) {
    const pq = getPracticeQuestionById(qId);
    if (pq) {
      const qLang = getQuestionLanguage(pq);
      langId = qLang;
      baseCodeMap[qLang] = pq.starterCode;
      initialStdin = pq.sampleStdin ?? '';
      question = pq;
      return { langId, initialCodeMap: baseCodeMap, initialStdin, question, topicTitle: null };
    }
  }

  // 3. Check for course topic by ID
  if (topicId && urlLang) {
    const course = getCourseBySlug(urlLang);
    const topic = course?.topics.find((t) => t.id === topicId);
    if (topic) {
      const langConfig = getLanguageConfig(urlLang);
      if (langConfig) {
        langId = langConfig.id;
        topicTitle = topic.title;

        if (mode === 'practice' && topic.practice) {
          baseCodeMap[langId] = topic.practice.starterCode;
          initialStdin = langConfig.sampleStdin;
        } else {
          baseCodeMap[langId] = topic.codeExample;
          initialStdin = langConfig.sampleStdin;
        }
        return { langId, initialCodeMap: baseCodeMap, initialStdin, question: null, topicTitle };
      }
    }
  }

  // 4. Handle language param
  if (urlLang) {
    const config = getLanguageConfig(urlLang);
    if (config) {
      langId = config.id;
      initialStdin = config.sampleStdin;
    }
  }

  // 5. Handle fallback raw code param (base64 or uri encoded)
  if (urlCode) {
    try {
      let decodedCode = urlCode;
      if (urlCode.startsWith('b64:')) {
        decodedCode = atob(urlCode.slice(4));
      } else {
        decodedCode = decodeURIComponent(urlCode);
      }
      baseCodeMap[langId] = decodedCode;
    } catch {
      // Fallback
    }
  }

  // 6. Handle raw stdin param
  if (urlStdin !== null && urlStdin !== undefined) {
    try {
      initialStdin = decodeURIComponent(urlStdin);
    } catch {
      initialStdin = urlStdin;
    }
  }

  return { langId, initialCodeMap: baseCodeMap, initialStdin, question, topicTitle };
}

function CompilerWorkspace() {
  const searchParams = useSearchParams();

  const initialParams = useMemo(() => resolveInitialParams(searchParams), [searchParams]);

  const [selectedLanguage, setSelectedLanguage] = useState<SupportedLanguageId>(initialParams.langId);
  const [codeMap, setCodeMap] = useState<Record<SupportedLanguageId, string>>(initialParams.initialCodeMap);
  const [stdin, setStdin] = useState<string>(initialParams.initialStdin);
  const [isRunning, setIsRunning] = useState<boolean>(false);
  const [result, setResult] = useState<ExecutionResult | null>(null);
  const [activeQuestion, setActiveQuestion] = useState<PracticeQuestion | null>(initialParams.question);
  const [activeTopicTitle, setActiveTopicTitle] = useState<string | null>(initialParams.topicTitle);
  const [isWaitingForInput, setIsWaitingForInput] = useState<boolean>(false);

  const abortControllerRef = useRef<AbortController | null>(null);

  // Sync isMac without causing cascading render effects
  const isMac = React.useSyncExternalStore(
    () => () => {},
    () => typeof navigator !== 'undefined' && navigator.userAgent.toLowerCase().includes('mac'),
    () => false
  );

  const currentConfig = LANGUAGES[selectedLanguage];
  const currentCode = codeMap[selectedLanguage];

  // Keep a ref to the latest state inside useEffect so handleRun / Monaco keybindings never capture stale closures
  const latestStateRef = useRef({
    selectedLanguage,
    currentCode,
    stdin,
    isRunning,
    isWaitingForInput,
  });

  useEffect(() => {
    latestStateRef.current = {
      selectedLanguage,
      currentCode,
      stdin,
      isRunning,
      isWaitingForInput,
    };
  }, [selectedLanguage, currentCode, stdin, isRunning, isWaitingForInput]);

  // Determine active sample stdin: question's sample input if solving a question, otherwise language default
  const activeSampleStdin = activeQuestion ? activeQuestion.sampleStdin : currentConfig.sampleStdin;

  const handleCodeChange = (newCode: string) => {
    setCodeMap((prev) => ({ ...prev, [selectedLanguage]: newCode }));
    setIsWaitingForInput(false);
  };

  const handleStdinChange = (newStdin: string) => {
    setStdin(newStdin);
    setIsWaitingForInput(false);
  };

  const handleReset = () => {
    setIsWaitingForInput(false);
    if (activeQuestion && getQuestionLanguage(activeQuestion) === selectedLanguage) {
      setCodeMap((prev) => ({
        ...prev,
        [selectedLanguage]: activeQuestion.starterCode,
      }));
      setStdin(activeQuestion.sampleStdin ?? '');
    } else {
      setCodeMap((prev) => ({
        ...prev,
        [selectedLanguage]: currentConfig.starterCode,
      }));
    }
    setResult(null);
  };

  const handleDismissBanner = () => {
    setActiveQuestion(null);
    setActiveTopicTitle(null);
  };

  const handleDownload = () => {
    const filename = `main${currentConfig.extension}`;
    downloadFile(filename, currentCode, 'text/plain');
  };

  const handleRun = useCallback(async () => {
    const {
      selectedLanguage: langToRun,
      currentCode: codeToRun,
      stdin: stdinToRun,
      isRunning: running,
      isWaitingForInput: waiting,
    } = latestStateRef.current;

    if (running) return;

    // Check if code expects input and none was provided
    const inputCheck = detectProgramInputs(codeToRun, langToRun);
    if (inputCheck.hasInput && (!stdinToRun || !stdinToRun.trim()) && !waiting) {
      setIsWaitingForInput(true);
      return;
    }

    setIsWaitingForInput(false);
    setIsRunning(true);
    setResult(null);

    const controller = new AbortController();
    abortControllerRef.current = controller;

    try {
      const response = await fetch('/api/execute', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          language: langToRun,
          code: codeToRun,
          stdin: stdinToRun,
        }),
        signal: controller.signal,
      });

      const data: ExecutionResult = await response.json();
      setResult(data);
    } catch (err: unknown) {
      if (err instanceof Error && err.name === 'AbortError') {
        setResult({
          status: 'error',
          stdout: '',
          stderr: 'Execution stopped by user.',
          exitCode: null,
          executionTime: null,
        });
      } else {
        setResult({
          status: 'error',
          stdout: '',
          stderr: err instanceof Error ? err.message : 'Network error executing code.',
          exitCode: 1,
          executionTime: null,
        });
      }
    } finally {
      setIsRunning(false);
      abortControllerRef.current = null;
    }
  }, []);

  const handleStop = () => {
    if (abortControllerRef.current) {
      abortControllerRef.current.abort();
    }
    setIsRunning(false);
  };

  // Keyboard shortcut listener for Ctrl+Enter / Cmd+Enter on window
  useEffect(() => {
    function handleKeyDown(e: KeyboardEvent) {
      if ((e.ctrlKey || e.metaKey) && e.key === 'Enter') {
        e.preventDefault();
        handleRun();
      }
    }

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleRun]);

  return (
    <div className="space-y-4">
      {/* Top Toolbar */}
      <CompilerToolbar
        languageConfig={currentConfig}
        onSelectLanguage={(lang) => {
          setSelectedLanguage(lang);
          setResult(null);
          // Don't overwrite stdin on language change; user input is preserved
        }}
        isRunning={isRunning}
        onRun={handleRun}
        onStop={handleStop}
        onReset={handleReset}
        onDownload={handleDownload}
        isMac={isMac}
      />

      {/* Active Question or Topic Context Banner */}
      {(activeQuestion || activeTopicTitle) && (
        <div className="flex items-center justify-between gap-3 px-4 py-2.5 rounded-xl border border-emerald-500/30 bg-emerald-500/10 text-emerald-900 dark:text-emerald-200 text-xs sm:text-sm animate-in fade-in duration-200">
          <div className="flex items-center gap-2 min-w-0">
            {activeQuestion ? (
              <HelpCircle className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
            ) : (
              <BookOpen className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
            )}
            <div className="truncate">
              <span className="font-semibold text-emerald-700 dark:text-emerald-400">
                {activeQuestion ? 'Loaded Practice Problem: ' : 'Loaded Example: '}
              </span>
              <span className="font-bold text-zinc-900 dark:text-zinc-100">
                {activeQuestion?.title || activeTopicTitle}
              </span>
              {activeQuestion && (
                <span className="ml-2 px-2 py-0.5 rounded-full text-[10px] font-bold uppercase tracking-wider bg-white dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 border border-zinc-200 dark:border-zinc-700">
                  {activeQuestion.difficulty}
                </span>
              )}
            </div>
          </div>

          <button
            type="button"
            onClick={handleDismissBanner}
            className="p-1 rounded-lg hover:bg-emerald-500/20 text-zinc-500 hover:text-zinc-900 dark:hover:text-zinc-100 transition-colors"
            title="Dismiss context banner"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      )}

      {/* Main Workspace Layout: Two column desktop, stacked mobile */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-start">
        {/* Left Column: Monaco Code Editor */}
        <div className="lg:col-span-7 flex flex-col space-y-2">
          <div className="flex items-center justify-between text-xs text-zinc-500 font-medium px-1">
            <span>Source Code ({currentConfig.name})</span>
            <span>main{currentConfig.extension}</span>
          </div>

          <CodeEditor
            code={currentCode}
            onChange={handleCodeChange}
            language={currentConfig.editorLanguage}
            onRun={handleRun}
          />
        </div>

        {/* Right Column: Terminal Execution & Input Area */}
        <div className="lg:col-span-5 flex flex-col space-y-4">
          <TerminalPanel
            language={selectedLanguage}
            code={currentCode}
            stdin={stdin}
            onStdinChange={handleStdinChange}
            isRunning={isRunning}
            result={result}
            onRun={handleRun}
            onClearOutput={() => setResult(null)}
            sampleStdin={activeSampleStdin}
            isWaitingForInput={isWaitingForInput}
            setIsWaitingForInput={setIsWaitingForInput}
          />

          {/* AI Assistant Panel */}
          <AICompilerPanel
            code={currentCode}
            language={selectedLanguage}
            errorOutput={result && (result.stderr || result.status === 'error') ? (result.stderr || '') : undefined}
            onApplyCode={(newCode) => {
              setCodeMap(prev => ({ ...prev, [selectedLanguage]: newCode }));
              setResult(null);
            }}
          />
        </div>
      </div>

      {/* Learn Programming Languages Section */}
      <LearnLanguagesSection
        onSelectLanguage={(lang) => {
          setSelectedLanguage(lang);
          setActiveQuestion(null);
          setActiveTopicTitle(null);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }}
      />
    </div>
  );
}

function CompilerWithParams() {
  const searchParams = useSearchParams();
  // Key by search params string so navigating to different questions reinitializes workspace cleanly
  return <CompilerWorkspace key={searchParams.toString()} />;
}

export function Compiler() {
  return (
    <Suspense
      fallback={
        <div className="p-8 text-center text-sm text-zinc-400">
          Loading Code&Tools Compiler workspace...
        </div>
      }
    >
      <CompilerWithParams />
    </Suspense>
  );
}

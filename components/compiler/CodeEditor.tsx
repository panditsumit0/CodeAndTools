'use client';

import React, { useRef } from 'react';
import Editor, { OnMount } from '@monaco-editor/react';
import { useTheme } from '@/components/theme/ThemeProvider';
import { Loader2 } from 'lucide-react';

type MonacoEditorInstance = Parameters<OnMount>[0];

interface CodeEditorProps {
  code: string;
  onChange: (value: string) => void;
  language: string;
  onRun: () => void;
}

export function CodeEditor({ code, onChange, language, onRun }: CodeEditorProps) {
  const { resolvedTheme } = useTheme();
  const editorRef = useRef<MonacoEditorInstance | null>(null);
  const onRunRef = useRef(onRun);

  React.useEffect(() => {
    onRunRef.current = onRun;
  }, [onRun]);

  const handleEditorDidMount: OnMount = (editor, monaco) => {
    editorRef.current = editor;
    monaco.editor.defineTheme("devforge-dark", {
      base: "vs-dark",
      inherit: true,
      rules: [],
      colors: {
        "editor.background": "#080C12",
        "editor.lineHighlightBackground": "#151B24",
        "editorGutter.background": "#080C12",
        "editorLineNumber.foreground": "#4B5563",
        "editorLineNumber.activeForeground": "#94A3B8",
      },
    });
    if (resolvedTheme === "dark") {
      monaco.editor.setTheme("devforge-dark");
    }


    // Register Ctrl+Enter / Cmd+Enter shortcut inside editor using ref to always get latest callback
    editor.addCommand(monaco.KeyMod.CtrlCmd | monaco.KeyCode.Enter, () => {
      if (onRunRef.current) {
        onRunRef.current();
      }
    });
  };

  const monacoTheme = resolvedTheme === 'dark' ? 'devforge-dark' : 'light';

  return (
    <div className="relative w-full h-[380px] sm:h-[460px] rounded-xl border border-zinc-200 dark:border-[#1F2937] bg-[#1e1e1e] dark:bg-[#080C12] overflow-hidden focus-within:ring-2 focus-within:ring-blue-500/40">
      <Editor
        height="100%"
        language={language}
        value={code}
        theme={monacoTheme}
        onChange={(value) => onChange(value || '')}
        onMount={handleEditorDidMount}
        loading={
          <div className="flex items-center justify-center h-full gap-2 text-xs text-zinc-400">
            <Loader2 className="w-4 h-4 animate-spin text-blue-500" />
            <span>Loading editor...</span>
          </div>
        }
        options={{
          fontSize: 13,
          fontFamily:
            'ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
          minimap: { enabled: false },
          scrollBeyondLastLine: false,
          automaticLayout: true,
          tabSize: 4,
          wordWrap: 'on',
          autoClosingBrackets: 'always',
          autoClosingQuotes: 'always',
          formatOnPaste: true,
          lineNumbers: 'on',
          renderLineHighlight: 'all',
          padding: { top: 12, bottom: 12 },
        }}
      />
    </div>
  );
}

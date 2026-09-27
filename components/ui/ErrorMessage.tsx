import React from 'react';
import { AlertCircle, AlertTriangle, Info, CheckCircle2 } from 'lucide-react';

interface AlertBannerProps {
  message: string;
  type?: 'error' | 'warning' | 'info' | 'success';
  className?: string;
  onClear?: () => void;
}

export function ErrorMessage({
  message,
  type = 'error',
  className = '',
  onClear,
}: AlertBannerProps) {
  if (!message) return null;

  const styles = {
    error: {
      bg: 'bg-rose-500/10 border-rose-500/30 text-rose-600 dark:text-rose-400',
      icon: <AlertCircle className="w-4 h-4 shrink-0 text-rose-500 mt-0.5" />,
    },
    warning: {
      bg: 'bg-amber-500/10 border-amber-500/30 text-amber-600 dark:text-amber-400',
      icon: <AlertTriangle className="w-4 h-4 shrink-0 text-amber-500 mt-0.5" />,
    },
    info: {
      bg: 'bg-sky-500/10 border-sky-500/30 text-sky-600 dark:text-sky-400',
      icon: <Info className="w-4 h-4 shrink-0 text-sky-500 mt-0.5" />,
    },
    success: {
      bg: 'bg-emerald-500/10 border-emerald-500/30 text-emerald-600 dark:text-emerald-400',
      icon: <CheckCircle2 className="w-4 h-4 shrink-0 text-emerald-500 mt-0.5" />,
    },
  }[type];

  return (
    <div
      role="alert"
      className={`flex items-start justify-between gap-3 p-3 rounded-xl border text-xs sm:text-sm font-medium ${styles.bg} ${className}`}
    >
      <div className="flex items-start gap-2.5">
        {styles.icon}
        <span className="leading-relaxed">{message}</span>
      </div>
      {onClear && (
        <button
          type="button"
          onClick={onClear}
          className="text-xs opacity-70 hover:opacity-100 underline shrink-0 cursor-pointer ml-2"
        >
          Dismiss
        </button>
      )}
    </div>
  );
}

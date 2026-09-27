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
      bg: 'bg-[#EF4444]/10 border-[#EF4444]/30 text-[#EF4444]',
      icon: <AlertCircle className="w-4 h-4 shrink-0 text-[#EF4444] mt-0.5" />,
    },
    warning: {
      bg: 'bg-[#F97316]/10 border-[#F97316]/30 text-[#F97316]',
      icon: <AlertTriangle className="w-4 h-4 shrink-0 text-[#F97316] mt-0.5" />,
    },
    info: {
      bg: 'bg-[#3B82F6]/10 border-[#3B82F6]/30 text-[#3B82F6]',
      icon: <Info className="w-4 h-4 shrink-0 text-[#3B82F6] mt-0.5" />,
    },
    success: {
      bg: 'bg-[#22C55E]/10 border-[#22C55E]/30 text-[#22C55E]',
      icon: <CheckCircle2 className="w-4 h-4 shrink-0 text-[#22C55E] mt-0.5" />,
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

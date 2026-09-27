"use client";

import React from "react";
import { CurriculumSection } from "@/lib/learn/curriculum";
import { GraduationCap, Code2, ChevronRight, CheckCircle2, Clock } from "lucide-react";
import type { TopicStatus } from "@/lib/learn/use-topic-progress";

interface CurriculumItemProps {
  section: CurriculumSection;
  index: number;
  isActive: boolean;
  onSelect: (id: string) => void;
  status?: TopicStatus;
}

export function CurriculumItem({
  section,
  index,
  isActive,
  onSelect,
  status = 'not-started',
}: CurriculumItemProps) {
  const handleClick = (e: React.MouseEvent) => {
    e.preventDefault();
    onSelect(section.id);
  };

  const isSpecial = section.isSpecial;

  return (
    <button
      type="button"
      onClick={handleClick}
      className={`w-full group text-left px-3 py-2 rounded-xl text-xs font-medium transition-all flex items-center justify-between gap-2 ${
        isActive
          ? "bg-[#172033] border border-[#3B82F6]/40 text-[#F8FAFC] font-semibold shadow-sm"
          : isSpecial
          ? "bg-primary/10 text-primary hover:bg-[#111827]"
          : "text-[#94A3B8] hover:text-[#F8FAFC] hover:bg-[#111827]"
      }`}
    >
      <div className="flex items-center gap-2 min-w-0">
        {section.id === "btech-priority" ? (
          <GraduationCap className={`w-3.5 h-3.5 shrink-0 ${isActive ? "text-[#3B82F6]" : "text-[#3B82F6]"}`} />
        ) : section.id === "practice-questions" ? (
          <Code2 className={`w-3.5 h-3.5 shrink-0 ${isActive ? "text-[#3B82F6]" : "text-[#3B82F6]"}`} />
        ) : (
          <span
            className={`w-4 text-[10px] font-mono shrink-0 ${
              isActive ? "text-[#3B82F6] font-bold" : "text-[#94A3B8]/60"
            }`}
          >
            {index === 0 ? "•" : `${index}.`}
          </span>
        )}
        <span className="truncate">{section.title}</span>
      </div>

      <div className="flex items-center gap-1 shrink-0">
        {section.badge ? (
          <span
            className={`text-[9px] px-1.5 py-0.5 rounded-full shrink-0 font-semibold ${
              isActive
                ? "bg-primary-foreground/20 text-primary-foreground"
                : "bg-primary/15 text-primary"
            }`}
          >
            {section.badge}
          </span>
        ) : (
          <>
            {status === 'done' && !isActive && (
              <CheckCircle2 className="w-3 h-3 text-[#22C55E] shrink-0" />
            )}
            {status === 'in-progress' && !isActive && (
              <Clock className="w-3 h-3 text-[#F59E0B] shrink-0" />
            )}
            {status === 'not-started' && !isActive && (
              <ChevronRight className="w-3 h-3 shrink-0 opacity-0 group-hover:opacity-100 transition-opacity text-muted-foreground" />
            )}
            {isActive && (
              <ChevronRight className="w-3 h-3 shrink-0 opacity-100 text-primary-foreground" />
            )}
          </>
        )}
      </div>
    </button>
  );
}

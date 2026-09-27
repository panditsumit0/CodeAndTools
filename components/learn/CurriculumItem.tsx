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
          ? "bg-primary text-primary-foreground font-semibold shadow-sm shadow-primary/25"
          : isSpecial
          ? "bg-primary/10 text-primary hover:bg-primary/15"
          : "text-muted-foreground hover:text-foreground hover:bg-muted/60"
      }`}
    >
      <div className="flex items-center gap-2 min-w-0">
        {section.id === "btech-priority" ? (
          <GraduationCap className={`w-3.5 h-3.5 shrink-0 ${isActive ? "text-primary-foreground" : "text-primary"}`} />
        ) : section.id === "practice-questions" ? (
          <Code2 className={`w-3.5 h-3.5 shrink-0 ${isActive ? "text-primary-foreground" : "text-primary"}`} />
        ) : (
          <span
            className={`w-4 text-[10px] font-mono shrink-0 ${
              isActive ? "text-primary-foreground/80 font-bold" : "text-muted-foreground/60"
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
              <CheckCircle2 className="w-3 h-3 text-emerald-400 shrink-0" />
            )}
            {status === 'in-progress' && !isActive && (
              <Clock className="w-3 h-3 text-amber-400 shrink-0" />
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

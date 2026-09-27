"use client";

import React from "react";
import Link from "next/link";
import { CurriculumConfig } from "@/lib/learn/curriculum";
import { CurriculumItem } from "./CurriculumItem";
import { BookOpen, PanelLeftClose, PanelLeft, Play } from "lucide-react";
import type { TopicStatus } from "@/lib/learn/use-topic-progress";

interface CurriculumSidebarProps {
  curriculum: CurriculumConfig;
  isOpen: boolean;
  onToggle: () => void;
  activeId: string;
  onSelectSection: (id: string) => void;
  getStatus?: (id: string) => TopicStatus;
}

export function CurriculumSidebar({
  curriculum,
  isOpen,
  onToggle,
  activeId,
  onSelectSection,
  getStatus,
}: CurriculumSidebarProps) {
  const compilerUrl = `/tools/compiler?lang=${curriculum.language}`;

  if (!isOpen) {
    return (
      <div className="hidden lg:flex flex-col items-center sticky top-20 z-20">
        <button
          type="button"
          onClick={onToggle}
          title="Open Curriculum Sidebar"
          className="p-2.5 rounded-xl border border-border/80 bg-card/80 hover:bg-card text-foreground shadow-sm hover:border-primary/50 transition-all flex flex-col items-center gap-1 group"
        >
          <PanelLeft className="w-5 h-5 text-primary group-hover:scale-110 transition-transform" />
          <span className="text-[10px] font-bold uppercase tracking-wider text-muted-foreground group-hover:text-primary write-vertical">
            Curriculum
          </span>
        </button>
      </div>
    );
  }

  return (
    <aside className="hidden lg:block w-72 shrink-0 sticky top-20 z-20 max-h-[calc(100vh-6rem)] transition-all duration-300">
      <div className="rounded-2xl border border-border/80 bg-card/90 backdrop-blur-md shadow-sm flex flex-col max-h-[calc(100vh-6rem)] overflow-hidden">
        {/* Sidebar Header */}
        <div className="p-4 border-b border-border/70 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <BookOpen className="w-4 h-4 text-primary" />
            <span className="text-xs font-bold uppercase tracking-wider text-foreground">
              Curriculum & TOC
            </span>
          </div>
          <button
            type="button"
            onClick={onToggle}
            title="Collapse Sidebar"
            className="p-1 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
          >
            <PanelLeftClose className="w-4 h-4" />
          </button>
        </div>

        {/* Subtitle / Topic Counter */}
        <div className="px-4 py-2 bg-muted/30 border-b border-border/50 text-[11px] text-muted-foreground flex justify-between">
          <span>{curriculum.title}</span>
          <span className="font-mono">{curriculum.sections.length} sections</span>
        </div>

        {/* Scrollable Curriculum List */}
        <div className="flex-1 overflow-y-auto p-2 space-y-1 scrollbar-thin">
          {curriculum.sections.map((section, idx) => (
            <CurriculumItem
              key={section.id}
              section={section}
              index={idx}
              isActive={activeId === section.id}
              onSelect={onSelectSection}
              status={getStatus ? getStatus(section.id) : 'not-started'}
            />
          ))}
        </div>

        {/* Bottom Compiler Action */}
        <div className="p-3 border-t border-border/70 bg-muted/20">
          <Link
            href={compilerUrl}
            className="w-full inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl text-xs font-bold bg-primary hover:bg-primary/90 text-primary-foreground transition-all shadow-sm shadow-primary/20"
          >
            <Play className="w-3.5 h-3.5 fill-current" />
            <span>Open {curriculum.course.name} Compiler</span>
          </Link>
        </div>
      </div>
    </aside>
  );
}

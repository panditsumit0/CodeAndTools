"use client";

import React, { useEffect } from "react";
import { CurriculumConfig } from "@/lib/learn/curriculum";
import { CurriculumItem } from "./CurriculumItem";
import { BookOpen, X, Menu, Play } from "lucide-react";
import Link from "next/link";

interface CurriculumMobileDrawerProps {
  curriculum: CurriculumConfig;
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
  activeId: string;
  onSelectSection: (id: string) => void;
}

export function CurriculumMobileDrawer({
  curriculum,
  isOpen,
  onOpen,
  onClose,
  activeId,
  onSelectSection,
}: CurriculumMobileDrawerProps) {
  // Lock body scroll when mobile drawer is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleSelect = (id: string) => {
    onClose();
    onSelectSection(id);
  };

  const compilerUrl = `/tools/compiler?lang=${curriculum.language}`;

  return (
    <>
      {/* Mobile Sticky Bar Trigger */}
      <div className="lg:hidden sticky top-14 z-30 mb-4 -mx-4 sm:-mx-6 px-4 sm:px-6 py-2.5 bg-background/95 backdrop-blur-md border-b border-border/80 flex items-center justify-between shadow-xs">
        <button
          type="button"
          onClick={onOpen}
          className="inline-flex items-center gap-2 px-3 py-1.5 rounded-xl border border-primary/30 bg-primary/10 text-primary font-semibold text-xs shadow-xs hover:bg-primary/20 transition-all"
        >
          <Menu className="w-4 h-4" />
          <span>☰ Curriculum & TOC</span>
        </button>

        <span className="text-[11px] text-muted-foreground font-mono truncate max-w-[180px]">
          {curriculum.title}
        </span>
      </div>

      {/* Slide-out Drawer & Backdrop */}
      {isOpen && (
        <div className="fixed inset-0 z-50 lg:hidden flex">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/60 backdrop-blur-xs transition-opacity animate-in fade-in"
            onClick={onClose}
          />

          {/* Drawer Panel */}
          <div className="relative w-full max-w-xs bg-card border-r border-border shadow-2xl h-full flex flex-col z-10 animate-in slide-in-from-left duration-200">
            {/* Drawer Header */}
            <div className="p-4 border-b border-border flex items-center justify-between">
              <div className="flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-primary" />
                <h3 className="text-sm font-bold text-foreground">Curriculum</h3>
              </div>
              <button
                type="button"
                onClick={onClose}
                className="p-1 rounded-lg text-muted-foreground hover:text-foreground hover:bg-muted"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="px-4 py-2 bg-muted/30 border-b border-border text-[11px] text-muted-foreground">
              {curriculum.title} &bull; {curriculum.sections.length} topics
            </div>

            {/* Topics List */}
            <div className="flex-1 overflow-y-auto p-3 space-y-1">
              {curriculum.sections.map((section, idx) => (
                <CurriculumItem
                  key={section.id}
                  section={section}
                  index={idx}
                  isActive={activeId === section.id}
                  onSelect={handleSelect}
                />
              ))}
            </div>

            {/* Bottom Actions */}
            <div className="p-4 border-t border-border bg-muted/20">
              <Link
                href={compilerUrl}
                onClick={onClose}
                className="w-full inline-flex items-center justify-center gap-2 py-2.5 px-3 rounded-xl text-xs font-bold bg-primary text-primary-foreground shadow-sm"
              >
                <Play className="w-3.5 h-3.5 fill-current" />
                <span>Open {curriculum.course.name} Compiler</span>
              </Link>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

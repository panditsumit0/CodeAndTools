"use client";

import React, { useState, useEffect, useCallback, useMemo, useSyncExternalStore } from "react";
import Link from "next/link";
import { ChevronRight } from "lucide-react";
import { CurriculumConfig } from "@/lib/learn/curriculum";
import { CurriculumSidebar } from "./CurriculumSidebar";
import { CurriculumMobileDrawer } from "./CurriculumMobileDrawer";
import { BackToTop } from "@/components/ui/BackToTop";

interface LearnLayoutProps {
  curriculum: CurriculumConfig;
  children: React.ReactNode;
  getStatus?: (id: string) => import('@/lib/learn/use-topic-progress').TopicStatus;
}

const STORAGE_KEY = "devkit_learn_sidebar_open";
const sidebarListeners = new Set<() => void>();

function subscribeSidebar(callback: () => void) {
  sidebarListeners.add(callback);
  window.addEventListener("storage", callback);
  return () => {
    sidebarListeners.delete(callback);
    window.removeEventListener("storage", callback);
  };
}

function getSidebarSnapshot(): boolean {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved !== null ? saved === "true" : true;
  } catch {
    return true;
  }
}

function getSidebarServerSnapshot(): boolean {
  return true;
}

export function LearnLayout({ curriculum, children, getStatus }: LearnLayoutProps) {
  // Sync desktop sidebar open preference with localStorage via useSyncExternalStore
  const isDesktopOpen = useSyncExternalStore(
    subscribeSidebar,
    getSidebarSnapshot,
    getSidebarServerSnapshot
  );

  // Mobile drawer open state
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  // Active section tracking
  const [activeId, setActiveId] = useState<string>("introduction");

  const toggleDesktopSidebar = useCallback(() => {
    try {
      const next = !getSidebarSnapshot();
      localStorage.setItem(STORAGE_KEY, String(next));
      sidebarListeners.forEach((listener) => listener());
    } catch {
      // localStorage may fail in private mode
    }
  }, []);

  // Section IDs list
  const sectionIds = useMemo(
    () => curriculum.sections.map((s) => s.id),
    [curriculum.sections]
  );

  // IntersectionObserver for tracking active section without expensive scroll listeners
  useEffect(() => {
    if (typeof window === "undefined") return;

    const observer = new IntersectionObserver(
      (entries) => {
        // Find visible section closest to top
        for (const entry of entries) {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id);
            break;
          }
        }
      },
      {
        rootMargin: "-20% 0px -70% 0px",
        threshold: 0,
      }
    );

    const elements: HTMLElement[] = [];
    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) {
        observer.observe(el);
        elements.push(el);
      }
    });

    return () => {
      elements.forEach((el) => observer.unobserve(el));
      observer.disconnect();
    };
  }, [sectionIds]);

  const handleSelectSection = useCallback((id: string) => {
    setActiveId(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12">
      {/* 1. Breadcrumbs */}
      <nav aria-label="Breadcrumb" className="flex items-center gap-1.5 text-xs text-muted-foreground mb-6">
        <Link href="/" className="hover:text-primary transition-colors">
          Home
        </Link>
        <ChevronRight className="w-3.5 h-3.5" />
        <Link href="/learn" className="hover:text-primary transition-colors">
          Learn
        </Link>
        <ChevronRight className="w-3.5 h-3.5" />
        <span className="font-semibold text-foreground">{curriculum.course.name}</span>
      </nav>

      {/* 2. Mobile Drawer Trigger */}
      <CurriculumMobileDrawer
        curriculum={curriculum}
        isOpen={isMobileOpen}
        onOpen={() => setIsMobileOpen(true)}
        onClose={() => setIsMobileOpen(false)}
        activeId={activeId}
        onSelectSection={handleSelectSection}
      />

      {/* 3. Main Workspace with Collapsible Sidebar & Content */}
      <div className="flex gap-8 items-start relative">
        {/* Desktop Sidebar */}
        <CurriculumSidebar
          curriculum={curriculum}
          isOpen={isDesktopOpen}
          onToggle={toggleDesktopSidebar}
          activeId={activeId}
          onSelectSection={handleSelectSection}
          getStatus={getStatus}
        />

        {/* Content Area - Automatically expands when sidebar is collapsed */}
        <div className="flex-1 min-w-0 transition-all duration-300 space-y-10">
          {children}
        </div>
      </div>

      {/* Floating Back to Top Button */}
      <BackToTop />
    </div>
  );
}

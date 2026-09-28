'use client';

import React from "react";
import Link from "next/link";
import { ArrowUpRight, Sparkles, Star, GraduationCap } from "lucide-react";
import { ToolDefinition } from "@/types/tool";
import { DynamicIcon } from "@/components/icons/DynamicIcon";

interface ToolCardProps {
  tool: ToolDefinition;
  compact?: boolean;
  isFavorite?: boolean;
  onToggleFavorite?: (slug: string) => void;
  onToolClick?: (slug: string) => void;
}

export function ToolCard({
  tool,
  compact = false,
  isFavorite = false,
  onToggleFavorite,
  onToolClick,
}: ToolCardProps) {
  const categoryStyles: Record<
    string,
    { badge: string; iconBg: string; border: string; accent: string }
  > = {
    data: {
      badge: "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20",
      iconBg: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
      border: "border-zinc-200 dark:border-[#1F2937] hover:border-blue-500/40 dark:hover:border-blue-500/40",
      accent: "text-blue-500",
    },
    security: {
      badge: "bg-purple-500/10 text-purple-600 dark:text-purple-400 border-purple-500/20",
      iconBg: "bg-purple-500/10 text-purple-600 dark:text-purple-400",
      border: "border-zinc-200 dark:border-[#1F2937] hover:border-purple-500/40 dark:hover:border-purple-500/40",
      accent: "text-purple-500",
    },
    web: {
      badge: "bg-cyan-500/10 text-cyan-600 dark:text-cyan-400 border-cyan-500/20",
      iconBg: "bg-cyan-500/10 text-cyan-600 dark:text-cyan-400",
      border: "border-zinc-200 dark:border-[#1F2937] hover:border-cyan-500/40 dark:hover:border-cyan-500/40",
      accent: "text-cyan-500",
    },
    developer: {
      badge: "bg-blue-500/10 text-blue-600 dark:text-blue-400 border-blue-500/20",
      iconBg: "bg-blue-500/10 text-blue-600 dark:text-blue-400",
      border: "border-zinc-200 dark:border-[#1F2937] hover:border-blue-500/40 dark:hover:border-blue-500/40",
      accent: "text-blue-500",
    },
    text: {
      badge: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-emerald-500/20",
      iconBg: "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400",
      border: "border-zinc-200 dark:border-[#1F2937] hover:border-emerald-500/40 dark:hover:border-emerald-500/40",
      accent: "text-emerald-500",
    },
    images: {
      badge: "bg-rose-500/10 text-rose-600 dark:text-rose-400 border-rose-500/20",
      iconBg: "bg-rose-500/10 text-rose-600 dark:text-rose-400",
      border: "border-zinc-200 dark:border-[#1F2937] hover:border-rose-500/40 dark:hover:border-rose-500/40",
      accent: "text-rose-500",
    },
    documents: {
      badge: "bg-amber-500/10 text-amber-600 dark:text-amber-400 border-amber-500/20",
      iconBg: "bg-amber-500/10 text-amber-600 dark:text-amber-400",
      border: "border-zinc-200 dark:border-[#1F2937] hover:border-amber-500/40 dark:hover:border-amber-500/40",
      accent: "text-amber-500",
    },
    time: {
      badge: "bg-sky-500/10 text-sky-600 dark:text-sky-400 border-sky-500/20",
      iconBg: "bg-sky-500/10 text-sky-600 dark:text-sky-400",
      border: "border-zinc-200 dark:border-[#1F2937] hover:border-sky-500/40 dark:hover:border-sky-500/40",
      accent: "text-sky-500",
    },
    math: {
      badge: "bg-indigo-500/10 text-indigo-600 dark:text-indigo-400 border-indigo-500/20",
      iconBg: "bg-indigo-500/10 text-indigo-600 dark:text-indigo-400",
      border: "border-zinc-200 dark:border-[#1F2937] hover:border-indigo-500/40 dark:hover:border-indigo-500/40",
      accent: "text-indigo-500",
    },
    ai: {
      badge: "bg-violet-500/10 text-violet-600 dark:text-violet-400 border-violet-500/20",
      iconBg: "bg-violet-500/10 text-violet-600 dark:text-violet-400",
      border: "border-zinc-200 dark:border-[#1F2937] hover:border-violet-500/40 dark:hover:border-violet-500/40",
      accent: "text-violet-500",
    },
    utilities: {
      badge: "bg-teal-500/10 text-teal-600 dark:text-teal-400 border-teal-500/20",
      iconBg: "bg-teal-500/10 text-teal-600 dark:text-teal-400",
      border: "border-zinc-200 dark:border-[#1F2937] hover:border-teal-500/40 dark:hover:border-teal-500/40",
      accent: "text-teal-500",
    },
    converters: {
      badge: "bg-orange-500/10 text-orange-600 dark:text-[#F97316] border-orange-500/20",
      iconBg: "bg-orange-500/10 text-orange-600 dark:text-[#F97316]",
      border: "border-zinc-200 dark:border-[#1F2937] hover:border-orange-500/40 dark:hover:border-orange-500/40",
      accent: "text-[#F97316]",
    },
    compressors: {
      badge: "bg-cyan-500/10 text-cyan-600 dark:text-[#22D3EE] border-cyan-500/20",
      iconBg: "bg-cyan-500/10 text-cyan-600 dark:text-[#22D3EE]",
      border: "border-zinc-200 dark:border-[#1F2937] hover:border-cyan-500/40 dark:hover:border-cyan-500/40",
      accent: "text-[#22D3EE]",
    },
  };

  const style = categoryStyles[tool.category] || categoryStyles.developer;
  const isCompiler = tool.slug === "compiler";

  const href =
    tool.category === "converters"
      ? `/converters/${tool.slug}`
      : tool.category === "compressors"
      ? `/compressors/${tool.slug}`
      : `/tools/${tool.slug}`;

  return (
    <Link
      href={href}
      onClick={() => onToolClick?.(tool.slug)}
      className={`group relative flex flex-col justify-between rounded-2xl border backdrop-blur-sm transition-all duration-200 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-500/40 ${
        isCompiler
          ? "border-blue-500/40 dark:border-blue-500/40 bg-gradient-to-br from-blue-500/[0.05] via-white/80 to-white dark:via-[#0D1117] dark:to-[#0D1117] hover:border-cyan-400/60 shadow-xs shadow-blue-500/10"
          : `bg-white/80 dark:bg-[#0D1117] ${style.border} hover:bg-white dark:hover:bg-[#0D1117]`
      } ${compact ? "p-4" : "p-5"}`}
    >
      <div>
        <div className="flex items-center justify-between gap-3 mb-3.5">
          <div
            className={`w-10 h-10 rounded-xl flex items-center justify-center transition-transform group-hover:scale-105 duration-200 ${
              isCompiler
                ? "bg-primary text-white shadow-md shadow-blue-500/30"
                : style.iconBg
            }`}
          >
            <DynamicIcon name={tool.icon} className="w-5 h-5" />
          </div>

          <div className="flex items-center gap-1.5 flex-wrap justify-end">
            {/* Student Essential Badge */}
            {tool.studentEssential && (
              <span className="inline-flex items-center gap-1 text-[11px] font-semibold px-2 py-0.5 rounded-full bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border border-emerald-500/20" title="B.Tech Student Essential">
                <GraduationCap className="w-2.5 h-2.5" />
                Student
              </span>
            )}

            {isCompiler && (
              <span className="inline-flex items-center gap-1 text-[11px] font-bold px-2 py-0.5 rounded-full bg-blue-500/15 text-blue-700 dark:text-blue-300 border border-blue-500/30">
                <Sparkles className="w-2.5 h-2.5" />
                IDE
              </span>
            )}
            {!isCompiler && tool.popular && (
              <span className="inline-flex items-center gap-1 text-[11px] font-semibold px-2 py-0.5 rounded-full bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20">
                <Sparkles className="w-2.5 h-2.5" />
                Popular
              </span>
            )}
            <span className={`text-[11px] font-medium px-2 py-0.5 rounded-full border ${style.badge}`}>
              {tool.categoryLabel}
            </span>

            {/* Favorite / Star Button */}
            {onToggleFavorite && (
              <button
                type="button"
                aria-label={isFavorite ? "Remove from favorites" : "Add to favorites"}
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  onToggleFavorite(tool.slug);
                }}
                className={`p-1.5 rounded-lg transition-colors ml-0.5 ${
                  isFavorite
                    ? "text-amber-400 hover:text-amber-500 bg-amber-400/10"
                    : "text-zinc-400 hover:text-amber-400 hover:bg-zinc-100 dark:hover:bg-zinc-800"
                }`}
              >
                <Star
                  className={`w-3.5 h-3.5 ${isFavorite ? "fill-amber-400" : ""}`}
                />
              </button>
            )}
          </div>
        </div>

        <h3 className="text-base font-semibold text-zinc-900 dark:text-[#F8FAFC] group-hover:text-primary dark:group-hover:text-blue-400 transition-colors flex items-center gap-1">
          {tool.name}
        </h3>

        <p className="mt-1.5 text-xs sm:text-sm text-zinc-600 dark:text-[#94A3B8] line-clamp-2 leading-relaxed">
          {tool.shortDescription}
        </p>
      </div>

      <div className="mt-4 pt-3.5 border-t border-zinc-100 dark:border-[#1F2937] flex items-center justify-between text-xs font-medium text-zinc-500 dark:text-[#94A3B8] group-hover:text-primary dark:group-hover:text-blue-400 transition-colors">
        <span>Open Tool</span>
        <ArrowUpRight className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </div>
    </Link>
  );
}

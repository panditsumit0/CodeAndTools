import React from "react";
import type { Metadata } from "next";
import { TYPESCRIPT_COURSE } from "@/lib/learn/typescript";
import { CourseLayout } from "@/components/learn/CourseLayout";
import { buildMetadata, getBreadcrumbJsonLd, getCourseJsonLd } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Learn TypeScript — Type Annotations, Interfaces, Generics & Modern Web",
  description: "Complete TypeScript guide for web developers and engineering students. Learn primitive types, interface vs type alias, union/intersection types, generics, and async/await.",
  path: "/learn/typescript",
  keywords: ["learn typescript","typescript tutorial","typescript generics","typescript interface vs type","typescript web development"],
});

export default function LearnTypeScriptPage() {
  const breadcrumbSchema = getBreadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Learn", path: "/learn" },
    { name: "TypeScript Programming", path: "/learn/typescript" },
  ]);

  const courseSchema = getCourseJsonLd({
    name: "TypeScript Programming Course",
    description: "Complete TypeScript guide for web developers and engineering students. Learn primitive types, interface vs type alias, union/intersection types, generics, and async/await.",
    path: "/learn/typescript",
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([breadcrumbSchema, courseSchema]),
        }}
      />
      <CourseLayout course={TYPESCRIPT_COURSE} />
    </>
  );
}

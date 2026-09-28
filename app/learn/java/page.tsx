import React from "react";
import type { Metadata } from "next";
import { JAVA_COURSE } from "@/lib/learn/java";
import { CourseLayout } from "@/components/learn/CourseLayout";
import { buildMetadata, getBreadcrumbJsonLd, getCourseJsonLd } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Learn Java Programming — Core Java, OOP, Collections & Multithreading",
  description: "Industry-grade Core Java guide for engineering placements and semester exams. Covers JVM architecture, string pool, OOP inheritance, interfaces, Collections framework, and threads.",
  path: "/learn/java",
  keywords: ["learn java","java programming tutorial","java oop concepts","java collections framework","java multithreading","java for placements"],
});

export default function LearnJavaPage() {
  const breadcrumbSchema = getBreadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Learn", path: "/learn" },
    { name: "Java Programming", path: "/learn/java" },
  ]);

  const courseSchema = getCourseJsonLd({
    name: "Java Programming Course",
    description: "Industry-grade Core Java guide for engineering placements and semester exams. Covers JVM architecture, string pool, OOP inheritance, interfaces, Collections framework, and threads.",
    path: "/learn/java",
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([breadcrumbSchema, courseSchema]),
        }}
      />
      <CourseLayout course={JAVA_COURSE} />
    </>
  );
}

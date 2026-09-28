import React from "react";
import type { Metadata } from "next";
import { PYTHON_COURSE } from "@/lib/learn/python";
import { CourseLayout } from "@/components/learn/CourseLayout";
import { buildMetadata, getBreadcrumbJsonLd, getCourseJsonLd } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Learn Python Programming — Syntax, Data Structures, OOP & Automation",
  description: "Modern Python programming guide for engineering students, AI/ML enthusiasts, and beginners. Master data types, list comprehensions, OOP, exception handling, and generator iterators.",
  path: "/learn/python",
  keywords: ["learn python","python programming tutorial","python for engineers","python oop","python list comprehensions","python beginner guide"],
});

export default function LearnPythonPage() {
  const breadcrumbSchema = getBreadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Learn", path: "/learn" },
    { name: "Python Programming", path: "/learn/python" },
  ]);

  const courseSchema = getCourseJsonLd({
    name: "Python Programming Course",
    description: "Modern Python programming guide for engineering students, AI/ML enthusiasts, and beginners. Master data types, list comprehensions, OOP, exception handling, and generator iterators.",
    path: "/learn/python",
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([breadcrumbSchema, courseSchema]),
        }}
      />
      <CourseLayout course={PYTHON_COURSE} />
    </>
  );
}

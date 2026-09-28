import React from "react";
import type { Metadata } from "next";
import { CPP_COURSE } from "@/lib/learn/cpp";
import { CourseLayout } from "@/components/learn/CourseLayout";
import { buildMetadata, getBreadcrumbJsonLd, getCourseJsonLd } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Learn C++ Programming — OOP, RAII, Templates & STL for DSA",
  description: "Complete modern C++ tutorial for engineering students and competitive programmers. Master classes, RAII, smart pointers, templates, and the C++ STL (vector, map, set).",
  path: "/learn/cpp",
  keywords: ["learn cpp","cpp programming","c++ oop","c++ stl tutorial","cpp for dsa","cpp competitive programming"],
});

export default function LearnCppPage() {
  const breadcrumbSchema = getBreadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Learn", path: "/learn" },
    { name: "C++ Programming", path: "/learn/cpp" },
  ]);

  const courseSchema = getCourseJsonLd({
    name: "C++ Programming Course",
    description: "Complete modern C++ tutorial for engineering students and competitive programmers. Master classes, RAII, smart pointers, templates, and the C++ STL (vector, map, set).",
    path: "/learn/cpp",
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([breadcrumbSchema, courseSchema]),
        }}
      />
      <CourseLayout course={CPP_COURSE} />
    </>
  );
}

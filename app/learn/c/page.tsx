import React from "react";
import type { Metadata } from "next";
import { C_COURSE } from "@/lib/learn/c";
import { CourseLayout } from "@/components/learn/CourseLayout";
import { buildMetadata, getBreadcrumbJsonLd, getCourseJsonLd } from "@/lib/seo";

export const metadata: Metadata = buildMetadata({
  title: "Learn C Programming — Complete B.Tech Course, Syntax, Pointers & Viva Prep",
  description: "Master C programming from fundamentals to pointers, dynamic memory allocation (malloc/calloc), structures, and file handling. Includes exam notes, viva questions, and practice sets.",
  path: "/learn/c",
  keywords: ["learn c","c programming tutorial","pointers in c","c for btech","dynamic memory allocation","c viva questions"],
});

export default function LearnCPage() {
  const breadcrumbSchema = getBreadcrumbJsonLd([
    { name: "Home", path: "/" },
    { name: "Learn", path: "/learn" },
    { name: "C Programming", path: "/learn/c" },
  ]);

  const courseSchema = getCourseJsonLd({
    name: "C Programming Course",
    description: "Master C programming from fundamentals to pointers, dynamic memory allocation (malloc/calloc), structures, and file handling. Includes exam notes, viva questions, and practice sets.",
    path: "/learn/c",
  });

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([breadcrumbSchema, courseSchema]),
        }}
      />
      <CourseLayout course={C_COURSE} />
    </>
  );
}

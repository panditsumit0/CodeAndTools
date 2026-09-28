import { MetadataRoute } from "next";
import { TOOLS } from "@/lib/tools-registry";
import { COURSE_LIST } from "@/lib/learn";
import { SITE_URL } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${SITE_URL}`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 1.0,
    },
    {
      url: `${SITE_URL}/tools`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.95,
    },
    {
      url: `${SITE_URL}/tools/compiler`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.95,
    },
    {
      url: `${SITE_URL}/ai`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/converters`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/compressors`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.9,
    },
    {
      url: `${SITE_URL}/learn`,
      lastModified: new Date(),
      changeFrequency: "daily",
      priority: 0.95,
    },
    {
      url: `${SITE_URL}/categories`,
      lastModified: new Date(),
      changeFrequency: "weekly",
      priority: 0.8,
    },
    {
      url: `${SITE_URL}/about`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.7,
    },
    {
      url: `${SITE_URL}/privacy`,
      lastModified: new Date(),
      changeFrequency: "monthly",
      priority: 0.6,
    },
  ];

  // Tool detail routes
  const toolRoutes: MetadataRoute.Sitemap = TOOLS.map((tool) => ({
    url: `${SITE_URL}/tools/${tool.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: tool.popular ? 0.9 : 0.85,
  }));

  // Dedicated converter routes
  const converterTools = TOOLS.filter((t) => t.category === "converters");
  const converterRoutes: MetadataRoute.Sitemap = converterTools.map((tool) => ({
    url: `${SITE_URL}/converters/${tool.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.85,
  }));

  // Dedicated compressor routes
  const compressorTools = TOOLS.filter((t) => t.category === "compressors");
  const compressorRoutes: MetadataRoute.Sitemap = compressorTools.map((tool) => ({
    url: `${SITE_URL}/compressors/${tool.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.85,
  }));

  // Course hub routes
  const courseHubRoutes: MetadataRoute.Sitemap = COURSE_LIST.map((course) => ({
    url: `${SITE_URL}/learn/${course.slug}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  // Topic-specific detail routes
  const topicRoutes: MetadataRoute.Sitemap = [];
  for (const course of COURSE_LIST) {
    for (const topic of course.topics) {
      topicRoutes.push({
        url: `${SITE_URL}/learn/${course.slug}/${topic.id}`,
        lastModified: new Date(),
        changeFrequency: "weekly" as const,
        priority: 0.85,
      });
    }
  }

  // De-duplicate any accidental overlapping URLs
  const uniqueUrls = new Set<string>();
  const combined = [
    ...staticRoutes,
    ...toolRoutes,
    ...converterRoutes,
    ...compressorRoutes,
    ...courseHubRoutes,
    ...topicRoutes,
  ].filter((entry) => {
    if (uniqueUrls.has(entry.url)) return false;
    uniqueUrls.add(entry.url);
    return true;
  });

  return combined;
}

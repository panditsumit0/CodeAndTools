import { MetadataRoute } from 'next';
import { TOOLS } from '@/lib/tools-registry';

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://devforge.dev';

  const toolRoutes = TOOLS.map((tool) => ({
    url: `${baseUrl}/tools/${tool.slug}`,
    lastModified: new Date(),
    changeFrequency: 'weekly' as const,
    priority: tool.popular ? 0.9 : 0.8,
  }));

  const staticRoutes = [
    {
      url: `${baseUrl}`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1.0,
    },
    {
      url: `${baseUrl}/tools`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/categories`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/privacy`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.6,
    },
  ];

  const learnRoutes = [
    {
      url: `${baseUrl}/learn`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.9,
    },
    ...['c', 'cpp', 'java', 'python', 'typescript'].map((lang) => ({
      url: `${baseUrl}/learn/${lang}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.85,
    })),
  ];

  return [...staticRoutes, ...toolRoutes, ...learnRoutes];
}

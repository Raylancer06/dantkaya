import type { MetadataRoute } from "next";
import { doctors } from "@/data/doctors";
import { dentalServices } from "@/data/dental-services";
import { skinServices } from "@/data/skin-services";
import { blogPosts } from "@/data/blog";

const BASE_URL = "https://dantkaya.com";

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const staticRoutes: MetadataRoute.Sitemap = [
    {
      url: `${BASE_URL}/`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 1.0,
    },
    {
      url: `${BASE_URL}/about`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${BASE_URL}/doctors`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/dental-services`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.95,
    },
    {
      url: `${BASE_URL}/skin-aesthetics`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.95,
    },
    {
      url: `${BASE_URL}/book-appointment`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/contact`,
      lastModified: now,
      changeFrequency: "monthly",
      priority: 0.85,
    },
    {
      url: `${BASE_URL}/blog`,
      lastModified: now,
      changeFrequency: "weekly",
      priority: 0.8,
    },
  ];

  const doctorRoutes: MetadataRoute.Sitemap = doctors.map((doc) => ({
    url: `${BASE_URL}/doctors/${doc.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.85,
  }));

  const dentalRoutes: MetadataRoute.Sitemap = dentalServices.map((s) => ({
    url: `${BASE_URL}/dental-services/${s.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const skinRoutes: MetadataRoute.Sitemap = skinServices.map((s) => ({
    url: `${BASE_URL}/skin-aesthetics/${s.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  const blogRoutes: MetadataRoute.Sitemap = blogPosts.map((post) => ({
    url: `${BASE_URL}/blog/${post.slug}`,
    lastModified: new Date(post.publishedAt),
    changeFrequency: "monthly",
    priority: 0.7,
  }));

  return [
    ...staticRoutes,
    ...doctorRoutes,
    ...dentalRoutes,
    ...skinRoutes,
    ...blogRoutes,
  ];
}

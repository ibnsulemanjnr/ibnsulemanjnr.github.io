// app/sitemap.ts
import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { getAllCaseStudies } from "@/lib/caseStudies";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = site.siteUrl.replace(/\/+$/, "");

  const staticRoutes = ["/", "/case-studies", "/about", "/contact"].map(
    (p) => ({
      url: `${base}${p}`,
      lastModified: new Date(),
      changeFrequency: "weekly" as const,
      priority: p === "/" ? 1 : 0.8,
    })
  );

  const caseStudies = getAllCaseStudies().map((cs) => ({
    url: `${base}/case-studies/${cs.slug}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.7,
  }));

  return [...staticRoutes, ...caseStudies];
}

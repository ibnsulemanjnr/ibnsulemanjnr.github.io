// lib/caseStudies.ts
import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { z } from "zod";

const Dir = path.join(process.cwd(), "content/case-studies");

const FrontmatterSchema = z.object({
  title: z.string(),
  slug: z.string(),
  product: z.string(),
  role: z.string(),
  timeline: z.string().optional(),

  featured: z.boolean().default(false), // ✅ NEW

  stack: z.array(z.string()).default([]),
  tags: z.array(z.string()).default([]),
  links: z
    .object({
      live: z.string().optional(),
      demo_video: z.string().optional(),
      github: z.string().optional(),
    })
    .default({}),
  metrics: z
    .array(
      z.object({
        label: z.string(),
        value: z.string(),
      })
    )
    .default([]),
  cover: z
    .object({
      image: z.string().optional(),
      alt: z.string().optional(),
    })
    .optional(),
});

export type CaseStudyFrontmatter = z.infer<typeof FrontmatterSchema>;

export type CaseStudy = {
  frontmatter: CaseStudyFrontmatter;
  content: string;
};

export function getAllCaseStudies(): CaseStudyFrontmatter[] {
  if (!fs.existsSync(Dir)) return [];
  const files = fs.readdirSync(Dir).filter((f) => f.endsWith(".mdx"));

  return files
    .map((file) => {
      const raw = fs.readFileSync(path.join(Dir, file), "utf8");
      const { data } = matter(raw);
      return FrontmatterSchema.parse(data);
    })
    .sort((a, b) => {
      // ✅ featured first, then title
      if (a.featured !== b.featured) return a.featured ? -1 : 1;
      return a.title.localeCompare(b.title);
    });
}

export function getCaseStudyBySlug(slug: string): CaseStudy {
  const fp = path.join(Dir, `${slug}.mdx`);
  const raw = fs.readFileSync(fp, "utf8");
  const { data, content } = matter(raw);

  return { frontmatter: FrontmatterSchema.parse(data), content };
}

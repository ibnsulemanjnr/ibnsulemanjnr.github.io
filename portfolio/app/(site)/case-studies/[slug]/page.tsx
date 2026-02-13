// app/(site)/case-studies/[slug]/page.tsx
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import Mdx from "@/components/mdx/Mdx";
import { getAllCaseStudies, getCaseStudyBySlug } from "@/lib/caseStudies";

type MaybePromise<T> = T | Promise<T>;

async function unwrapParams(
  params: MaybePromise<{ slug: string }>
): Promise<{ slug: string }> {
  return await Promise.resolve(params);
}

export async function generateStaticParams() {
  const all = getAllCaseStudies();
  return all.map((cs) => ({ slug: cs.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: MaybePromise<{ slug: string }>;
}): Promise<Metadata> {
  try {
    const { slug } = await unwrapParams(params);
    const { frontmatter } = getCaseStudyBySlug(slug);

    // ✅ Static-export friendly: use cover image if available, else fallback to /og.png
    const ogImage = frontmatter.cover?.image ?? "/og.png";

    return {
      title: frontmatter.product,
      description: frontmatter.title,
      openGraph: {
        title: frontmatter.product,
        description: frontmatter.title,
        type: "article",
        images: [
          {
            url: ogImage,
            width: 1200,
            height: 630,
            alt: `${frontmatter.product} OG`,
          },
        ],
      },
      twitter: {
        card: "summary_large_image",
        title: frontmatter.product,
        description: frontmatter.title,
        images: [ogImage],
      },
    };
  } catch {
    return { title: "Case Study" };
  }
}

export default async function CaseStudyDetailPage({
  params,
}: {
  params: MaybePromise<{ slug: string }>;
}) {
  const { slug } = await unwrapParams(params);

  let data;
  try {
    data = getCaseStudyBySlug(slug);
  } catch {
    notFound();
  }

  const { frontmatter, content } = data;

  return (
    <div className="container-px py-12 md:py-16">
      <div className="mb-6">
        <Link
          href="/case-studies"
          className="muted text-sm hover:text-foreground"
        >
          ← Back to Case Studies
        </Link>
      </div>

      <header className="card p-6 md:p-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
          <div className="max-w-3xl">
            <h1 className="text-2xl font-semibold tracking-tight md:text-4xl">
              {frontmatter.product}
            </h1>
            <p className="mt-3 muted">{frontmatter.title}</p>

            <div className="mt-5 flex flex-wrap gap-2">
              {frontmatter.tags?.map((t) => (
                <span
                  key={t}
                  className="rounded-full bg-[rgb(var(--muted))] px-3 py-1 text-xs"
                >
                  {t}
                </span>
              ))}
            </div>

            <div className="mt-6 grid gap-3 text-sm md:grid-cols-2">
              <div>
                <p className="muted">Role</p>
                <p className="mt-1">{frontmatter.role}</p>
              </div>

              {frontmatter.timeline ? (
                <div>
                  <p className="muted">Timeline</p>
                  <p className="mt-1">{frontmatter.timeline}</p>
                </div>
              ) : null}
            </div>

            {frontmatter.links ? (
              <div className="mt-6 flex flex-wrap gap-3">
                {frontmatter.links.live ? (
                  <a
                    href={frontmatter.links.live}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center rounded-xl bg-foreground px-4 py-2 text-sm font-medium text-background"
                  >
                    Live
                  </a>
                ) : null}

                {frontmatter.links.demo_video ? (
                  <a
                    href={frontmatter.links.demo_video}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center rounded-xl border border-[rgb(var(--border))] px-4 py-2 text-sm font-medium"
                  >
                    Demo Video
                  </a>
                ) : null}

                {frontmatter.links.github ? (
                  <span className="inline-flex items-center justify-center rounded-xl border border-[rgb(var(--border))] px-4 py-2 text-sm font-medium muted">
                    GitHub: {frontmatter.links.github}
                  </span>
                ) : null}
              </div>
            ) : null}
          </div>

          {frontmatter.cover?.image ? (
            <div className="w-full md:w-[360px]">
              <div className="overflow-hidden rounded-2xl border border-[rgb(var(--border))]">
                <Image
                  src={frontmatter.cover.image}
                  alt={frontmatter.cover.alt ?? `${frontmatter.product} cover`}
                  width={900}
                  height={600}
                  className="h-auto w-full object-cover"
                  sizes="(max-width: 768px) 100vw, 360px"
                  priority
                />
              </div>
            </div>
          ) : null}
        </div>

        {frontmatter.stack?.length ? (
          <div className="mt-8 border-t border-[rgb(var(--border))] pt-6">
            <p className="text-sm muted">Stack</p>
            <div className="mt-3 flex flex-wrap gap-2">
              {frontmatter.stack.map((s) => (
                <span
                  key={s}
                  className="rounded-full border border-[rgb(var(--border))] px-3 py-1 text-xs muted"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        ) : null}

        {frontmatter.metrics?.length ? (
          <div className="mt-8 grid gap-3 border-t border-[rgb(var(--border))] pt-6 md:grid-cols-3">
            {frontmatter.metrics.map((m) => (
              <div
                key={`${m.label}-${m.value}`}
                className="rounded-2xl border border-[rgb(var(--border))] p-4"
              >
                <p className="text-xs muted">{m.label}</p>
                <p className="mt-1 text-sm font-medium">{m.value}</p>
              </div>
            ))}
          </div>
        ) : null}
      </header>

      <article className="mt-8 card p-6 md:p-10">
        <Mdx source={content} />
      </article>
    </div>
  );
}

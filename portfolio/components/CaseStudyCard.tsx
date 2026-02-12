// components/CaseStudyCard.tsx
import Link from "next/link";
import type { CaseStudyFrontmatter } from "@/lib/caseStudies";

export default function CaseStudyCard({
  cs,
  className = "md:col-span-6",
}: {
  cs: CaseStudyFrontmatter;
  className?: string;
}) {
  return (
    <Link href={`/case-studies/${cs.slug}`} className={className}>
      <div className="card h-full p-6 transition hover:-translate-y-0.5 hover:shadow-md">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-lg font-semibold">{cs.product}</h3>
            <p className="mt-1 text-sm muted">{cs.title}</p>
          </div>
          <span className="rounded-full border border-[rgb(var(--border))] px-3 py-1 text-xs muted">
            Case Study
          </span>
        </div>

        <p className="mt-4 text-sm">{cs.role}</p>

        {cs.tags?.length ? (
          <div className="mt-5 flex flex-wrap gap-2">
            {cs.tags.slice(0, 5).map((t) => (
              <span
                key={t}
                className="rounded-full bg-[rgb(var(--muted))] px-3 py-1 text-xs"
              >
                {t}
              </span>
            ))}
          </div>
        ) : null}
      </div>
    </Link>
  );
}

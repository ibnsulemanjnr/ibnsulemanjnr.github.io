// app/(site)/case-studies/page.tsx
import BentoGrid from "@/components/BentoGrid";
import CaseStudyCard from "@/components/CaseStudyCard";
import { getAllCaseStudies } from "@/lib/caseStudies";

export const metadata = {
  title: "Case Studies",
  description: "Proof-first work: products, security, and automation.",
};

export default function CaseStudiesIndexPage() {
  const all = getAllCaseStudies();

  return (
    <div className="container-px py-12 md:py-16">
      <div className="mb-8">
        <h1 className="text-2xl font-semibold tracking-tight md:text-4xl">
          Case Studies
        </h1>
        <p className="mt-3 muted">
          Products and projects with evidence: screenshots, metrics, and clear
          ownership.
        </p>
      </div>

      <BentoGrid title="All Case Studies" subtitle="Click any card to read details.">
        {all.length ? (
          all.map((cs) => (
            <CaseStudyCard key={cs.slug} cs={cs} className="md:col-span-6" />
          ))
        ) : (
          <div className="card md:col-span-12 p-6">
            <p className="muted">
              No case studies found yet. Add MDX files in{" "}
              <code className="rounded bg-[rgb(var(--muted))] px-2 py-1 text-xs">
                content/case-studies
              </code>
              .
            </p>
          </div>
        )}
      </BentoGrid>
    </div>
  );
}

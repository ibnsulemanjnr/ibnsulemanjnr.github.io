// app/(site)/page.tsx
import HeroToggle from "@/components/HeroToggle";
import ProofStrip from "@/components/ProofStrip";
import BentoGrid from "@/components/BentoGrid";
import CaseStudyCard from "@/components/CaseStudyCard";
import VideoEmbed from "@/components/VideoEmbed";
import { getAllCaseStudies } from "@/lib/caseStudies";
import { site } from "@/lib/site";

export default function HomePage() {
  const all = getAllCaseStudies();

  const featured = all.filter((cs) => cs.featured);
  const picked = (featured.length ? featured : all).slice(0, 3);

  return (
    <div>
      <HeroToggle />
      <ProofStrip />

      <BentoGrid
        title="Featured Case Studies"
        subtitle="Proof-first work: products, security, and automation."
      >
        {picked.length ? (
          picked.map((cs, idx) => (
            <CaseStudyCard
              key={cs.slug}
              cs={cs}
              className={idx === 0 ? "md:col-span-12" : "md:col-span-6"}
            />
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

      <section id="video" className="container-px pb-14">
        <div className="card p-6 md:p-10">
          <div className="mb-6">
            <h2 className="text-xl font-semibold tracking-tight md:text-2xl">
              2-Minute Demo
            </h2>
            <p className="mt-2 muted">
              Quick walkthrough of CodingForte, iExams relaunch, and automation
              work.
            </p>
          </div>

          {site.demoVideoUrl ? (
            <VideoEmbed url={site.demoVideoUrl} />
          ) : (
            <div className="rounded-2xl border border-dashed border-[rgb(var(--border))] p-6 muted">
              Add a YouTube/Loom link via{" "}
              <code className="rounded bg-[rgb(var(--muted))] px-2 py-1 text-xs">
                NEXT_PUBLIC_DEMO_VIDEO_URL
              </code>
              .
            </div>
          )}
        </div>
      </section>
    </div>
  );
}

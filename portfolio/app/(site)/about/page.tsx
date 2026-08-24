// app/(site)/about/page.tsx
import Link from "next/link";
import Image from "next/image";
import { site } from "@/lib/site";

export const metadata = {
  title: "About",
  description: "Founder story, focus areas, and how I work.",
};

export default function AboutPage() {
  return (
    <div className="container-px py-12 md:py-16">
      <header className="mb-10">
        <h1 className="text-2xl font-semibold tracking-tight md:text-4xl">
          About
        </h1>
        <p className="mt-3 muted max-w-2xl">
          Founder/CEO of IBNSULEMAN TECH LTD and a secure product engineer
          focused on backend delivery (Django), application security, and
          DevOps.
        </p>
      </header>

      <section className="grid gap-4 md:grid-cols-12">
        {/* Profile card (photo) */}
        <aside className="card p-6 md:col-span-4 md:p-10">
          <div className="overflow-hidden rounded-2xl border border-[rgb(var(--border))]">
            <Image
              src="/profile/dp.jpeg"
              alt="Abubakar Sadiq Suleman"
              width={900}
              height={900}
              className="h-auto w-full object-cover"
              priority
            />
          </div>

          <div className="mt-5">
            <p className="text-sm font-medium">{site.name}</p>
            <p className="mt-1 text-sm muted">Founder/CEO, IBNSULEMAN TECH LTD • Secure Product Engineer</p>
          </div>

          <div className="mt-6 grid gap-3 text-sm">
            <a
              className="rounded-2xl border border-[rgb(var(--border))] p-4 muted hover:text-foreground"
              href={site.socials.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              LinkedIn →
            </a>
            <a
              className="rounded-2xl border border-[rgb(var(--border))] p-4 muted hover:text-foreground"
              href={site.socials.github}
              target="_blank"
              rel="noreferrer"
            >
              GitHub →
            </a>
            {site.companyUrl ? (
              <a
                className="rounded-2xl border border-[rgb(var(--border))] p-4 muted hover:text-foreground"
                href={site.companyUrl}
                target="_blank"
                rel="noreferrer"
              >
                IBNSULEMAN TECH LTD →
              </a>
            ) : null}
          </div>

          <div className="mt-8 rounded-2xl border border-[rgb(var(--border))] p-5">
            <p className="text-sm font-medium">Current focus</p>
            <p className="mt-2 text-sm muted">
              Growing CodingForte and iExam, and building Gaskiya—a civic
              accountability platform launching Q4 2026.
            </p>
          </div>
        </aside>

        {/* Main content */}
        <div className="card p-6 md:col-span-8 md:p-10">
          <h2 className="text-xl font-semibold tracking-tight md:text-2xl">
            What I do
          </h2>
          <p className="mt-3 muted">
            I build and ship secure web platforms end-to-end—designing backend
            APIs, enforcing security controls, and running production
            deployments. I also lead teams to deliver predictable, measurable
            outcomes.
          </p>

          <div className="mt-8 grid gap-4 md:grid-cols-2">
            <div className="rounded-2xl border border-[rgb(var(--border))] p-5">
              <p className="text-sm font-medium">Backend Engineering</p>
              <p className="mt-2 text-sm muted">
                Django/DRF, data modeling, API design, background jobs, and
                production-grade integrations.
              </p>
            </div>

            <div className="rounded-2xl border border-[rgb(var(--border))] p-5">
              <p className="text-sm font-medium">Application Security</p>
              <p className="mt-2 text-sm muted">
                Secure defaults, threat-aware development, and practical testing
                for real web apps.
              </p>
            </div>

            <div className="rounded-2xl border border-[rgb(var(--border))] p-5">
              <p className="text-sm font-medium">DevOps & Hosting Ops</p>
              <p className="mt-2 text-sm muted">
                Deployments, environment hardening, reliability checks, and
                cost-aware infrastructure decisions.
              </p>
            </div>

            <div className="rounded-2xl border border-[rgb(var(--border))] p-5">
              <p className="text-sm font-medium">Automation Pipelines</p>
              <p className="mt-2 text-sm muted">
                Python scripts that convert messy sources into structured
                datasets (e.g., maps + social content pipelines).
              </p>
            </div>
          </div>

          <div className="mt-10 rounded-2xl border border-[rgb(var(--border))] p-6">
            <h3 className="text-lg font-semibold">How I work</h3>
            <ul className="mt-4 list-disc space-y-2 pl-6 text-sm">
              <li>
                Proof-first: every project has evidence (screenshots, metrics,
                demo).
              </li>
              <li>
                Security is not an afterthought: safe defaults + review gates.
              </li>
              <li>
                Ship small, ship often: predictable delivery beats big-bang
                releases.
              </li>
              <li>Clear ownership: what I did, what the team did, what changed.</li>
            </ul>
          </div>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/case-studies"
              className="inline-flex items-center justify-center rounded-xl bg-foreground px-4 py-2 text-sm font-medium text-background"
            >
              View Case Studies
            </Link>

            <Link
              href={site.demoVideoUrl ? "/#video" : "/contact"}
              className="inline-flex items-center justify-center rounded-xl border border-[rgb(var(--border))] px-4 py-2 text-sm font-medium"
            >
              {site.demoVideoUrl ? "Watch 2-min Demo" : "Contact Me"}
            </Link>

            {site.companyUrl ? (
              <a
                href={site.companyUrl}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-xl border border-[rgb(var(--border))] px-4 py-2 text-sm font-medium muted hover:text-foreground"
              >
                IBNSULEMAN TECH LTD →
              </a>
            ) : null}
          </div>
        </div>
      </section>
    </div>
  );
}

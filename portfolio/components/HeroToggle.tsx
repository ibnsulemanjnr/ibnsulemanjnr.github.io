// components/HeroToggle.tsx
"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import { site } from "@/lib/site";

type Mode = "founder" | "engineer";

const STORAGE_KEY = "portfolio_mode_v1";

export default function HeroToggle() {
  const [mode, setMode] = useState<Mode>("founder");

  useEffect(() => {
    const saved = window.localStorage.getItem(STORAGE_KEY) as Mode | null;
    if (saved === "founder" || saved === "engineer") setMode(saved);
  }, []);

  const copy = useMemo(() => {
    if (mode === "engineer") {
      return {
        pill: "Engineer Mode",
        headline: "Secure Product Engineer",
        sub:
          "Backend (Django), application security, and DevOps—built for reliability, safety, and real-world scale.",
        primaryCta: { label: "View Case Studies", href: "/case-studies" },
        secondaryCta: site.demoVideoUrl
          ? { label: "Watch 2-min Demo", href: "#video" }
          : { label: "Contact Me", href: "/contact" },
      };
    }

    return {
      pill: "Founder Mode",
      headline: site.headline,
      sub: site.subheadline,
      primaryCta: { label: "View Case Studies", href: "/case-studies" },
      secondaryCta: site.demoVideoUrl
        ? { label: "Watch 2-min Demo", href: "#video" }
        : { label: "Contact Me", href: "/contact" },
    };
  }, [mode]);

  function setAndPersist(next: Mode) {
    setMode(next);
    window.localStorage.setItem(STORAGE_KEY, next);
  }

  return (
    <section className="container-px py-14 md:py-20">
      <div className="card p-6 md:p-10">
        <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full border border-[rgb(var(--border))] px-3 py-1 text-xs muted">
              <span className="h-2 w-2 rounded-full bg-foreground/70" />
              {copy.pill}
            </div>

            <h1 className="mt-4 text-3xl font-semibold tracking-tight md:text-5xl">
              {copy.headline}
            </h1>

            <p className="mt-4 text-base muted md:text-lg">{copy.sub}</p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Link
                href={copy.primaryCta.href}
                className="inline-flex items-center justify-center rounded-xl bg-foreground px-4 py-2 text-sm font-medium text-background"
              >
                {copy.primaryCta.label}
              </Link>

              <Link
                href={copy.secondaryCta.href}
                className="inline-flex items-center justify-center rounded-xl border border-[rgb(var(--border))] px-4 py-2 text-sm font-medium"
              >
                {copy.secondaryCta.label}
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

          <div className="flex items-center gap-2 rounded-2xl border border-[rgb(var(--border))] p-1">
            <button
              onClick={() => setAndPersist("founder")}
              className={[
                "rounded-xl px-3 py-2 text-sm font-medium transition",
                mode === "founder"
                  ? "bg-foreground text-background"
                  : "muted hover:text-foreground",
              ].join(" ")}
            >
              Founder
            </button>
            <button
              onClick={() => setAndPersist("engineer")}
              className={[
                "rounded-xl px-3 py-2 text-sm font-medium transition",
                mode === "engineer"
                  ? "bg-foreground text-background"
                  : "muted hover:text-foreground",
              ].join(" ")}
            >
              Engineer
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

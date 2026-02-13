// components/SiteNav.tsx
"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { site } from "@/lib/site";
import ThemeToggle from "@/components/ThemeToggle";

const nav = [
  { href: "/", label: "Home" },
  { href: "/case-studies", label: "Case Studies" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function SiteNav() {
  const pathname = usePathname();

  return (
    <header className="sticky top-0 z-50 border-b border-[rgb(var(--border))] bg-[rgb(var(--background))]/80 backdrop-blur">
      <div className="container-px flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-3 font-semibold tracking-tight">
          <Image
            src="/brand/Background_pics.png"
            alt="CodingForte"
            width={350}
            height={150}
            className="rounded"
            priority
          />
          <span className="hidden sm:inline">{site.name}</span>
        </Link>

        <nav className="hidden items-center gap-6 md:flex">
          {nav.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={[
                  "text-sm transition-colors",
                  active ? "text-foreground" : "muted hover:text-foreground",
                ].join(" ")}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="flex items-center gap-3">
          {/* ✅ Dark mode toggle */}
          <ThemeToggle />

          {site.companyUrl ? (
            <a
              href={site.companyUrl}
              className="hidden rounded-xl border border-[rgb(var(--border))] px-3 py-1.5 text-sm muted hover:text-foreground md:inline-flex"
              target="_blank"
              rel="noreferrer"
            >
              IBNSULEMAN TECH LTD →
            </a>
          ) : null}

          <a
            href={site.socials.github}
            className="rounded-xl border border-[rgb(var(--border))] px-3 py-1.5 text-sm muted hover:text-foreground"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
        </div>
      </div>
    </header>
  );
}

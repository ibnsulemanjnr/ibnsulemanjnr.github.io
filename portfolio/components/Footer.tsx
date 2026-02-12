// components/Footer.tsx
import { site } from "@/lib/site";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[rgb(var(--border))]">
      <div className="container-px flex flex-col gap-3 py-10 md:flex-row md:items-center md:justify-between">
        <p className="text-sm muted">
          © {year} {site.name}. All rights reserved.
        </p>

        <div className="flex flex-wrap gap-4 text-sm">
          <a
            className="muted hover:text-foreground"
            href={site.socials.linkedin}
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <a
            className="muted hover:text-foreground"
            href={site.socials.github}
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <a
            className="muted hover:text-foreground"
            href={site.socials.x}
            target="_blank"
            rel="noreferrer"
          >
            X
          </a>
        </div>
      </div>
    </footer>
  );
}

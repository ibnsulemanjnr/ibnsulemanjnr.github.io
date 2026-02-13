// app/(site)/contact/page.tsx
import { site } from "@/lib/site";

export const metadata = {
  title: "Contact",
  description: "Reach out for secure product engineering, AppSec, DevOps, or automation.",
};

const FORMSPREE_ENDPOINT =
  process.env.NEXT_PUBLIC_FORMSPREE_ENDPOINT ??
  "https://formspree.io/f/xdkndnoo"; // your previous endpoint (safe default)

export default function ContactPage() {
  return (
    <div className="container-px py-12 md:py-16">
      <header className="mb-10">
        <h1 className="text-2xl font-semibold tracking-tight md:text-4xl">
          Contact
        </h1>
        <p className="mt-3 muted max-w-2xl">
          Best for: secure product delivery (Django), application security reviews,
          DevOps/hosting ops, and automation pipelines.
        </p>
      </header>

      <section className="grid gap-4 md:grid-cols-12">
        <div className="card p-6 md:col-span-7 md:p-10">
          <h2 className="text-xl font-semibold tracking-tight md:text-2xl">
            Send a message
          </h2>
        

          <form
            action={FORMSPREE_ENDPOINT}
            method="POST"
            className="mt-6 grid gap-4"
          >
            <input type="hidden" name="_subject" value="Portfolio Contact" />

            <div className="grid gap-2">
              <label htmlFor="name" className="text-sm font-medium">
                Name
              </label>
              <input
                id="name"
                name="name"
                required
                className="rounded-xl border border-[rgb(var(--border))] bg-[rgb(var(--background))] px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-foreground/20"
                placeholder="Your name"
              />
            </div>

            <div className="grid gap-2">
              <label htmlFor="email" className="text-sm font-medium">
                Email
              </label>
              <input
                id="email"
                name="_replyto"
                type="email"
                required
                className="rounded-xl border border-[rgb(var(--border))] bg-[rgb(var(--background))] px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-foreground/20"
                placeholder="you@example.com"
              />
            </div>

            <div className="grid gap-2">
              <label htmlFor="message" className="text-sm font-medium">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={6}
                required
                className="rounded-xl border border-[rgb(var(--border))] bg-[rgb(var(--background))] px-3 py-2 text-sm outline-none focus:ring-2 focus:ring-foreground/20"
                placeholder="Tell me what you’re building, the goal, and your timeline."
              />
            </div>

            <button
              type="submit"
              className="inline-flex items-center justify-center rounded-xl bg-foreground px-4 py-2 text-sm font-medium text-background"
            >
              Send Message
            </button>

            <p className="text-xs muted">
              Please don’t include passwords, private keys, or confidential client data.
            </p>
          </form>
        </div>

        <aside className="card p-6 md:col-span-5 md:p-10">
          <h3 className="text-lg font-semibold">Direct links</h3>

          <div className="mt-5 grid gap-3 text-sm">
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

            <a
              className="rounded-2xl border border-[rgb(var(--border))] p-4 muted hover:text-foreground"
              href={site.socials.x}
              target="_blank"
              rel="noreferrer"
            >
              X →
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
            <p className="text-sm font-medium">Fastest way to evaluate fit</p>
            <ul className="mt-3 list-disc space-y-2 pl-6 text-sm muted">
              <li>What product/system is this?</li>
              <li>What’s the target outcome?</li>
              <li>Any timeline constraint?</li>
              <li>Links/screenshots you can share?</li>
            </ul>
          </div>
        </aside>
      </section>
    </div>
  );
}

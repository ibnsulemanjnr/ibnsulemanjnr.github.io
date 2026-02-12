// components/ProofStrip.tsx
export default function ProofStrip() {
  const items = [
    "Founder: CodingForte",
    "Backend: Django/DRF",
    "AppSec + secure delivery",
    "DevOps + hosting ops",
    "Automation: Python pipelines",
  ];

  return (
    <section className="container-px pb-8">
      <div className="flex flex-wrap gap-2">
        {items.map((t) => (
          <span
            key={t}
            className="rounded-full border border-[rgb(var(--border))] px-3 py-1 text-xs muted"
          >
            {t}
          </span>
        ))}
      </div>
    </section>
  );
}

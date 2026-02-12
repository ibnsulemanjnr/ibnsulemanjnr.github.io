// components/BentoGrid.tsx
import type { ReactNode } from "react";

export default function BentoGrid({
  title,
  subtitle,
  children,
}: {
  title: string;
  subtitle?: string;
  children: ReactNode;
}) {
  return (
    <section className="container-px py-10">
      <div className="mb-6">
        <h2 className="text-xl font-semibold tracking-tight md:text-2xl">
          {title}
        </h2>
        {subtitle ? <p className="mt-2 muted">{subtitle}</p> : null}
      </div>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-12">{children}</div>
    </section>
  );
}

// components/ThemeToggle.tsx
"use client";

import { useEffect, useState } from "react";
import { useTheme } from "next-themes";

export default function ThemeToggle() {
  const { theme, setTheme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // The resolved theme (esp. system preference) isn't known during SSR,
    // so the label is withheld until after mount to avoid a hydration
    // mismatch — this is next-themes' own recommended pattern.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  const current = theme === "system" ? systemTheme : theme;

  function toggle() {
    setTheme(current === "dark" ? "light" : "dark");
  }

  return (
    <button
      onClick={toggle}
      className="rounded-xl border border-[rgb(var(--border))] px-3 py-1.5 text-sm muted hover:text-foreground"
      aria-label="Toggle dark mode"
      type="button"
    >
      {mounted ? (current === "dark" ? "Light" : "Dark") : null}
    </button>
  );
}

// components/ThemeToggle.tsx
"use client";

import { useTheme } from "next-themes";

export default function ThemeToggle() {
  const { theme, setTheme, systemTheme } = useTheme();

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
      {current === "dark" ? "Light" : "Dark"}
    </button>
  );
}

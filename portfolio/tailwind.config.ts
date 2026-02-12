// tailwind.config.ts
import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"], // ✅ NEW
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./content/**/*.{md,mdx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: { extend: {} },
  plugins: [],
} satisfies Config;

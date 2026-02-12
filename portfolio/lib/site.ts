// lib/site.ts
export const site = {
  name: "Abubakar Sadiq Suleman",
  headline: "Founder of CodingForte • Secure Product Engineer",
  subheadline:
    "I build and ship secure web platforms end-to-end—backend (Django), application security, and DevOps—turning ideas into reliable products.",
  siteUrl: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  companyUrl: process.env.NEXT_PUBLIC_COMPANY_URL ?? "",

  socials: {
    github: "https://github.com/ibnsulemanjnr",
    linkedin: "https://www.linkedin.com/in/abubakar-sadiq-suleman-bbb81795/",
    x: "https://x.com/sulemanabubakar",
  },

  // Put your Loom/YouTube here later (or keep empty for now)
  demoVideoUrl: process.env.NEXT_PUBLIC_DEMO_VIDEO_URL ?? "",
} as const;

// app/layout.tsx
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../styles/globals.css";
import ThemeProvider from "@/components/ThemeProvider";
import { site } from "@/lib/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: `${site.name} — Portfolio`,
    template: `%s — ${site.name}`,
  },
  description: site.subheadline,
  metadataBase: new URL(site.siteUrl),

  openGraph: {
    title: `${site.name} — Portfolio`,
    description: site.subheadline,
    url: site.siteUrl,
    siteName: site.name,
    type: "website",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Portfolio OpenGraph image",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: `${site.name} — Portfolio`,
    description: site.subheadline,
    images: ["/og.png"],
  },

  manifest: "/site.webmanifest",
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  url: site.siteUrl,
  jobTitle: "Founder/CEO",
  sameAs: [site.socials.linkedin, site.socials.github, site.socials.x].filter(
    Boolean
  ),
  worksFor: {
    "@type": "Organization",
    name: "IBNSULEMAN TECH LTD",
    url: site.companyUrl || undefined,
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body className="min-h-dvh bg-background text-foreground antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}

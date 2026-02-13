// app/layout.tsx
import type { Metadata } from "next";
import "../styles/globals.css";
import ThemeProvider from "@/components/ThemeProvider";
import { site } from "@/lib/site";

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
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="min-h-dvh bg-background text-foreground antialiased">
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}

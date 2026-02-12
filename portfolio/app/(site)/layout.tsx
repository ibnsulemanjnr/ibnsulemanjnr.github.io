// app/(site)/layout.tsx
import SiteNav from "@/components/SiteNav";
import Footer from "@/components/Footer";

export default function SiteLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <div className="flex min-h-dvh flex-col bg-background text-foreground">
      <SiteNav />
      <main className="flex-1">
        {/* consistent vertical rhythm */}
        <div className="py-2">{children}</div>
      </main>
      <Footer />
    </div>
  );
}

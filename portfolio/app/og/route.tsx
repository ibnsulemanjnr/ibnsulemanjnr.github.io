// app/og/route.tsx
import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const runtime = "edge";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const title = searchParams.get("title") ?? site.name;
  const subtitle = searchParams.get("subtitle") ?? site.headline;

  return new ImageResponse(
    (
      <div
        style={{
          width: "1200px",
          height: "630px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "64px",
          background: "white",
          color: "#111827",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
          <div
            style={{
              fontSize: 20,
              opacity: 0.7,
            }}
          >
            {site.name}
          </div>

          <div
            style={{
              fontSize: 64,
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: -1,
            }}
          >
            {title}
          </div>

          <div style={{ fontSize: 26, opacity: 0.75, maxWidth: 980 }}>
            {subtitle}
          </div>
        </div>

        <div
          style={{
            display: "flex",
            gap: "12px",
            alignItems: "center",
            fontSize: 18,
            opacity: 0.75,
          }}
        >
          <div
            style={{
              width: 10,
              height: 10,
              borderRadius: 999,
              background: "#111827",
              opacity: 0.65,
            }}
          />
          <div>Founder of CodingForte • Secure Product Engineer</div>
        </div>
      </div>
    ),
    { width: 1200, height: 630 }
  );
}

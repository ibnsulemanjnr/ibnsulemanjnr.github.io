// components/VideoEmbed.tsx
"use client";

import React from "react";

function toEmbed(url: string) {
  try {
    const u = new URL(url);

    if (u.hostname.includes("youtube.com") || u.hostname.includes("youtu.be")) {
      const id =
        u.hostname.includes("youtu.be")
          ? u.pathname.replace("/", "")
          : u.searchParams.get("v") ?? "";
      return id ? `https://www.youtube.com/embed/${id}` : null;
    }

    if (u.hostname.includes("loom.com")) {
      const parts = u.pathname.split("/").filter(Boolean);
      const shareIdx = parts.indexOf("share");
      const id = shareIdx >= 0 ? parts[shareIdx + 1] : null;
      return id ? `https://www.loom.com/embed/${id}` : null;
    }

    return null;
  } catch {
    return null;
  }
}

export default function VideoEmbed({
  url,
  title = "Demo video",
}: {
  url: string;
  title?: string;
}) {
  const src = toEmbed(url);
  if (!src) return null;

  return (
    <div className="w-full overflow-hidden rounded-2xl border border-[rgb(var(--border))] bg-[rgb(var(--background))] shadow-sm">
      <div className="aspect-video">
        <iframe
          className="h-full w-full"
          src={src}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; fullscreen"
        />
      </div>
    </div>
  );
}

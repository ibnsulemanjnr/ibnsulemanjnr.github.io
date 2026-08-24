// components/Gallery.tsx
import Image from "next/image";

export type GalleryItem = {
  src: string; // must be in /public (e.g. /case-studies/...)
  alt: string;
};

export default function Gallery({
  items,
  columns = 2,
}: {
  items: GalleryItem[];
  columns?: 2 | 3;
}) {
  const grid =
    columns === 3 ? "md:grid-cols-3" : "md:grid-cols-2";

  return (
    <div className={`mt-6 grid grid-cols-1 gap-4 ${grid}`}>
      {items.map((it) => (
        <figure
          key={it.src}
          className="overflow-hidden rounded-2xl border border-[rgb(var(--border))] bg-[rgb(var(--background))]"
        >
          <div className="relative aspect-[16/10] w-full">
            <Image
              src={it.src}
              alt={it.alt}
              fill
              className="object-contain"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <figcaption className="p-3 text-xs muted">{it.alt}</figcaption>
        </figure>
      ))}
    </div>
  );
}

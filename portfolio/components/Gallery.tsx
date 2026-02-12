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
          <Image
            src={it.src}
            alt={it.alt}
            width={1400}
            height={900}
            className="h-auto w-full object-cover"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
          <figcaption className="p-3 text-xs muted">{it.alt}</figcaption>
        </figure>
      ))}
    </div>
  );
}

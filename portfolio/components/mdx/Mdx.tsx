// components/mdx/Mdx.tsx
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { MDXRemote } from "next-mdx-remote/rsc";
import Gallery from "@/components/Gallery";

const mdxComponents = {
  a: (props: React.AnchorHTMLAttributes<HTMLAnchorElement>) => {
    const href = props.href ?? "";
    const isExternal =
      href.startsWith("http://") ||
      href.startsWith("https://") ||
      href.startsWith("mailto:");

    const className = [
      "underline underline-offset-4",
      "decoration-[rgb(var(--border))] hover:decoration-foreground",
      props.className ?? "",
    ]
      .join(" ")
      .trim();

    if (isExternal) {
      return (
        <a
          {...props}
          className={className}
          target="_blank"
          rel="noreferrer"
        />
      );
    }

    return (
      <Link href={href} className={className}>
        {props.children}
      </Link>
    );
  },

  // ✅ Allow MDX to render optimized images if you use <img ... />
  img: (props: React.ImgHTMLAttributes<HTMLImageElement>) => {
    const src = typeof props.src === "string" ? props.src : "";
    const alt = props.alt ?? "";

    // If no src, fall back
    if (!src) return null;

    // If the image is external, we keep it as <img> (no Next config required)
    const isExternal = src.startsWith("http://") || src.startsWith("https://");
    if (isExternal) {
      // eslint-disable-next-line @next/next/no-img-element
      return (
        <img
          {...props}
          className={[
            "mt-6 rounded-2xl border border-[rgb(var(--border))]",
            props.className ?? "",
          ].join(" ")}
          alt={alt}
        />
      );
    }

    // Local images under /public
    return (
      <figure className="mt-6">
        <div className="overflow-hidden rounded-2xl border border-[rgb(var(--border))]">
          <Image
            src={src}
            alt={alt}
            width={1400}
            height={900}
            className="h-auto w-full object-cover"
            sizes="(max-width: 768px) 100vw, 900px"
          />
        </div>
        {alt ? <figcaption className="mt-2 text-xs muted">{alt}</figcaption> : null}
      </figure>
    );
  },

  h2: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h2
      {...props}
      className="mt-10 scroll-mt-24 text-xl font-semibold tracking-tight md:text-2xl"
    />
  ),

  h3: (props: React.HTMLAttributes<HTMLHeadingElement>) => (
    <h3 {...props} className="mt-8 scroll-mt-24 text-lg font-semibold" />
  ),

  p: (props: React.HTMLAttributes<HTMLParagraphElement>) => (
    <p {...props} className="mt-4 leading-7 text-sm md:text-base" />
  ),

  ul: (props: React.HTMLAttributes<HTMLUListElement>) => (
    <ul
      {...props}
      className="mt-4 list-disc space-y-2 pl-6 text-sm md:text-base"
    />
  ),

  ol: (props: React.HTMLAttributes<HTMLOListElement>) => (
    <ol
      {...props}
      className="mt-4 list-decimal space-y-2 pl-6 text-sm md:text-base"
    />
  ),

  blockquote: (props: React.HTMLAttributes<HTMLQuoteElement>) => (
    <blockquote
      {...props}
      className="mt-6 border-l-2 border-[rgb(var(--border))] pl-4 italic muted"
    />
  ),

  code: (props: React.HTMLAttributes<HTMLElement>) => (
    <code
      {...props}
      className="rounded bg-[rgb(var(--muted))] px-1.5 py-0.5 text-xs md:text-sm"
    />
  ),

  pre: (props: React.HTMLAttributes<HTMLPreElement>) => (
    <pre
      {...props}
      className="mt-6 overflow-x-auto rounded-2xl border border-[rgb(var(--border))] bg-[rgb(var(--muted))] p-4 text-xs md:text-sm"
    />
  ),

  hr: () => <hr className="my-10 border-[rgb(var(--border))]" />,

  // ✅ Register custom MDX component
  Gallery,
};

export default function Mdx({ source }: { source: string }) {
  return (
    <div className="prose max-w-none">
      <MDXRemote source={source} components={mdxComponents} />
    </div>
  );
}

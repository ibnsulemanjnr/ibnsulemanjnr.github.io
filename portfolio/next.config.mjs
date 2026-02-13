/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: { unoptimized: true }, // required for GitHub Pages + next export
  trailingSlash: true, // ensures /about/ resolves on Pages
};

export default nextConfig;

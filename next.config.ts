import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // Static HTML export — required for GitHub Pages (no server runtime).
  output: 'export',
  // GitHub Pages can't run Next's image optimizer, so serve images as-is.
  images: { unoptimized: true },
  // Emit folder-style URLs (/about/ -> /about/index.html) for static hosting.
  trailingSlash: true,
}

export default nextConfig

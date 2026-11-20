import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  // Static HTML export — required for GitHub Pages (no server runtime).
  output: 'export',
  // GitHub Pages can't run Next's image optimizer, so serve images as-is.
  images: { unoptimized: true },
  // Emit folder-style URLs (/about/ -> /about/index.html) for static hosting.
  trailingSlash: true,
  // Dev only: let other devices on the local network (e.g. a phone testing via
  // this Mac's IP) load the dev server's JavaScript. Ignored in production builds.
  allowedDevOrigins: ['192.168.1.3'],
}

export default nextConfig

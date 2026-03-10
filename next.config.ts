import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  reactCompiler: true,
  images: {
    formats: ['image/avif', 'image/webp'],
    remotePatterns: [{ hostname: 'images.unsplash.com' }],
  },
  experimental: {
    optimizePackageImports: ['lucide-react'],
  },
}

export default nextConfig

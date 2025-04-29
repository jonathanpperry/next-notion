/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true, // Enable /app directory (Next 13/14 App Router)
    serverActions: true, // Enable Server Actions (optional, but common in 14)
  },
  images: {
    domains: ["files.edgestore.dev"],
  },
  reactStrictMode: true,
  typescript: {
    ignoreBuildErrors: false, // Usually keep 'false', only use 'true' if needed
  },
  eslint: {
    ignoreDuringBuilds: false, // 'true' if you want builds to pass with eslint errors
  },
};

module.exports = nextConfig;

/** @type {import('next').NextConfig} */

const nextConfig = {
  basePath: '/website',
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true
  },
}

module.exports = nextConfig

/** @type {import('next').NextConfig} */

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['page.tsx'],
  basePath: basePath,
  images: {
    path: `${basePath}/_next/image`,
  },
};

module.exports = nextConfig;

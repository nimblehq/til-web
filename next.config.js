/** @type {import('next').NextConfig} */

const basePath = '/til';

const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['page.tsx'],
  basePath: basePath,
  images: {
    path: `${basePath}/_next/image`,
  },
};

module.exports = nextConfig;

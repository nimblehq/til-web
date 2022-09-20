/** @type {import('next').NextConfig} */

const path = require('path');

const basePath = process.env.NEXT_PUBLIC_BASE_PATH || '';

const nextConfig = {
  reactStrictMode: true,
  pageExtensions: ['page.tsx', 'api.ts'],
  basePath: basePath,
  images: {
    path: `${basePath}/_next/image`,
    domains: ['github.com'],
  },
  async redirects() {
    return [
      {
        source: '/',
        destination: basePath,
        basePath: false,
        permanent: true,
      },
    ];
  },
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
  },
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            icon: true,
          },
        },
      ],
    });

    return config;
  },
};

module.exports = nextConfig;

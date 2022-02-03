/**
 * @type {import('next').NextConfig}
 */

const nextConfig = {
  reactStrictMode: true,
  // To access env in client side
  env: {
    API_ENDPOINT: process.env.API_ENDPOINT,
  },
  // Warning: This allows production builds to successfully complete even if
  // your project has ESLint errors.
  typescript: {
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

module.exports = nextConfig;

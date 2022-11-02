/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: { images: { allowFutureImage: true } },
  output: 'standalone',
  env: {
    SUPERSET_HOST: process.env.SUPERSET_HOST,
    SUPERSET_DOMAIN: process.env.SUPERSET_DOMAIN,
    SUPERSET_USERNAME: process.env.SUPERSET_USERNAME,
    SUPERSET_PASSWORD: process.env.SUPERSET_PASSWORD,
    SUPERSET_DASHBOARD_ID: process.env.SUPERSET_DASHBOARD_ID,
  },
}

module.exports = nextConfig

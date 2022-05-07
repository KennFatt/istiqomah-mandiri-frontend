const withPlugins = require("next-compose-plugins");
const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  swcMinify: true,
  images: {
    domains: ["picsum.photos"],
  },
  compiler: {
    removeConsole: true,
  },
};

module.exports = withPlugins([withBundleAnalyzer], nextConfig);

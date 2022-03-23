/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  ignoreDuringBuilds: true,
  env: {
    baseUrl: "https://ihd.yyventures.org/api",
    baseUrlForImages: "https://ihd.yyventures.org",
  },
};

module.exports = nextConfig;

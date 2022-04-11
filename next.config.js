/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  ignoreDuringBuilds: true,
  env: {
    baseUrl: "https://ihd.yyventures.org/api",
    baseUrlForImages: "https://ihd.yyventures.org",
  },
  optimizeFonts: false,
  trailingSlash: true,
  async redirects() {
    return [
      {
        source: '/about',
        destination: '/about/global-locations',
        permanent: true,
      },
    ]
  },
};

module.exports = nextConfig;

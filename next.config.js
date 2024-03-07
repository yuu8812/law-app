const withBundleAnalyzer = require("@next/bundle-analyzer")({
  enabled: process.env.ANALYZE === "true",
});
/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "*.googleusercontent.com",
        port: "",
        pathname: "**",
      },
      { protocol: "https", hostname: "storage.googleapis.com", port: "", pathname: "**" },
      { protocol: "https", hostname: "picsum.photos", port: "", pathname: "**" },
    ],
  },
  output: "standalone",
};

module.exports = nextConfig;
module.exports = withBundleAnalyzer(nextConfig);

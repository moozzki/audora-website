import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.sanity.io",
      },
      {
        protocol: "https",
        hostname: "cdn.useaudora.com",
      },
      {
        protocol: "https",
        hostname: "api.dicebear.com", // 👈 Dicebear Avatar
      },
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com", // 👈 Jaga-jaga kalo login pake Google
      },
      {
        protocol: "https",
        hostname: "avatars.githubusercontent.com", // 👈 Jaga-jaga kalo login pake GitHub
      },
    ],
  },
  async rewrites() {
    return [
      {
        source: "/ingest/static/:path*",
        destination: "https://us-assets.i.posthog.com/static/:path*",
      },
      {
        source: "/ingest/:path*",
        destination: "https://us.i.posthog.com/:path*",
      },
      {
        source: "/ingest/decide",
        destination: "https://us.i.posthog.com/decide",
      },
      {
        source: "/api/auth/:path*",
        destination: "http://localhost:3000/api/auth/:path*",
      },
    ];
  },
  skipTrailingSlashRedirect: true,
};

export default nextConfig;
import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { hostname: "fastly.picsum.photos" },
      { hostname: "backendlessappcontent.com" },
    ],
  },
};

export default nextConfig;

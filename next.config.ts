import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },

  allowedDevOrigins: [
    "sphadke-dev.virts.dev2.redlab.datadirectnet.com",
  ],
};

export default nextConfig;

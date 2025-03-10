import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "placehold.co",
        port: "",
        pathname: "**",
        search: "",
      },
    ],
  },
  /* config options here */
};

export default nextConfig;

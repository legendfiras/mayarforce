import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "aselkonarms.com",
        pathname: "/wp-content/uploads/**",
      },
      {
        protocol: "https",
        hostname: "radikalarms.com",
        pathname: "/wp-content/uploads/**",
      },
    ],
  },
};

export default nextConfig;

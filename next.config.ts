import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'tractorguru.in',
        pathname: '/**',
      },
    ],
  },
  /* config options here */
  output: "standalone"
};

export default nextConfig;

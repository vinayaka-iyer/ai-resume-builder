import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    serverActions: {
      bodySizeLimit: "4mb",
    },
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "unv3zza1r3laveuc.public.blob.vercel-storage.com",
      },
    ],
  },
};

export default nextConfig;

import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    ignoreDuringBuilds: true,
  },

  // TODO: for docker image. otherwise comment this
  // output: "standalone",

  images: {
    remotePatterns: [
      {
        protocol: "https", // Specify the protocol
        hostname: "images.pexels.com", // Correct hostname
        port: "", // Leave empty unless a specific port is needed
        pathname: "/**", // Use `/` followed by `**` to allow all subpaths
      },
    ],
  },
};

export default nextConfig;

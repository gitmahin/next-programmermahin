import type { NextConfig } from "next";
import createMDX from "@next/mdx"

const withMDX = createMDX({}) 
const nextConfig: NextConfig = {
    pageExtensions: ["ts", "tsx", "mdx"],
  /* config options here */
  eslint: {
    ignoreDuringBuilds: true,
  },

  experimental: {
    mdxRs: true,
  }
  // TODO: for docker image. otherwise comment this
  // output: "standalone",
};

// ✨ Add the type explicitly here
const config: NextConfig = withMDX(nextConfig);
export default config;

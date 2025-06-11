import type { NextConfig } from "next";
import createMDX from "@next/mdx"

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

const withMDX = createMDX({}) 

export default withMDX(nextConfig);

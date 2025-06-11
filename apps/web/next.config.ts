import type { NextConfig } from "next";
import createMDX from "@next/mdx"

const nextConfig: NextConfig = {
  pageExtensions: ["ts", "tsx", "mdx"],
  /* config options here */
  eslint: {
    ignoreDuringBuilds: true,
  },

  serverExternalPackages: ["@shikijs/twoslash"],
  // TODO: for docker image. otherwise comment this
  // output: "standalone",

  experimental: {
    mdxRs: true,
  },
};

const withMDX = createMDX({})

export default withMDX(nextConfig);
      
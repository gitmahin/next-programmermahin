import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  eslint: {
    ignoreDuringBuilds: true,
  },

  serverExternalPackages: ["@shikijs/twoslash"],
  // TODO: for docker image. otherwise comment this
  // output: "standalone",
}; 
 
export default nextConfig;  
         
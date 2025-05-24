import createMDX from "@next/mdx";
import rehypePrettyCode from "rehype-pretty-code";
import {
  transformerNotationHighlight,
  transformerNotationDiff,
  transformerNotationErrorLevel,
  transformerNotationWordHighlight,
  transformerNotationFocus
} from "@shikijs/transformers";
import { transformerCopyButton } from "@rehype-pretty/transformers";

/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  pageExtensions: ["ts", "tsx", "js", "jsx", "mdx"],
};

const withMDX = createMDX({
  // Add markdown plugins here, as desired
  extension: /\.mdx$/, // Only allow .mdx
  remarkPlugins: [],
  rehypePlugins: [
    [
      rehypePrettyCode,
      {
        theme: "material-theme-ocean",
        output: "mdx",
        transformers: [
          transformerNotationDiff(),
          transformerNotationHighlight(),
          transformerNotationErrorLevel(),
          transformerNotationWordHighlight(),
          transformerNotationFocus(),
          transformerCopyButton({
            visibility: "always",
            feedbackDuration: 3_000,
          }),
        ],
      },
    ],
  ],
});

// Merge MDX config with Next.js config
export default withMDX(nextConfig);
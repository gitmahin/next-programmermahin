import { compileMDX } from "next-mdx-remote/rsc";
import rehypePrettyCode from "rehype-pretty-code";
import {
  transformerNotationHighlight,
  transformerNotationDiff,
  transformerNotationErrorLevel,
  transformerNotationWordHighlight,
  transformerNotationFocus,
} from "@shikijs/transformers";
import { transformerCopyButton } from "@rehype-pretty/transformers";
import rehypeSlug from "rehype-slug";
import { ComponentPropsWithoutRef } from "react";
import Link from "next/link";

type AnchorProps = ComponentPropsWithoutRef<"a">;

export const mdxToHtml = async (content: string) => {
  const { content: MdxComponent } = await compileMDX({
    source: content,
    options: {
      mdxOptions: {
        rehypePlugins: [
          rehypeSlug,
          [
            rehypePrettyCode,
            {
              theme: "material-theme-ocean",
              transformers: [
                transformerNotationDiff(),
                transformerNotationHighlight(),
                transformerNotationErrorLevel(),
                transformerNotationWordHighlight(),
                transformerNotationFocus(),
                // transformerCopyButton({
                //   visibility: "always",
                //   feedbackDuration: 3_000,
                // }),
              ],
            },
          ],
        ],
      },
    },
  
  });

  return MdxComponent;
};

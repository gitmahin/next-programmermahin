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
import React, { ComponentPropsWithoutRef } from "react";
import Link from "next/link";
import type { BundledLanguage } from "shiki";

type AnchorProps = ComponentPropsWithoutRef<"a">;
type PreTagProps = ComponentPropsWithoutRef<"pre">;

const iconMap: Record<BundledLanguage, string> = {
  
};


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
              theme: {
                dark: "material-theme-ocean",
                light: "github-light-high-contrast"
              },
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
    components: {
      a: ({ href, children, ...props }: AnchorProps) => {
        const className =
          "text-blue-500 hover:text-blue-700 underline underline-offset-2 transition-colors";
        if (href?.startsWith("/")) {
          return (
            <Link href={href} className={className} {...props}>
              {children}
            </Link>
          );
        }
        return (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={className}
            {...props}
          >
            {children}
          </a>
        );
      },
      pre: ({ children, ...props }: PreTagProps) => {
          const codeElement = React.Children.only(children) as React.ReactElement;
  const language = codeElement?.props?.['data-language'] ?? 'text';
        return <div className="border h-full w-full p-1.5 my-[1.71429em] rounded-[15px] bg-background-color_925C border-border-color_800C" >
          <div className="h-[20px] w-full ">
            <span>{language}</span>
          </div>
          <pre {...props} className="my-0 rounded-[10px] !bg-background-color_900C next-mdx-remote-codeblock">{children}</pre>
        </div>
      }
      
    }
  });

  return MdxComponent;
};

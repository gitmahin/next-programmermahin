import { compileMDX } from "next-mdx-remote/rsc";
import rehypePrettyCode from "rehype-pretty-code";
import {
  transformerNotationHighlight,
  transformerNotationDiff,
  transformerNotationErrorLevel,
  transformerNotationWordHighlight,
  transformerNotationFocus,
} from "@shikijs/transformers";
import rehypeSlug from "rehype-slug";
import React, { ComponentPropsWithoutRef, SVGProps } from "react";
import Link from "next/link";
import Image from "next/image";
import { CopyCodeButton } from "../components/code";
import {
  GetIconByLanguage,
} from "@programmer/ui";
import { FileType } from "@programmer/types";

type AnchorProps = ComponentPropsWithoutRef<"a">;
type PreTagProps = ComponentPropsWithoutRef<"pre">;

type CodeElementProps = {
  children?: React.ReactNode;
  className?: string;
  ["data-language"]?: string;
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
                dark: "github-dark-high-contrast",
                light: "github-light-high-contrast",
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
        const codeElement = React.Children.only(
          children
        ) as React.ReactElement<CodeElementProps>;
        const language = codeElement?.props?.["data-language"] ?? "bash";
        const Icon =
          GetIconByLanguage[language as FileType] ?? GetIconByLanguage["text"];
        return (
          <div className="border h-full w-full p-1 pt-0 my-[1.71429em] rounded-[15px] bg-background-color_925C border-border-color_800C next-mdx-remote-codeblock">
            <div className="h-[35px] w-full flex justify-center items-center gap-3 px-2 py-0.5">
              <div className="w-full flex justify-start items-center gap-5">
                <div className="w-full flex justify-start items-center gap-1.5 ">
                  <Icon width={16} height={16} />
                  <span className="text-text-color_2 text-read_3 font-medium">
                    {language}
                  </span>
                </div>
              </div>
              <CopyCodeButton />
            </div>
            <pre
              {...props}
              className="my-0 rounded-[10px] shadow dark:bg-background-color_900C bg-background-color_950C border-border-color_800C border"
            >
              {children}
            </pre>
          </div>
        );
      },
    },
  });

  return MdxComponent;
};

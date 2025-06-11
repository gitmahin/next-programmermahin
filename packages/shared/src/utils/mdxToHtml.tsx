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
import React, { ComponentPropsWithoutRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { CopyCodeButton, PopupCodeBlock } from "../components/code";

type AnchorProps = ComponentPropsWithoutRef<"a">;
type PreTagProps = ComponentPropsWithoutRef<"pre">;

type CodeElementProps = {
  children?: React.ReactNode;
  className?: string;
  ["data-language"]?: string;
};

type CodeLanguages =
  | "js"
  | "ts"
  | "tsx"
  | "jsx"
  | "html"
  | "css"
  | "json"
  | "bash"
  | "nginx"
  | "docker"
  | "git"
  | "cpp"
  | "c"
  | "md"
  | "mdx"
  | "text";

const iconMap: Record<CodeLanguages, string> = {
  js: "/code/js.svg",
  ts: "/code/ts.svg",
  tsx: "/code/tsx.svg",
  jsx: "/code/jsx.svg",
  html: "/code/html.svg",
  css: "/code/css.svg",
  json: "/code/json.svg",
  bash: "/code/powershell.svg",
  nginx: "/code/nginx.svg",
  docker: "/code/docker.svg",
  git: "/code/git.svg",
  cpp: "/code/cpp.svg",
  c: "/code/c.svg",
  md: "/code/md.svg",
  mdx: "/code/mdx.svg",
  text: "/code/text.svg",
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
        const icon = iconMap[language as CodeLanguages] ?? iconMap["text"];
        return (
          <PopupCodeBlock>
            <div className="border h-full w-full p-1.5  rounded-[15px] bg-background-color_925C border-border-color_800C next-mdx-remote-codeblock">
              <div className="h-[35px] w-full flex justify-center items-center gap-3 px-2 pb-1.5 ">
                <div className="w-full flex justify-end items-center gap-1.5 ">
                  <Image
                    src={`${icon}`}
                    alt={language}
                    width={100}
                    height={100}
                    className="w-[18px] h-[18px]"
                  />
                  <span className="text-text-color_2 text-read_3 font-medium">
                    {language}
                  </span>
                </div>
                <CopyCodeButton />
              </div>
              <div className="overflow-y-auto h-[calc(100%-35px)] w-full hide-scrollbar rounded-[10px] ">
                <pre {...props} className="my-0 rounded-[10px] !h-full shadow ">
                  {children}
                </pre>
              </div>
            </div>
          </PopupCodeBlock>
        );
      },
    },
  });

  return MdxComponent;
};

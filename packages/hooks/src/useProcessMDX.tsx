import { useCallback, useEffect, useState } from "react";
import rehypeFormat from "rehype-format";
import rehypeStringify from "rehype-stringify";
import remarkParse from "remark-parse";
import remarkRehype from "remark-rehype";
import { unified } from "unified";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";
import matter from "gray-matter";
import rehypeShiki from "@shikijs/rehype";
import {
  transformerNotationHighlight,
  transformerNotationDiff,
  transformerNotationErrorLevel,
  transformerNotationWordHighlight,
  transformerNotationFocus,
} from "@shikijs/transformers";
import { visit } from "unist-util-visit";
import slugify from "slugify";
import rehypePrettyCode from 'rehype-pretty-code';
import { transformerCopyButton } from '@rehype-pretty/transformers';

function rehypeSlugify() {
  return (tree: any) => {
    visit(tree, "element", (node) => {
      if (["h1", "h2", "h3", "h4", "h5", "h6"].includes(node.tagName)) {
        const text =
          node.children
            ?.filter((n: any) => n.type === "text")
            ?.map((n: any) => n.value)
            ?.join(" ") ?? "";

        const id = slugify(text, {
          lower: true,
          strict: true,
          trim: false,
        });

        node.properties = {
          ...node.properties,
          id,
        };
      }
    });
  };
}

export const useProcessMDX = (data: string) => {
  const [content, setContent] = useState("");

  const { data: metaData, content: mdxContent } = matter(data);

  const processContent = useCallback(async () => {
    const processedData = await unified()
      .use(remarkParse)
      .use(remarkGfm)
      .use(remarkRehype)
      .use(rehypeFormat)
      .use(rehypeStringify)
      .use(rehypeSlugify) // Generates IDs automatically
      .use(rehypePrettyCode, {
        theme: "material-theme-ocean",
        transformers: [
          transformerNotationDiff(),
          transformerNotationHighlight(),
          transformerNotationErrorLevel(),
          transformerNotationWordHighlight(),
          transformerNotationFocus(),
          transformerCopyButton({
            visibility: 'always',
            feedbackDuration: 3_000
          }),
        ],
      })
      .process(mdxContent);

    const htmlContent = processedData.toString();
    setContent(htmlContent);
  }, [data]);

  useEffect(() => {
    processContent();
  }, [processContent]);

  return {
    content,
    metaData,
  };
};

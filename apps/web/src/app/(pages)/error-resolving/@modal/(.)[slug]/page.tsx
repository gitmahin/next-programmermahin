import matter from "gray-matter";
import { mdxToHtml } from "@programmer/shared";
import fs from "fs/promises";
import { PopoverDialog } from "./popoverDialog";

export default async function InterceptedSingleErrorResolvePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  const mdxContent = await fs.readFile(
    "src/app/(pages)/error-resolving/demo.mdx",
    "utf-8"
  );

  const { content } = matter(mdxContent);
  const parsedContent = mdxToHtml(content);

  return (
    <>
      <PopoverDialog>
        <article className="prose prose-gray dark:prose-invert">
          {parsedContent}
        </article>
      </PopoverDialog>
    </>
  );
}

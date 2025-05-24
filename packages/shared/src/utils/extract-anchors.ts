import { unified } from "unified";
import remarkParse from "remark-parse";
import GithubSlugger from "github-slugger";
import { toc as generateToc } from "mdast-util-toc";

export type TocItem = {
  content: string;
  slug: string;
  level: number;
};

function extractTocItems(tree: any): TocItem[] {
  const slugger = new GithubSlugger();
  const result = generateToc(tree);

  const tocItems: TocItem[] = [];

  function walk(node: any, level: number) {
    if (node.type === "list") {
      node.children.forEach((item: any) => {
        const textNode = item.children?.[0]?.children?.[0]?.children?.[0];
        const text = textNode?.value || "";
        if (text && level > 1) {
            const slug = slugger.slug(text);
            tocItems.push({ content: text, slug, level });
          }
        const nestedList = item.children?.find((n: any) => n.type === "list");
        if (nestedList) {
          walk(nestedList, level + 1);
        }
      });
    }
  }

  if (result.map) {
    walk(result.map, 1);
  }

  return tocItems;
}

export const extractAnchors = (mdxContent: string) => {
    const tree = unified().use(remarkParse).parse(mdxContent);
    return extractTocItems(tree)
}

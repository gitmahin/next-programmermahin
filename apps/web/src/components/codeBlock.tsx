import type { BundledLanguage } from "shiki";
import { codeToHtml } from "shiki";

interface Props {
  children: string;
  lang: BundledLanguage;
  className?: string;
}

export async function CodeBlock(props: Props) {
  const out = await codeToHtml(props.children, {
    lang: props.lang,
    theme: "andromeeda",
  });

  return (
    <div
      className={`${props.className} codeblock`}
      dangerouslySetInnerHTML={{ __html: out }}
    />
  );
}

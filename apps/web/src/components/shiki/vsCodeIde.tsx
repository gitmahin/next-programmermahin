import type { BundledLanguage } from "shiki";
import { codeToHtml } from "shiki";
import { transformerTwoslash } from "@shikijs/twoslash";

interface Props {
  children: string;
  lang: BundledLanguage;
  className?: string;
}

export async function VsCodeIDECodeBlock(props: Props) {
  const out = await codeToHtml(props.children, {
    lang: props.lang,
    themes: {
      light: "github-light-high-contrast",
      dark: "github-dark-high-contrast",
    },
    transformers: [transformerTwoslash()],
  });

  return (
    <div
      className={`${props.className} vscodeblock`}
      dangerouslySetInnerHTML={{ __html: out }}
    />
  );
}

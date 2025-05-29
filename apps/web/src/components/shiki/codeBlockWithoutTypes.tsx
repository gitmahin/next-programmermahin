import type { BundledLanguage } from "shiki";
import { codeToHtml } from "shiki";
import {
  transformerNotationHighlight,
  transformerNotationDiff,
  transformerNotationErrorLevel,
  transformerNotationWordHighlight,
  transformerNotationFocus,
} from "@shikijs/transformers";

interface Props {
  children: string;
  lang: BundledLanguage;
  className?: string;
}

export async function CodeBlockWithoutTypes(props: Props) {
  const out = await codeToHtml(props.children, {
    lang: props.lang,
    themes: {
      light: "github-light-high-contrast",
      dark: "github-dark-high-contrast",
    },
    transformers: [
      transformerNotationDiff(),
      transformerNotationHighlight(),
      transformerNotationErrorLevel(),
      transformerNotationWordHighlight(),
      transformerNotationFocus(),
    ],
  });

  return (
    <div
      className={`${props.className} codeblockwithouttypes h-full`}
      dangerouslySetInnerHTML={{ __html: out }}
    />
  );
}

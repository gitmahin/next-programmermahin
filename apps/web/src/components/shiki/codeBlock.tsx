import type { BundledLanguage } from "shiki";
import { codeToHtml } from "shiki";
// import { transformerTwoslash, rendererRich } from "@shikijs/twoslash";

interface Props {
  children: string;
  lang: BundledLanguage;
  className?: string;
}

export async function CodeBlock(props: Props) {
  const out = await codeToHtml(props.children, {
    lang: props.lang,
    themes: {
      light: "github-light-high-contrast",
      dark: "github-dark-high-contrast",
    },
    // transformers: [transformerTwoslash({
    //   renderer: rendererRich()
    // })],
  });

  return (
    <div
      className={`${props.className} codeblock `}
      dangerouslySetInnerHTML={{ __html: out }}
    />
  );
}

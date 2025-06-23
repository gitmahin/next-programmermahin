import { CodeLanguages } from "@programmer/types"
import { SVGProps } from "react";
import { Bash, C, Cpp, CSS, Docker, Git, HTML5, JavaScript, JSON, Markdown, MdxIcon, Nginx, ReactJSX, ReactTsx, Text, TypeScript } from "../icons/code";
export const GetIconByLanguage: Record<
  CodeLanguages,
  React.ComponentType<SVGProps<SVGSVGElement>>
> = {
  js: JavaScript,
  ts: TypeScript,
  tsx: ReactTsx,
  jsx: ReactJSX,
  html: HTML5,
  css: CSS,
  json: JSON,
  bash: Bash,
  nginx: Nginx,
  docker: Docker,
  git: Git,
  cpp: Cpp,
  c: C,
  md: Markdown,
  mdx: MdxIcon,
  text: Text,
};
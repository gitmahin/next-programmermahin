import { FileType } from "@programmer/types";
import { SVGProps } from "react";
import {
  Bash,
  C,
  Cpp,
  CSS,
  Docker,
  Git,
  HTML5,
  JavaScript,
  JSON,
  Markdown,
  MdxIcon,
  Nginx,
  Npm,
  PowerShell,
  Prettier,
  ReactJSX,
  ReactTsx,
  Text,
  Turbo,
  TypeScript,
} from "../icons/code";
export const GetIconByLanguage: Record<
  FileType,
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
  npm: Npm,
  turbo: Turbo,
  prettier: Prettier,
  terminal: PowerShell
};

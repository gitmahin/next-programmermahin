export interface AnchorsType {
  level: number;
  text: string;
  anchor: string;
}


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

  type SVGTsxIconType = React.ComponentType<SVGProps<SVGAElement>>;
export interface AnchorsType {
  level: number;
  text: string;
  anchor: string;
}


export type FileType =
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
  | "text"
  | "npm"
  | "turbo"
  | "prettier"

  export type SVGTsxIconType = React.ComponentType<SVGProps<SVGAElement>>;
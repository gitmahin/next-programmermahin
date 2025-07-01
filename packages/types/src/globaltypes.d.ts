import { SVGProps } from "react";
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
  | "prettier";

export type SVGTsxIconType = React.ComponentType<SVGProps<SVGAElement>>;

export interface TutorialDirChildNavItemType {
  icon?: React.ComponentType<SVGProps<SVGSVGElement>> | undefined;
  slug: string;
  items: GeneralNavItemType[];
}

export interface TutorialChildNavItemType extends GeneralNavItemType {
  dirItems?: {
    [key: string]: TutorialDirChildNavItemType;
  };
}

export interface TutorialNavItemType {
  [key: string]: {
    icon?: React.ComponentType<SVGProps<SVGSVGElement>> | undefined;
    slug: string;
    items: TutorialChildNavItemType[];
  };
}

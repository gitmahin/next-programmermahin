import { SVGProps } from "react";
import { GeneralNavItemType } from "./navitem";
export interface AnchorsType {
  level: number;
  text: string;
  anchor: string;
}
import { React } from "react";

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
  | "terminal"

export type SVGTsxIconType = React.ComponentType<SVGProps<SVGAElement>>;

export interface TutorialNavCoreItemsType {
  icon?: string;
  slug: string;
  items: GeneralNavItemType[];
}

interface TutorialDiritemType {
  dirItems?: {
    [key: string]: TutorialNavCoreItemsType;
  };
}

export interface TutorialChildNavItemType
  extends GeneralNavItemType,
    TutorialDiritemType {
  group?: {
    [key: string]: Omit<TutorialNavCoreItemsType, 'items' | 'slug'> & {
    items?: GeneralNavItemType[];
    slug?: string
  } & TutorialDiritemType;
  };
}

export interface TutorialNavItemType {
  [key: string]: {
    icon?: string;
    slug: string;
    items: TutorialChildNavItemType[];
  };
}

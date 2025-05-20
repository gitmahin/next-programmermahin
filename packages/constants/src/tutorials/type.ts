import { GeneralNavItemType } from "@programmer/types";

export interface TutorialDirChildNavItemType {
  icon?: React.ReactNode;
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
    icon?: React.ReactNode;
    slug: string;
    items: TutorialChildNavItemType[];
  };
}

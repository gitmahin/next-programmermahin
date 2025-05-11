import { GeneralNavItemType } from "@programmer/types";

export interface TutorialNavItemType {
  [key: string]: {
    icon?: React.ReactNode;
    slug: string;
    items: GeneralNavItemType[];
  };
}

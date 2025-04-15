import { GeneralNavItemType } from "@programmer/types";
import { ICON_DEFAULT_COLOR, LUCIDE_DEFAULT_ICON_SIZE } from "@programmer/ui";
import { GraduationCap, HomeIcon } from "lucide-react";

export const MAIN_NAV_LINKS: GeneralNavItemType[] = [
  {
    label: "Home",
    slug: "/",
    icon: (
      <HomeIcon size={LUCIDE_DEFAULT_ICON_SIZE} />
    ),
  },
  {
    label: "Courses",
    slug: "courses",
    icon: (
      <GraduationCap
        size={LUCIDE_DEFAULT_ICON_SIZE}
      />
    ),
  },
];


export enum TutorialEnums  {
  GIT = "git",
  REACT = "react",
  DEVOPS = "devops",
  NEXTJS = "nextjs",
  CPP = "cpp"
}

interface TutorialIconMetaDataType {
  svgPath: string;
  name: string;
}

type TutorialIconsType = {
  [key in TutorialEnums]: TutorialIconMetaDataType
}

export const TUTORIALS_ICON: TutorialIconsType = {
  cpp: {
    svgPath: "/icons/cpp.svg",
    name: "C++"
  },
  git:{
    svgPath: "/icons/git.svg",
    name: "Git"
  },
  react: {
    svgPath: "/icons/react.svg",
    name: "React"
  },
  devops: {
    svgPath: "/icons/devops.svg",
    name: "Devops"
  },
  nextjs: {
    svgPath: "/next.svg",
    name: "Nextjs"
  }
  
}



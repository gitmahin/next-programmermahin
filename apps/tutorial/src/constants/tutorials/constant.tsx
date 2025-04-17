import { GeneralNavItemType } from "@programmer/types";
import {  LUCIDE_DEFAULT_ICON_SIZE } from "@programmer/ui";
import { HomeIcon } from "lucide-react";
import { DEVOPS_TUTORIALS } from "./devops";
import { TutorialNavItemType } from "./type";
import { REACT_TUTORIALS } from "./react";
import { GIT_TUTORIALS } from "./git";
import { CPP_TUTORIALS } from "./cpp";
import { NEXTJS_TUTORIALS } from "./nextjs";
import { MONOREPO_TUTORIALS } from "./monorepo";

export const MAIN_NAV_LINKS: GeneralNavItemType[] = [
  {
    label: "Home",
    slug: "/",
    icon: <HomeIcon size={LUCIDE_DEFAULT_ICON_SIZE} />,
  },
];

export enum TutorialEnums {
  GIT = "git",
  REACT = "react",
  DEVOPS = "devops",
  NEXTJS = "nextjs",
  CPP = "cpp",
  MONOREPO = "monorepo",
}

interface TutorialIconMetaDataType {
  svgPath: string;
  name: string;
}

type TutorialIconsType = {
  [key in TutorialEnums]: TutorialIconMetaDataType;
};

export const TUTORIALS_ICON: TutorialIconsType = {
  cpp: {
    svgPath: "/icons/cpp.svg",
    name: "C++",
  },
  git: {
    svgPath: "/icons/git.svg",
    name: "Git",
  },
  react: {
    svgPath: "/icons/react.svg",
    name: "React",
  },
  devops: {
    svgPath: "/icons/devops.svg",
    name: "Devops",
  },
  nextjs: {
    svgPath: "/next.svg",
    name: "Nextjs",
  },
  monorepo: {
    svgPath: "/icons/monorepo.svg",
    name: "Monorepo",
  },
};

interface MainNavTutorialsType {
  label: string;
  slug: string;
  icon: string;
  key: string;
  bg_color?: string;
}

export const MAIN_NAV_TUTORIALS: MainNavTutorialsType[] = [
  {
    label: "React",
    slug: "react",
    key: TutorialEnums.REACT,
    icon: "/icons/react.svg",
    bg_color: "bg-gradient-to-r from-[#66ddfb52] to-[#0897df4a]",
  },
  {
    label: "Devops",
    slug: "devops",
    key: TutorialEnums.DEVOPS,
    icon: "/icons/devops.svg",
    bg_color: "bg-gradient-to-r from-[#ffad2044] to-[#08a6df4a]",
  },
  {
    label: "Git",
    slug: "git",
    key: TutorialEnums.GIT,
    icon: "/icons/git.svg",
    bg_color: "bg-gradient-to-r from-[#f5585851] to-[#f17b7b51]",
  },
  {
    label: "C++",
    slug: "cpp",
    key: TutorialEnums.CPP,
    icon: "/icons/cpp.svg",
    bg_color: "bg-gradient-to-r from-[#1364fc51] to-[#994bf951]",
  },
  {
    label: "Nextjs",
    slug: "nextjs",
    key: TutorialEnums.NEXTJS,
    icon: "/icons/nextjs.svg",
    bg_color: "bg-background-color_800C",
  },
  {
    label: "Monorepo",
    slug: "monorepo",
    key: TutorialEnums.MONOREPO,
    icon: "/icons/monorepo.svg",
    bg_color: "bg-background-color_800C",
  },
];

export const getTutorialsByKey: Record<TutorialEnums, TutorialNavItemType> = {
  [TutorialEnums.DEVOPS]: DEVOPS_TUTORIALS,
  [TutorialEnums.REACT]: REACT_TUTORIALS,
  [TutorialEnums.GIT]: GIT_TUTORIALS,
  [TutorialEnums.CPP]: CPP_TUTORIALS,
  [TutorialEnums.NEXTJS]: NEXTJS_TUTORIALS,
  [TutorialEnums.MONOREPO]: MONOREPO_TUTORIALS,
};

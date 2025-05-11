import {
  CPP_TUTORIALS,
  DEVOPS_TUTORIALS,
  GIT_TUTORIALS,
  MONOREPO_TUTORIALS,
  NEXTJS_TUTORIALS,
  REACT_TUTORIALS,
  TutorialNavItemType,
} from ".";

export enum TutorialEnums {
  GIT = "git",
  REACT = "react",
  DEVOPS = "devops",
  NEXTJS = "nextjs",
  CPP = "cpp",
  MONOREPO = "monorepo",
}

export const getTutorialsByKey: Record<TutorialEnums, TutorialNavItemType> = {
  [TutorialEnums.DEVOPS]: DEVOPS_TUTORIALS,
  [TutorialEnums.REACT]: REACT_TUTORIALS,
  [TutorialEnums.GIT]: GIT_TUTORIALS,
  [TutorialEnums.CPP]: CPP_TUTORIALS,
  [TutorialEnums.NEXTJS]: NEXTJS_TUTORIALS,
  [TutorialEnums.MONOREPO]: MONOREPO_TUTORIALS,
};

export interface TutorialIconMetaDataType {
  svgPath: string;
  name: string;
}

export type TutorialIconsType = {
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
    svgPath: "/icons/nextjs.svg",
    name: "Nextjs",
  },
  monorepo: {
    svgPath: "/icons/monorepo.svg",
    name: "Monorepo",
  },
};

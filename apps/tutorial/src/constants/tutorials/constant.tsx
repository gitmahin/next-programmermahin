import { GeneralNavItemType } from "@programmer/types";
import { LUCIDE_DEFAULT_ICON_SIZE } from "@programmer/ui";
import { HomeIcon } from "lucide-react";
import { TutorialEnums } from "@programmer/constants";

export const MAIN_NAV_LINKS: GeneralNavItemType[] = [
  {
    label: "Home",
    slug: "/",
    icon: <HomeIcon size={LUCIDE_DEFAULT_ICON_SIZE} />,
  },
];

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

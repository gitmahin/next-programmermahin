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

interface CoursesIconsType {
  [key: string]: {
    name: string
    svgPath: string;
  }
}

export const COURSES_ICONS: CoursesIconsType = {
  docker: {
    svgPath: "/icons/docker.svg",
    name: "Docker"
  },
  kubernetes: {
    svgPath: "/icons/kubernetes.svg",
    name: "Kubernetes"
  },
  nginx:{
    svgPath: "/icons/nginx.svg",
    name: "Nginx"
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
  }
}

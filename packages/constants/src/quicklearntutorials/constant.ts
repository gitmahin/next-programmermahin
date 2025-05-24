import { GeneralNavItemType } from "@programmer/types";

interface QuickLearnNavItemType extends GeneralNavItemType {
  color?: string;
}

export const QUICKLEARN_TUTORIALS: QuickLearnNavItemType[] = [
  {
    label: "Html",
    slug: "html",
    icon: "html.svg",
    color: "html_grid",
  },
  {
    label: "Css",
    slug: "css",
    icon: "css.svg",
    color: "css_grid",
  },
  {
    label: "Docker",
    slug: "docker",
    icon: "docker.svg",
    color: "docker_grid",
  },
  {
    label: "Nginx",
    slug: "nginx",
    icon: "nginx.svg",
    color: "nginx_grid",
  },
];

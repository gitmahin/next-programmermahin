import { GeneralNavItemType } from "@programmer/types";

interface QuickLearnNavItemType extends GeneralNavItemType {
  color?: string;
}

export const QUICKLEARN_TUTORIALS: QuickLearnNavItemType[] = [
  {
    label: "Html",
    desc: "Learn HTML from basics to advanced concepts, including semantic markup and best practices.",
    slug: "html",
    icon: "html.svg",
    color: "html_grid",
  },
  {
    label: "Css",
    desc: "Master CSS for styling websites, covering layouts, animations, and responsive design.",
    slug: "css",
    icon: "css.svg",
    color: "css_grid",
  },
  {
    label: "Docker",
    desc: "Understand Docker fundamentals, containerization, and workflows for modern development.",
    slug: "docker",
    icon: "docker.svg",
    color: "docker_grid",
  },
  {
    label: "Nginx",
    desc: "Learn Nginx as a web server and reverse proxy, with configuration for performance and security.",
    slug: "nginx",
    icon: "nginx.svg",
    color: "nginx_grid",
  },
];

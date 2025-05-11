import { TutorialNavItemType } from "./type";

export const MONOREPO_TUTORIALS: TutorialNavItemType = {
  "Introduction to Monorepos": {
    slug: "monorepo-intro",
    icon: "",
    items: [
      { label: "What is a Monorepo?", slug: "monorepo-what-is" },
      { label: "Benefits of Monorepos", slug: "monorepo-benefits" },
      { label: "Popular Tools", slug: "monorepo-tools" },
    ],
  },
  "Turborepo Setup": {
    slug: "monorepo-turborepo",
    icon: "",
    items: [
      { label: "Setting up Turborepo", slug: "monorepo-setup" },
      { label: "Caching and Pipelines", slug: "monorepo-caching" },
      { label: "Workspaces with Yarn/NPM", slug: "monorepo-workspaces" },
    ],
  },
  "Advanced Strategies": {
    slug: "monorepo-advanced",
    icon: "",
    items: [
      { label: "Deploying Apps from Monorepos", slug: "monorepo-deployment" },
      { label: "Shared Packages", slug: "monorepo-shared-packages" },
      { label: "Managing Env & Secrets", slug: "monorepo-env-secrets" },
    ],
  },
};

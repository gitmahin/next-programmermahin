import { TutorialNavItemType } from "@programmer/types";
export const MONOREPO_TUTORIALS: TutorialNavItemType = {
  "Introduction to Monorepos": {
    slug: "monorepo-intro",
  
    items: [
      { label: "What is a Monorepo?", slug: "what-is-monorepo" },
      { label: "Benefits of Monorepos", slug: "monorepo-benefits" },
      { label: "Popular Tools", slug: "monorepo-tools" },
    ],
  },
  "Turborepo Setup": {
    slug: "monorepo-turborepo",

    items: [
      { label: "Setting up Turborepo", slug: "monorepo-setup" },
      { label: "Caching and Pipelines", slug: "monorepo-caching" },
      { label: "Workspaces with Yarn/NPM", slug: "monorepo-workspaces" },
    ],
  },
  "Advanced Strategies": {
    slug: "monorepo-advanced",

    items: [
      { label: "Deploying Apps from Monorepos", slug: "monorepo-deployment" },
      { label: "Shared Packages", slug: "monorepo-shared-packages" },
      { label: "Managing Env & Secrets", slug: "monorepo-env-secrets" },
    ],
  },
};

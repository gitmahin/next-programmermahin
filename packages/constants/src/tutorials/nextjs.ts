import { TutorialNavItemType } from "./type";

export const NEXTJS_TUTORIALS: TutorialNavItemType = {
  "Introduction to Next.js": {
    slug: "nextjs-intro",
    icon: "",
    items: [
      { label: "What is Next.js?", slug: "nextjs-what-is" },
      { label: "Project Structure", slug: "nextjs-structure" },
      { label: "Pages and Routing", slug: "nextjs-routing" },
    ],
  },
  "Core Features": {
    slug: "nextjs-core",
    icon: "",
    items: [
      { label: "Static vs Server-side Rendering", slug: "nextjs-ssr-ssg" },
      { label: "API Routes", slug: "nextjs-api-routes" },
      { label: "Environment Variables", slug: "nextjs-env-vars" },
    ],
  },
  "Advanced Concepts": {
    slug: "nextjs-advanced",
    icon: "",
    items: [
      { label: "Middleware and Edge Functions", slug: "nextjs-middleware" },
      { label: "App Router and Layouts", slug: "nextjs-app-router" },
      { label: "Optimizing Performance", slug: "nextjs-optimization" },
    ],
  },
};

export type DeveloperDocsData = {
  [key: string]: {
    slug: string;
    items: {
      label: string;
      slug: string;
      siblingOneItems?: {
        siblingOneLabel: string;
        siblingOneSlug: string;
      }[];
    }[];
  };
};

export const DEVELOPER_DOCS_DATA: DeveloperDocsData = {
  "Getting Started": {
    slug: "getting-started",
    items: [
      {
        label: "Introduction to Developer Docs",
        slug: "introduction-to-developer-docs",
        siblingOneItems: [
          {
            siblingOneLabel: "Why it is Classic mode?",
            siblingOneSlug: "why-it-is-classic-mode",
          },
        ],
      },
      {
        label: "Setting Up Locally",
        slug: "setting-up-locally",
        siblingOneItems: [
          {
            siblingOneLabel: "Cloning the Repository",
            siblingOneSlug: "cloning-the-repository",
          },
          {
            siblingOneLabel: "Installing Dependencies",
            siblingOneSlug: "installing-dependencies",
          },
          {
            siblingOneLabel: "Environment Variables",
            siblingOneSlug: "environment-variables",
          },
        ],
      },
    ],
  },

  "State Management": {
    slug: "state-management",
    items: [
      {
        label: "Using Redux Toolkit",
        slug: "using-redux-toolkit",
        siblingOneItems: [
          {
            siblingOneLabel: "Setting up Store",
            siblingOneSlug: "setting-up-store",
          },
          {
            siblingOneLabel: "Creating Slices",
            siblingOneSlug: "creating-slices",
          },
          {
            siblingOneLabel: "Redux with TypeScript",
            siblingOneSlug: "redux-with-typescript",
          },
        ],
      },
    ],
  },

  "API Integration": {
    slug: "api-integration",
    items: [
      {
        label: "Working with GraphQL",
        slug: "working-with-graphql",
        siblingOneItems: [
          {
            siblingOneLabel: "Apollo Client Setup",
            siblingOneSlug: "apollo-client-setup",
          },
          {
            siblingOneLabel: "Writing Queries and Mutations",
            siblingOneSlug: "writing-queries-and-mutations",
          },
          {
            siblingOneLabel: "Type Safety with GraphQL",
            siblingOneSlug: "type-safety-with-graphql",
          },
        ],
      },
      {
        label: "Using REST APIs",
        slug: "using-rest-apis",
        siblingOneItems: [
          {
            siblingOneLabel: "API Service Layer",
            siblingOneSlug: "api-service-layer",
          },
          {
            siblingOneLabel: "Error Handling",
            siblingOneSlug: "error-handling",
          },
          {
            siblingOneLabel: "Fetching Data with SWR",
            siblingOneSlug: "fetching-data-with-swr",
          },
        ],
      },
    ],
  },

  "Styling & UI": {
    slug: "styling-and-ui",
    items: [
      {
        label: "Using Tailwind CSS",
        slug: "using-tailwind-css",
        siblingOneItems: [
          {
            siblingOneLabel: "Customizing the Theme",
            siblingOneSlug: "customizing-theme",
          },
          {
            siblingOneLabel: "Best Practices",
            siblingOneSlug: "tailwind-best-practices",
          },
        ],
      },
      {
        label: "Reusable Components",
        slug: "reusable-components",
        siblingOneItems: [
          {
            siblingOneLabel: "Button, Modal, Toast",
            siblingOneSlug: "button-modal-toast",
          },
          {
            siblingOneLabel: "Using ShadCN/UI",
            siblingOneSlug: "using-shadcn-ui",
          },
        ],
      },
    ],
  },

  "Type Safety": {
    slug: "type-safety",
    items: [
      {
        label: "TypeScript in the Project",
        slug: "typescript-in-project",
        siblingOneItems: [
          {
            siblingOneLabel: "Types vs Interfaces",
            siblingOneSlug: "types-vs-interfaces",
          },
          {
            siblingOneLabel: "Utility Types",
            siblingOneSlug: "utility-types",
          },
          {
            siblingOneLabel: "Strict Mode & TSConfig",
            siblingOneSlug: "strict-mode-and-tsconfig",
          },
        ],
      },
    ],
  },

  Tutorials: {
    slug: "tutorials",
    items: [
      {
        label: "Create Your First PR",
        slug: "create-your-first-pr",
      },
      {
        label: "Building a Feature Module",
        slug: "building-a-feature-module",
      },
    ],
  },
};

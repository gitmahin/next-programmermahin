import { TutorialNavItemType } from "@programmer/types";

export const CPP_TUTORIALS: TutorialNavItemType = {
  "Getting Started": {
    slug: "cpp-getting-started",

    items: [
      { label: "Introduction To C++", slug: "introduction-to-cpp" },
      { label: "Setting up your environment", slug: "cpp-setup-environment" },
      { label: "Your first C++ program", slug: "cpp-first-program" },
    ],
  },
  "Core Concepts": {
    slug: "cpp-core-concepts",

    items: [
      { label: "Variables and Data Types", slug: "cpp-variables-data-types" },
      { label: "Control Structures", slug: "cpp-control-structures" },
      { label: "Functions and Recursion", slug: "cpp-functions-recursion" },
    ],
  },
  "Advanced Topics": {
    slug: "cpp-advanced",

    items: [
      { label: "Object-Oriented Programming", slug: "cpp-oop" },
      { label: "Memory Management", slug: "cpp-memory-management" },
      { label: "Templates and STL", slug: "cpp-templates-stl" },
    ],
  },
};

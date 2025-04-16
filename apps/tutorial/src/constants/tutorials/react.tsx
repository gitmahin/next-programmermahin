import { TutorialNavItemType } from "./type";

export const REACT_TUTORIALS: TutorialNavItemType = {
  "React Fundamentals": {
    slug: "react-fundamentals",
    icon: "",
    items: [
      { label: "JSX and Components", slug: "react-jsx-components" },
      { label: "State and Props", slug: "react-state-props" },
      { label: "Handling Events", slug: "react-events" },
    ],
  },
  "Advanced React": {
    slug: "react-advanced",
    icon: "",
    items: [
      { label: "React Hooks", slug: "react-hooks" },
      { label: "Context API", slug: "react-context" },
      { label: "Performance Optimization", slug: "react-performance" },
    ],
  },
  "React Ecosystem": {
    slug: "react-ecosystem",
    icon: "",
    items: [
      { label: "React Router", slug: "react-router" },
      { label: "State Management Tools", slug: "react-state-management" },
      { label: "Testing React Apps", slug: "react-testing" },
    ],
  },
};

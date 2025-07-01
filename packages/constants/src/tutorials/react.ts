import { TutorialNavItemType } from "@programmer/types";

export const REACT_TUTORIALS: TutorialNavItemType = {
  "React Fundamentals": {
    slug: "react-fundamentals",

    items: [
      { label: "Getting Started", slug: "getting-started" },
      { label: "Understanding JSX", slug: "understanding-jsx" },
      { label: "Setup React Project", slug: "setup-react-project" },
      { label: "Using Props", slug: "using-props" },
      { label: "React Router", slug: "react-router" },
      { label: "State Management", slug: "state-management" },
    ],
  },
  "React Hooks": {
    slug: "react-hooks",
   
    items: [
      { label: "What Is a Hook?", slug: "what-is-a-hook" },
      { label: "useState", slug: "use-state" },
      { label: "useEffect", slug: "use-effect" },
      { label: "useCallback", slug: "use-callback" },
      { label: "useRef", slug: "use-ref" },
      { label: "useContext", slug: "use-context" },
      { label: "Custom Hooks", slug: "custom-hooks" },
    ],
  },
  "React + Express": {
    slug: "react-with-express",
 
    items: [
      { label: "Setup Express", slug: "setup-express" },
      { label: "Creating APIs", slug: "creating-rest-apis" },
      { label: "Connect to React", slug: "connecting-react-express" },
      { label: "Fetch Data", slug: "handling-data" },
    ],
  },
};

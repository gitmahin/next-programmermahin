import { TutorialNavItemType } from "./type";

export const GIT_TUTORIALS: TutorialNavItemType = {
  "Git Basics": {
    slug: "git-basics",
    icon: "",
    items: [
      { label: "What is Git?", slug: "git-what-is-git" },
      { label: "Installing Git", slug: "git-installing" },
      { label: "Common Git Commands", slug: "git-common-commands" },
    ],
  },
  "Branching & Merging": {
    slug: "git-branching-merging",
    icon: "",
    items: [
      { label: "Working with Branches", slug: "git-branches" },
      { label: "Merge Strategies", slug: "git-merge-strategies" },
      { label: "Handling Merge Conflicts", slug: "git-merge-conflicts" },
    ],
  },
  "Remote Repositories": {
    slug: "git-remote",
    icon: "",
    items: [
      { label: "GitHub & GitLab Integration", slug: "git-remote-github" },
      { label: "Pull Requests and Reviews", slug: "git-pull-requests" },
      { label: "Working with Remotes", slug: "git-working-remotes" },
    ],
  },
};

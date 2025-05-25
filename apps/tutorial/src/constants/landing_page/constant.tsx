interface WhyLearnHereItemsType {
  title: string;
  desc: string;
  img: string;
}

const folder_name = "/landing_page_icons";

export const WHY_LEARN_HERE: WhyLearnHereItemsType[] = [
  {
    title: "Structured tutorials, no fluff",
    desc: "Follow a clean learning path with zero distractions",
    img: `${folder_name}/structured_tuto.png`,
  },
  {
    title: "Real-world examples, not theory dumps",
    desc: "Every concept is backed by practical, real-life code so you can apply what you learn instantly.",
    img: `${folder_name}/lock.png`,
  },
  {
    title: "Learn at your own pace, your own way",
    desc: "Whether you're speed-running or taking it slow, our platform adapts to your learning style.",
    img: `${folder_name}/puzzle.png`,
  },
  {
    title: "Beginner-friendly and pro-ready content",
    desc: "From your first 'Hello World' to advanced systems, we’ve got lessons that grow with you.",
    img: `${folder_name}/high-five.png`,
  },
  {
    title: "Project-Based Learning That Sticks",
    desc: "Build real projects as you learn - gain skills you can actually use.",
    img: `${folder_name}/focus.png`,
  },
  {
    title: "Modern Tech, Always Updated",
    desc: "Stay ahead with up-to-date tutorials on the latest tools, frameworks, and best practices.",
    img: `${folder_name}/changes.png`,
  },
];

interface GettingStartedType {
  title: string;
  desc: string;
  img: string;
  link: string
}

export const GETTING_STARTED: GettingStartedType[] = [
  {
    title: "React",
    desc: "Get started with React by learning the fundamentals of components, props, and state to build interactive user interfaces.",
    img: "/color/react.svg",
    link: "/react/react-fundamentals/getting-started"
  },
  {
    title: "Devops",
    desc: "Learn the basics of DevOps, including CI/CD, automation, and collaboration between development and operations teams.",
    img: "/color/devops.svg",
    link: "/devops/introduction-to-devops/what-is-devops"
  },
  {
    title: "Git",
    desc: "Start using Git for version control by understanding commits, branches, and workflows in your development projects.",
    img: "/color/git.svg",
    link: "/git/git-basics/git-what-is-git"
  },
  {
    title: "C++",
    desc: "Begin your journey with C++ by understanding variables, data types, functions, and the basics of object-oriented programming.",
    img: "/color/cpp.svg",
    link: "/cpp/cpp-getting-started/introduction-to-cpp"
  },
  {
    title: "Nextjs",
    desc: "Learn how to build fast, modern web apps with Next.js using file-based routing, server-side rendering, and API routes.",
    img: "/color/nextjs.svg",
    link: "/nextjs/nextjs-intro/nextjs-what-is"
  },
  {
    title: "Monorepo",
    desc: "Discover how to manage multiple projects in a single codebase using monorepos, with tools like TurboRepo and Nx.",
    img: "/color/monorepo.svg",
    link: "/monorepo/monorepo-intro/what-is-monorepo"
  },
]
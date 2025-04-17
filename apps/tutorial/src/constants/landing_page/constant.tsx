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
    desc: "Build real projects as you learn — gain skills you can actually use.",
    img: `${folder_name}/focus.png`,

  },
  {
    title: "Modern Tech, Always Updated",
    desc: "Stay ahead with up-to-date tutorials on the latest tools, frameworks, and best practices.",
    img: `${folder_name}/changes.png`,

  },
];

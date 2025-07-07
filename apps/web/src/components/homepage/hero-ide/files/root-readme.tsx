import { CodeBlock } from "@/components/shiki";

const code = `# One Search In All Applications
This project uses **Redux Toolkit** to implement a powerful and scalable **one search system**.

## 🏗️ How It Works

Redux Toolkit allows us to define independent **slices** of state for different parts of the app. 
These slices can be registered into a single store, giving the entire app access to shared state through simple and type-safe hooks.

Navigate to > packages > shared > src > redux

This pattern ensures that the search functionality stays modular, scalable, and easy to extend — 
whether you're working on a new feature, a new page, or an entire domain.

`;

export const RootReadme = () => {
  return (
    <CodeBlock lang="md" className="text-[9px]">
      {code}
    </CodeBlock>
  );
};

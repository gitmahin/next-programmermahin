import { CodeBlockWithoutTypes } from "@/components/shiki/codeBlockWithoutTypes";

const code = `
function renderList(items: string[]) {
  for (let i = 0; i < items.length; i++) {
    const item = items[i]; // [!code warning]
    // Warning: item is defined but never used
  }

  console.log("Rendering complete");
}
`

export const WarningCodeExample = () => {
  return (
    <CodeBlockWithoutTypes lang="tsx" className="text-[14px]">
      {code}
    </CodeBlockWithoutTypes>
  );
};

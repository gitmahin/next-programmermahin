import { CodeBlockWithoutTypes } from "@/components/shiki/codeBlockWithoutTypes";

const code = `
const isAdult = (age) => age >= 18; // [!code --]
const message = isAdult(20) ? "Welcome!" : "Access Denied"; // [!code --]

function checkAccess(age: number): string { // [!code ++]
   if (age >= 18) return "Welcome!"; // [!code ++]
  return "Access Denied"; // [!code ++]
} // [!code ++]
 // [!code ++]
const message = checkAccess(20); // [!code ++]
`

export const AddRemoveCodeExample = () => {
  return (
    <CodeBlockWithoutTypes lang="tsx" className="text-[14px]">
      {code}
    </CodeBlockWithoutTypes>
  );
};

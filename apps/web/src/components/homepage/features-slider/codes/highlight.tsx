import { CodeBlockWithoutTypes } from "@/components/shiki/codeBlockWithoutTypes";

const code = `
function getDiscount(price: number): number {
  if (price > 100) {
    return price * 0.9; // [!code highlight]
  }

  return price;
}

const finalPrice = getDiscount(150);
`;

export const HighlightCodeExample = () => {
  return (
    <CodeBlockWithoutTypes lang="tsx" className="text-[14px]">
      {code}
    </CodeBlockWithoutTypes>
  );
};

import { CodeBlock } from "@/components/shiki";

const code = `{
  "extends": "@programmer/typescript-config/nextjs.json",
  "compilerOptions": {
    "paths": {
      "@/*": [
        "./src/*"
      ]
    },
    "plugins": [
      {
        "name": "next"
      }
    ],
    "lib": ["ES2024"],
    "target": "ES2024"
  },
  "include": [
    "**/*.ts",
    "**/*.tsx",
    "next-env.d.ts",
    "next.config.ts",
    ".next/types/**/*.ts"
  ],
  "exclude": [
    "node_modules"
  ]
}
`;

export const TsConfig = () => {
  return (
    <CodeBlock lang="json" className="text-[9px]">
      {code}
    </CodeBlock>
  );
};

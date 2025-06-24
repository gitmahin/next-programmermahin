import { CodeBlock } from "@/components/shiki";

const prtrcCode = `{
    "singleQuote": false,
    "trailingComma": "es5",
    "tabWidth": 2,
    "bracketSpacing": true,
    "semi": true
}
`;

const prtrcIgnoreCode = `/.vscode
/node_modules
./dist

*.env
.env.*
.env

`;

export const PrettierRc = () => {
  return (
    <CodeBlock lang="bash" className="text-[9px]">
      {prtrcCode}
    </CodeBlock>
  );
};

export const PrettierIgnore = () => {
  return (
    <CodeBlock lang="bash" className="text-[9px]">
      {prtrcIgnoreCode}
    </CodeBlock>
  );
};

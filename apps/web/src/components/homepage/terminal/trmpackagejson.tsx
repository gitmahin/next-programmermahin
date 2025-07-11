import React from "react";
import { CodeBlock } from "@/components/shiki";

const code = `{
  "name": "web",
  "version": "0.1.0",
  "private": true,
  "scripts": {
    "dev": "next dev --turbopack --port 3000",
    "build": "next build",
    "start": "next start",
    "lint": "next lint --max-warnings 0",
    "check-types": "tsc --noEmit",
    "clean": "rm -rf node_modules && echo 'Cleanup complete!'"
  },
  "dependencies": {
    "@programmer/shared": "workspace:*",
    "@programmer/ui": "workspace:*",
    "next": "^15.2.4",
    "react": "^19.1.0",
    "react-dom": "^19.1.0",
    "swiper": "^11.2.8"
  },
  "devDependencies": {
    "@shikijs/twoslash": "^3.4.2",
    "@programmer/eslint-config": "workspace:*",
    "@programmer/typescript-config": "workspace:*",
    "@types/node": "^22.14.0",
    "@types/react": "19.1.0",
    "@types/react-dom": "19.1.1",
    "eslint": "^9.24.0",
    "shiki": "^3.4.2",
    "tailwind-config": "workspace:*",
    "typescript": "^5.8.2"
  }
}
`;

export const TrmPackageJson = () => {
  return (
    <CodeBlock lang="json" className="text-[14px]">
      {code}
    </CodeBlock>
  );
};

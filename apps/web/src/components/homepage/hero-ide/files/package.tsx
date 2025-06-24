import { CodeBlock } from "@/components/shiki"
const webpackagejsoncode = `{
  "name": "web",
  "version": "1.0.2",
  "private": true,
  "scripts": {
    "dev": "next dev --turbopack --port 3008",
    "build": "next build",
    "start": "next start",
    "lint": "next lint --max-warnings 0",
    "check-types": "tsc --noEmit",
    "clean": "rm -rf node_modules && echo 'Cleanup complete!'"
  },
  "dependencies": {
    "@programmer/hooks": "workspace:*",
    "@programmer/shared": "workspace:*",
    "@programmer/ui": "workspace:*",
    "framer-motion": "^12.15.0",
    "next": "^15.2.4",
    "next-mdx-remote": "^5.0.0",
    "react": "^19.1.0",
    "react-dom": "^19.1.0",
    "react-resizable-panels": "^3.0.3",
    "react-turnstile": "^1.1.4"
  },
  "devDependencies": {
    "@programmer/eslint-config": "workspace:*",
    "@programmer/typescript-config": "workspace:*",
    "@shikijs/twoslash": "^3.4.2",
    "@types/node": "^22.14.0",
    "@types/react": "19.1.0",
    "@types/react-dom": "19.1.1",
    "eslint": "^9.24.0",
    "shiki": "^3.4.2",
    "tailwind-config": "workspace:*",
    "typescript": "^5.8.2"
  }
}
`
export const WebPackage = () => {
    return (
           <CodeBlock lang="json" className="text-[9px]">
      {webpackagejsoncode}
    </CodeBlock>
    )
}


const sharepackagejsoncode = `{
  "name": "@programmer/shared",
  "version": "0.1.0",
  "private": true,
  "exports": {
    ".": "./src/index.ts"
  },
  "scripts": {
    "dev": "tsc --watch",
    "build": "tsup --dts --external react --minify",
    "lint": "eslint . --max-warnings 0",
    "generate:component": "turbo gen react-component",
    "check-types": "tsc --noEmit",
    "clean": "rm -rf node_modules .turbo .next && echo 'Cleanup complete!'"
  },
  "dependencies": {
    "@programmer/ui": "workspace:*",
    "@programmer/constants": "workspace:*",
    "react": "^19.1.0",
    "next": "^15.2.4",
    "react-dom": "^19.1.0",
    "rehype-pretty-code": "^0.14.0",
    "@rehype-pretty/transformers": "^0.13.2",
    "next-mdx-remote": "^5.0.0",
    "rehype-slug": "^6.0.0"
  },
  "devDependencies": {
    "@programmer/eslint-config": "workspace:*",
    "@programmer/typescript-config": "workspace:*",
    "@types/node": "^22.14.0",
    "@types/react": "19.1.0",
    "@types/react-dom": "19.1.1",
    "tailwind-config": "workspace:*",
    "eslint": "^9.24.0",
    "typescript": "^5.8.2"
  }
}
`

export const SharedPackageJson = () => {
    return (
           <CodeBlock lang="json" className="text-[9px]">
      {sharepackagejsoncode}
    </CodeBlock>
    )
}
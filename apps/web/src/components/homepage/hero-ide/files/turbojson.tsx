import { CodeBlock } from "@/components/shiki";

const code = `{
  "$schema": "https://turbo.build/schema.json",
  "ui": "tui",
  "globalDependencies": [".env"],
  "globalEnv": ["TURBO_TOKEN", "TURBO_TEAM"],
  "tasks": {
    "build": {
      "dependsOn": ["^build"],
      "inputs": ["$TURBO_DEFAULT$", ".env*"],
      "outputs": [".next/**", "!.next/cache/**"]
    },
    "lint": {
      "dependsOn": ["^lint"]
    },
    "check-types": {
      "dependsOn": ["^check-types"]
    },
    "dev": {
      "env": ["NEXT_ALGOLIA_WRITE_API"],
      "dependsOn": ["^build"],
      "cache": false,
      "persistent": true,
      "inputs": [
        "$TURBO_DEFAULT$",
        ".env.development.local",
        ".env.local",
        ".env.development",
        ".env"
      ]
    },
    "clean": {
      "cache": false
    }
  }
}

`;
export const Turbojson = () => {
  return (
    <CodeBlock lang="json" className="text-[9px]">
      {code}
    </CodeBlock>
  );
};

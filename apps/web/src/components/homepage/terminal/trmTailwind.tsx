import { CodeBlock } from "@/components/shiki";

const code = `
/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "../../packages/**/*.{js,ts,jsx,tsx,mdx}",
    "!../../packages/**/node_modules/**",

    // Or if using \`src\` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        "marquee-vertical-topToBottom": {
          "0%": {
            transform: "translateY(-50%)",
          },
          "100%": {
            transform: "translateY(0%)",
          },
        },

        "marquee-vertical-bottomToTop": {
          "0%": {
            transform: "translateY(0%)",
          },
          "100%": {
            transform: "translateY(-50%)",
          },
        },
      },
      animation: {
        "marquee-vertical-topToBottom": "marquee-vertical-topToBottom 17s linear infinite",
        "marquee-vertical-bottomToTop": "marquee-vertical-bottomToTop 17s linear infinite",
      }
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
};

`;

export const TrmTailwind = () => {
  return (
    <CodeBlock lang="js" className="text-[14px]">
      {code}
    </CodeBlock>
  );
};

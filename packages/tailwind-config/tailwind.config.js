/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "../../packages/**/*.{js,ts,jsx,tsx,mdx}",
    "!../../packages/**/node_modules/**",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        fx_zinc: {
          950: "var(--color-zinc-950)",
          900: "var(--color-zinc-900)",
          800: "var(--color-zinc-800)",
          700: "var(--color-zinc-700)",
          600: "var(--color-zinc-600)",
          500: "var(--color-zinc-500)",
          400: "var(--color-zinc-400)",
          300: "var(--color-zinc-300)",
          200: "var(--color-zinc-200)",
          100: "var(--color-zinc-100)",
          50: "var(--color-zinc-50)",
        },
        background: {
          color_1: "var(--background)",
          color_2: "var(--background-color-2)",
          color_3: "var(--background-color-3)",
          color_4: "var(--background-color-4)",
          color_5: "var(--background-color-5)",
        },
        border: {
          color_1: "var(--border-color-1)",
          color_2: "var(--border-color-2)",
        },
        text: {
          color_1: "var(--foreground)",
          color_2: "var(--foreground-color-2)",
          color_3: "var(--foreground-color-3)",
          color_4: "var(--foreground-color-4)",
          zinc_white: "var(--color-zinc-50)"
        },
      },
      borderRadius: {
        DEFAULT: "8px",
        tiny: "5px",
        circle: "50%",
        tablet: "50px",
      }
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
}
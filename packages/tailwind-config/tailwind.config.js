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
        pm_zinc: {
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
        pm_purple: {
          950: "var(--color-purple-950)",
          900: "var(--color-purple-900)",
          800: "var(--color-purple-800)",
          700: "var(--color-purple-700)",
          600: "var(--color-purple-600)",
          500: "var(--color-purple-500)",
          400: "var(--color-purple-400)",
          300: "var(--color-purple-300)",
          200: "var(--color-purple-200)",
          100: "var(--color-purple-100)",
          50: "var(--color-purple-50)",
        },
        background: {
          color_950C: "var(--background)",
          color_925C: "var(--background-color-925C)",
          color_900C: "var(--background-color-900C)",
          color_800C: "var(--background-color-800C)",
          color_850C: "var(--background-color-850C)",
          color_750C: "var(--background-color-750C)",
        },
        border: {
          color_800C: "var(--border-color-800C)",
          color_700C: "var(--border-color-700C)",
        },
        text: {
          color_1: "var(--foreground)",
          color_2: "var(--foreground-color-2)",
          color_3: "var(--foreground-color-3)",
          color_4: "var(--foreground-color-4)",
          zinc_white: "var(--color-zinc-50)",
        },
      },
      borderRadius: {
        DEFAULT: "8px",
        tiny: "5px",
        circle: "50%",
        tablet: "50px",
      },
      fontFamily: {
        geist_sans: ["var(--font-geist-sans)"],
        geist_mono: ["var(--font-geist-mono)"],
        jetbrains_mono: ["var(--font-jetbrains-mono)"],
      },
      fontSize: {
        read_1: "15px",
        read_2: "14px",
        read_3: "13px",
      },
    },
  },
  plugins: [require("tailwindcss-animate"), require("@tailwindcss/typography")],
};

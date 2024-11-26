import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
          900: "hsl(var(--primary-900))",
          800: "hsl(var(--primary-800))",
          700: "hsl(var(--primary-700))",
          600: "hsl(var(--primary-600))",
          500: "hsl(var(--primary-500))",
          400: "hsl(var(--primary-400))",
          300: "hsl(var(--primary-300))",
          200: "hsl(var(--primary-200))",
          100: "hsl(var(--primary-100))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
          900: "hsl(var(--secondary-900))",
          800: "hsl(var(--secondary-800))",
          700: "hsl(var(--secondary-700))",
          600: "hsl(var(--secondary-600))",
          500: "hsl(var(--secondary-500))",
          400: "hsl(var(--secondary-400))",
          300: "hsl(var(--secondary-300))",
          200: "hsl(var(--secondary-200))",
          100: "hsl(var(--secondary-100))",
        },
        info: "hsl(var(--info))",
        success: "hsl(var(--success))",
        warning: "hsl(var(--warning))",
        error: "hsl(var(--error))",
        text: {
          grey: "hsl(var(--text-grey))",
          haze: "hsl(var(--text-haze))",
          midGray: "hsl(var(--text-mid-gray))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
      },
    },
  },
};
export default config;

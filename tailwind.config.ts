import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["IBM Plex Sans", "sans-serif"],
        mono: ["IBM Plex Mono", "monospace"],
      },
      colors: {
        charcoal: {
          950: "#0a0a0a",
          900: "#111111",
          800: "#161616",
          700: "#1c1c1c",
          600: "#242424",
          500: "#2e2e2e",
        },
        blue: {
          accent: "#4f8ef7",
          dim: "rgba(79,142,247,0.12)",
          border: "rgba(79,142,247,0.25)",
        },
      },
    },
  },
  plugins: [],
};

export default config;

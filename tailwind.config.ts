import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#121212",
        foreground: "var(--foreground)",
        primary: "#DAC5A7",
        border: "rgba(218, 197, 167, 0.15)",
      },
    },
  },
  plugins: [],
};
export default config;

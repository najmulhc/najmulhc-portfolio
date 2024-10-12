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
        background: "#0e0e0e",
        foreground: "var(--foreground)",
        primary: "#DAC5A7",
        accent: "#0e0e0e",
        border: "rgba(218, 197, 167, 0.15)",
        bgMuted: "rgba(218, 197, 167, 0.05)",
        buttonBackgroundOne: "#181716",
        buttonBorderOne: "#35312c",
      },
      fontFamily: {
        "chillax-regular": ["chillax-regular"],
        "chillax-light": ["chillax-light"],
        gambetta: ["gambetta"],
        "satoshi-light": ["satoshi-light"],
        "satoshi-regular": ["satoshi-regular"],
      },
    },
  },
  plugins: [],
};
export default config;

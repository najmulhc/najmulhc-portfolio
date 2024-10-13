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
        footerBg: "#181716",
        primaryMuted: "rgba(218, 197, 167, 0.60)",
      },
      fontFamily: {
        "chillax-regular": ["chillax-regular"],
        "chillax-light": ["chillax-light"],
        gambetta: ["gambetta"],
        "satoshi-light": ["satoshi-light"],
        "satoshi-regular": ["satoshi-regular"],
      },
      keyframes: {
        "loop-scroll": {
          from: {
            transform: "translateX(0% )",
          },
          to: {
            transform: "translateX(calc(-100% - 20px))",
          },
        },
      },
      animation: {
        "loop-scroll": "loop-scroll 30s linear infinite",
      },
    },
  },
  plugins: [],
};
export default config;

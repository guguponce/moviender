import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
    colors: {
      astronaut: {
        50: "#E9EDF7",
        100: "#D2DBEF",
        200: "#A9B9E0",
        300: "#7C95CF",
        400: "#5071BF",
        500: "#39579D",
        600: "#293E70",
        700: "#1F3056",
        800: "#151F38",
        900: "#0B111E",
        950: "#05080F",
      },
    },
  },
  plugins: [],
};
export default config;

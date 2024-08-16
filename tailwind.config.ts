import { Saira_Extra_Condensed } from "next/font/google";
import { Source_Serif_4 } from "next/font/google";
import type { Config } from "tailwindcss";
import colors from "tailwindcss/colors";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        //heading: ['"Source Serif 4"', "Georgia", "serif"],
        heading: ["var(--source-serif)", "Georgia", "serif"],
        body: ["Synonym", "system-ui", "sans-serif"],
      },
      colors: {
        primary: colors.fuchsia,
        secondary: colors.zinc,
        body: colors.zinc,
        em: colors.indigo[700],
        "em-dark": colors.indigo[300],
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      gridTemplateColumns: {
        menu: "auto 1fr",
      },
      scroll: {
        normal: "scroll-mt-24",
      },
      screens: {
        widescreen: { raw: "(min-aspect-ratio: 3/2)" },
        tallscreen: { raw: "(max-aspect-ratio: 13/20)" },
      },
      keyframes: {
        "open-menu": {
          "0%": { transform: "scaleY(0)" },
          "100%": { transform: "scaleY(1)" },
        },
      },
      animation: {
        "open-menu": "open-menu 0.25s ease-in-out forwards",
      },
    },
  },
  plugins: [],
};
export default config;

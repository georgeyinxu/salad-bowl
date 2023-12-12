import type { Config } from "tailwindcss";
import {nextui} from "@nextui-org/react";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    fontFamily: {
      sora: ["Sora", "sans-serif"],
      inter: ["Inter", "sans-serif"],
      charter: ["Charter", "sans-serif"],
      montserrat: ["Montserrat", "sans-serif"],
      gotham: ["Gotham", "sans-serif"],
      typrospro: ["TyprosPro", "sans-serif"],
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        'btn-blue-end': '#00D1FF',
        'header-start': '#76C0FF',
        'header-end': '#5AE6FF',
        'gradient-primary': '#00CEFB',
        'gradient-middle': '#49DEFF',
        'gold-start': '#FFD78A',
        'gold-end': '#FFE7B9',
        'header-gradient-start': '#D2A768',
        'header-gradient-middle': '#F9E4A2',
        'header-gradient-end': '#DDAF71',
        'modal-bg-start': 'rgb(47, 255, 243)',
        'modal-bg-end': 'rgb(47, 168, 255)',
        'card-start': '#00D1FF',
        'card-middle': '#006D8F',
        'card-end': '#099CBC',
        'progress-start': '#01AAD4',
        'progress-end': '#026684',
        'main-header-start': '#3AF0F0',
        'button-start': '#003444',
        'button-end': '#00507D'
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()]
};
export default config;

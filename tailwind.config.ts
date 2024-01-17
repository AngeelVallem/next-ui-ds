import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/stories/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      spacing: {
        xs: "0.375rem",
        sm: "0.625rem",
        md: "0.875rem",
        xl: "1rem",
        xxl: "1.25rem",
        xxxl: "1.75rem",
      },
      colors: {
        "ui-light": "#f5f5f5",
        "ui-dark": "#091118",
        primary: "#88c8b6",
        "primary-h": "#79b5a4",
        secondary: "#34bb92",
        "secondary-h": "#2da681",
        info: "#39cda9",
        accent1: "#222631",
        accent2: "#2f456a",
        accent3: "#617396",
        success: "#18ad41",
        warning: "#f3c818",
        danger: "#f60b3f",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;

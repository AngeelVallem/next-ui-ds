import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/stories/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        aBlack: "#212529",
        aOnyx: "#343a40",
        aSpace: "#495057",
        aGray: "#6c757d",
        aFrenchGray: "#adb5bd",
        aLightFrenchGray: "#ced4da",
        aPlatinum: "#dee2e6",
        aWhite: "#e9ecef",
        aSeaSalt: "#f8f9fa",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      primary: "#48c43c",
      secondary: "#FF812B",
      black: "#000000",
      white: "#ffffff",
      gray: "#F4F4F4",
      logoblack: "#192935",
      slate: {
        800: "#1e293b",
        950: "#020617",
      },
    },
    screens: {
      xs: "0px",
      sm: "480px",
      md: "768px",
      lg: "1024px",
      xl: "1366px",
      xxl: "1920px",
    },

    fontFamily: {
      noto: ["var(--font-notosans)"],
      righteous: ["var(--font-righteous)"],
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};

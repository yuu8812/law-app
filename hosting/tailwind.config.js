/** @type {import('tailwindcss').Config} */

export const color = {
  blue: "#03658C",
  white: "#F4F5F7",
  red: "#F24405",
  warning: "#87340E",
  black: "#808080",
  backGround: "",
};

export const weight = {
  400: 400,
  500: 500,
  600: 600,
};

module.exports = {
  darkMode: ["class"],
  content: ["./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        ...color,
      },
      fontColor: {
        black: color["black"],
      },
      backgroundColor: {
        blue: color["blue"],
        white: color["white"],
        red: color["red"],
        warning: color["warning"],
        black: color["black"],
      },
      fontWeight: { ...weight },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

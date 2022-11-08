/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    colors: {
      black: "#000000",
      white: "#ffffff",
      yellow: "#feb900",
      gray: "#52565e",
    },
    fontFamily: {
      raleway: ["Raleway", "sans-serif"],
      sans: ["Open Sans", "sans-serif"],
    },
  },

  plugins: [require("daisyui")],
  daisyui: {
    styled: true,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
    themes: ["luxury"],
  },
};

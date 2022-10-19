/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: "jit",
  darkMode: "class",
  content: ["./src/**/*.{html,js}"],
  theme: {
    fontFamily: {
      source: ["Source Sans Pro"],
      body: ["Poppins"],
    },

    extend: {
      colors: {
        primary: "#2fe8bc",
        secondary: "#14b8a6",
        black: "#0f172a",
        white: "#ffff",
        gray: "#0f172a",
        slate: "#e2e8f0",
        transparent: "transparent",
      },
    },
  },
  plugins: [],
};

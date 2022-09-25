/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        serif: ["Merriweather", "serif"],
        sans: ["Lato", "sans-serif"],
      },
      keyframes: {
        pop: {
          "0%": { opacity: 0, transform: "translate(50px, -50px) scale(0.5, .5)" },
          "100%": { opacity: 1, transform: "translate(0px, 0px) scale(1, 1)" },
        },
      },
      animation: {
        pop: "pop .3s ease 1",
      },
    },
  },
  plugins: [],
};

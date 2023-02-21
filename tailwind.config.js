/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line no-undef
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}", "node_modules/preline/dist/*.js"],
  darkMode: "class",
  theme: {
    extend: {},
  },
  // eslint-disable-next-line no-undef
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("preline/plugin"),
  ],
}

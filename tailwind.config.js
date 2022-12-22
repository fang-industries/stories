/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
  ],
  darkMode: "media",
  theme: {
    fontFamily: {
      sans: ["Open Sans"],
      body: ["Open Sans"],
      display: ["Raleway"],
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

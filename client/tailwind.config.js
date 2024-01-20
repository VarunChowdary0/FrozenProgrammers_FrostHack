/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors : {
        light_bg_primary : "#FAF0E6",
        light_bg_secondry : "#B9B4C7",
        dark_bg_secondry : "#5C5470",
        dark_bg_primary : "#352F44",
      }
    },
  },
  plugins: [],
  darkMode:'class'
}
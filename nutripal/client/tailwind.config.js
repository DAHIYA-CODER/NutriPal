/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          light: "#d7f3e3",
          DEFAULT: "#34d399",
          dark: "#059669"
        }
      }
    },
  },
  plugins: [],
}

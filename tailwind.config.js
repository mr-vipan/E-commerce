/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      border:{
        'lg': '2px solid #ccc'
      }
    },
  },
  plugins: [],
}
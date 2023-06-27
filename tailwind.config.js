/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#242424",
        "secondary": "#646cff",
        "main": "#181818"
      },
      borderColor: {
        "primary": "#242424",
        "secondary": "#646cff"
      }
    },
  },
  plugins: [],
}


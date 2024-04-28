/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode:'class',
  theme : {
    extend : {
      fontFamily :{
        ruslan : ["Ruslan Display"]
      }
    }
  },
  plugins: [require("daisyui")],
}
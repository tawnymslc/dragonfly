/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', 
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        green1: "#103c00",
        green2: "#35711f",
        green3: "#60a543",
        green4: "#e6efc5",
        tan1: "#4f463c",
        tan2: "#e7cbaf",
        grey1: "#333333",
        grey2: "#808080",
        grey3: "#f2f2f2",
      },
      fontFamily: {
        proxima: ['"Proxima Nova"', 'sans-serif'],
        interstate: ['"Interstate Condensed"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
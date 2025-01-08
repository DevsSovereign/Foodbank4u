/** @type {import('tailwindcss').Config} */
import defaultTheme from "tailwindcss/defaultTheme";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        secondary: "#008B50",
        grey: "#585858",
      },
      fontFamily: {
        ppins: ['"Poppins"', ...defaultTheme.fontFamily.serif],
        inter: ['"Inter"', ...defaultTheme.fontFamily.serif],
        mplus: ['"M PLUS 1"', ...defaultTheme.fontFamily.serif],
      },
    },
  },
  plugins: [],
};

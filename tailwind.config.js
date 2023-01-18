/* eslint-disable prettier/prettier */
/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,ts,js}"],
  theme: {
    extend: {
      colors: {
        "primary": "#6785FF",
        "secondary": "#303247",
        "bg": "#1F1F2B",
        "bg-secondary": "#252837"
      },
    },
  },
  plugins: [],
};

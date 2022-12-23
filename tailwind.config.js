/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        light: "#FBFBFF",
        dark: "#272727",
        primaryColor: "#6BAB90",
      },
      fontFamily: {
        gothic: "Dela Gothic One",
      },
    },
  },
  plugins: [],
};

/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        Lemon: ["Lemon", "serif"],
        Ubuntu: ["Ubuntu", "serif"],
        Montserrat: ["Montserrat Alternates", "sans-serif"],
        Lilita: ["Lilita One", "sans-serif"],
      },
    },
  },
  plugins: [require("prettier-plugin-tailwindcss")],
  corePlugins: {
    preflight: false,
  },
};

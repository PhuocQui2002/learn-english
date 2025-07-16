/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/flowbite-react/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        lightGray: "#F6F6F6",
        whiteTide: "#1e3a8a",
        lightCyan: "#e0ffff",
      },
    },
  },
  plugins: [require("flowbite/plugin")],
};

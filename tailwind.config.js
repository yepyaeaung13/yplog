/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Poppins", "sans-serif"],
      serif: ["Merriweather", "serif"],
    },
    extend: {
      colors: {
        containerColor: "#1a1e21",
        secondColor: "#fd8f44",
        textColor: "#172317",
        bgColor: "#fff",
      },
    },
  },
  plugins: [],
};

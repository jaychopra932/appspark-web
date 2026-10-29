/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0", transform: "scale(0.98)" },
          "100%": { opacity: "1", transform: "scale(1)" },
        },
        floatUp: {
          "0%": { opacity: "1", transform: "translateY(0) scale(1)" },
          "100%": { opacity: "0", transform: "translateY(-120px) scale(1.5)" },
        },
      },
      animation: {
        fadeIn: "fadeIn 0.25s ease-out forwards",
        floatUp: "floatUp 1.1s ease-out forwards",
      },
    },
  },
  plugins: [],
};

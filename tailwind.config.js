/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: "#9CB380",
          50: "#f4f7f1",
          100: "#e6ede0",
          200: "#cedcc3",
          300: "#b1c4a0",
          400: "#9CB380",
          500: "#7d9a5e",
          600: "#637d49",
          700: "#4d623a",
          800: "#3f4f31",
          900: "#36432b",
        },
        navy: { 900: "#0a0f1e", 800: "#0f172a" },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
      },
      animation: {
        "spin-slow": "spin 20s linear infinite",
        float: "float 3s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
  },
  plugins: [],
};

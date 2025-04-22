/** @type {import('tailwindcss').Config} */
import PrimeUi from 'tailwindcss-primeui'

export default {
  darkMode: ['selector', '[class*="p-dark"]'],
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        surface: {
          50: "#f0e6ff",   // Очень светлый оттенок
          100: "#d7b6ff",  // Светлый оттенок
          200: "#b88eff",  // Более светлый
          300: "#9068ff",  // Средний оттенок
          400: "#7a42ff",  // Немного темнее
          500: "#6104ff",  // Основной цвет
          600: "#4e00cc",  // Темный оттенок
          700: "#3b00a3",  // Более темный оттенок
          800: "#29007a",  // Еще более темный оттенок
          900: "#17004f",  // Очень темный оттенок
        }
      }
    },
  },
  plugins: [PrimeUi],
}


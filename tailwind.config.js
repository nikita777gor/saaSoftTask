/** @type {import('tailwindcss').Config} */
import PrimeUi from 'tailwindcss-primeui'

export default {
  darkMode: ['selector', '[class*="p-dark"]'],
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        surface: {
          50:  "#f0f8ff",  // Очень светлый голубой (почти белый)
          100: "#d6eaff",  // Светлый голубой
          200: "#add8ff",  // Мягкий голубой
          300: "#87c2ff",  // Нежно-голубой
          400: "#5caeff",  // Светло-синий
          500: "#3399ff",  // Основной синий
          600: "#287acc",  // Чуть темнее
          700: "#1e5ea3",  // Глубокий синий
          800: "#14427a",  // Темно-синий
          900: "#0a2850",  // Очень темный синий
        }
      }
    },
  },
  plugins: [PrimeUi],
}


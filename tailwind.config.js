/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        moss: '#6a793e',
        charcoal: '#333',
      },
    },
  },
  plugins: [],
}


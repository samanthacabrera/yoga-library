/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // moss: '#9EAD88',
        moss: '#747d65',
        charcoal: '#333',
      },
    },
  },
  plugins: [],
}


/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1F2937',
        accent: '#D4A574',
      }
    },
  },
  plugins: [],
}

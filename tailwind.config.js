/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./index.html",
  ],
  theme: {
    extend: {
      zIndex: {
        'canvas': '-1', // For positioning Three.js canvas behind UI elements
      },
      height: {
        'screen-dvh': '100dvh', // For better mobile viewport handling
      }
    },
  },
  plugins: [],
}
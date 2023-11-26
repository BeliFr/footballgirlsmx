/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
      "Pinky" : "#db2777",
      "Neutral":"#1c1917",
      'white': '#ffffff',
      "Grays" : "#111827",
      "Tittles": "#FFB7C2",
      "PinkyNumber": "#ec4899"      },
    },
  },
  plugins: [],
}


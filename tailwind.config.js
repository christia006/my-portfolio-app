/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Poppins', 'sans-serif'], // Contoh custom font
      },
      colors: {
        primary: '#60A5FA', // Contoh warna tema
        secondary: '#A78BFA',
        dark: '#1F2937',
        light: '#F3F4F6',
      }
    },
  },
  plugins: [],
}
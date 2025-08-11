/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
  theme: {
    extend: {
      colors: {
        milk: '#FDFFF5',
        darkbrown: '#523122',// You can change this hex code to your desired color
      },
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      backgroundColor: {
        '5c5c3d': '#5c5c3d',
        '6b6b47': '#6b6b47',
    },
      borderColor: {
        '6b6b47': '#6b6b47',
      }
  },
  plugins: [],
}
}

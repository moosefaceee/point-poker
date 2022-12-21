/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      containers: {
        '2xs': '16rem',
        '3xs': '12rem',
      },
      aspectRatio: {
        '3/4': '3 / 4',
      },
    },
  },
  plugins: [
    require('@tailwindcss/container-queries'),
    require('@tailwindcss/forms'),
  ],
  darkMode: 'class',
}

/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        dark: {
          bg: '#121212',
          card: '#1E1E1E',
          text: '#E5E5E5',
          border: '#2E2E2E',
          nav: '#ADDFAD'
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
};
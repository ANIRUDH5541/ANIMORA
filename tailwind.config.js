/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#00EE00',
        secondary: '#2DDEED',
        accent: '#8CFBFA',
      },
      aspectRatio: {
        'w-3': 3,
        'h-4': 4,
      },
    },
  },
  plugins: [],
};
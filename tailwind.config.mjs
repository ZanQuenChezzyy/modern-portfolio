import { Outfit, Ovo } from 'next/font/google';

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        lightHover: '#fcf4ff',
        darkHover: '#111829', // gray.900
        darkTheme: '#030712', // gray.950
        gray: {
          50: '249, 250, 251',
          100: '243, 244, 246',
          200: '229, 231, 235',
          300: '209, 213, 219',
          400: '156, 163, 175',
          500: '107, 114, 128',
          600: '75, 85, 99',
          700: '55, 65, 81',
          800: '31, 41, 55',
          900: '17, 24, 39',
          950: '3, 7, 18',
        },
      },
      fontFamily: {
        Outfit: ["Outfit", "sans-serif"],
        Ovo: ["Ovo", "serif"],
      },
      boxShadow: {
        'black': '4px 4px 0 #000',
        'white': '4px 4px 0 #fff',
      },
      gridTemplateColumns: {
        'auto': 'repeat(auto-fit, minmax(200px, 1fr))'
      }
    },
  },
  darkMode: 'selector',
  plugins: [],
};

export default config;

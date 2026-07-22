/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1a1a2e',
        secondary: '#bfa14a',
        accent: '#f0c674',
        background: '#f9f7f1',
        textPrimary: '#ffffff',
        textSecondary: '#666666',
        white: '#ffffff'
      },
      fontFamily: {
        primary: ['Playfair Display', 'serif'],
        secondary: ['Open Sans', 'sans-serif'],
      },
      borderRadius: {
        DEFAULT: '8px',
      },
      boxShadow: {
        'card': '0 10px 30px rgba(0, 0, 0, 0.1)',
        'card-hover': '0 20px 40px rgba(0, 0, 0, 0.15)',
        'widget': '0 20px 40px rgba(0, 0, 0, 0.2)',
      }
    },
  },
  plugins: [],
}

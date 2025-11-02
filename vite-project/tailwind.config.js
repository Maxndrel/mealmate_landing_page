/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#ff6b00',
        secondary: '#1e1e1e',
        accent: '#ffffff',
        support: '#f4f4f4',
      },
    },
  },
  plugins: [],
}

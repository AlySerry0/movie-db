// tailwind.config.js
module.exports = {
  darkMode: 'class', // Enable dark mode with a class
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
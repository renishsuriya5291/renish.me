/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx}", // Adjusting to include src/app
    "./src/components/**/*.{js,ts,jsx,tsx}", // Adjusting to include src/components
    "./src/pages/**/*.{js,ts,jsx,tsx}", // Adjusting to include src/pages
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};

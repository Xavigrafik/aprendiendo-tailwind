/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {},
        screens: {
            'xs' : '0px',
            'sm' : '576px',
            'md' : '768px',
            'lg' : '992px',
            'xl' : '1200px',
            '2xl': '1400px',
    },
    plugins: [],
    }
  };
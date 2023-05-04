/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      keyframes: {
        slideIn: {
          '0%': { transform: 'translateX(100%)' },
          '100%': { transform: 'translateX(0)' },
        },

        slideOut: {
          '0%': { transform: 'translateX()' },
          '100%': { transform: 'translateX(100%)' },
        }
      },
      animation: {
        slideIn: 'slideIn 0.5s ease-in-out',
        slideOut: 'slideOut 0.5s ease-in-out',
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

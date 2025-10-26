/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#059669',
          hover: '#047857',
          light: '#d1fae5',
        },
        accent: {
          DEFAULT: '#d97706',
          hover: '#b45309',
          light: '#fef3c7',
        },
        status: {
          open: '#059669',
          'in-progress': '#d97706',
          closed: '#6b7280',
        },
      },
      maxWidth: {
        'container': '1440px',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}


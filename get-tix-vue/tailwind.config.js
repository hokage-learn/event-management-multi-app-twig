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
          DEFAULT: '#059669', // Deep green
          hover: '#047857',
          light: '#d1fae5',
        },
        accent: {
          DEFAULT: '#d97706', // Gold/Amber
          hover: '#b45309',
          light: '#fef3c7',
        },
        status: {
          open: '#059669', // Deep green
          'in-progress': '#d97706', // Gold/Amber
          closed: '#6b7280',
        },
        gray: {
          50: '#f8fafc',
          100: '#f1f5f9',
          200: '#e2e8f0',
          300: '#cbd5e1',
          400: '#94a3b8',
          500: '#64748b',
          600: '#475569',
          700: '#334155',
          800: '#1e293b',
          900: '#0f172a',
        }
      },
      maxWidth: {
        'container': '1440px',
      },
      fontFamily: {
        sans: ['Raleway', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
    },
  },
  plugins: [],
}


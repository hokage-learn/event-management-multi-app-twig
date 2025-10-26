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
          DEFAULT: '#2563eb', // Royal Blue
          hover: '#1d4ed8',
          light: '#dbeafe',
          dark: '#1e40af',
        },
        accent: {
          DEFAULT: '#7c3aed', // Purple
          hover: '#6d28d9',
          light: '#ede9fe',
        },
        secondary: {
          DEFAULT: '#ec4899', // Pink
          hover: '#db2777',
          light: '#fce7f3',
        },
        status: {
          open: '#2563eb', // Blue
          'in-progress': '#7c3aed', // Purple
          closed: '#6b7280', // Gray
        },
        gray: {
          50: '#f9fafb',
          100: '#f3f4f6',
          200: '#e5e7eb',
          300: '#d1d5db',
          400: '#9ca3af',
          500: '#6b7280',
          600: '#4b5563',
          700: '#374151',
          800: '#1f2937',
          900: '#111827',
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


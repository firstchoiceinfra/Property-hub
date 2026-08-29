/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        blueprint: {
          50: '#eef4f9',
          100: '#d6e6f2',
          400: '#3f6f95',
          600: '#1f4a68',
          700: '#173a53',
          900: '#0d2436',
        },
        brick: {
          400: '#c1653f',
          500: '#a84f2e',
          600: '#8c3f24',
        },
        concrete: {
          50: '#f7f6f3',
          100: '#ede9e2',
          200: '#ddd6ca',
          400: '#a89f8f',
          600: '#6b6355',
          800: '#3a352c',
        },
      },
      fontFamily: {
        display: ['"Fraunces"', 'serif'],
        body: ['"Inter"', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

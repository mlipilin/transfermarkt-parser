/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      animation: {
        spin: 'spin 0.75s linear infinite',
      },
      colors: {
        primary: '#1A3151',
        'primary-light': '#264064',
        'primary-lightest': '#314F77',
      },
      maxWidth: {
        main: '864px',
      },
      width: {
        container: '1280px',
        main: '864px',
      },
    },
  },
  plugins: [],
}

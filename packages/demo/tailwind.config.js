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
        'main-lg': '674px',
        'main-xl': '864px',
      },
      minWidth: {
        64: '16rem',
      },
      width: {
        'container-md': '768px',
        'container-lg': '1024px',
        'container-xl': '1280px',
        'main-lg': '672px',
        'main-xl': '864px',
      },
    },
  },
  plugins: [],
}

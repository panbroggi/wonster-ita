module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      screens: {
        short: { raw: '(max-height: 714px)' },
        xshort: { raw: '(max-height: 624px)' },
        xxshort: { raw: '(max-height: 540px)' },
      },
      colors: {
        correct: '#16AB1D',
        present: '#F5BE27',
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
}

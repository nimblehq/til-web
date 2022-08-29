module.exports = {
  content: ['./src/pages/**/*.{ts,tsx}', './src/components/**/*.{ts,tsx}'],
  theme: {
    extend: {},
  },
  plugins: [require('@tailwindcss/line-clamp'), require('daisyui')],
  daisyui: {
    themes: ['light'],
  },
};

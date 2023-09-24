/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        custom: ['ClashDisplay-Bold', 'sans-serif'],
        'custom-semibold': ['ClashDisplay-Semibold', 'sans-serif'],
      },
      colors: {
        "scheme-bg-color": '#150E28',
        "scheme-purple": '#903AFF',
        "scheme-violet": '#D434FE',
        'scheme-pink': '#EC2AD3',
        'scheme-dark': '#100B1F',
      },
    },
  },
  plugins: [],
}

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '1024px',
      xl: '1200px',
      '2xl': '1536px',
    },
    extend: {
      fontFamily: {
        inter: ['var(--font-inter)'],
        nbs: ['var(--font-nbs)'],
      },
      colors: {
        'color-background': '#FAF9F6',
        'color-border-gray': '#E2E8F0',
        'color-black': '#0F172A',
        'color-blue-400': '#98C1D9',
        'color-blue-500': '#048BA08A',
        'color-green-400': '#84B28A',
        'color-primary': '#21232E',
        'color-secondary': '#2B707B',
        'color-white': '#F9F9F9',
        'color-yellow-400': '#FEF08A',
      },
      boxShadow: {
        'primary': '0px 2px 4px 0px #00000025',
        'secondary': '0px 4px 4px 0px #00000010'
      },
      backgroundImage: {},
    },
  },
  plugins: [],
};

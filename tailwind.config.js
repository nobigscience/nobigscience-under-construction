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
        lora: ['"var(--font-lora)"'],
        playfair: ['"var(--font-playfair)"'],
      },
      colors: {
        'color-background': '#F3F3F3',
        'color-black': '#21232E',
        'color-blue-400': '#98C1D9',
        'color-blue-500': '#048BA08A',
        'color-green-400': '#84B28A',
        'color-primary': '#21232E',
        'color-secondary': '#048BA0',
        'color-white': '#F9F9F9',
      },
      boxShadow: {
        'shadow': '0px 3px 6px #00000029'
      },
      backgroundImage: {},
    },
  },
  plugins: [],
};

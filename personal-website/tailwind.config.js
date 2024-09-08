/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      forntFamily:{
        metro:['var(--font-metrophobic)']
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      blur: {
        xxs:'2px',
        xs: '7px',
      },
      width: {
        '1/19': '5.26%',
        'b':'33%',
      },
      animation:{
        waterfall: 'waterfall 55s infinite linear',
        waterfall3: 'waterfall 54s infinite linear',
        waterfall4: 'waterfall 57s infinite linear',
        waterfall5: 'waterfall 53s infinite linear',
        waterfall6: 'waterfall 43s infinite linear',
        waterfall2: 'waterfall 56s infinite linear'
      },
      keyframes:{
        waterfall:{
          '0%':{transform: 'translate(0,-50%)'},
          '100%':{transform:'translate(0,0)'}
        }
      },
      fontSize:{
        '1/19': '9vw'
      }
    },
  },
  plugins: [],
};

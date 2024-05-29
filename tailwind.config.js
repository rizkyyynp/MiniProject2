/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      screens: {
        'login1': { 'max': '900px' },
        'login2': { 'max': '1000px' },
        'login3': { 'max': '1050px' },
      },
      colors: {
        'primary': '#38d39f',
        'secondary': '#d9d9d9',
        'inputs': '#555',
        'inputs2': '#555',
        'links': '#999',
        'h2T': '#333',
      },
      backgroundImage: {
        'grad1': 'linear-gradient(to right, #32be8f, #38d39f, #32be8f)',
      },
      backgroundSize:{
        '200%': '200%',
      },
      spacing: {
        '3.75' : '15px',
        '6.25' : '25px',
        '165': '165px',
      },
      padding:{
        '1.25' : '5px',
        '.5': '0.5rem',
        '.7' : '0.7rem',
      },
      width: {
        '90': '360px',
        '125': '500px',
        '72.5': '290px',
        '100': '400px',
      },
      height:{
        '25' : '100px',
        '11.25' : '45px',
      },
      zIndex: {
        '1': '1',
      },
      gridTemplateColumns: {
        'Customcol1': 'repeat(2, 1fr)',
        'Customcol2': '7% 93%',
        'Customcol3': '1fr',
      },
      transitionDuration: {
        '.3': '.3s',
        '.5': '.5s',
      },
    },
    plugins: [],
  }
}
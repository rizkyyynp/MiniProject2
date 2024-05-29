/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': '#38d39f',
        'secondary': '#FFF0EB',
        'third': '#274546',
        'inputs': '#555',
        'inputs2': '#555',
        'links': '#999',
        'h2T': '#333',
      },
      width:{
        '12.5':'50px',
        '15':'60px',
        '25': '100px',
        '70': '280px',
        '75': '300px',
      },
      height:{
        '12.5':'50px',
      },
      boxShadow:{
        'bS1': '0 20px 35px rgba(0, 0, 0, 0.102)',
      },
      borderRadius:{
        '1/2' : '50%',
      },
      fontWeight: {
        '15px' : '15px',
      },
      fontSize: {
        '2px' : '2px',
      },
      padding: {
        '3.75' : '15px',
      },
    },
  },
  plugins: [],
}


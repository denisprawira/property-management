/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],

  theme: {

    extend: {
      colors: {

        ghostWhite: '#F9F9FC',
        //text color
        darkGrey: '#26273B',
        echoBlue: '#ACADC1',
        skyBlue: '#3D5CE6',
        orangeLight: '#FF9733',
        orangeDark: '#FF7D00',

        //chip color
        athensGreyBlue: '#F0F0F5',
        //chip status color
        green     : '#2DB986',
        yellow   : '#EFCF5D',
        maroon   : '#DE5263',

        //button
        blue: '#2767E1',
      }
    },
  },
  plugins: [],
}



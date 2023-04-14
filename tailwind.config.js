/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ['./**/*.html'],
  theme: {
    
    extend: {
      fontSize: {
        h4: '22px',
        h2: '56px',
        descr: '18px',
        dh2: '3.88vw',
        dh4: '1.52vw',
        dDescr: '1.25vw'
           
      },
      lineHeight: {
        h4: '29px',
        h2: '62px',
        descr: '25px',
        dh2: '4.30vw',
        dh4: '2.01vw',
        dDescr: '1.73vw'
      },
      padding: {
        main: '14.375vw',
        mobile: '6.15vw',
        navPadding: '69px'
      },
      margin: {
        logoMargin: '42px',
      },
      colors: {
        defaultBlack: '#222222',
      },
      screens: {
        mobile: '320px',
        tablet: '768px',
        desktop: '1441px' 
      }
    },
    fontFamily: {
      mainFont: ['Roboto', 'sans-serif']
    },
  },
  plugins: [],
}


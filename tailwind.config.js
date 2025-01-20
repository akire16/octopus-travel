/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class', // or 'media' or 'class'
  content: ['./public/index.html', './src/**/*.{html,js}'],
  theme: {
    extend: {
      backgroundImage: {
        tokyo: "url('../img/tokyo.jpg')",
        tokyoDesktop: "url('../img/tokyoDesktop.jpg')",
        nagoya: "url('../img/nagoya.jpg')",
        osaka: "url('../img/osaka.jpg')",
        okayama: "url('../img/okayama.jpg')",
        yokohama: "url('../img/yokohama.jpg')",
        kyoto: "url('../img/kyoto.jpg')",
        kobe: "url('../img/kobe.jpg')",
        hiroshima: "url('../img/hiroshima.jpg')",
        sapporo: "url('../img/sapporo.jpg')",
        kitakyushu: "url('../img/kitakyushu.jpg')",
        fukuoka: "url('../img/fukuoka.jpg')",
        nagasaki: "url('../img/nagasaki.jpg')",
        kumamoto: "url('../img/kumamoto.jpg')",
        miyazaki: "url('../img/miyazaki.jpg')"
      },
      backgroundColor: theme => ({
        ...theme('colors'),
        'primary': '#CC2D4A',
        'secondary': '#8FA206',
        'tertiary': '#61AEC9',
      }),
      textColor: {
        'primary': '#CC2D4A',
        'secondary': '#8FA206',
        'tertiary': '#61AEC9',
      },
      fontFamily: {
        Montserrat: ['Montserrat', 'sans-serif'],
      }
    },
  },
  plugins: [],
}


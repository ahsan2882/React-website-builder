module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        UB: {
          400: "#002233"
        },
        UL: {
          400: "#0066FF"
        },
        BL:{
          400: "#9fe1ff",
          600: "#3cacfe"
        }
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

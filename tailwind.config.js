

module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        UB: {
          400: "#FF6666"
        },
        UL: {
          400: "#0066FF"
        },
        BL: {
          400: "#9fe1ff",
          500: "#00c1cf",
          600: "#3cacfe"
        },
        RD: {
          500: "#c0272d"
        }

      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}

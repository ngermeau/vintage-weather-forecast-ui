module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      "background": "#DFDAC7",
      "text-color": "#11100F",
      "black": "#00000",
      "rain": "#026c80",
      "cold": "#064c72",
      "tempered": "#8db4ad",
      "warm": "#ecae7d",
      "very-warm": "#ed6335"
    },
    extend: {
      fontSize: {
        "xxs": "0.6rem"
      },
      fontFamily: {
        "modern": ['Modern Antiqua', 'cursive'],
        "new-cycle": ['News Cycle', 'serif']
      },
    },
  },
  plugins: [],
}

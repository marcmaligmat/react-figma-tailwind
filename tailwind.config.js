module.exports = {
  content: ["./src/**/*.{html,js}"],
  presets: [require("./tailwind-mypresets")],
  theme: {
    extend: {
      colors: {
        "bg-furniture": "#f2f5ff",
      },
      fontFamily: {
        mon: ["Montserrat", "sans-serif"],
      },
    },
  },
  plugins: [],
};

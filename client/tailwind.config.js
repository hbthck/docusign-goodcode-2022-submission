const colors = require("tailwindcss/colors");
module.exports = {
  content: [
    "./src/pages/LandingPage.js",
    "./src/layouts/LandingPageLayout/Navbar.jsx",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      darker: "#121217",
      dark: "#17171d",
      darkless: "#252429",
      black: "#1f2d3d",
      steel: "#273444",
      slate: "#3c4858",
      gray: colors.slate,
      muted: "#8492a6",
      smoke: "#e0e6ed",
      snow: "#f9fafc",
      white: "#ffffff",
      red: "#ec3750",
      orange: "#ff8c37",
      yellow: "#f1c40f",
      algae: "#023419",
      green: "#33d6a6",
      lightgreen: "#12e280",
      darkgreen: "#03473D",
      cyan: "#5bc0de",
      blue: "#338eda",
      purple: "#a633d6",
      twitter: "#1da1f2",
      facebook: "#3b5998",
      instagram: "#e1306c",
      text: "#1f2d3d",
      background: "#ffffff",
      elevated: "#ffffff",
      sheet: "#f9fafc",
      sunken: "#e0e6ed",
      border: "#e0e6ed",
      placeholder: "#8492a6",
      secondary: "#3c4858",
      primary: "#03473D",
      accent: "#338eda",
    },
    extend: {},
  },
  plugins: [require("@tailwindcss/line-clamp")],
};
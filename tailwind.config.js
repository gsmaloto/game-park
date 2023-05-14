const defaultTheme = require("tailwindcss/defaultTheme");
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: { xs: "475px", ...defaultTheme.screens },
      colors: {
        myBlack: "#0B0B0C",
        myGray: "#121212",
        mylightGray: "#2C2E32",
      },
    },
  },
  plugins: [require("tailwind-scrollbar-hide")],
};

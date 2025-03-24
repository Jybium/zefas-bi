// tailwind.config.js
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Neutral
        black: "#000000",
        white: "#FFFFFF",
        // Grey scale
        grey: {
          50: "#F5F5F5",
          100: "#E5E5E5",
          200: "#CCCCCC",
          300: "#B3B3B3",
          400: "#999999",
          500: "#808080",
          600: "#666666",
          700: "#4D4D4D",
          800: "#333333",
          900: "#1A1A1A",
        },
        // Brand colors (green)
        brand: {
          50: "#E6F5EC",
          100: "#C0E5D0",
          200: "#9AD5B3",
          300: "#74C596",
          400: "#4EB579",
          500: "#28A55D",
          600: "#1F8449",
          700: "#166336",
          800: "#0E4224",
          900: "#072112",
        },
        // Secondary colors (yellowish-green)
        secondary: {
          50: "#F2F5E6",
          100: "#E1E8C0",
          200: "#D0DC9A",
          300: "#C0CF74",
          400: "#B0C34E",
          500: "#9FB728",
          600: "#7F921F",
          700: "#5F6E17",
          800: "#40490E",
          900: "#202507",
        },
      },
    },
  },
  plugins: [],
};

module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Sora", "sans-serif"],
        euclidLight: "EuclidCircularB-Light",
        euclidRegular: "EuclidCircularB-Regular",
        euclidMedium: "EuclidCircularB-Medium",
        euclidSemiBold: "EuclidCircularB-SemiBold",
        euclidBold: "EuclidCircularB-Bold",
      },
      colors: {
        primary: {
          100: "#DFF6FF",
          200: "#AAD0E3",
          300: "#256D85",
          400: "#06283D",
        },
        accent: "#E9D26E",
      },
      backgroundImage: {
        hero: "url('assets/images/hero-bg.webp')",
        heroMobile: "url('assets/images/MobileBG.webp')",
      },
    },
    container: {
      padding: {
        DEFAULT: "1rem",
        xl: "0",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1100px",
      "2xl": "1540px",
    },
  },
  plugins: [],
};

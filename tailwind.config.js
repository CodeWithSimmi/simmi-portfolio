module.exports = {
  theme: {
    extend: {
     
      fontFamily: {
        cagliostro: ["Cagliostro", "sans-serif"],
      },
      animation: {
        slideIn: "slideIn 1s ease-out both",
      },
      keyframes: {
        slideIn: {
          "0%": { transform: "translateX(-100%)", visibility: "visible" },
          "100%": { transform: "translateX(0)" },
        },
      },
    },
  },
};

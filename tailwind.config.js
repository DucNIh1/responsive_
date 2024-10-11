/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        "light-coffee": "#C89F94",
      },
      safelist: [
        "animate-[fade-in_1s_ease-in-out]",
        "animate-[fade-in-down_1s_ease-in-out]",
      ],
      keyframes: {
        slideDown: {
          "0%": { transform: "translateY(-200%)" },
          "100%": { transform: "translateY(0)" },
        },
        fadeIn: {
          "0%": { opactiy: 0 },
          "100%": { opacity: 1 },
        },
        slideUp: {
          "0%": { transform: "translateY(20px)", opacity: 0 },
          "100%": { transform: "translateY(0)", opacity: 1 },
        },
      },
      animation: {
        fadeIn: "fadeIn .4s ease-in-out",
        slideUp: "slideUp .4s ease-in",
      },
    },
  },
  plugins: [],
};

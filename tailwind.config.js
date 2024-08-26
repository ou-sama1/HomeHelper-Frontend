/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Roboto", "sans-serif"],
    },
    extend: {
      colors: {
        primary: "#FD8200", // For interactive UI (buttons, arrows etc...)
        secondary: "#042134", // Mainly for Backgrounds
        tertiary: "#AA370E", // For some components, depends on consistency
        quaternary: "#808080", // For some of the texts that have a white background
      },
      width: {
        104: "26rem",
        112: "28rem",
        120: "30rem",
        128: "32rem",
        136: "34rem",
        144: "36rem",
        152: "38rem",
        160: "40rem",
        168: "42rem",
        176: "44rem",
        184: "46rem",
        288: "72rem",
      },
      height: {
        104: "26rem",
        112: "28rem",
        120: "30rem",
        128: "32rem",
        136: "34rem",
        144: "36rem",
        152: "38rem",
        160: "40rem",
        168: "42rem",
        176: "44rem",
        184: "46rem",
        288: "72rem",
      },
      borderRadius: {
        xl: "1rem",
      },
      lineHeight: {
        16: "4rem",
        24: "6rem",
        28: "7rem",
      },
      animation: {
        fadeLeft: "fadeLeft 0.5s linear",
        fadeLeft2: "fadeLeft2 0.5s linear",
        fadeRight: "fadeRight 0.5s linear",
        fadeRight2: "fadeRight2 0.5s linear",
      },
      keyframes: {
        fadeLeft: {
          "0%": { transform: "translateX(110%)", opacity: 0.1 },
          "50%": { transform: "translateX(50%)", opacity: 0.5 },
          "100%": { transform: "translateX(0)", opacity: 1 },
        },
        fadeRight: {
          "0%": { transform: "translateX(-110%)", opacity: 0.1 },
          "50%": { transform: "translateX(-50%)", opacity: 0.5 },
          "100%": { transform: "translateX(0)", opacity: 1 },
        },
        fadeLeft2: {
          "0%": { transform: "translateX(110%)", opacity: 0.1 },
          "50%": { transform: "translateX(50%)", opacity: 0.6 },
          "100%": { transform: "translateX(0)", opacity: 1 },
        },
        fadeRight2: {
          "0%": { transform: "translateX(-110%)", opacity: 0.1 },
          "50%": { transform: "translateX(-50%)", opacity: 0.6 },
          "100%": { transform: "translateX(0)", opacity: 1 },
        },
      },
    },
  },
  plugins: [],
};

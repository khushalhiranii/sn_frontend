/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        gainsboro: "#e8e8e8",
        white: "#fff",
        "foundation-red-normal": "#a90542",
        mediumvioletred: "#cf2b69",
        gray: "#919191",
        black: "#000",
        royalblue: "#0166e4",
        whitesmoke: "#f3f3f3",
      },
      spacing: {},
      fontFamily: {
        inter: "Inter",
        roboto: "Roboto",
      },
    },
    fontSize: {
      xl: "1.25rem",
      base: "1rem",
      "17xl": "2.25rem",
      "3xl": "1.375rem",
      "10xl": "1.813rem",
      inherit: "inherit",
    },
    screens: {
      mq925: {
        raw: "screen and (max-width: 925px)",
      },
      mq700: {
        raw: "screen and (max-width: 700px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
    },
  },
  corePlugins: {
    preflight: false,
  },
  plugins: [],
}


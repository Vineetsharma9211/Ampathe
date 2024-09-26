/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        whitesmoke: {
          "100": "#f7f7f7",
          "200": "#eaeaea",
        },
        primary: "#1263a7",
        white: "#fff",
        heading: "#333",
        lightblue: {
          "100": "#a8d2e0",
          "200": "#a8c5cc",
        },
        skyblue: "#86bfd2",
        steelblue: "#388acf",
        body: "#666",
        silver: "#ccb5a8",
        darkseagreen: "#abcca8",
        lightsteelblue: "#a9a8cc",
        "blue-blue-50": "#e8f0f8",
        black: "#000",
      },
      spacing: {},
      fontFamily: {
        lato: "Lato",
        "monomaniac-one": "'Monomaniac One'",
        inter: "Inter",
      },
      borderRadius: {
        "29xl": "48px",
        "24xl": "43px",
      },
    },
    fontSize: {
      base: "16px",
      "5xl": "24px",
      lgi: "19px",
      xl: "20px",
      "13xl": "32px",
      "7xl": "26px",
      "29xl": "48px",
      "10xl": "29px",
      "19xl": "38px",
      sm: "14px",
      'xxs': '0.625rem', // 10px
      inherit: "inherit",
    },
    screens: {
      mq1425: {
        raw: "screen and (max-width: 1425px)",
      },
      lg: {
        max: "1200px",
      },
      mq825: {
        raw: "screen and (max-width: 825px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
      lgcustom:{
        raw: "screen and (max-width:1250px)",
      }
    },
  },
  corePlugins: {
    preflight: false,
  },
};

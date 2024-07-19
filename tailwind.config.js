/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
    "./app.js"
  ],
  theme: {
    extend: {
      fontFamily: {
        mL: "Matter-Light",
        mR: "Matter-Regular",
        mSB: "Matter-SemiBold",
        mB: "Matter-Bold",
        mH: "Matter-Heavy",
        wY: "With-You",
        cdL: "ClashDisplay-Light",
        cdR: "ClashDisplay-Regular",
        cdM: "ClashDisplay-Medium",
        cdSB: "ClashDisplay-Semibold",
        cdB: "ClashDisplay-Bold"
      },
      colors: {
        white: "#E5E5E0",
        blackL: "#3A3733",
        blackD: "#141413"
      }
    },
  },
  plugins: [],
}

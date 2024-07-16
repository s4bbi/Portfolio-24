/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,ts,jsx,tsx}",
    "./app.js"
  ],
  theme: {
    extend: {
      fontFamily:{
        mL: "Matter-Light",
        mR: "Matter-Regular",
        mSB: "Matter-SemiBold",
        mH: "Matter-Heavy",
        wY: "With-You",
        cdL: "ClashDisplay-Light",
        cdM: "ClashDisplay-Medium",
      }
    },
  },
  plugins: [],
}


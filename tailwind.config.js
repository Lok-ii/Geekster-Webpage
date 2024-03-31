/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        darkBluePrimary : "#16252D",
        darkBlueSecondary: "#142522",
        geeksterGreenPrimary: "#29B475",
        geeksterLightGreen: "rgb(41, 180, 117, 0.1)",
        grayPrimary: "#747D82",
        halfWhite: "rgba(255, 255, 255, 0.5)",
        halfBlack: "rgba(0, 0, 0, 0.1)",
        inputPlaceholder: "#999999",
        input: "rgb(15, 13, 13, 0.1)",
        darkerGreen: "#015941",
        darkGreen: "rgb(12, 30, 27, 0.8)",
        greenGray: "#1B2C29",
        yellowText: "#FDA610",
      },
      backgroundImage: {
        shadowLinear: "linear-gradient(0deg, #29B475, #7F60F9)",
        bottomShadowLinear: "linear-gradient(100deg, #29B475, #7F60F9)",
        leftShadowLinear: "linear-gradient(40deg, #29B475, #7F60F9)",
        video: 'url("/src/assets/Images/video.png")',
      },
      boxShadow: {
        aiPowered: "0.5rem 0.2rem 1.5rem 0 #29B475"
      }
    },
  },
  plugins: [],
}
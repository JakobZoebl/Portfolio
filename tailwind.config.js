/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#0065bd",
        "primary-dark": "#005299",
        secondary: "#333",
        accent: "#00BFFF",
        "background-dark": "#000000",
        "surface-dark": "#0f1a23"
      },
      fontFamily: {
        display: ["Space Grotesk", "sans-serif"],
        body: ["Inter", "sans-serif"]
      },
      animation: {
        blob: "blob 10s infinite",
        flow: "flow 20s ease infinite",
        "fade-in": "fadeIn 1s ease-out forwards",
        "slide-up": "slideUp 1s ease-out forwards"
      },
      keyframes: {
        blob: {
          "0%": { transform: "translate(0,0) scale(1)" },
          "33%": { transform: "translate(30px,-50px) scale(1.1)" },
          "66%": { transform: "translate(-20px,20px) scale(0.9)" },
          "100%": { transform: "translate(0,0) scale(1)" }
        },
        flow: {
          "0%,100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" }
        },
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" }
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(30px)" },
          "100%": { opacity: "1", transform: "translateY(0)" }
        }
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/container-queries')
  ],
}

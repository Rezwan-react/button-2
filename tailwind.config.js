/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        wave: "wave 0.5s ease forwards",
        "slide-down": "slideDown 0.8s ease forwards",
        bounce: "bounce 1s infinite",
      },
      keyframes: {
        wave: {
          "0%": { transform: "translateY(-10px)" },
          "50%": { transform: "translateY(5px)", color: "#ff5569" },
          "100%": { transform: "translateY(0)" },
        },
        slideDown: {
          "0%": { opacity: 0, transform: "translateY(-20px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
      },
    },
    
  },
  plugins: [],
}



/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        sm400: "400px", // Ajoute un point de rupture personnalisé à 400px
      },
      boxShadow: {
        "custom-2px": "8px 8px 40px #14008e",
        "custom-3px": "20px 20px 50px #14008e",
        "custom-1.5px": "10px 10px 40px #14008e",
        "custom-2.5px": "0 0 30px 5px #14008e",
        "custom-2.2px": "0 0 30px 5px black",
        // Add more custom shadows if needed
      },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      "light",
      {
        night: {
          "base-100": "#010018", // Custom background color for the night theme
          // Add other color customizations if needed
        },
      },
      // You can add more themes here if needed
    ],
  },
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      xs: "300px",
      xsm: "500px",
      sm: "640px",
      md: "768px",
      ml: "828px",
      lg: "1024px",
      xl: "1280px",
      xxl: "1536px",
    },
    extend: {
      animation: {
        circle: "circle 6s linear infinite",
        "circle-reverse": "circle-reverse 6s linear infinite",
      },
      fontFamily: {
        sans: ["Oswald", "sans-serif"],
        bebas: ["Bebas Neue", "sans-serif"],
      },
      fontSize: {
        "8xl": "6rem", // 96px
        "9xl": "8rem", // 128px
        "10xl": "10rem", // 160px
        "12xl": "12rem", // 192px
        "15xl": "15rem", // 240px
        "20xl": "20rem", // 320px
        // Puedes seguir añadiendo tamaños aún mayores
      },
      boxShadow: {
        "text-light": "1px 1px 2px rgba(0, 0, 0, 0.2)", // Ejemplo de sombra clara
        "text-dark": "2px 2px 4px rgba(0, 0, 0, 0.5)", // Ejemplo de sombra oscura
      },
    },
    plugins: [
      function ({ addUtilities }) {
        addUtilities({
          ".text-shadow": {
            textShadow: "1px 1px 2px rgba(1, 0, 0, 0.3)", // Personaliza esta sombra
          },
          ".text-shadow-lg": {
            textShadow: "2px 2px 4px rgba(0, 0, 0, 0.5)", // Personaliza esta sombra
          },
        });
      },
    ],
  },
};

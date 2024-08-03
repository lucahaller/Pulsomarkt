/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "node_modules/flowbite-react/lib/esm/**/*.js",
  ],
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
        nunito: ["Nunito", "sans-serif"],
        inter: ["Inter", "sans-serif"],
        zain: ["Zain", "sans-serif"],
        raleway: ["Raleway", "sans-serif"],
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
    plugins: [require("flowbite/plugin"), require("tw-elements/dist/plugin")],
  },
};

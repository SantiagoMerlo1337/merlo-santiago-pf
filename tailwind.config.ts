/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
      "./pages/**/*.{ts,tsx}",
      "./components/**/*.{ts,tsx}",
      "./app/**/*.{ts,tsx}",
      "./src/**/*.{ts,tsx}",
  ],
  theme: {
      container: {
          center: true,
          padding: {
            DEFAULT: "2rem", // Padding de 2rem para pantallas pequeñas
            xl: "18rem", // Incrementa el padding en pantallas grandes (lg y mayores)
          },
          screens: {
            sm: "100%", // Para pantallas pequeñas
            md: "100%", // Para pantallas medianas
            lg: "1024px", // Para pantallas grandes
            xl: "1280px", // Para pantallas extra grandes
            "2xl": "1400px", // Para pantallas de 2XL, como especificaste
          },
      },
      extend: {
          colors: {
              primary: {
                  500: "#F90A59",
              },
              secondary: {
                  500: "#FE8B05",
              },
              tertiary: {
                  500: "#EFEECC",
              }
          },
          fontFamily: {
              inter: ["var(--font-inter)"],
          },
          screens: {
              xs: "420px",
          },
          keyframes: {
              "accordion-down": {
                  from: { height: 0 },
                  to: { height: "var(--radix-accordion-content-height)" },
              },
              "accordion-up": {
                  from: { height: "var(--radix-accordion-content-height)" },
                  to: { height: 0 },
              },
          },
          animation: {
              "accordion-down": "accordion-down 0.2s ease-out",
              "accordion-up": "accordion-up 0.2s ease-out",
          },
      },
  },
  plugins: [
      require("tailwindcss-animate"),
      require("@tailwindcss/typography"),
  ],
};
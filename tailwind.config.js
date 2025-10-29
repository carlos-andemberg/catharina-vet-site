/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#2563EB", // Azul mais vibrante
        secondary: "#16A34A", // Verde mais vivo
        // cor de marca suave usada para fundos (rgb(170,213,171))
        brandGreen: "#AAD5AB",
        accent: "#F59E0B", // Amarelo âmbar acolhedor
        tertiary: "#EC4899", // Rosa suave
        highlight: "#8B5CF6", // Violeta para destaques
        // cor roxa usada em sobre/benefícios/contato (rgb(72,86,142))
        brandPurple: "#48568E",
        background: {
          light: "#F0F9FF", // Azul muito claro para fundos
          green: "#AAD5AB", // Verde suave de fundo
          purple: "#48568E",
          warm: "#FEF3C7", // Amarelo muito claro para fundos
        }
      },
    },
  },
  plugins: [],
}
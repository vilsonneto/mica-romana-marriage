import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      animation: {
        fadeIn: "fadeIn 2s ease-in-out",
      },
      keyframes: {
        fadeIn: {
          "0%": { backgroundColor: "#F4E04D" }, // Cor bg-lemon
          "100%": { backgroundColor: "rgba(247, 230, 0, 0)" }, // Transparente
        },
      },
      colors: {
        lemon: {
          DEFAULT: "#F4E04D", // Limão Siciliano
          light: "#FFF9C4", // Tonalidade mais clara
          dark: "#B19E10", // Tonalidade mais escura
        },
        white: "#FFFFFF", // Branco
        black: "#000000", // Preto
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        notice: "url('/img/notice.jpg')",
        mainPhoto: "url('/img/main-photo.jpg')",
      },
      fontFamily: {
        minerva: ["minerva-modern"],
      },
      gridTemplateColumns: {
        // Simple 16 column grid
        "16": "repeat(16, minmax(0, 1fr))",

        // Complex site-specific column configuration
        footer: "200px minmax(900px, 1fr) 100px",
      },
    },
  },
  plugins: [],
};
export default config;

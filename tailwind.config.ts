import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
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
      },
      fontFamily: {
        minerva: ["minerva-modern", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;

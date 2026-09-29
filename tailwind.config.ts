import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Roxo Sofisticado (Acento Principal)
        brand: {
          50: "#F5F3FF",
          100: "#EDE9FE",
          200: "#DDD6FE",
          300: "#C4B5FD",
          400: "#A78BFA",
          500: "#8B5CF6",
          600: "#7C3AED", // Roxo principal vibrante
          700: "#6D28D9",
          800: "#5B21B6",
          900: "#4C1D95",
          950: "#2E1065",
        },
        // Superfícies Light Mode (Branco Suave / Off-white)
        light: {
          bg: "#F8FAFC",
          card: "#FFFFFF",
          surface: "#F1F5F9",
          border: "#E2E8F0",
          text: "#0F172A",
          muted: "#475569",
        },
        // Superfícies Dark Mode (Grafite Escuro)
        dark: {
          bg: "#0F1218",
          card: "#171B24",
          surface: "#1F2430",
          border: "#262D3D",
          text: "#F8FAFC",
          muted: "#94A3B8",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        heading: ["var(--font-dm)", "sans-serif"],
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        marquee: "marquee 22s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-8px)" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;

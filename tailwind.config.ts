import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Scandinavian Corporate Futurism Palette
        navy: {
          DEFAULT: "#0A2540",
          50: "#0D2E4D",
          100: "#0A2540",
          900: "#061729",
        },
        stone: {
          DEFAULT: "#8A8D8F",
          light: "#A8ABAE",
          dark: "#6B6E70",
        },
        ice: {
          DEFAULT: "#F8F9FA",
          warm: "#F1F3F5",
          cool: "#E9ECEF",
        },
        aurora: {
          DEFAULT: "#00E5FF",
          glow: "#00E5FF33",
          muted: "#00B8CC",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)"],
        mono: ["var(--font-space-mono)"],
      },
      animation: {
        "spin-slow": "spin 20s linear infinite",
        "float": "float 6s ease-in-out infinite",
        "pulse-glow": "pulse-glow 2s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-20px)" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};

export default config;

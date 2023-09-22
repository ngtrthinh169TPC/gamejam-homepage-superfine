import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        gamejam: {
          blue: { 100: "#1991E1", 200: "#19AFF5" },
          purple: { 100: "#8764FA", 200: "#CD82FF" },
        },
      },
    },
  },
  plugins: [],
} satisfies Config;

import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      keyframes: {
        starAnimation: {
          '0%': { backgroundPosition: '0 0' },
          '100%': { backgroundPosition: '10000px 5000px' },
        },
      },
      animation: {
        starAnimation: 'starAnimation 400s linear infinite',
        'spin-slow': 'spin 10s linear infinite',
      },
    },
  },
  plugins: [],
};
export default config;

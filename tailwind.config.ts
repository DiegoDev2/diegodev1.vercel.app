import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
  		keyframes: {
  			starAnimation: {
  				'0%': {
  					backgroundPosition: '0 0'
  				},
  				'100%': {
  					backgroundPosition: '10000px 5000px'
  				}
  			},
  			gradient: {
  				to: {
  					backgroundPosition: 'var(--bg-size) 0'
  				}
  			}
  		},
  		animation: {
  			starAnimation: 'starAnimation 400s linear infinite',
  			'spin-slow': 'spin 10s linear infinite',
  			gradient: 'gradient 8s linear infinite'
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		colors: {}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;

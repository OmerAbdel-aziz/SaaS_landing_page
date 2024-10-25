import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        padding: '1rem', 
        center: true,
      },
      backgroundImage: {
        'custom-gradient': 'linear-gradient(90deg, rgba(252,214,255,.7) 0%, rgba(41,216,255,.7) 25%, rgba(252,252,129,.7) 50%, rgba(248,154,191,.7) 75%, rgba(252,214,255,.7) 100%)',
      },
    },
  },
  plugins: [],
};
export default config;

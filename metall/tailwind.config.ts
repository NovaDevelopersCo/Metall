import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      minWidth: {
        '22': '22px',
      },
      width: {
        '22': '22px',
        '183': '183px',
        '407': '407px',
      },
    },
  },
  screens: {
    'sm': {'max': '639px'},
    'md': {'max': '767px'},
  },
  plugins: [],
};
export default config;

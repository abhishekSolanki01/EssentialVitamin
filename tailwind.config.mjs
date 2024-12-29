/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      // height: theme => ({
      //   "screen/2": "50vh",
      //   "screen*2": "vh*2",
      //   "screen/3": "calc(100vh / 3)",
      //   "screen/4": "calc(100vh / 4)",
      //   "screen/5": "calc(100vh / 5)",
      // }),
    },
  },
  plugins: [],
};

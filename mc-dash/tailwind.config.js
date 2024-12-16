/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      dropShadow: {
        xlp: "0 8px 5px rgb(236, 72, 153, 0.65)"
      }
    },
  },
  plugins: [],
}


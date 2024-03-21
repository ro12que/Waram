/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx"
  ],
  theme: {
    extend: {
      colors: {
        primary: "#D9D9D9",
        secundary: "#254749",
        terceary: "#526C6D",
        ligth: "F2F2F2",
        shadow: "1E1E1E"
      },
      fontFamily: {
        title: "Bebas Neue",
        subtitle: "Bebas Neue",
        text: "IBM Plex Sans Condensed",
      }
    },
  },
  plugins: [],
}


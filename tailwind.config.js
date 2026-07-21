/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#1B4965",
          dark: "#133549",
          light: "#2B5F7F",
          container: "#1B4965",
          fixed: "#D8E9F1",
          "fixed-dim": "#B5D5E4"
        },
        secondary: {
          DEFAULT: "#2B5F7F",
          container: "#E8F1F5",
          fixed: "#D8E9F1",
          "fixed-dim": "#B5D5E4"
        },
        accent: {
          DEFAULT: "#1B4965",
          dark: "#133549",
          light: "#2B5F7F"
        },
        surface: {
          DEFAULT: "#FCF9F8",
          container: "#F0EDED",
          low: "#F6F3F2",
          high: "#EAE7E7",
          highest: "#E4E2E1"
        },
        on: {
          primary: "#FFFFFF",
          surface: "#1B1C1C",
          "surface-variant": "#4C454A"
        }
      },
      fontFamily: {
        headline: ["Hanken Grotesk", "sans-serif"],
        body: ["Inter", "sans-serif"]
      },
      maxWidth: {
        "container-max": "1280px"
      },
      spacing: {
        "section-padding": "80px",
        "margin-desktop": "40px",
        "margin-mobile": "16px",
        gutter: "24px"
      }
    },
  },
  plugins: [],
}

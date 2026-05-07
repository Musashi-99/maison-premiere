/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: "#1A1A1A",
        "on-primary": "#ffffff",
        background: "#F9F5F1",
        surface: "#F9F5F1",
        "on-surface": "#1A1A1A",
        "on-surface-variant": "#2D2D2D",
        outline: "#8E6E45",
        secondary: "#C5A059",
        "surface-container-low": "#EFEBE7",
        "surface-bright": "#ffffff",
        "outline-variant": "#C5A059"
      },
      borderRadius: {
        DEFAULT: "0",
        lg: "0",
        xl: "0",
        full: "0"
      },
      spacing: {
        "margin-edge": "48px",
        "element-gap": "32px",
        gutter: "24px",
        "section-gap": "96px",
        unit: "4px"
      },
      fontFamily: {
        "display-xl": ["Bodoni Moda", "serif"],
        "label-uppercase": ["Manrope", "sans-serif"],
        navigation: ["Manrope", "sans-serif"],
        "body-lg": ["Manrope", "sans-serif"],
        "headline-lg": ["Bodoni Moda", "serif"],
        "headline-md": ["Bodoni Moda", "serif"],
        "body-md": ["Manrope", "sans-serif"]
      },
fontSize: {
        "display-xl": ["104px", { lineHeight: "1.0", letterSpacing: "-0.02em", fontWeight: "400" }],
        "label-uppercase": ["10px", { lineHeight: "1.2", letterSpacing: "0.15em", fontWeight: "400" }],
        "navigation": ["12px", { lineHeight: "1.0", letterSpacing: "0.15em", fontWeight: "400" }],
        "body-lg": ["15px", { lineHeight: "1.8", fontWeight: "300" }],
        "headline-lg": ["72px", { lineHeight: "1.0", letterSpacing: "-0.03em", fontWeight: "400" }],
        "headline-md": ["32px", { lineHeight: "1.1", letterSpacing: "-0.02em", fontWeight: "400" }],
        "body-md": ["14px", { lineHeight: "1.8", fontWeight: "300" }]
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}
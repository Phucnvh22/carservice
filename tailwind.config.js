module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    container: { center: true, padding: "1rem" },
    extend: {
      colors: {
        porsche: {
          black: "var(--porsche-black)",
          white: "var(--porsche-white)",
          grey: {
            90: "var(--porsche-grey-90)",
            80: "var(--porsche-grey-80)",
            40: "var(--porsche-grey-40)",
            20: "var(--porsche-grey-20)",
            10: "var(--porsche-grey-10)",
            5: "var(--porsche-grey-5)",
          },
          red: "var(--porsche-red)",
          hoverRed: "var(--porsche-hover-red)",
          focusBlue: "var(--porsche-focus-blue)",
        },
        brand: {
          50: "#fff1f3",
          100: "#ffe0e5",
          200: "#ffb3bf",
          300: "#ff8092",
          400: "#f24d64",
          500: "#e11935",
          600: "var(--porsche-red)",
          700: "var(--porsche-hover-red)",
        },
        accent: {
          50: "var(--porsche-grey-5)",
          100: "var(--porsche-grey-10)",
          200: "var(--porsche-grey-20)",
          300: "var(--porsche-grey-40)",
          500: "var(--porsche-grey-80)",
          600: "var(--porsche-grey-90)",
          700: "var(--porsche-black)",
        },
      },
      borderRadius: {
        "2xl": "0.75rem",
        "3xl": "0.75rem",
      },
    },
  },
  plugins: [],
}

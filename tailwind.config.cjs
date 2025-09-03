module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        bg: "#0a0a0a",
        fg: "#fafafa",
        muted: "#9ca3af",
        accent: "#ffffff",
      },
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        mono: ["Space Mono", "monospace"],
      },
    },
  },
  plugins: [],
};

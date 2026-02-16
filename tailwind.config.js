module.exports = {
  content: [
    "./{components,hooks,layouts,pages,app}/**/*.{ts,tsx,js,jsx}",
    "../../shared/{components,hooks,layouts,pages}/**/*.{ts,tsx,js,jsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      borderRadius: {
        none: "0",
        sm: "0",
        DEFAULT: "0",
        md: "0",
        lg: "0",
        xl: "0",
        "2xl": "0",
        "3xl": "0",
        full: "0",
      },
      colors: {
        background: "hsl(var(--background))",
        "background-secondary": "hsl(var(--background-secondary))",
        "background-tertiary": "hsl(var(--background-tertiary))",
        "background-quaternary": "hsl(var(--background-quaternary))",
        stroke: "hsl(var(--stroke))",
        "stroke-secondary": "hsl(var(--stroke-secondary))",
        accent: "hsl(var(--accent))",
        "accent-secondary": "hsl(var(--accent-secondary))",
        content: "hsl(var(--content))",
        "content-secondary": "hsl(var(--content-secondary))",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

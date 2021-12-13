module.exports = {
  content: ["./app/**/*.{ts,tsx}"],
  darkMode: "media", // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {},
  plugins: [require("@tailwindcss/forms")],
};

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  purge: ["./*.html"],
  theme: {
    extend: {},
  },
  plugins: [],
  variants: {
    extend: {
      backgroundImage: ["hover", "focus"],
    },
  },
};

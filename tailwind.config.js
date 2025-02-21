/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    extend: {
      colors: {
        // NOT GETTING USED RN TODO IMPLEMENT IN CODE
        primary: {
          DEFAULT: "#1E40AF",
          dark: "#1E3A8A",
        },
        secondary: {
          DEFAULT: "#DB2777",
          dark: "#BE185D",
        },
        accent: {
          DEFAULT: "#F59E0B",
          dark: "#D97706",
        },
        gray: {
          DEFAULT: "#6B7280",
          dark: "#4B5563",
        },
      },
    },
  },
  plugins: [],
};

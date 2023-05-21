/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ["./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: false,
  theme: {
    extend: {
      colors: {
        "custom-gray": "#e0e0e0",
      },
      boxShadow: {
        custom: "15px 15px 22px #bababa, -15px -15px 22px #ffffff",
      },
      borderRadius: {
        custom: "40px",
      },
    },
  },
  plugins: [],
};

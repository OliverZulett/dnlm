module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        alata: ["Alata", "sans-serif"],
        opensans: ["Open Sans", "sans-serif"],
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require("daisyui")
  ],
  daisyui: {
    themes: [
      {
        netflix: {
          "primary": "#f22e44",
          "secondary": "#ffffff",
          "accent": "#7e6d70",
          "neutral": "#cabdad",
          "base-100": "#131313",
          "info": "#118ab2",
          "success": "#06d6a0",
          "warning": "#ffd166",
          "error": "#ef476f",
        },
      },
    ],
  },
};

/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      Black: "hsl(0, 0%, 0%)",
      White: "hsl(255, 100%, 100%)",
      ModerateCyan: "hsl(176, 50%, 47%)",
      DarkCyan: "hsl(176, 72%, 28%)",
      DarkGray: "hsl(0, 0%, 48%)",
    },
    screens: {
      sm: { max: "480px" },
      md: { max: "678px" },
    },
    backgroundImage: {
      "hero-desktop": "url('/assets/image-hero-desktop.jpg')",
    },
    extend: {},
  },
  plugins: [],
};

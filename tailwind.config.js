const themeShape = {
  "--rounded-box": "1rem", // border radius rounded-box utility class, used in card and other large boxes
  "--rounded-btn": "9099999rem", // border radius rounded-btn utility class, used in buttons and similar element
  "--rounded-badge": "2rem", // border radius rounded-badge utility class, used in badges and similar
  "--animation-btn": "0.25s", // duration of animation when you click on button
  "--animation-input": "0.2s", // duration of animation for inputs like checkbox, toggle, radio, etc
  "--btn-focus-scale": "0.95", // scale transform of button when you focus on it
  "--border-btn": "1px", // border width of buttons
  "--tab-border": "1px", // border width of tabs
  "--tab-radius": "0.5rem", // border radius of tabs
};

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./app.vue",
    "./error.vue",
  ],
  theme: {
    fontFamily: {
      sans: ["Fira Sans"],
    },
    extend: {},
  },
  plugins: [require("daisyui"), require("@tailwindcss/container-queries")],
  daisyui: {
    themes: [
      {
        dark: {
          primary: "#71af63",
          secondary: "#8f235c",
          accent: "#d14361",
          neutral: "#e8d7f5",
          "base-100": "#060408",
          ...themeShape,
          ".drop-shadow-primary": {
            filter: "drop-shadow(0 3px 3px #71af63)",
          },
          ".drop-shadow-base-100": {
            filter: "drop-shadow(0 3px 3px #060408)",
          },
          ".drop-shadow-neutral": {
            filter: "drop-shadow(0 3px 3px #e8d7f5)",
          },
        },
      },
    ],
  },
};

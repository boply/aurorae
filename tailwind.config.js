/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {}
  },
  daisyui: {
    themes: [
      {
        mytheme: {
          primary: "#3383FF",
          secondary: "#e5e7eb",
          accent: "#37cdbe",
          neutral: "#3d4451",
          "base-100": "#ffffff",

          "--rounded-box": ".25rem",
          "--rounded-btn": ".25rem",
          "--btn-text-case": "default"
        },
      },
    ],
  },
  plugins: [require("daisyui")],
};
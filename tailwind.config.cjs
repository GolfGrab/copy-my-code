/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}"],
  safelist: [{
    pattern: /hljs+/,
  }],
  theme: {
    hljs: {
      theme: 'atom-one-dark-reasonable',
    },
    extend: {},
  },
  plugins: [
    require('tailwind-highlightjs'),
    require("daisyui")
  ],
};

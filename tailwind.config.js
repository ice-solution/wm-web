/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
  ],
  theme: {
    extend: {
      colors: {
        'wingman-blue': '#1A365D',
        'wingman-light-blue': '#ADD8E6',
        'wingman-orange': '#FF6B35',
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false,
  },
}



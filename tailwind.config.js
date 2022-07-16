/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {

      backgroundImage: {
        "bg1": "url('/assets/Union.png')",
        "bg2": "url('/assets/Union2.png')",
        "bg3": "url('/assets/Union3.png')",
      },
      animation: {
        'spin-slow': 'spin 9s linear infinite',
        'spin-veryslow': 'spin 0s linear infinite',
        'bounce-slow': 'bounce 2s infinite',
        
      },
    },
  },
  plugins: [],
}
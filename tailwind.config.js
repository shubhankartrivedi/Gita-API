/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
   extend: {
    animation: {
      "fade-in": "fadeIn 5s ease-in-out",
      "fade-in-simple": "fadeInSimple 1s ease-out",
      "pop-in": "popIn 8s ease-in-out",
      "fade-out": "fadeOut 300ms ease-in-out",
    }, 
    keyframes: () => ({
      
    }),
   }
  },
  plugins: [
    require("tailwindcss-inner-border"),
    // ...
  ],
}

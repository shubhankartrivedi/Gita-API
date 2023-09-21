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
      "pop-in": "popIn 8s ease-in-out",
    }, 
    keyframes: () => ({
      fadeIn: {
        "0%": { opacity: 0, transform: "scale(100%)" },
        "100%": { opacity: 1, transform: "scale(200%)"}
      },
      popIn: {
        "0%": { filter: "blur(20px)", opacity: 0 },
        "80%": { filter: "blur(20px)", opacity: 0 },
        "100%": { filter: "blur(0px)", opacity: 1}
      }
     
    }),
   }
  },
  plugins: [
    require("tailwindcss-inner-border"),
    // ...
  ],
}

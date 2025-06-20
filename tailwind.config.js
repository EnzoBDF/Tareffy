/**
 * @type {import('tailwindcss').Config}
 */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
          sans: [ 'Arial', 'Helvetica', 'sans-serif'],
          libre: ['"Libre Franklin"'],
          inter: ['Inter', 'sans-serif'],  
          k2d: ['K2D', 'sans-serif'],    
      },
    },
  },
  plugins: [],
};
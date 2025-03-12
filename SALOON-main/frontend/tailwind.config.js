/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
}



// /** @type {import('tailwindcss').Config} */
// export default {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [require('daisyui')],
//   daisyui: {
//     styled: true, // Allow DaisyUI to style
//     themes: true, // Allow themes
//     base: true,   // Default Tailwind CSS base styles
//     utils: true,  // Enable utility classes from DaisyUI
//     logs: false,  // Disable logs
//     rtl: false,   // Right-to-left support
//     prefix: "daisy-", // Add a prefix to avoid conflict with your classes
//   }
// };

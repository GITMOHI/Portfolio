/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        heading: ['Poppins', 'sans-serif'],
        display: ['"DM Serif Display"', 'Georgia', 'serif'],
      },
      colors: {
        brand: {
          DEFAULT: '#5BC3D5',
          hover: '#398d9c',
          mid: '#4a9fb0',
        },
        ink: {
          DEFAULT: '#3C3C3C',
          dark: '#222121',
        },
        sidebar: '#377681',
        portfolio: {
          DEFAULT: '#EEA73B',
          hover: '#d89430',
        },
        resume: {
          DEFAULT: '#54b689',
          hover: '#2c845b',
        },
        surface: {
          muted: '#FAFAFA',
          warm: '#FFF5E6',
          gradFrom: '#f8f9fa',
          gradTo: '#e9ecef',
        },
        filter: {
          muted: '#999898',
        },
      },
      boxShadow: {
        soft: '0 4px 24px -4px rgba(15, 23, 42, 0.08)',
        card: '0 1px 3px rgba(15, 23, 42, 0.06), 0 8px 24px -8px rgba(15, 23, 42, 0.08)',
      },
    },
  },
  plugins: [require("daisyui")],
}


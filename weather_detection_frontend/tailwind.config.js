/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'white': '#ffffff',
      'purple': '#3f3cbb',
      'midnight': '#121063',
      'metal': '#565584',
      'tahiti': '#3ab7bf',
      'silver': '#ecebff',
      'bubble-gum': '#ff77e9',
      'bermuda': '#78dcca',
      'navbartext': '0EA5E9',
      'gray-800': '#1f2937',
      'gray-700': '#374151',
      'gray-600': '#4b5563',
      'gray-500': '#6b7280',
      'gray-200': '#e2e8f0',
      'gray-100': '#f8fafc',
      'gray-400': '#94a3b8',
      'blue-200': '#a5f3fc',
      'blue-300': '#93c5fd',
      'blue-500': '#3b82f6',
      'blue-800': '#1e40af',
      'blue-400': '#60a5fa',
      'navbar': '#0175a3',
      'yellow-400': '#facc15',
      'red-800': '#991b1b',
      'cyan-400': '#5eead4',
      'edit-con-bg': '#0464FC'
    },
    extend: {
      blur: {
        xs: '2px',
      }
    },
  },
  plugins: [],
}

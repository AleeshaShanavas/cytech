export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        kienexBlue: '#0A2463',
        navyBg: '#0A2463',
        lightBg: '#E6F0FF',
      },
      boxShadow: {
        soft: '0 12px 30px rgba(11, 61, 145, 0.10)',
        glow: '0 0 22px rgba(11, 61, 145, 0.28)',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

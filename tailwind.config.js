/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    container: {
      center: true,
      padding: { DEFAULT: '1.25rem', sm: '2rem', lg: '4rem', xl: '5rem' },
    },
    screens: { sm: '640px', md: '768px', lg: '1024px', xl: '1280px', '2xl': '1440px' },
    extend: {
      colors: {
        cream: '#fff9dc',
        dark: { DEFAULT: '#231d00', 2: '#3a3009' },
        gold: { DEFAULT: '#e0d08c', soft: '#fff1b8' },
        ink: '#1c1807',
        muted: '#6b664f',
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', '"Segoe UI"', 'Roboto', 'sans-serif'],
      },
      backgroundImage: {
        'grad-dark': 'linear-gradient(180deg, #231d00 0%, #3a3009 100%)',
        'grad-card': 'linear-gradient(180deg, #2c2503 0%, #433809 100%)',
        'grad-hero': 'linear-gradient(180deg, #211b00 0%, #2a2203 50%, #4b3e0b 100%)',
        'grad-stat': 'radial-gradient(120% 100% at 80% 0%, #4a3f10 0%, #231d00 60%)',
        'grad-faq': 'radial-gradient(120% 100% at 80% 0%, #5a4d14 0%, #231d00 65%)',
        'grad-why': 'radial-gradient(100% 80% at 50% 100%, #4a3f10 0%, #231d00 70%)',
        'grad-fade': 'linear-gradient(180deg, rgba(255,249,220,0) 0%, #fff9dc 92%)',
        'grad-gold-text': 'linear-gradient(180deg, #e3d493 0%, #cdbb6c 100%)',
        'grad-submit': 'linear-gradient(90deg, #231d00 0%, #3a3009 100%)',
      },
      keyframes: {
        fade: { from: { opacity: '0', transform: 'translateY(8px)' }, to: { opacity: '1', transform: 'none' } },
      },
      animation: { fade: 'fade 0.5s ease' },
    },
  },
  plugins: [],
}

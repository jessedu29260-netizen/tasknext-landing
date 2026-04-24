/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html', './**/*.html'],
  theme: {
    extend: {
      colors: {
        void: '#050507',
        surface: '#0a0a0f',
        glass: 'rgba(255,255,255,0.03)',
        'glass-border': 'rgba(255,255,255,0.08)',
        indigo: { 400: '#818CF8', 500: '#6366F1', 600: '#4F46E5' },
        orchid: { 400: '#C084FC', 500: '#A855F7' },
        mint: { 400: '#34D399' },
        rose: { 400: '#FB7185' },
        amber: { 400: '#FBBF24' },
      },
      fontFamily: {
        display: ['-apple-system', 'BlinkMacSystemFont', 'SF Pro Display', 'Inter', 'system-ui', 'sans-serif'],
        body: ['-apple-system', 'BlinkMacSystemFont', 'SF Pro Text', 'Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        lift: '0 24px 60px rgba(129,140,248,0.18)',
        'lift-sm': '0 12px 30px rgba(129,140,248,0.12)',
        seal: '0 0 60px rgba(251,191,36,0.18)',
      },
      keyframes: {
        ventStream: {
          '0%': { strokeDashoffset: '2000', opacity: '0' },
          '20%': { opacity: '0.5' },
          '80%': { opacity: '0.5' },
          '100%': { strokeDashoffset: '0', opacity: '0' },
        },
        conicRotate: { from: { transform: 'rotate(0deg)' }, to: { transform: 'rotate(360deg)' } },
        tickerScroll: { from: { transform: 'translateX(0)' }, to: { transform: 'translateX(-50%)' } },
        priceGlow: {
          '0%': { transform: 'rotate(0deg) scale(1)' },
          '50%': { transform: 'rotate(180deg) scale(1.04)' },
          '100%': { transform: 'rotate(360deg) scale(1)' },
        },
      },
      animation: {
        'vent-stream': 'ventStream 14s ease-in-out infinite',
        'conic-rotate': 'conicRotate 12s linear infinite',
        'ticker': 'tickerScroll 40s linear infinite',
        'price-glow': 'priceGlow 16s linear infinite',
      },
    }
  },
  plugins: [],
}

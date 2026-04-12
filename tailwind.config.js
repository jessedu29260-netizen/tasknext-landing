/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./*.html'],
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
    }
  },
  plugins: [],
}

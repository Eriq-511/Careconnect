module.exports = {
  content: [
    './index.html',
    './src/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['Lora', 'Georgia', 'serif'],
        body:    ['DM Sans', 'system-ui', 'sans-serif'],
      },
      colors: {
        primary: {
          50:  '#F0F6FF',
          100: '#DBEAFE',
          200: '#BFDBFE',
          400: '#60A5FA',
          500: '#3B82F6',
          600: '#2563EB',
          700: '#1D4ED8',
          800: '#1E40AF',
          900: '#1E3A8A',
        },
        warm:  { 50:'#FDFAF7', 100:'#F5F0E8', 200:'#E8DDD0', 400:'#A89580', 700:'#5C4A3A', 900:'#2C1F12' },
        amber: { DEFAULT:'#F59E0B', light:'#FEF3C7' },
      },
      borderRadius: { xl:'1rem', '2xl':'1.5rem', '3xl':'2rem' },
      boxShadow: {
        'warm-sm': '0 1px 4px rgba(44,31,18,0.06)',
        'warm-md': '0 4px 16px rgba(44,31,18,0.10)',
        'warm-lg': '0 16px 48px rgba(44,31,18,0.14)',
        'cta':     '0 4px 20px rgba(15,118,110,0.30)',
      },
    },
  },
  plugins: [],
};

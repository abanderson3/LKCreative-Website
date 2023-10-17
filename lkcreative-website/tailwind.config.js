/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      keyframes: {
        'spin-slow': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        },
        'rotate-img': {
          '0%': { transform:'rotate(0deg)' },
          '25%': { transform:'rotate(-90deg)' },
          '50%': { transform:'rotate(-180deg)' },
          '75%': { transform:'rotate(-270deg)' },
          '100%': { transform:'rotate(-360deg)' },
        }
      },
      animation: {
        'spin-slow': 'spin-slow 13s linear infinite',
        'rotate-img': 'rotate-img 13s linear infinite'
      },
      spacing: {
        '100': '28rem',
        '116': '30rem',
        '128': '32rem',
      },
      fontFamily: {
        lora: ['var(--font-lora)'],
        josefine: ['var(--font-josefine)']
      },
      colors: {
        customEgg: '#EBF1FA',
        customMint: '#90BAAD',
        customPlum: '#450920',
        customPink: '#DA627D',
        customRberry: '#A53860'
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
  },
  plugins: [],
}

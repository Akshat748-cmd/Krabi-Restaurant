/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        ivory: {
          50: '#FDFCF9',
          100: '#FBF9F5',
          200: '#F4EFE6',
          300: '#E8E0D2',
          DEFAULT: '#FBF9F5',
        },
        espresso: {
          950: '#0B0A09',
          900: '#12100E',
          850: '#1A1815',
          800: '#26221E',
          700: '#3D3833',
          DEFAULT: '#12100E',
        },
        burgundy: {
          900: '#2A0B12',
          800: '#3E101B',
          700: '#541726',
          DEFAULT: '#3E101B',
        },
        gold: {
          300: '#E6CFAB',
          400: '#D5B888',
          500: '#C5A875',
          600: '#A98B58',
          DEFAULT: '#C5A875',
        },
      },
      fontFamily: {
        serif: ['var(--font-cormorant)', 'Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['var(--font-jakarta)', 'Plus Jakarta Sans', 'Inter', 'sans-serif'],
      },
      maxWidth: {
        '8xl': '88rem',
        '9xl': '96rem',
      },
      letterSpacing: {
        'ultra-wide': '0.25em',
        'super-wide': '0.35em',
      },
      animation: {
        'fade-in': 'fadeIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        'marquee': 'marquee 35s linear infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(12px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
    },
  },
  plugins: [],
};

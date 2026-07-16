/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        forest: {
          50: '#E8F0EC',
          100: '#D1E1D9',
          200: '#A3C3B3',
          300: '#75A58D',
          400: '#478767',
          500: '#2E5540',
          600: '#264A38',
          700: '#1F3A2E',
          800: '#172B23',
          900: '#0F1C17',
        },
        gold: {
          50: '#FDF8EF',
          100: '#F9ECD5',
          200: '#F3D9AB',
          300: '#EDC681',
          400: '#D8BC82',
          500: '#C8A66A',
          600: '#B08E50',
          700: '#8A6F3E',
          800: '#64502C',
          900: '#3E321A',
        },
        beige: {
          50: '#FDFCFA',
          100: '#F4EFE5',
          200: '#EBE0CF',
          300: '#E2D1BA',
          400: '#D9C2A5',
          500: '#C4A882',
          600: '#AF8E5F',
          700: '#8B714A',
          800: '#675435',
          900: '#433720',
        },
        wood: {
          50: '#F5EDE3',
          100: '#EBD9C6',
          200: '#D7B38D',
          300: '#C38D54',
          400: '#AF7A3F',
          500: '#9B6A3A',
          600: '#7D5530',
          700: '#5F4026',
          800: '#412B1C',
          900: '#231612',
        },
      },
      fontFamily: {
        display: ['Playfair Display', 'Cormorant Garamond', 'serif'],
        body: ['Inter', 'Manrope', 'sans-serif'],
      },
      borderRadius: {
        'card': '20px',
        'btn': '12px',
      },
      boxShadow: {
        'luxury': '0 4px 20px rgba(31, 58, 46, 0.08)',
        'luxury-lg': '0 8px 40px rgba(31, 58, 46, 0.12)',
        'gold-glow': '0 0 20px rgba(200, 166, 106, 0.3)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out',
        'slide-up': 'slideUp 0.6s ease-out',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
};

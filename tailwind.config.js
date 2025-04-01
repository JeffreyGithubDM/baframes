/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './pages/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        accent: 'var(--accent-color)',
        primary: 'var(--primary-text-color)',
        secondary: 'var(--secondary-text-color)',
        'primary-bg': 'var(--primary-bg-color)',
        'secondary-bg': 'var(--secondary-bg-color)',
        link: 'var(--link-color)',
        'button-hover': 'var(--button-hover-bg)',
        'highlight-bronze': 'var(--highlight-bronze)',
        'input-border': 'var(--input-border)',
      },
      boxShadow: {
        gold: '0 8px 30px rgba(201, 163, 77, 0.35)',
        glow: '0 0 20px rgba(230, 199, 123, 0.6)',
      },
      animation: {
        'fade-in': 'fadeIn 0.8s ease-in-out both',
        'fade-in-up': 'fadeInUp 1s ease-out both',
        'fade-in-down': 'fadeInDown 1s ease-out both',
        'slide-in-up': 'slideInUp 1s ease-out both',
        'zoom-in': 'zoomIn 0.5s ease-out both',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeInDown: {
          '0%': { opacity: '0', transform: 'translateY(-20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        slideInUp: {
          '0%': { transform: 'translateY(100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        zoomIn: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Poppins', 'sans-serif'],
      },
      borderRadius: {
        xl: '1rem',
        '2xl': '1.5rem',
        '3xl': '2rem',
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
  ],
};

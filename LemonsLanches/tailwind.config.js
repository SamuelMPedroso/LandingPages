/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Brand scale - warm amber/orange tuned for appetite appeal without looking neon
        primary: {
          DEFAULT: '#F5A623',
          50: '#FFF8EB',
          100: '#FEEEC9',
          200: '#FCDD97',
          300: '#F9C863',
          400: '#F6B23F',
          500: '#F5A623',
          600: '#DC8A16',
          700: '#B56C11',
          800: '#8F5514',
          900: '#754614',
        },
        secondary: {
          DEFAULT: '#E85D2F',
          50: '#FEF1EC',
          100: '#FBDBCB',
          200: '#F6B597',
          300: '#F18E63',
          400: '#EC733E',
          500: '#E85D2F',
          600: '#C9451F',
          700: '#A0371A',
          800: '#792A15',
          900: '#5C2110',
        },
        whatsapp: {
          DEFAULT: '#25D366',
          600: '#1DA851',
        },
        dark: '#201A16',
        surface: '#FFFDF9',
        ink: {
          DEFAULT: '#2A211C',
          muted: '#6B5F57',
        },
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', '-apple-system', 'Segoe UI', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 2px 8px -2px rgb(32 26 22 / 0.08)',
        card: '0 8px 24px -8px rgb(32 26 22 / 0.14)',
        elevated: '0 20px 40px -12px rgb(32 26 22 / 0.22)',
      },
      borderRadius: {
        xl: '0.875rem',
        '2xl': '1.25rem',
        '3xl': '1.75rem',
      },
      maxWidth: {
        container: '72rem',
      },
      animation: {
        fadeIn: 'fadeIn 0.6s ease-out both',
        slideUp: 'slideUp 0.6s ease-out both',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(16px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      transitionTimingFunction: {
        smooth: 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
    },
  },
  plugins: [],
}

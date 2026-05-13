import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#091426',
        'primary-container': '#1e293b',
        secondary: '#775a19',
        'secondary-fixed': '#ffdea5',
        'secondary-fixed-dim': '#e9c176',
        'secondary-container': '#fed488',
        surface: '#f8f9ff',
        'surface-bright': '#f8f9ff',
        'surface-container': '#e5eeff',
        'surface-container-low': '#eff4ff',
        'surface-container-high': '#dce9ff',
        'surface-container-highest': '#d3e4fe',
        'surface-container-lowest': '#ffffff',
        'surface-dim': '#cbdbf5',
        'on-surface': '#0b1c30',
        'on-surface-variant': '#45474c',
        'on-primary': '#ffffff',
        'on-primary-container': '#8590a6',
        'on-secondary': '#ffffff',
        'on-secondary-fixed': '#261900',
        'on-secondary-container': '#785a1a',
        'inverse-surface': '#213145',
        'inverse-on-surface': '#eaf1ff',
        'outline': '#75777d',
        'outline-variant': '#c5c6cd',
        'tertiary': '#141512',
        'tertiary-container': '#292926',
        'on-tertiary': '#ffffff',
        'on-tertiary-container': '#91908c',
        error: '#ba1a1a',
        'error-container': '#ffdad6',
        'on-error': '#ffffff',
      },
      fontFamily: {
        display: ['var(--font-playfair)', 'Playfair Display', 'serif'],
        body: ['var(--font-manrope)', 'Manrope', 'sans-serif'],
      },
      fontSize: {
        'display-lg': ['48px', { lineHeight: '1.1', letterSpacing: '-0.02em', fontWeight: '700' }],
        'display-lg-mobile': ['36px', { lineHeight: '1.2', letterSpacing: '-0.01em', fontWeight: '700' }],
        'headline-md': ['32px', { lineHeight: '1.3', fontWeight: '600' }],
        'headline-sm': ['24px', { lineHeight: '1.4', fontWeight: '600' }],
        'body-lg': ['18px', { lineHeight: '1.6', fontWeight: '400' }],
        'body-md': ['16px', { lineHeight: '1.6', fontWeight: '400' }],
        'label-caps': ['12px', { lineHeight: '1', letterSpacing: '0.15em', fontWeight: '700' }],
      },
      spacing: {
        'section': '80px',
        'gutter': '24px',
        'container-max': '1280px',
      },
      maxWidth: {
        'container': '1280px',
      },
      borderRadius: {
        DEFAULT: '0.125rem',
        lg: '0.25rem',
        xl: '0.5rem',
        full: '0.75rem',
      },
      animation: {
        'fade-up': 'fadeUp 0.8s ease forwards',
        'fade-in': 'fadeIn 0.6s ease forwards',
        'slide-in-left': 'slideInLeft 0.8s ease forwards',
        'scale-in': 'scaleIn 0.6s ease forwards',
        'shimmer': 'shimmer 2s infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(30px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideInLeft: {
          '0%': { opacity: '0', transform: 'translateX(-30px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        scaleIn: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
}
export default config

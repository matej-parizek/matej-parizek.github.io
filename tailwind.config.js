/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // nebo ['class']
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        border: 'var(--color-border)',
        input: 'var(--color-input)',
        background: 'var(--color-background)',
        foreground: 'var(--color-foreground)',
        primary: {
          DEFAULT: 'var(--color-primary)',
          foreground: 'var(--color-primary-foreground)',
        },
        secondary: {
          DEFAULT: 'var(--color-secondary)',
          foreground: 'var(--color-secondary-foreground)',
        },
        destructive: {
          DEFAULT: 'var(--color-destructive)',
          foreground: 'var(--color-destructive-foreground)',
        },
        muted: {
          DEFAULT: 'var(--color-muted)',
          foreground: 'var(--color-muted-foreground)',
        },
        accent: {
          DEFAULT: 'var(--color-accent)',
          foreground: 'var(--color-accent-foreground)',
        },
        popover: {
          DEFAULT: 'var(--color-popover)',
          foreground: 'var(--color-popover-foreground)',
        },
        card: {
          DEFAULT: 'var(--color-card)',
          foreground: 'var(--color-card-foreground)',
        },
        success: {
          DEFAULT: 'var(--color-success)',
          foreground: 'var(--color-success-foreground)',
        },
        warning: {
          DEFAULT: 'var(--color-warning)',
          foreground: 'var(--color-warning-foreground)',
        },
        error: {
          DEFAULT: 'var(--color-error)',
          foreground: 'var(--color-error-foreground)',
        },
        surface: 'var(--color-surface)',
        'text-primary': 'var(--color-text-primary)',
        'text-secondary': 'var(--color-text-secondary)',
        'portfolio-accent': {
          DEFAULT: 'var(--color-portfolio-accent)',
          foreground: 'var(--color-portfolio-accent-foreground)',
        },
        cursor: 'var(--color-cursor)',
        footer: 'var(--color-footer)',
        footerText: 'var(--color-footer-text)',
      },

      ringColor: {
        DEFAULT: 'hsl(var(--ring) / 0.5)', // výchozí barva prstence s alfou 0.5
        brand: 'hsl(var(--ring) / 2)', // volitelný alias
      },

      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        headline: ['Inter', 'sans-serif'],
        cta: ['Inter', 'sans-serif'],
        accent: ['Inter', 'sans-serif'],
      },
      fontWeight: {
        headline: '700',
        cta: '600',
        accent: '500',
      },
      boxShadow: {
        professional: "var(--shadow-professional)",
        testimonial: "var(--shadow-testimonial)",
      },
      transitionDuration: {
        professional: '250ms',
      },
      transitionTimingFunction: {
        professional: 'ease-in-out',
      },
      spacing: {
        18: '4.5rem',
        88: '22rem',
      },
      zIndex: {
        navigation: '100',
        'floating-action': '150',
        'mobile-menu': '200',
      },
      keyframes: {
        blink: {
          '0%, 100%': { opacity: 1 },
          "50.01%,100%": { opacity: "0" },
        },
      },
      animation: {
        blink: 'blink 1s step-start infinite',
      },
    },
  },
  plugins: [require('@tailwindcss/typography'), require('tailwindcss-animate')],
};
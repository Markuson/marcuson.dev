import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        // Primary backgrounds
        'bg-primary': '#0B0F14',
        'bg-secondary': '#111827',
        'bg-tertiary': '#1F2937',

        // Text colors
        'text-primary': '#E5E7EB',
        'text-secondary': '#9CA3AF',
        'text-muted': '#6B7280',

        // Border colors
        'border-primary': 'rgba(255, 255, 255, 0.08)',
        'border-secondary': 'rgba(255, 255, 255, 0.05)',

        // Accent colors
        'accent-primary': '#84CC16',
        'accent-secondary': '#65A30D',
        'accent-tertiary': '#A3E635',

        // Glass effect
        'glass-bg': 'rgba(17, 17, 17, 0.6)',
        'glass-border': 'rgba(255, 255, 255, 0.08)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['JetBrains Mono', 'Fira Code', 'monospace'],
      },
      fontSize: {
        'hero-title': ['3.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'hero-title-lg': ['4rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
        'section-title': ['2rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'section-title-lg': ['2.5rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
        'card-title': ['1.25rem', { lineHeight: '1.3' }],
        chip: ['0.875rem', { lineHeight: '1.4' }],
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '112': '28rem',
        '128': '32rem',
      },
      maxWidth: {
        '8xl': '88rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      backdropBlur: {
        '12': '12px',
      },
      boxShadow: {
        'glass': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06), inset 0 0 0 1px rgba(255, 255, 255, 0.08)',
        'card': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        'card-hover': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        'focus': '0 0 0 2px #84CC16',
      },
      animation: {
        'fade-in': 'fadeIn 0.2s ease-out',
        'slide-up': 'slideUp 0.3s ease-out',
        'scale-up': 'scaleUp 0.2s ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        scaleUp: {
          '0%': { transform: 'scale(0.95)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
      transitionProperty: {
        'height': 'height',
        'spacing': 'margin, padding',
      },
    },
  },
  plugins: [],
} satisfies Config;
import type { Config } from 'tailwindcss'

// Ledger-green system (rebrand 2026-09-15). Source of truth for values:
// the app's apps/poof-web/src/theme/shared-theme.ts, mirrored here.
const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // the accent scale: 100-300 paper/tint/rule, 400 light green (on ink), 500 press, 600 ledger, 700 pressed, 800 ink
        ledger: {
          50: '#F5F7F2',
          100: '#EEF2EA',
          200: '#DCEBDF',
          300: '#C9D3C6',
          400: '#A9D8B8',
          500: '#1F7A4F',
          600: '#1B5E3F',
          700: '#174F35',
          800: '#12211A',
          900: '#0D1A14',
        },
        paper: { DEFAULT: '#EEF2EA', 2: '#F5F7F2' },
        ink: '#12211A',
        muted: '#5B6660',
        rule: '#C9D3C6',
        audit: { DEFAULT: '#B3261E', 100: '#F6E3E0' },
        // the neutrals, green-biased, so every existing slate-* class lands on the new system
        slate: {
          50: '#F5F7F2',
          100: '#EEF2EA',
          200: '#C9D3C6',
          300: '#B6C1B9',
          400: '#96A39B',
          500: '#6E7A73',
          600: '#5B6660',
          700: '#3E4A43',
          800: '#253029',
          900: '#12211A',
          950: '#0D1A14',
        },
        midnight: {
          950: '#0D1A14',
          900: '#12211A',
          800: '#1A2C23',
          700: '#2A3D33',
          600: '#5B6660',
          500: '#6E7A73',
          400: '#96A39B',
        },
      },
      fontFamily: {
        sans: ['var(--font-plex)', 'system-ui', 'sans-serif'],
        display: ['var(--font-bricolage)', 'var(--font-plex)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-plex-mono)', 'ui-monospace', 'monospace'],
      },
      borderRadius: {
        lg: '6px',
        xl: '8px',
        '2xl': '10px',
        '3xl': '12px',
      },
      boxShadow: {
        'card-dark': '0 4px 24px rgba(18, 33, 26, 0.08)',
        'card-light': '0 4px 12px rgba(18, 33, 26, 0.06)',
        'hover': '0 8px 32px rgba(18, 33, 26, 0.10)',
      },
    },
  },
  plugins: [],
}
export default config

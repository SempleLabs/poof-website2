import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        gold: {
          50: '#fefce8',
          100: '#fef9c3',
          200: '#fef08a',
          300: '#fde047',
          400: '#facc15',
          500: '#eab308',
          600: '#ca8a04',
          700: '#a16207',
          800: '#854d0e',
          900: '#713f12',
        },
        midnight: {
          950: '#06060a',
          900: '#0a0a0f',
          800: '#111118',
          700: '#1a1a24',
          600: '#25253a',
          500: '#3a3a55',
          400: '#5a5a7a',
        },
        teal: {
          400: '#2dd4bf',
          500: '#14b8a6',
          600: '#0d9488',
        },
      },
      backgroundImage: {
        'gradient-hero': 'linear-gradient(160deg, #0a0a0f 0%, #111118 50%, #0a0a0f 100%)',
        'gradient-accent': 'linear-gradient(135deg, #eab308 0%, #facc15 50%, #2dd4bf 100%)',
        'gradient-cta': 'linear-gradient(160deg, #111118 0%, #0a0a0f 100%)',
        'gradient-glass-dark': 'linear-gradient(135deg, rgba(255,255,255,0.03) 0%, rgba(255,255,255,0.01) 100%)',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['var(--font-cabinet)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-jetbrains)', 'monospace'],
      },
      borderRadius: {
        'magical': '12px',
      },
      boxShadow: {
        'gold': '0 0 20px rgba(234, 179, 8, 0.2), 0 0 40px rgba(234, 179, 8, 0.1)',
        'gold-lg': '0 0 30px rgba(234, 179, 8, 0.3), 0 0 60px rgba(234, 179, 8, 0.15)',
        'card-dark': '0 4px 24px rgba(0, 0, 0, 0.4)',
        'card-light': '0 4px 12px rgba(0, 0, 0, 0.06)',
        'hover': '0 8px 32px rgba(0, 0, 0, 0.12)',
      },
    },
  },
  plugins: [],
}
export default config

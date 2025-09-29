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
        // Poof brand colors
        'poof-primary': {
          50: '#f3f4ff',
          100: '#ebebff',
          200: '#d9dbff',
          300: '#bcc1ff',
          400: '#9b9dff',
          500: '#7c7aff',
          600: '#6366f1',
          700: '#5855eb',
          800: '#4c46d6',
          900: '#413bb8',
        },
        'poof-secondary': {
          50: '#eff6ff',
          100: '#dbeafe',
          200: '#bfdbfe',
          300: '#93c5fd',
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
          700: '#1d4ed8',
          800: '#1e40af',
          900: '#1e3a8a',
        },
        'poof-success': {
          50: '#ecfdf5',
          100: '#d1fae5',
          200: '#a7f3d0',
          300: '#6ee7b7',
          400: '#34d399',
          500: '#10b981',
          600: '#059669',
          700: '#047857',
          800: '#065f46',
          900: '#064e3b',
        },
      },
      backgroundImage: {
        'magical-gradient': 'linear-gradient(135deg, #7c7aff 0%, #6366f1 100%)',
        'hero-gradient': 'linear-gradient(135deg, #7c7aff 0%, #3b82f6 25%, #10b981 50%, #7c7aff 100%)',
        'glass-gradient': 'linear-gradient(135deg, rgba(124, 122, 255, 0.1) 0%, rgba(59, 130, 246, 0.1) 100%)',
      },
      fontFamily: {
        sans: ['Inter', 'Roboto', 'Helvetica', 'Arial', 'sans-serif'],
        righteous: ['var(--font-righteous)', 'sans-serif'],
      },
      borderRadius: {
        'magical': '12px',
      },
      boxShadow: {
        'magical': '0px 4px 12px rgba(124, 122, 255, 0.3)',
        'magical-lg': '0px 8px 24px rgba(124, 122, 255, 0.4)',
      },
    },
  },
  plugins: [],
}
export default config
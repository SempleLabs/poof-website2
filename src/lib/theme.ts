/**
 * Shared Theme Configuration for Poof Website
 * Mirrors the design system from the main Poof application
 */

// Poof Brand Color Palette - Magical & Professional
export const poofColors = {
  // Primary magical purple
  primary: {
    50: '#f3f4ff',
    100: '#ebebff',
    200: '#d9dbff',
    300: '#bcc1ff',
    400: '#9b9dff',
    500: '#7c7aff', // Main brand color
    600: '#6366f1', // Deeper magical purple
    700: '#5855eb',
    800: '#4c46d6',
    900: '#413bb8',
  },

  // Magical blue accent
  secondary: {
    50: '#eff6ff',
    100: '#dbeafe',
    200: '#bfdbfe',
    300: '#93c5fd',
    400: '#60a5fa',
    500: '#3b82f6', // Magical blue
    600: '#2563eb',
    700: '#1d4ed8',
    800: '#1e40af',
    900: '#1e3a8a',
  },

  // Success (money appearing magically)
  success: {
    50: '#ecfdf5',
    100: '#d1fae5',
    200: '#a7f3d0',
    300: '#6ee7b7',
    400: '#34d399',
    500: '#10b981', // Vibrant green
    600: '#059669',
    700: '#047857',
    800: '#065f46',
    900: '#064e3b',
  },

  // Error (sophisticated coral)
  error: {
    50: '#fef2f2',
    100: '#fee2e2',
    200: '#fecaca',
    300: '#fca5a5',
    400: '#f87171',
    500: '#ef4444', // Softened red
    600: '#dc2626',
    700: '#b91c1c',
    800: '#991b1b',
    900: '#7f1d1d',
  },

  // Warning
  warning: {
    50: '#fffbeb',
    100: '#fef3c7',
    200: '#fde68a',
    300: '#fcd34d',
    400: '#fbbf24',
    500: '#f59e0b', // Warm amber
    600: '#d97706',
    700: '#b45309',
    800: '#92400e',
    900: '#78350f',
  },

  // Warm neutrals with magical undertones
  gray: {
    50: '#fafafa',
    100: '#f5f5f5',
    200: '#e5e5e5',
    300: '#d4d4d4',
    400: '#a3a3a3',
    500: '#737373',
    600: '#525252',
    700: '#404040',
    800: '#262626',
    900: '#171717',
  },
};

// Magical gradients
export const magicalGradients = {
  primary: 'linear-gradient(135deg, #7c7aff 0%, #6366f1 100%)',
  secondary: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)',
  success: 'linear-gradient(135deg, #10b981 0%, #059669 100%)',
  magical: 'linear-gradient(135deg, #7c7aff 0%, #3b82f6 50%, #10b981 100%)',
  glass: 'linear-gradient(135deg, rgba(124, 122, 255, 0.1) 0%, rgba(59, 130, 246, 0.1) 100%)',
  ethereal: 'linear-gradient(135deg, rgba(255, 255, 255, 0.9) 0%, rgba(248, 250, 252, 0.8) 100%)',
  hero: 'linear-gradient(135deg, #7c7aff 0%, #3b82f6 25%, #10b981 50%, #7c7aff 100%)',
};

// Typography settings
export const typography = {
  fontFamily: '"Inter", "Roboto", "Helvetica", "Arial", sans-serif',
  fontWeights: {
    light: 300,
    regular: 400,
    medium: 500,
    semibold: 600,
    bold: 700,
  },
  sizes: {
    xs: '0.75rem',      // 12px
    sm: '0.875rem',     // 14px
    base: '1rem',       // 16px
    lg: '1.125rem',     // 18px
    xl: '1.25rem',      // 20px
    '2xl': '1.5rem',    // 24px
    '3xl': '1.875rem',  // 30px
    '4xl': '2.25rem',   // 36px
    '5xl': '3rem',      // 48px
    '6xl': '3.75rem',   // 60px
    '7xl': '4.5rem',    // 72px
  },
};

// Spacing scale (in rem)
export const spacing = {
  0: '0',
  1: '0.25rem',   // 4px
  2: '0.5rem',    // 8px
  3: '0.75rem',   // 12px
  4: '1rem',      // 16px
  5: '1.25rem',   // 20px
  6: '1.5rem',    // 24px
  8: '2rem',      // 32px
  10: '2.5rem',   // 40px
  12: '3rem',     // 48px
  16: '4rem',     // 64px
  20: '5rem',     // 80px
  24: '6rem',     // 96px
  32: '8rem',     // 128px
  40: '10rem',    // 160px
  48: '12rem',    // 192px
  56: '14rem',    // 224px
  64: '16rem',    // 256px
};

// Border radius
export const borderRadius = {
  none: '0',
  sm: '0.125rem',     // 2px
  default: '0.25rem',  // 4px
  md: '0.375rem',     // 6px
  lg: '0.5rem',       // 8px
  xl: '0.75rem',      // 12px
  '2xl': '1rem',      // 16px
  '3xl': '1.5rem',    // 24px
  full: '9999px',
};

// Shadows with magical tint
export const shadows = {
  xs: '0 1px 2px 0 rgba(124, 122, 255, 0.05)',
  sm: '0 1px 3px 0 rgba(124, 122, 255, 0.1), 0 1px 2px 0 rgba(124, 122, 255, 0.06)',
  default: '0 4px 6px -1px rgba(124, 122, 255, 0.1), 0 2px 4px -1px rgba(124, 122, 255, 0.06)',
  md: '0 4px 6px -1px rgba(124, 122, 255, 0.1), 0 2px 4px -1px rgba(124, 122, 255, 0.06)',
  lg: '0 10px 15px -3px rgba(124, 122, 255, 0.1), 0 4px 6px -2px rgba(124, 122, 255, 0.05)',
  xl: '0 20px 25px -5px rgba(124, 122, 255, 0.1), 0 10px 10px -5px rgba(124, 122, 255, 0.04)',
  '2xl': '0 25px 50px -12px rgba(124, 122, 255, 0.25)',
  magical: '0 20px 40px rgba(124, 122, 255, 0.15), 0 8px 24px rgba(59, 130, 246, 0.1)',
};

// Breakpoints
export const breakpoints = {
  xs: '475px',
  sm: '640px',
  md: '768px',
  lg: '1024px',
  xl: '1280px',
  '2xl': '1536px',
};

// Animation easings
export const easings = {
  easeInOut: 'cubic-bezier(0.4, 0, 0.2, 1)',
  easeOut: 'cubic-bezier(0, 0, 0.2, 1)',
  easeIn: 'cubic-bezier(0.4, 0, 1, 1)',
  sharp: 'cubic-bezier(0.4, 0, 0.6, 1)',
  magical: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
};

// Animation durations
export const durations = {
  fast: '150ms',
  normal: '300ms',
  slow: '500ms',
  slower: '750ms',
};

// Z-index scale
export const zIndex = {
  hide: -1,
  auto: 'auto',
  base: 0,
  docked: 10,
  dropdown: 1000,
  sticky: 1100,
  banner: 1200,
  overlay: 1300,
  modal: 1400,
  popover: 1500,
  skipLink: 1600,
  toast: 1700,
  tooltip: 1800,
};

// Export theme object for easy consumption
export const poofTheme = {
  colors: poofColors,
  gradients: magicalGradients,
  typography,
  spacing,
  borderRadius,
  shadows,
  breakpoints,
  easings,
  durations,
  zIndex,
};

export default poofTheme;
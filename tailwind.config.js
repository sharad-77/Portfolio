/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      screens: {
        xs: '475px',
        tablet: '768px',
        'tablet-lg': '900px',
        desktop: '1024px',
        'desktop-lg': '1280px',
        '2xl': '1536px',
      },
      fontSize: {
        xs: 'var(--font-size-xs)',
        sm: 'var(--font-size-sm)',
        base: 'var(--font-size-base)',
        lg: 'var(--font-size-lg)',
        xl: 'var(--font-size-xl)',
        '2xl': 'var(--font-size-2xl)',
        '3xl': 'var(--font-size-3xl)',
      },
      spacing: {
        1: 'var(--space-1)',
        2: 'var(--space-2)',
        3: 'var(--space-3)',
        4: 'var(--space-4)',
        6: 'var(--space-6)',
        8: 'var(--space-8)',
      },
      maxWidth: {
        'container-xs': 'var(--container-xs)',
        'container-sm': 'var(--container-sm)',
        'container-md': 'var(--container-md)',
        'container-lg': 'var(--container-lg)',
        'container-xl': 'var(--container-xl)',
      },
      height: {
        'responsive-xs': 'var(--height-xs)',
        'responsive-sm': 'var(--height-sm)',
        'responsive-md': 'var(--height-md)',
        'responsive-lg': 'var(--height-lg)',
        'responsive-xl': 'var(--height-xl)',
      },
      borderRadius: {
        'responsive-sm': 'var(--radius-sm)',
        'responsive-md': 'var(--radius-md)',
        'responsive-lg': 'var(--radius-lg)',
        'responsive-xl': 'var(--radius-xl)',
      },
    },
  },
  plugins: [],
};

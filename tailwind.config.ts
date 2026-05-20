import type { Config } from 'tailwindcss';
import rtl from 'tailwindcss-rtl';

const config: Config = {
  content: ['./src/**/*.{ts,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        navy:    { DEFAULT: '#003366', light: '#004080', dark: '#002244', deep: '#001833' },
        gold:    { DEFAULT: '#C8973A', light: '#D4A84B', dark: '#A87A28' },
        slate:   { DEFAULT: '#4A4A4A', light: '#6B6B6B' },
        offwhite: '#F5F5F5',
        bluetint: '#D6E4F0',
      },
      fontFamily: {
        sans:   ['var(--font-montserrat)', 'Arial', 'sans-serif'],
        arabic: ['var(--font-noto-arabic)', 'Arial', 'sans-serif'],
      },
      typography: (theme: any) => ({
        DEFAULT: {
          css: {
            color: theme('colors.slate.DEFAULT'),
            a: { color: theme('colors.navy.DEFAULT') },
            h1: { color: theme('colors.navy.DEFAULT'), fontWeight: '700' },
            h2: { color: theme('colors.navy.DEFAULT') },
            h3: { color: theme('colors.navy.DEFAULT') },
          },
        },
      }),
    },
  },
  plugins: [rtl, require('@tailwindcss/typography')],
};

export default config;

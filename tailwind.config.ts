import type { Config } from 'tailwindcss';

export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],

  theme: {
    extend: {}
  },

  plugins: [
    require('daisyui')
  ],
  darkMode: ['class', '[data-theme="dark"]']
} satisfies Config;

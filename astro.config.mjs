import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://alexisayenko.github.io',
  base: '/fashionista',
  build: {
    format: 'file',
  },
});

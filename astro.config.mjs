// Archivo: astro.config.mjs
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

export default defineConfig({
  integrations: [mdx()],
  site: 'https://andreakinder.github.io',
  base: 'porfolio-kinder',
});
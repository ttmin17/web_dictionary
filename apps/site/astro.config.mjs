import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

function normalizeBase(base) {
  if (!base || base === '/') return '/';
  return '/' + base.replace(/^\/+|\/+$/g, '') + '/';
}

// https://astro.build/config
export default defineConfig({
  site: process.env.SITE_URL || 'https://ttmin17.github.io/web_dictionary',
  base: normalizeBase(process.env.BASE_PATH || '/'),
  output: 'static',
  integrations: [tailwind()],
});

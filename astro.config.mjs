// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // Indispensable pour le sitemap : l'URL racine de ton site
  site: 'https://goonvideo.fr',

  integrations: [
    sitemap(),
  ],
});
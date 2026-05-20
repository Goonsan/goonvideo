// @ts-check
import { defineConfig } from 'astro/config';
import partytown from '@astrojs/partytown';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // Indispensable pour le sitemap : l'URL racine de ton site
  site: 'https://goonvideo.fr',
  
  integrations: [
    partytown({
      config: {
        forward: ['dataLayer.push'],
      },
    }),
    // Ajout de l'intégration sitemap
    sitemap(),
  ],
});
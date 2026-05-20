// @ts-check
import { defineConfig } from 'astro/config';
import partytown from '@astrojs/partytown';

// https://astro.build/config
export default defineConfig({
  integrations: [
    partytown({
      // Indispensable pour que Google Analytics transmette les données en arrière-plan
      config: {
        forward: ['dataLayer.push'],
      },
    }),
  ],
});
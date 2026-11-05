// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  // Indispensable pour le sitemap : l'URL racine de ton site
  site: 'https://towafilm.fr',

  integrations: [
    sitemap(),
  ],

  // Polices téléchargées depuis Google au moment du build puis servies par notre serveur :
  // pas de requête vers Google chez le visiteur (RGPD), pas de feuille de style bloquante,
  // et des polices de secours calibrées pour que le texte ne bouge pas au chargement.
  fonts: [
    {
      provider: fontProviders.google(),
      name: 'Cormorant Garamond',
      cssVariable: '--font-cormorant',
      weights: [500, 600, 700],
      styles: ['normal', 'italic'],
      subsets: ['latin'],
      fallbacks: ['Georgia', 'serif'],
    },
    {
      provider: fontProviders.google(),
      name: 'Montserrat',
      cssVariable: '--font-montserrat',
      weights: [300, 400, 500, 600, 700],
      styles: ['normal'],
      subsets: ['latin'],
      fallbacks: ['Arial', 'sans-serif'],
    },
  ],
});

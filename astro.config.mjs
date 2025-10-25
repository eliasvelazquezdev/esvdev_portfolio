import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({

  
  site: 'https://evelazquez.dev',

  i18n: {
    defaultLocale: "en",
    locales: ["es", "en"],
    routing: {
        prefixDefaultLocale: false
    }
  },

  vite: {
    server: {
      watch: {
        usePolling: true,
        interval: 1000,
        ignored: [
          '**/node_modules/**',
          '**/.git/**',
          '**/dist/**',
          '**/.astro/**'
        ]
      }
    }
  },

  integrations: [tailwind()]
});
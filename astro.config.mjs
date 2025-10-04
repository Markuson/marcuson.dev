// @ts-check
import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://marcuson.dev',
  integrations: [
    react(),
    sitemap({
      i18n: {
        defaultLocale: 'en',
        locales: {
          en: 'en',
          es: 'es',
          ca: 'ca',
        },
      },
    }),
  ],
  vite: {
    plugins: [tailwindcss()],
    build: {
      // Optimize for production
      minify: 'esbuild',
      cssMinify: true,
      rollupOptions: {
        output: {
          // Manual chunks for better caching
          manualChunks: {
            vendor: ['react', 'react-dom']
          }
        }
      }
    }
  },
  output: 'static',
  trailingSlash: 'never',
  build: {
    format: 'directory',
    // Inline small assets
    inlineStylesheets: 'auto',
    // Assets optimization
    assets: '_astro'
  },
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'es', 'ca'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});

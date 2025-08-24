import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import markdoc from '@astrojs/markdoc';
import keystatic from '@keystatic/astro';
import node from '@astrojs/node';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  integrations: [react(), markdoc(), keystatic()],
  output: 'static',
  alias: {
    '@assets': './src/assets',
    '@components': './src/components',
    '@styles': './src/styles',
    '@layouts': './src/layouts',
    '@content': './src/content',
    '@settings': './src/settings'
  },
  vite: {
    plugins: [tailwindcss()],
    preview: {
      host: '0.0.0.0',
      allowedHosts: 'all'
    }
  }
});
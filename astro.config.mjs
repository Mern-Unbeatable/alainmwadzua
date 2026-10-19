import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';
import { loadEnv } from 'vite';

// Read API_BASE_URL from the shell or from .env (same source the old webpack build used)
const env = loadEnv(process.env.NODE_ENV || 'production', process.cwd(), '');
const API_BASE_URL = process.env.API_BASE_URL || env.API_BASE_URL || '';

export default defineConfig({
  site: 'https://onlineclasswriters.com',
  output: 'static',
  integrations: [react()],
  server: {
    port: 5173,
  },
  vite: {
    plugins: [tailwindcss()],
    define: {
      // Consumed by src/config/index.js → API_CONFIG.BASE_URL
      __API_BASE_URL__: JSON.stringify(API_BASE_URL),
    },
    server: {
      allowedHosts: true,
      // Proxy /api/* → backend so browser never sees a CORS error in dev
      proxy: {
        '/api': {
          target: API_BASE_URL || 'http://localhost:8000',
          changeOrigin: true,
          secure: false,
        },
      },
    },
  },
});

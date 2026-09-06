import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://tu-dominio-final.com', // reemplazar cuando tengas el dominio
  vite: { plugins: [tailwindcss()] },
  integrations: [react(), sitemap()],
});
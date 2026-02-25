import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  site: 'https://sales.textatruck.acidni.net',
  integrations: [
    tailwind(),
  ],
  output: 'static',
  build: {
    assets: 'assets',
  },
});

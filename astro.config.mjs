// @ts-check
import { defineConfig } from 'astro/config';
import fulldev from 'fulldev-ui/integration';

// https://astro.build/config
export default defineConfig({
  output: 'server',
  integrations: [
    fulldev({
      colors: {
        theme:'dark',
        dark: {
          background: '#1e1e1e',
          base: '#ffffff',
          brand: '#f50',
        }
      }
  })
  ],
});

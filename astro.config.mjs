import { defineConfig } from 'astro/config';
import preact from "@astrojs/preact";
import tailwind from '@astrojs/tailwind';
import vue from "@astrojs/vue";


export default defineConfig({
  site: "https://www.infycredit.com",
  integrations: [vue(), preact(), tailwind()],
  vite: {
    plugins: [],
    resolve: {
      alias: {
        // Opcional, si quieres acortar rutas de importación
        '@img': '/public/images',
        '@scripts': '/public/scripts',
      },
    },
    optimizeDeps: {
      include: ['swiper'], // Fuerza que swiper se procese correctamente
    },
  }
});
import { defineConfig } from "vite";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";

export default defineConfig({
  resolve: {
    alias: {
      "@": "/src",
    },
  },
  plugins: [
    ViteImageOptimizer({
      jpg: {
        quality: 80,
      },
      png: {
        quality: 80,
      },
      webp: {
        quality: 80,
      },
      avif: {
        quality: 60,
      },
      jpeg: {
        quality: 80,
      },
      svg: {
      }
    })
  ],
  build: {
    rollupOptions: {
      input: {
        normalize: '/src/scss/normalize.scss',
        common: '/src/scss/common.scss',
        main: '/index.html',
        single: '/single.html',
        404: '/404.html',
      }
    }
  }
})
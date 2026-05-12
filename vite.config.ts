import { defineConfig } from "vite";
import viteReact from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";

export default defineConfig({
  css: {
    postcss: {
      plugins: [],
    },
  },
  plugins: [
    viteReact(),
    tailwindcss(),
    tsconfigPaths(),
    ViteImageOptimizer({
      jpg: { quality: 78 },
      jpeg: { quality: 78 },
      png: { quality: 78 },
      webp: { lossless: false, quality: 78 },
    }),
  ],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          "vendor-router": ["react-router-dom", "react-helmet-async"],
          "vendor-ui": ["lucide-react", "@radix-ui/react-accordion"],
        },
      },
    },
  },
});

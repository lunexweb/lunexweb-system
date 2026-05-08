import { defineConfig } from "vite";
import viteReact from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
  css: {
    postcss: {
      plugins: [],
    },
  },
  plugins: [viteReact(), tailwindcss(), tsconfigPaths()],
});

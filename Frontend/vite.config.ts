/// <reference types="vitest" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  define: {
    "import.meta.env.VITE_API_URL": JSON.stringify(process.env.VITE_API_URL),
  },
  test: {
    environment: "jsdom",
    setupFiles: ["vitest.setup.ts"],
  },
  css: {
    postcss: "./postcss.config.js",
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks() {
          return "index.html";
        },
      },
    },
  },
});

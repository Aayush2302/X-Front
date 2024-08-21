import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "dist", // default output directory for Vite
  },
  server: {
    port: 3000,
    proxy: {
      "/api": {
        target: "https://x-backend-1-agg5.onrender.com",
        changeOrigin: true,
      },
    },
  },
});

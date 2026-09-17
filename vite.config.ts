import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    // Mirrors the "@/*" path mapping in tsconfig.app.json. TypeScript's
    // "paths" only affects type-checking/editor resolution -- Vite's own
    // dev server and build need this separate, explicit alias to actually
    // resolve "@/..." imports at runtime. (This was missing in Stage 1 --
    // my mistake, not a leftover-files issue like the last error.)
    alias: {
      "@": fileURLToPath(new URL("./src", import.meta.url)),
    },
  },
  build: {
    // Keep an explicit, predictable output dir (matches most static hosts / GitHub Pages workflows)
    outDir: "dist",
    sourcemap: false,
  },
});

import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/vite';
import { viteSingleFile } from 'vite-plugin-singlefile';

// Сборка в один docs/index.html (JS и CSS встроены):
// его гарантированно отдаёт GitHub Pages без ошибки белого экрана,
// и его можно открыть двойным кликом без сервера.
export default defineConfig({
  base: './',
  plugins: [
    react(),
    tailwindcss(),
    viteSingleFile()
  ],
  build: {
    outDir: 'docs',
    emptyOutDir: true,
    chunkSizeWarningLimit: 2500,
  },
});

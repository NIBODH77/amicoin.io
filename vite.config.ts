import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.pdf'], // Include PDF files in the build process
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});

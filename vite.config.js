import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
    assetsInclude: ['**/*.pdf'], // Add this line to include PDF files
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        // Use proper cache-busting names for long-term caching
        entryFileNames: 'assets/[name]-[hash].js',
        chunkFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]',
      },
    },
    // Extract CSS to separate files
    cssCodeSplit: true,
  },
  server: {
    // Headers for development
    headers: {
      'Cache-Control': 'public, max-age=31536000, immutable',
    },
  },
})

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "."),
    },
  },
  build: {
    // Optimize build output
    minify: 'terser',
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom'],
          ui: ['@radix-ui/react-accordion', '@radix-ui/react-dialog', '@radix-ui/react-dropdown-menu']
        }
      }
    },
    // Enable source maps for debugging
    sourcemap: false,
    // Optimize assets
    assetsInlineLimit: 4096,
  },
  // Optimize dev server
  server: {
    host: '0.0.0.0',
    port: 5173,
  },
  // Optimize preview server
  preview: {
    host: '0.0.0.0',
    port: 4173,
  }
})

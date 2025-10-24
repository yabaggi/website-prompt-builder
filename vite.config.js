import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'
import path from 'path'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  preview: {
    host: true,
    port: 3000,
    strictPort: true
  },
  server: {
    host: true,
    port: 3000,
    allowedHosts: ['3000-i9i59j3sq5a7680hmbf5c-d8037840.manus.computer']
  }
})

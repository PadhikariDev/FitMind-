import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  server: {
    host: true,
    proxy: {
      '/api': 'http://localhost:3000',

      '/fitness': 'http://localhost:3000'
    }
  },
  plugins: [react(), tailwindcss()],
})

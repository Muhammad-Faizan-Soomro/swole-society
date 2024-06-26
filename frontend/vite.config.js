import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": "https://swole-society-api.vercel.app",
      "/uploads": "https://swole-society-api.vercel.app",
    },
  },
})

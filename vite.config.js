import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: "https://riikurniawan.github.io/",
  optimizeDeps: {
    include: ["react-photoswipe-gallery"]
  }
})

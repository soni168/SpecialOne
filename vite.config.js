import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/SpecialOne/',  // important for GitHub Pages
  plugins: [react()],
})

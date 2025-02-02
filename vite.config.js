import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    tailwindcss(),
  ],
  assetsInclude: ['**/*.MP4', '**/*.MOV'], // Combined both file types into a single array
  base: "/video-edits",
})

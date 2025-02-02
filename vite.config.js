import { defineConfig } from 'vite'

export default defineConfig({
  plugins: [
  ],
  assetsInclude: ['**/*.MP4', '**/*.MOV'], // Combined both file types into a single array
  base: "/video-edits",
})


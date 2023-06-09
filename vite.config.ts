import { fileURLToPath, URL } from 'node:url'
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// import UnoCSS from 'unocss/vite'

export default defineConfig({
  plugins: [
    vue(),
    // UnoCSS({ configFile: './uno.config.js' })
  ],
  resolve: {
    alias: { '@': fileURLToPath(new URL('./src', import.meta.url)) },
    extensions: ['.js', '.json', '.jsx', '.mjs', '.ts', '.tsx', '.vue'],
    preserveSymlinks: true
  },
  define: { 'process.env': {}},
  server: { port: 3000 },
  base: '/vue3-youtube-clone/',
})

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { fileURLToPath, URL } from 'node:url'

export default defineConfig({
  plugins: [vue()], // 确保 Vue 插件正常加载，支持 SFC 解析
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)) // 与 tsconfig.json 中 paths 一致，避免路径错误
    }
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://localhost:3001',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, '')
      }
    }
  }
})
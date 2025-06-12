import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
      'integration': path.resolve(__dirname, './src/integration'),
      'components': path.resolve(__dirname, './src/components'),
      'page': path.resolve(__dirname, './src/page'),
      'constant': path.resolve(__dirname, './src/constant'),
      'utility': path.resolve(__dirname, './src/utility'),
      'module': path.resolve(__dirname, './src/module'),
      'assets': path.resolve(__dirname, './src/assets'),
      'types': path.resolve(__dirname, './src/types'),
      // Tambahkan lagi jika ada import sejenis
    },
  },
})

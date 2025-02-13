// 3lackrukh.github.io/vite.config.ts
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/',
  plugins: [react()],
  assetsInclude: ['**/*.glb', '**/*.gltf'],
  optimizeDeps: {
    include: ['three', '@react-three/fiber', '@react-three/drei']
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: true,
    rollupOptions: {
      output: {
        manualChunks: {
          'three-core': ['three'],
          'react-three': ['@react-three/fiber', '@react-three/drei']
        },
        entryFileNames: 'assets/[name].[hash].mjs',
        chunkFileNames: 'assets/[name].[hash].mjs',
        assetFileNames: 'assets/[name].[hash].[ext]'
      }
    }
  }
})

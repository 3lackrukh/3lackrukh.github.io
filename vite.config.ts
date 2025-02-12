import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  assetsInclude: ['**/*.glb', '**/*.gltf'], // If you plan to use 3D models
  optimizeDeps: {
    include: ['three']
  }
})
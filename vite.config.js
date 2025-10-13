import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// NOTE: if we decide to rename the repo, update this
const BASE = '/git-basics-workshop/'

export default defineConfig({
  plugins: [react()],
  base
})

import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = resolve(__dirname, 'src')
const outDir = resolve(__dirname, 'dist')

export default defineConfig({
  root,
  plugins: [
    react(),
    tailwindcss()
  ],
  build: {
    outDir,
    emptyOutDir: true,
    rollupOptions: {
      input: {
        login_register: resolve(root, 'login_register/login_register.html'),
        forgot_password: resolve(root, 'support/forgot_password/forgot_password.html'),
      }
    }
  }
})
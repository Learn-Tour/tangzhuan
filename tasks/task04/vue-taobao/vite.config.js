import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
    base: "./",
    plugins: [vue()],
    server: {
        proxy: {
            // https://learn.91tangzhuan.com/demoapi/sku/list
            // cspell:words demoapi
            '/api': {
                target: 'https://learn.91tangzhuan.com',
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/api/, '/demoapi/')
            },
        }
    }
})

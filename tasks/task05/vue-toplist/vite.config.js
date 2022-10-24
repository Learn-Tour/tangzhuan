import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// config Vant
// cspell:words unplugin demoapi
import Component from 'unplugin-vue-components/vite'
import { VantResolver } from 'unplugin-vue-components/resolvers'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        Component({
            resolvers: [VantResolver()],
        })
    ],
    server: {
        proxy: {
            '/api/': {
                target: "https://learn.91tangzhuan.com",
                changeOrigin: true,
                rewrite: (path) => path.replace(/^\/api/, '/demoapi/')
            }
        }
    }

})

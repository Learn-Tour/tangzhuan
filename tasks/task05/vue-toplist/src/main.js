import { createApp } from 'vue'
import App from './App.vue'

// 重置样式
import 'normalize.css'
import './style.css'

// 懒加载
// cspell:words Lazyload
import { Lazyload } from 'vant'

createApp(App)
    .use(Lazyload, {
        lazyComponent: true,
    })
    .mount('#app')

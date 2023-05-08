import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import router from './boot/router'
import locale from './boot/locale'

const app = createApp(App).use(router).use(locale).mount('#app')

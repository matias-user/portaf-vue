import { createApp } from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'

import './styles/normalize.css'
import './styles/styles.css'

createApp(App).use(router).mount('#app')

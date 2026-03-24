import '../css/app.css'
import { createApp } from 'vue'
import AppLayout from './layouts/PublicLayout.vue'
import router from './router'

createApp(AppLayout)
  .use(router)
  .mount('#app')
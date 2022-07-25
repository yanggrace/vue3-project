import { createApp } from 'vue'

import ArcoVue from '@arco-design/web-vue';
import App from '@/app.vue'
import router from '@/router'
import store from '@/store'

createApp(App)
  .use(ArcoVue)
  .use(router)
  .use(store)
  .mount('#app')
import { createApp } from 'vue'
import App from './App.vue'
import router from './script/router.js'

import './assets/css/main.css'

var app = createApp(App);
app.use(router);
app.mount('#app');

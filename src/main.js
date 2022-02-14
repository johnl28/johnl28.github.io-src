import { createApp } from 'vue'
import App from './App.vue'
import router from './script/router.js'
import CommonComponents from './components/common/CommonComponents.js'

import './assets/css/main.css'
import './assets/css/markdown.css'

var app = createApp(App);
app.use(router);
app.use(CommonComponents);
app.mount('#app');

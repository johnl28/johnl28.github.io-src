import { createApp } from 'vue'
import App from './App.vue'
import router from './script/router.js'
import CommonComps from './components/common/CommonComps.js'

import Slider from './components/project/Slider.vue'

import './assets/css/main.css'

var app = createApp(App);
app.component("Slider", Slider);
app.use(router);
app.use(CommonComps);
app.mount('#app');

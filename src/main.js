import Vue from 'vue'
import App from './App.vue'
import mavonEditor from "mavon-editor";
import "mavon-editor/dist/css/index.css";

Vue.use(mavonEditor)

import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import router from './router/index'
import store from './store/index'


import './utils/permission'
import './icons'

Vue.use(ElementUI);

Vue.config.productionTip = false

new Vue({
    el: '#app',
    router: router,
    store: store,
    render: h => h(App)
})

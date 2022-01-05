import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import axios from 'axios'
import VueAxios from 'vue-axios'
import VueSweetalert2 from 'vue-sweetalert2';
import 'sweetalert2/dist/sweetalert2.min.css';

Vue.config.productionTip = false

let back = window.location.host == 'localhost:8080' ? 'http://localhost:3000/' : 'http://localhost:3000/';
axios.defaults.baseURL = back

Vue.use(VueSweetalert2)

new Vue({
    router,
    store,
    vuetify,
    axios,
    VueAxios,
    render: h => h(App)
}).$mount('#app')
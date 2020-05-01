import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import Vuetify from 'vuetify'
import 'vuetify/dist/vuetify.min.css'
import '@mdi/font/css/materialdesignicons.css'
import 'material-design-icons-iconfont/dist/material-design-icons.css'

Vue.use(Vuetify, {
  iconfont: 'mdi',
})
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')

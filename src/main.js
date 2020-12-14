import Vue from 'vue'
import App from './App.vue'
import router from './router'
import axios from 'axios'

const base = axios.create({
  baseURL: process.env.VUE_APP_API_URL
})

Vue.prototype.$http = base

Vue.config.productionTip = false

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')

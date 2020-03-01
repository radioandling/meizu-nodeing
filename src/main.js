import Vue from 'vue'
import App from './App'
import router from './router'
import store from './store/index'
import './assets/css/reset.css'
import './assets/fonts/style.css'
import './assets/css/common.css'

Vue.config.productionTip = false

/* eslint-disable no-new */

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})

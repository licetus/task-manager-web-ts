import Vue from 'vue'
import './plugins/axios'
import App from './app.vue'
import router from './router'
import store from './store'
import './register-service-worker'
import './plugins/iview.js'

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app')

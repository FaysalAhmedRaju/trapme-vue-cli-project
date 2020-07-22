import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
// import loginCom from './login.vue'
Vue.config.productionTip = false
// Vue.component('my-first-component', loginCom);
new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')

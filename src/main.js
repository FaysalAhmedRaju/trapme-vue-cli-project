import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify';
import apexchart from './plugins/apexcharts';
// import loginCom from './login.vue'
Vue.config.productionTip = false
// Vue.component('my-first-component', loginCom);
// import {mapState} from "vuex";

new Vue({
  router,
  store,
  vuetify,
  apexchart,
//   computed: mapState({
//     count: state => state.count,
//     countAlias: 'count'
// }),
  render: h => h(App)
}).$mount('#app')

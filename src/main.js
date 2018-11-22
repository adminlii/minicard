// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import Axios from 'axios'
import store from "./store"
import Vant from 'vant'
import Cookie from './cookie'
import 'vant/lib/index.css'

Vue.prototype.$axios=Axios;
Vue.prototype.$cookie=Cookie;

Vue.config.productionTip = false
Vue.use(Vant)
/* eslint-disable no-new */
var vm=new Vue({
  el: '#app',
  router,
  store,
  // components: { App },
  // template: '<App/>'
  render:(h) => h(App)
})

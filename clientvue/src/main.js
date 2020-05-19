// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'// index.js เรียกใช้ vue-router ที่นั้นแทน
import { sync } from 'vuex-router-sync'
import store from './store'//store.js vuex



import VueResource from 'vue-resource'

Vue.config.productionTip = false

Vue.use(VueResource)

sync(store,router)



/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})

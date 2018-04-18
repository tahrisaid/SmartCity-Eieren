import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App.vue'
// LightBootstrap plugin
import LightBootstrap from './light-bootstrap-main'

//VueMateriel plugins
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.css'

//BootstrapVue plugins
import BootstrapVue from 'bootstrap-vue'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'



// router setup
import routes from './routes/routes'
// plugin setup
Vue.use(VueRouter)
Vue.use(LightBootstrap)
Vue.use(BootstrapVue)
Vue.use(VueMaterial);
Vue.use(BootstrapVue);


// configure router
const router = new VueRouter({
  routes, // short for routes: routes
  linkActiveClass: 'nav-item active'
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  components: { App },
  template: '<App/>',
  render: h => h(App),
  router
})

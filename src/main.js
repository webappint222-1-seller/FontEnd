import Vue from 'vue'
import App from './App.vue'
import router from './router'
import vuetify from './plugins/vuetify'
import './assets/tailwind.css'
// import Navbar from './components/Navbar.vue'

Vue.config.productionTip = false

const app = new Vue({
  router,
  vuetify,
  
  render: h => h(App)
})
app.$mount('#app')
// app.$component('#nav-bar', Navbar)
  


  

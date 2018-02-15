import Vue from 'vue'
import VueRouter from 'vue-router'

import App from './components/App.vue'
import Dashboard from './components/Dashboard.vue'
import Signin from './components/Signin.vue'
import { firebaseApp } from './firebaseApp'
import store from './store'

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/dashboard', component: Dashboard },
    { path: '/signin', component: Signin }
  ]
})

Vue.use(VueRouter)

firebaseApp.auth().onAuthStateChanged(user => {
  if (user) {
    store.dispatch('signIn', user)
    router.push('/dashboard')
  } else {
    router.replace('/signin')
  }
})

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})

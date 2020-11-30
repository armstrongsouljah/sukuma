import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store';
import firebaseConfig from './fireConfig';
import firebase from 'firebase/app';
import 'firebase/analytics'
import 'firebase/auth'
import 'firebase/firestore'

Vue.config.productionTip = false


new Vue({
  router,
  render: h => h(App),
  created() {
    firebase.initializeApp(firebaseConfig)
    firebase.firestore()
    firebase.analytics()

    // set logged in state
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
         console.log(user)
      } else {
        console.group('logged out')
      }
    })
  },
}).$mount('#app')

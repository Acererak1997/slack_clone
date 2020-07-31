import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import firebase from 'firebase'
import '@/assets/css/tailwind.css'

Vue.config.productionTip = false

const firebaseConfig = {
  apiKey: "AIzaSyBp2wjBBIdDOlSuNfi5o_ego-i4_fHkVpg",
  authDomain: "slack-clone-5fecc.firebaseapp.com",
  databaseURL: "https://slack-clone-5fecc.firebaseio.com",
  projectId: "slack-clone-5fecc",
  storageBucket: "slack-clone-5fecc.appspot.com",
  messagingSenderId: "46243161",
  appId: "1:46243161:web:01eb6e23d6726c70300048",
  measurementId: "G-H5R626JJXJ"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')

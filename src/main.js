import Vue from "vue";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
import store from "@/store";
import router from "./router";
import { firestorePlugin } from "vuefire";

import firebase from "firebase/app";
import "firebase/firestore";

Vue.use(firestorePlugin);

var firebaseConfig = {
  apiKey: "AIzaSyAa8xxvHsSrhlMdY-0JroAJ69hLMxVHSHU",
  authDomain: "vue-shopping-card.firebaseapp.com",
  databaseURL: "https://vue-shopping-card.firebaseio.com",
  projectId: "vue-shopping-card",
  storageBucket: "vue-shopping-card.appspot.com",
  messagingSenderId: "684729087499",
  appId: "1:684729087499:web:2faf3c45c687a26b43b90e",
  measurementId: "G-WZE8B0G0DB"
};
firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();

Vue.config.productionTip = false;

new Vue({
  vuetify,
  store,
  router,
  render: h => h(App)
}).$mount("#app");

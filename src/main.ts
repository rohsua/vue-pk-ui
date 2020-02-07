import Vue from "vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import App from "./App.vue"; // vuetify보다 하위에 있어야 함.

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");

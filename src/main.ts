import "@babel/polyfill";
import Vue from "vue";
import router from "./router";
import store from "./store";
import App from "./App.vue";
import vuetify from "./plugins/vuetify";
// @ts-ignore
import Fragment from "vue-fragment";

Vue.config.productionTip = false;

Vue.use(Fragment.Plugin);

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount("#app");

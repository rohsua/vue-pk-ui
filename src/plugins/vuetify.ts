import Vue from "vue";
import Vuetify from "vuetify/lib";
// import { preset } from "vue-cli-plugin-vuetify-preset-shrine/preset";
import preset  from './preset/preset';

Vue.use(Vuetify);

const options = {
  theme: { disable: true }
};

export default new Vuetify({
  preset,
  ...options
});

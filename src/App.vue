<template>
  <v-app>
    <v-tabs>
      <v-tab>메뉴명1</v-tab>
      <v-tab>메뉴명2</v-tab>
      <v-tab>메뉴명3</v-tab>
    </v-tabs>
    <v-content>
      <HelloWorld />
    </v-content>
  </v-app>
</template>

<style lang="scss">
// vuetify import
// global sass import 로 변경 예정
.v-tabs {
  background: #f4f4f4;

  .v-tabs-slider {
    display: none;
  }
}
</style>

<script lang="ts">
import Vue from "vue";
import HelloWorld from "./components/HelloWorld.vue";

export default Vue.extend({
  name: "App",

  components: {
    HelloWorld
  },

  data: () => ({
    //
  })
});
</script>

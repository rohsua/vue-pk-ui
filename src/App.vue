<template>
  <v-app>
    <v-tabs background-color="#f4f4f4" :center-active="true">
      <v-tab>메뉴명여섯자</v-tab>
      <v-tab>메뉴명여섯자</v-tab>
      <v-tab>메뉴명여섯자</v-tab>
    </v-tabs>
    <v-content>
      <HelloWorld />
    </v-content>
  </v-app>
</template>

<style lang="scss">
@import "@/styles/global.scss";
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
  })
});
</script>

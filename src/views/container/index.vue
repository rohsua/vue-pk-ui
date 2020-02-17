<template>
  <fragment>
    <slot></slot>
    <Footer />
  </fragment>
</template>

<script lang="ts">
import Vue from "vue";
import Footer from "@/components/layout/footer/index.vue";

export default Vue.extend({
  name: "Container",
  components: {
    Footer
  },
  data() {
    return {};
  }
});
</script>

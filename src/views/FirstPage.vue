<template>
  <div class="first-page">
    <Tabs />
    첫번째 페이지
  </div>
</template>

<script lang="ts">
import Vue from "vue";
import Tabs from "@/components/Tabs.vue";

export default Vue.extend({
  name: "FirstPage",
  components: {
    Tabs
  }
});
</script>

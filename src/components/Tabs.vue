<template>
  <v-tabs
    v-model="activeTab"
    :center-active="true"
    @change="handleChange"
    :hide-slider="true"
    grow
  >
    <v-tab>첫번째 메뉴명</v-tab>
    <v-tab>두번째메뉴명</v-tab>
    <v-tab>세번째메뉴명</v-tab>
  </v-tabs>
</template>

<script>
export default {
  name: "Tabs",
  components: {},
  props: {
    currentSlide: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      activeTab: 0
    };
  },
  watch: {
    currentSlide() {
      this.activeTab = this.currentSlide;
    }
  },
  methods: {
    handleChange(tabNum) {
      this.$emit("change:currentTab", tabNum);
    }
  }
};
</script>

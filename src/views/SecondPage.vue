<template>
  <div class="wrap">
    <Tabs />
    <carousel
      :per-page="1"
      :mouse-drag="true"
      :paginationEnabled="false"
      :adjustableHeight="true"
    >
      <slide>
        <sparkline-chart></sparkline-chart>
      </slide>
      <slide>
        Slide 2 Content
      </slide>
      <slide>
        Slide 3 Content
      </slide>
    </carousel>
  </div>
</template>

<script>
import Tabs from "../components/Tabs.vue";
import { Carousel, Slide } from "vue-carousel";
import SparklineChart from "../components/SparklineChart.vue";

export default {
  name: "SecondPage",
  components: {
    Tabs,
    Carousel,
    Slide,
    SparklineChart
  }
};
</script>

<template>
  <Container>
    <div class="wrap page-first">
      <tabs :currentSlide="currentSlide" @change:currentTab="handleTabChange" />
      <carousel
        :value="currentSlide"
        :per-page="1"
        :mouse-drag="true"
        :paginationEnabled="false"
        :adjustableHeight="true"
        @page-change="handleSlideChange"
      >
        <slide>
          Slide 1 Content
        </slide>
        <slide>
          Slide 2 Content
        </slide>
        <slide>
          <div>
            <bar-chart :chartdata="barChartData"></bar-chart>
          </div>
          <div
            style="background: linear-gradient(90deg, rgba(253,29,29,1) 0%, rgba(252,176,69,1) 70%, rgba(252,219,69,1) 100%);"
          >
            <line-chart></line-chart>
          </div>
        </slide>
      </carousel>
    </div>
  </Container>
</template>

<script lang="ts">
import Vue from "vue";
import Container from "@/views/container/index.vue";

// @ts-ignore
import { Carousel, Slide } from "vue-carousel";
import Tabs from "@/components/Tabs.vue";
import BarChart from "@/components/BarChart.vue";
import LineChart from "@/components/LineChart.vue";

const barChartData = {
  labels: ["1월", "2월", "3월"],
  datasets: [
    {
      backgroundColor: "#fff",
      barThickness: 20,
      data: [59000, 54000, 64680]
    },
    {
      backgroundColor: "#f44646",
      barThickness: 20,
      data: [10000, 10000, 10000]
    }
  ]
};

export default Vue.extend({
  name: "FirstPage",
  components: {
    Container,
    Tabs,
    Carousel,
    Slide,
    BarChart,
    LineChart
  },
  data() {
    return {
      currentSlide: 0,
      barChartData: barChartData
    };
  },
  methods: {
    handleTabChange(slideNum: number) {
      this.currentSlide = slideNum;
    },
    handleSlideChange(slideNum: number) {
      this.currentSlide = slideNum;
    }
  }
});
</script>

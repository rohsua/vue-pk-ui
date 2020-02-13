<template>
  <div class="wrap">
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
        <bar-chart :chartdata="chartdata" :options="options"></bar-chart>
      </slide>
    </carousel>
  </div>
</template>

<script lang="ts">
import Vue from "vue";
// @ts-ignore
import { Carousel, Slide } from "vue-carousel";
import Tabs from "@/components/Tabs.vue";
// @ts-ignore
import BarChart from "@/components/Chart.vue";

let chartColors = {
  red: "rgb(255, 99, 132)",
  orange: "rgb(255, 159, 64)",
  yellow: "rgb(255, 205, 86)",
  green: "rgb(75, 192, 192)",
  blue: "rgb(54, 162, 235)",
  purple: "rgb(153, 102, 255)",
  grey: "rgb(201, 203, 207)"
};
const chartdata = {
  labels: ["1월", "2월", "3월"],
  datasets: [
    {
      label: "Dataset 1",
      backgroundColor: chartColors.red,
      data: [2, 4, 35, 23]
    },
    {
      label: "Dataset 2",
      backgroundColor: chartColors.blue,
      data: [4, 99, 28, 97]
    }
  ]
};

const options = {
  title: {
    display: true,
    text: "Chart.js Bar Chart - Stacked"
  },
  tooltips: {
    mode: "index",
    intersect: false
  },
  responsive: true,
  scales: {
    xAxes: [
      {
        stacked: true
      }
    ],
    yAxes: [
      {
        stacked: true
      }
    ]
  }
};

export default Vue.extend({
  name: "FirstPage",
  components: {
    Tabs,
    Carousel,
    Slide,
    BarChart
  },
  data() {
    return {
      currentSlide: 0,
      chartdata: chartdata,
      options: options
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

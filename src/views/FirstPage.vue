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
        Slide 1 Content <br />
        Slide 1 Content <br />
        Slide 1 Content <br />
        Slide 1 Content <br />
        Slide 1 Content <br />
        Slide 1 Content <br />
        Slide 1 Content <br />
        Slide 1 Content <br />
        Slide 1 Content <br />
        Slide 1 Content <br />
        Slide 1 Content <br />
        Slide 1 Content <br />
        Slide 1 Content <br />
        Slide 1 Content <br />
        Slide 1 Content <br />
        Slide 1 Content <br />
        Slide 1 Content <br />
        Slide 1 Content <br />
        Slide 1 Content <br />
        Slide 1 Content <br />
        Slide 1 Content <br />
        Slide 1 Content <br />
        Slide 1 Content <br />
        Slide 1 Content <br />
        Slide 1 Content <br />
        Slide 1 Content <br />
        Slide 1 Content <br />
        Slide 1 Content <br />
        Slide 1 Content <br />
        Slide 1 Content <br />
        Slide 1 Content <br />
        Slide 1 Content <br />
        Slide 1 Content <br />
        Slide 1 Content <br />
        Slide 1 Content <br />
        Slide 1 Content <br />
        Slide 1 Content <br />
        Slide 1 Content <br />
        Slide 1 Content <br />
        Slide 1 Content <br />
        Slide 1 Content <br />
        Slide 1 Content <br />
        Slide 1 Content <br />
        Slide 1 Content <br />
        Slide 1 Content <br />
        Slide 1 Content <br />
        Slide 1 Content <br />
        Slide 1 Content <br />
        Slide 1 Content <br />
        Slide 1 Content <br />
        Slide 1 Content <br />
        Slide 1 Content <br />
        Slide 1 Content <br />
        Slide 1 Content <br />
        Slide 1 Content <br />
        Slide 1 Content <br />
        Slide 1 Content <br />
        Slide 1 Content <br />
        Slide 1 Content <br />
        Slide 1 Content <br />
        Slide 1 Content <br />
        Slide 1 Content <br />
        Slide 1 Content <br />
        Slide 1 Content <br />
        Slide 1 Content <br />
        Slide 1 Content <br />
        Slide 1 Content <br />
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

<script lang="ts">
import Vue from "vue";
// @ts-ignore
import { Carousel, Slide } from "vue-carousel";
import Tabs from "@/components/Tabs.vue";

export default Vue.extend({
  name: "FirstPage",
  components: {
    Tabs,
    Carousel,
    Slide
  }
});
</script>

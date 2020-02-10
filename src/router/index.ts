import Vue from "vue";
import VueRouter from "vue-router";
import FirstPage from "../views/FirstPage.vue";
import SecondPage from "../views/SecondPage.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "*",
    redirect: "/first"
  },
  {
    path: "/first",
    name: "firstPage",
    component: FirstPage
  },
  {
    path: "/second",
    name: "SecondPage",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/SecondPage.vue")
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;

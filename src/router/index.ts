import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home,
    children: [
      {
        path: "/defineComponent_demo1",
        name: "defineComponent_demo1",
        component: () => import("../views/defineComponent/demo1/index.vue"),
      },
      {
        path: "/vuex",
        name: "vuex",
        component: () => import("../views/defineComponent/vuex/index.vue"),
      },
      {
        path: "/fatherAndSon1",
        name: "fatherAndSon1",
        component: () =>
          import("../views/defineComponent/fatherAndSon/father.vue"),
      },

      {
        path: "/interface",
        name: "interface",
        component: () => import("../views/typescript/interface/index.vue"),
      },

      {
        path: "/link",
        name: "link",
        component: () => import("../views/setup/jump/index.vue"),
      },
      {
        path: "/setup_demo1",
        name: "setup_demo1",
        component: () => import("../views/setup/demo1/index.vue"),
      },
      {
        path: "/fatherAndSon2",
        name: "fatherAndSon2",
        component: () => import("../views/setup/fatherAndSon/father.vue"),
      },
      {
        path: "/vueClass_demo1",
        name: "vueClass_demo1",
        component: () => import("../views/vueClass/demo1/index.vue"),
      },
      {
        path: "/fatherAndSon3",
        name: "fatherAndSon3",
        component: () => import("../views/vueClass/fatherAndSon/father.vue"),
      },
      {
        path: "/mixins",
        name: "mixins",
        component: () => import("../views/vueClass/mixins/index.vue"),
      },
    ],
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;

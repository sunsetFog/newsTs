import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";
import Home from "../views/Home.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Home",
    component: Home,
    children: [
      {
        path: "/defineComponent",
        name: "defineComponent",
        component: () =>
          import("../views/defineComponent/defineComponent/index.vue"),
      },
      {
        path: "/vuex",
        name: "vuex",
        component: () => import("../views/defineComponent/vuex/index.vue"),
      },
      {
        path: "/computed",
        name: "computed",
        component: () => import("../views/defineComponent/computed/index.vue"),
      },
      {
        path: "/watch",
        name: "watch",
        component: () => import("../views/defineComponent/watch/index.vue"),
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
        path: "/refUnit",
        name: "refUnit",
        component: () => import("../views/setup/refUnit/index.vue"),
      },
    ],
  },
  {
    path: "/about",
    name: "About",
    component: () => import("../views/About.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;

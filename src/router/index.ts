import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import { routesList } from "./routesList";
import Layout from "@/layout/index.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    component: Layout,
    redirect: "homepage",
    children: [...routesList],
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;

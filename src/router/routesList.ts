import type { RouteRecordRaw } from "vue-router";
export const routesList: RouteRecordRaw[] = [
  {
    path: "/",
    name: "HomePage",
    component: () => import("@/views/allViews/index.vue"),
    meta: {
      title: "首页",
      icon: "GoodsFilled",
      id: "home-page",
    },
  },
  {
    path: "/personalintroduction",
    name: "PersonalIntroduction",
    component: () => import("@/views/personalIntroduction/index.vue"),
    meta: {
      title: "个人介绍",
      icon: "Stamp",
      id: "personal-introduction",
    },
  },
  {
    path: "/projectintroduction",
    name: "ProjectIntroduction",
    component: () => import("@/views/projectIntroduction/index.vue"),
    meta: {
      title: "项目介绍",
      icon: "GoodsFilled",
    },
  },
];

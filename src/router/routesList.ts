import type { RouteRecordRaw } from "vue-router";
export const routesList: RouteRecordRaw[] = [
  {
    path: "/homepage",
    name: "HomePage",
    component: () => import("@/views/homePage/index.vue"),
    meta: {
      title: "首页",
      icon: "GoodsFilled",
    },
  },
  {
    path: "/personalintroduction",
    name: "PersonalIntroduction",
    component: () => import("@/views/personalIntroduction/index.vue"),
    meta: {
      title: "个人介绍",
      icon: "Stamp",
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

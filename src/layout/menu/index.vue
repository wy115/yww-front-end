<template>
  <div class="layout-menu">
    <el-menu
      active-text-color="#ffd04b"
      background-color="#545c64"
      class="el-menu-vertical-demo"
      default-active="2"
      size="large"
      text-color="#fff"
      style="font-size: 20px; height: 60px"
      :collapse="isCollapse"
    >
      <el-menu-item
        v-for="(item, index) in routesList"
        :index="index"
        :key="item.name"
      >
        <el-icon>
          <component :is="(item.meta as any).icon" />
        </el-icon>
        <template #title>{{ (item.meta as any).title }}</template>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { routesList } from "@/router/routesList";

console.log(routesList);

const isCollapse = ref<boolean>(true);
</script>
<style scoped lang="less">
.layout-menu {
  position: fixed;
  left: 0;
  top: 20vh;
  .el-menu--horizontal {
    --el-menu-horizontal-height: 100px;
  }
}
</style>

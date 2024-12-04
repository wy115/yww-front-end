<template>
  <div class="layout-content">
    <Menu />
    <router-view></router-view>
  </div>
</template>

<script setup lang="ts">
import Menu from "@/layout/menu/index.vue";
</script>
<style scoped lang="less">
.layout-content {
  width: 100vw;
  height: 100vh;
}
</style>

<template>
  <BackGround />
  <LxBg />
  <BzdBg />
  <Menu />
  <div class="max-w-7xl mx-auto flex flex-col relative">
    <div class="md:mt-[100px]">
      <router-view></router-view>
    </div>
  </div>
</template>

<script setup lang="ts">
import BackGround from "@/layout/background/BackGround.vue";
import LxBg from "@/layout/background/LxBg/LxBg.vue";
import BzdBg from "@/layout/background/BzdBg.vue";
import Menu from "@/layout/menu/index.vue";
</script>
<style scoped></style>

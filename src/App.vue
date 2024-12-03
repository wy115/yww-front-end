<template>
  <BackGround />
  <LxBg />
  <BzdBg />
  <router-view></router-view>
</template>

<script setup lang="ts">
import BackGround from "@/layout/background/BackGround.vue";
import LxBg from "@/layout/background/LxBg/LxBg.vue";
import BzdBg from "@/layout/background/BzdBg.vue";
</script>
<style scoped></style>

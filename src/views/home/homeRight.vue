<template>
  <div class="homeRight">
    <HomeTop @callBack="callBack"></HomeTop>
    <router-view></router-view>
  </div>
</template>

<script setup lang="ts">
import HomeTop from './homeRightTop.vue'
const e = defineEmits(['update:isCollapse'])
const callBack = (v: Boolean) => e('update:isCollapse', v)
</script>

<style lang="scss" scoped>
.homeRight {
  flex: 1;
  background-color: #3f3b37;
  display: flex;
  flex-direction: column;
}
</style>

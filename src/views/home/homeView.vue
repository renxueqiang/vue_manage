<template>
  <div class="homeView">
    <homeLeft></homeLeft>
    <HomeRight></HomeRight>
  </div>
</template>

<script setup lang="ts">
import homeLeft from './homeLeft.vue';
import HomeRight from './homeRight.vue';
</script>

<style lang="scss" scoped>
.homeView {
  display: flex;
}
</style>

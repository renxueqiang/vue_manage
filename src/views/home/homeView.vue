<template>
  <div class="homeView">
    <homeLeft :is-collapse="isCollapse"></homeLeft>
    <HomeRight v-model:isCollapse="isCollapse"></HomeRight>
  </div>
</template>

<script setup lang="ts">
import homeLeft from './homeLeft.vue';
import HomeRight from './homeRight.vue';
import { ref } from 'vue';
const isCollapse = ref(false)

</script>

<style lang="scss" scoped>
.homeView {
  display: flex;
}
</style>

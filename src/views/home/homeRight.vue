<template>
    <div class="homeRight">
      <HomeTop></HomeTop>
      <HomeContent></HomeContent>
    </div>
  </template>
  
  <script setup lang="ts">
  import HomeTop from './homeTop.vue';
  import HomeContent from './homeContent.vue';
  </script>
  
  <style lang="scss" scoped>
  .homeRight {
   flex: 1;
   padding-left: var(--my_width);
   background-color: #3f3b37;
   display: flex;
   flex-direction: column;
  }
  
  </style>
  
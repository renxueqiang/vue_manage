<template>
    <div class="homeLeft">
      <div v-for="item in state.menuList" :key="item.name">
        {{ item }}
      </div>
    </div>
</template>
  
<script setup lang="ts">
import { reactive } from 'vue'
const state = reactive({
    menuList: [
        {
            name: '首页',
            path: '/'
        },
        {
            name: '首页',
            path: '/',
            children: [
                {
                    name: '首页',
                    path: '/'
                },
                {
                    name: '首页',
                    path: '/'
                }
            ]
        },
        {
            name: '首页',
            path: '/',
            children: [
                {
                    name: '首页',
                    path: '/'
                },
                {
                    name: '首页',
                    path: '/'
                }
            ]
        },
        {
            name: '首页',
            path: '/',
            children: [
                {
                    name: '首页',
                    path: '/'
                },
                {
                    name: '首页',
                    path: '/'
                }
            ]
        },


    ]
})


</script>
  
<style lang="scss" scoped>
.homeLeft {
    width: var(--my_width);
    height: 100vh;
    background-color: cadetblue;
    position: fixed;
    z-index: 1;
    overflow-y: scroll;
}
</style>
  
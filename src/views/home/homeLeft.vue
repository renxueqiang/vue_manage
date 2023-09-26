<template>
  <div class="homeLeft">
    <div class="avatar">
      <el-avatar
      class="avatar_image"
        :size="30"
        src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
      />
      <span> 后台系统 </span>
    </div>

    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      :collapse="isCollapse"
      @open="handleOpen"
      @close="handleClose"
      background-color="#2c3e50"
    >
      <el-menu-item index="1">
        <el-icon><HomeFilled /></el-icon>
        <template #title>首页</template>
      </el-menu-item>

      <el-sub-menu index="2">
        <template #title>
          <el-icon><TrendCharts /></el-icon>
          <span>订单</span>
        </template>
        <el-menu-item index="2-1">item one</el-menu-item>
        <el-menu-item index="2-2">item two</el-menu-item>
        <el-sub-menu index="2-3">
          <template #title><span>item four</span></template>
          <el-menu-item index="2-3-1">item one</el-menu-item>
        </el-sub-menu>
      </el-sub-menu>
      <el-menu-item index="3">
        <el-icon><Comment /></el-icon>
        <template #title>资产</template>
      </el-menu-item>

      <el-menu-item index="4">
        <el-icon><Avatar /></el-icon>
        <template #title>我的</template>
      </el-menu-item>
    </el-menu>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import { ref } from 'vue'

const isCollapse = ref(false)
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}

</script>

<style lang="scss" scoped>
.homeLeft {
  width: var(--my_width);
  height: 100vh;
  background-color: cadetblue;
  position: fixed;
  z-index: 1;
  overflow-y: scroll;

  .avatar {
    line-height: 30px;
    .avatar_image {
        vertical-align: bottom;
        margin-right: 5px;
    }
  }
}

.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 100%;
  min-height: 100%;
}
</style>

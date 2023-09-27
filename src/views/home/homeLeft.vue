<template>
  <div :class="className" :style="{ width: isCollapse ? '60px' : '200px' }">
    <div class="avatar">
      <el-avatar
        class="avatar_image"
        :size="30"
        src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"
      />
      <span v-show="!isCollapse"> 后台系统 </span>
    </div>

    <el-scrollbar class="scroller">
      <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
        :collapse="isCollapse"
        :collapse-transition="false"
        @open="handleOpen"
        @close="handleClose"
        background-color="#5f9ea0"
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
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script setup lang="ts">
import { defineProps, watch, ref } from 'vue'
const props = defineProps({
  isCollapse: Boolean
})
const className = ref(['homeLeft'])

watch(
  () => props.isCollapse,
  (newValue) => {
    let arr = ['homeLeft']
    if (newValue) {
      arr.push('element')
    } else {
      arr.push('elementRevrse')
    }
    className.value = arr
  }
)

const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath)
}
</script>

<style lang="scss" scoped>
.homeLeft {
  height: 100vh;
  background-color: #5f9ea0;
  position: sticky;
  z-index: 1;
  top: 0;

  .avatar {
    line-height: 30px;
    white-space: nowrap;
    color: var(--el-text-color-primary);
    .avatar_image {
      vertical-align: bottom;
      margin-right: 5px;
      margin-left: 15px;
    }
  }
  .scroller {
    height: calc(100vh - 30px);
  }
}
.el-menu-vertical-demo {
  border-right: none;
}
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 100%;
  min-height: 100%;
}

@keyframes myAnimation {
  from {
    width: 200px;
  }
  to {
    width: 60px;
  }
}

@keyframes myAnimationRevrse {
  from {
    width: 60px;
  }
  to {
    width: 200px;
  }
}

.element {
  animation: myAnimation 0.25s linear;
}
.elementRevrse {
  animation: myAnimationRevrse 0.25s linear;
}
</style>

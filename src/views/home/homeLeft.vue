<template>
  <div :class="className" :style="{ width: isCollapse ? '60px' : '200px' }">
    <div class="avatar">
      <el-avatar
        class="avatar_image"
        :size="30"
        :src="userStore.state.avatar"
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
        :router="true"
      >
        <template v-for="(item, index) in routerArray" :key="index">
          <el-menu-item :index="item.path" v-if="!item.children">
            <el-icon>
              <component :is="item.meta?.icon"></component>
            </el-icon>
            <span>{{ item.meta?.title }}</span>
          </el-menu-item>
          <el-menu-item :index="item.children[0].path" v-else-if="item.children.length < 2">
            <el-icon>
              <component :is="item.children[0].meta?.icon"></component>
            </el-icon>

            <span>{{ item.children[0].meta?.title }}</span>
          </el-menu-item>
          <el-sub-menu :index="item.path" v-else>
            <template #title>
              <el-icon>
                <component :is="item.meta?.icon"></component>
              </el-icon>
              <span>{{ item.meta?.title }}</span>
            </template>

            <el-menu-item
              v-for="subItem in item.children"
              :key="subItem.path"
              :index="subItem.path"
            >
              <el-icon>
                <component :is="subItem.meta?.icon"></component>
              </el-icon>

              <span>{{ subItem.meta?.title }}</span>
            </el-menu-item>
          </el-sub-menu>
        </template>
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script setup lang="ts">
import {watch, ref } from 'vue'
import { routerArray } from '@/router/index'
import useUserStore from '@/stores/user';

const props = defineProps({
  isCollapse: Boolean
})
const className = ref(['homeLeft'])
const userStore = useUserStore()

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

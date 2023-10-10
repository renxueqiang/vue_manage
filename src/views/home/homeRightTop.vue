<template>
  <div class="homeTop">
    <div class="left">
      <el-icon :size="25" @click="btnClick">
        <component :is="state.open ? 'Fold' : 'Expand'"></component>
      </el-icon>
      <el-breadcrumb
        :separator-icon="ArrowRight"
        style="height: 25px; line-height: 25px; margin-left: 10px"
      >
        <el-breadcrumb-item
          v-for="(item, index) in route.matched"
          :key="index"
          v-show="item.meta.title"
          :to="item.path"
        >
          <el-icon>
            <component :is="item.meta.icon"></component>
          </el-icon>
          <span>{{ item.meta.title }}</span>
        </el-breadcrumb-item>
      </el-breadcrumb>
    </div>

    <div class="right">
      <el-button type="info" icon="Refresh" size="default" @click="btnClick1" circle></el-button>
      <el-button type="info" icon="FullScreen" size="default" @click="btnClick2" circle></el-button>
      <el-popover
        :width="200"
        popper-style="box-shadow: rgb(14 18 22 / 35%) 0px 10px 38px -10px, rgb(14 18 22 / 20%) 0px 10px 20px -15px; padding: 20px;"
      >
        <template #reference>
          <el-button type="info" icon="Setting" size="default" circle></el-button>
        </template>
        <template #default>
          <p style="margin-bottom: 25px; font-weight: bold">主题设置</p>
          <div class="demo-color-block">
            <span class="demonstration">主题颜色</span>
            <el-color-picker v-model="state.color1" />
          </div>

          <div class="demo-color-block">
            <span class="demonstration">暗黑模式</span>
            <el-switch
              v-model="state.value1"
              :active-action-icon="Sunny"
              :inactive-action-icon="Hide"
            />
          </div>
        </template>
      </el-popover>

      <el-avatar :src="userStore.state.avatar" :size="32" style="margin: 0 10px" />
      <el-dropdown>
        <span class="el-dropdown-link">
          {{ userStore.state.username }}
          <el-icon class="el-icon--right">
            <arrow-down />
          </el-icon>
        </span>
        <template #dropdown>
          <el-dropdown-menu>
            <el-dropdown-item @click="logout">退出登录</el-dropdown-item>
          </el-dropdown-menu>
        </template>
      </el-dropdown>
    </div>
  </div>
</template>

<script setup lang="ts">
import useUserStore from '@/stores/user'
import { ArrowRight, ArrowDown, Hide, Sunny } from '@element-plus/icons-vue'
import { onMounted, reactive } from 'vue'
import { useRoute, useRouter } from 'vue-router'
const state = reactive({
  open: true,
  color1: '#409EFF',
  value1: true
})
const e = defineEmits(['callBack'])
const userStore = useUserStore()
const router = useRouter()
const route = useRoute()

onMounted(() => {
  console.log('hahahhah', route)
})

const btnClick = () => {
  e('callBack', state.open)
  state.open = !state.open
}
const btnClick1 = () => {}
const btnClick2 = () => {
  let full = document.fullscreenElement
  if (!full) {
    document.documentElement.requestFullscreen()
  } else {
    document.exitFullscreen()
  }
}
const logout = async () => {
  await userStore.logout()
  router.push({ path: '/login', query: { redirect: route.path } })
}
</script>

<style lang="scss" scoped>
.homeTop {
  width: 100%;
  height: 80px;
  background-color: #3a4340;
  position: sticky;
  top: 0;
  display: flex;
  padding: 0 10px;
  justify-content: space-between;
  align-items: center;
  .left {
    display: flex;
  }
  .right {
    display: flex;
    align-items: center;
  }
}
</style>

<style scoped>
.el-dropdown-link {
  cursor: pointer;
  color: burlywood;
  display: flex;
  align-items: center;
}

:focus-visible {
  outline: none;
}

.demo-color-block {
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  .demonstration {
    margin-right: 20px;
  }
}
</style>

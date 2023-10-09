<template>
  <div class="homeTop">
    <div class="left">
      <el-icon :size="25" @click="btnClick($event, 123)">
        <component :is="state.open ? 'Fold' : 'Expand'"></component>
      </el-icon>
      <el-breadcrumb
        :separator-icon="ArrowRight"
        style="height: 25px; line-height: 25px; margin-left: 10px"
      >
        <el-breadcrumb-item :to="{ path: '/' }"> 首页 </el-breadcrumb-item>
        <el-breadcrumb-item> 管理</el-breadcrumb-item>
      </el-breadcrumb>
    </div>

    <div class="right">
      <el-button type="info" icon="Refresh" size="default" @click="btnClick" circle></el-button>
      <el-button type="info" icon="FullScreen" size="default" @click="btnClick" circle></el-button>
      <el-button type="info" icon="Setting" size="default" @click="btnClick" circle></el-button>
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
import { ArrowRight, ArrowDown } from '@element-plus/icons-vue'
import { reactive } from 'vue'
import { useRoute, useRouter } from 'vue-router'
const state = reactive({
  open: true
})
const e = defineEmits(['callBack'])
const userStore = useUserStore()
const router = useRouter()
const route = useRoute()
const btnClick = (a: any, b: number) => {
  e('callBack', state.open)
  state.open = !state.open
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
</style>

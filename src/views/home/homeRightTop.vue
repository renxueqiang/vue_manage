<template>
  <div class="homeTop">
    <div class="left">
      <el-icon :size="25" @click="btnClick($event,123)">
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

    <div>
      <el-button type="info" icon="Refresh" size="default" @click="btnClick" circle></el-button>
      <el-button type="info" icon="FullScreen" size="default" @click="btnClick" circle></el-button>
      <el-button type="info" icon="Setting" size="default" @click="btnClick" circle></el-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { House, ArrowRight } from '@element-plus/icons-vue'
import { reactive } from 'vue'
const state = reactive({
  open: true
})
const e = defineEmits(['callBack'])

const btnClick = (a:any,b:number) => {
console.log(a,b);

  e('callBack', state.open)
  state.open = !state.open
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
}
</style>

<template>
  <div class="homeContent">
    <el-scrollbar class="scroller">
      <el-card class="box-card">
        <template #header>
          <div class="card-header">
            <span>Card name</span>
            <el-button class="button" text>Operation button</el-button>
          </div>
        </template>
        <div v-for="o in 4" :key="o" class="text item">{{ 'List item ' + o }}</div>
      </el-card>
    </el-scrollbar>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

onMounted(() => {
  console.log('hahahhah', route)
})
</script>

<style lang="scss" scoped>
.homeContent {
  background-color: #302837;
  flex: 1;
  .scroller {
    height: calc(100vh - 80px);
    .box-card {
      width: 100%;
      background-color: #302837;
    }
  }
}
</style>

<style scoped>
.card-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.box-card {
  width: 480px;
}
</style>

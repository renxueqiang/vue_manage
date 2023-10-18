<template>
  <div class="homeContent">
    <el-scrollbar class="scroller">
      <el-card class="box-card">
        <div class="card-header">
          <el-button type="primary" icon="Plus">添加品牌</el-button>
        </div>
        <el-table :data="tableData" style="width: 100%" >
          <el-table-column type="index" label="序号"  width="120"/>
          <el-table-column prop="date" label="品牌名称" width="120" />
          <el-table-column prop="name" label="品牌LOGO" width="120">
            <template #default>
              <div class="demo-image__preview">
                <el-image
                  style="width: 100px; height: 100px"
                  :src="url"
                  :zoom-rate="1.2"
                  :max-scale="7"
                  :min-scale="0.2"
                  :preview-src-list="srcList"
                  :initial-index="4"
                  fit="cover"
                  preview-teleported
                />
              </div>
            </template>
          </el-table-column>
          <el-table-column prop="address" label="品牌操作" width="120"/>
        </el-table>
        <el-pagination
          background
          layout="prev, pager, next"
          :total="1000"
          style="margin-top: 30px"
        />
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

const tableData = [
  {
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles'
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles'
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles'
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles'
  }
]

const url = 'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg'
const srcList = [
  'https://fuss10.elemecdn.com/a/3f/3302e58f9a181d2509f3dc0fa68b0jpeg.jpeg',
  'https://fuss10.elemecdn.com/1/34/19aa98b1fcb2781c4fba33d850549jpeg.jpeg',
  'https://fuss10.elemecdn.com/0/6f/e35ff375812e6b0020b6b4e8f9583jpeg.jpeg',
  'https://fuss10.elemecdn.com/9/bb/e27858e973f5d7d3904835f46abbdjpeg.jpeg',
  'https://fuss10.elemecdn.com/d/e6/c4d93a3805b3ce3f323f7974e6f78jpeg.jpeg',
  'https://fuss10.elemecdn.com/3/28/bbf893f792f03a54408b3b7a7ebf0jpeg.jpeg',
  'https://fuss10.elemecdn.com/2/11/6535bcfb26e4c79b48ddde44f4b6fjpeg.jpeg'
]
</script>

<style lang="scss" scoped>
.homeContent {
  background-color: #302837;
  flex: 1;
  .scroller {
    height: calc(100vh - 80px);
    .box-card {
      background-color: #6c2ea2;
      padding: 30px 10px;
      border: 1px solid wheat;
      .card-header {
        padding-bottom: 30px;
      }
    }
  }
}
</style>

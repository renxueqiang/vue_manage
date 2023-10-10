<template>
  <div>sku</div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { useRoute } from 'vue-router';


const route = useRoute()

onMounted(() => {
  console.log('hahahhah',route);
})

</script>

<style lang="scss" scoped></style>

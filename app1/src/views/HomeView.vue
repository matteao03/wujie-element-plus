<script setup lang="ts">
  import {ref} from 'vue'
const currentPage = ref(1)
const pageSize = ref(100)
</script>

<template>
  <main>
    <el-pagination
      v-model:current-page="currentPage"
      v-model:page-size="pageSize"
      :page-sizes="[100, 200, 300, 400]"
      layout="total, sizes, prev, pager, next, jumper"
      :total="400"
    />
  </main>
</template>

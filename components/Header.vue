<template>
  <div class="header">
    <span class="text-white text-sm">{{ $t('navbar.welcome') }}</span>
    <el-button>{{ $t('navbar.buttonContent') }}<el-icon class="el-icon--right"><CaretRight /></el-icon></el-button>
  </div>
</template>
<script setup>
import { CaretRight } from '@element-plus/icons-vue'

</script>
<style lang="scss">
.header{
    @apply h-12 min-w-full min-h-full bg-gradient-to-r from-blue-500 via-green-400  to-blue-500 flex justify-center items-center
  } 
  .el-button::v-deep{
  --el-button-text-color: green;
  color: green;
  }
</style>

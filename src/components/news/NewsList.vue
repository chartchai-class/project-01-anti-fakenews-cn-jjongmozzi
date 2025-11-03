<template>
  <!-- 加载状态 -->
  <div v-if="isLoading" class="flex justify-center items-center h-20">
    <div class="animate-spin rounded-full h-10 w-10 border-4 border-blue-200 border-t-blue-600"></div>
  </div>

  <!-- 新闻列表 -->
  <div v-else-if="newsList.length > 0" class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
    <NewsCard v-for="news in newsList" :key="news.id" :news="news" />
  </div>

  <!-- 空状态 -->
  <div v-else class="text-center py-16">
    <p class="text-gray-500 text-lg">No news found matching your filter.</p>
    <p class="mt-2 text-sm text-gray-400">Total news available: {{ totalCount }}</p>
  </div>

  <!-- 分页组件 -->
  <Pagination
    v-if="totalCount > 0"
    :current-page="currentPage"
    :per-page="perPage"
    :total-items="totalCount"
    @page-change="handlePageChange"
  />
</template>

<script setup lang="ts">
import { defineProps, defineEmits } from 'vue'
import NewsCard from './NewsCard.vue'
import Pagination from '@/components/common/Pagination.vue'
import type { News } from '@/types'

// 接收父组件参数（明确类型）
const props = defineProps<{
  newsList: News[];
  isLoading: boolean;
  totalCount: number;
  currentPage: number;  // 接收当前页码
  perPage: number;      // 接收每页条数
}>()

// 传递页码变化事件
const emit = defineEmits<{
  (e: 'page-change', page: number): void;
}>()

const handlePageChange = (newPage: number) => {
  emit('page-change', newPage)
}
</script>
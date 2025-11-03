<template>
  <div class="flex items-center justify-between mt-8">
    <!-- 上一页按钮 -->
    <button
      v-if="hasPrevPage"
      @click="handlePageChange(currentPage - 1)"
      class="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 transition-colors"
      :disabled="!hasPrevPage"
    >
      <span>←</span>
      <span>Previous</span>
    </button>
    <div v-else class="w-24"></div>

    <!-- 页码信息 -->
    <span class="text-sm text-gray-700">
      Page {{ currentPage }} of {{ totalPages }}
    </span>

    <!-- 下一页按钮 -->
    <button
      v-if="hasNextPage"
      @click="handlePageChange(currentPage + 1)"
      class="flex items-center space-x-2 px-4 py-2 border border-gray-300 rounded-md text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 transition-colors"
      :disabled="!hasNextPage"
    >
      <span>Next</span>
      <span>→</span>
    </button>
    <div v-else class="w-24"></div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { defineProps, defineEmits } from 'vue'

// 接收分页参数
const props = defineProps<{
  currentPage: number;   // 当前页码
  perPage: number;       // 每页条数
  totalItems: number;    // 总数据量
}>()

// 发射页码变化事件
const emit = defineEmits<{
  (e: 'page-change', page: number): void;
}>()

// 计算总页数（确保至少为1页）
const totalPages = computed(() => {
  const total = Math.ceil(props.totalItems / props.perPage)
  return total > 0 ? total : 1
})

// 修正当前页码（防止超出有效范围）
const safeCurrentPage = computed(() => {
  // 确保当前页码不小于1且不大于总页数
  return Math.min(Math.max(props.currentPage, 1), totalPages.value)
})

// 是否有上一页（基于修正后的页码）
const hasPrevPage = computed(() => safeCurrentPage.value > 1)

// 是否有下一页（基于修正后的页码）
const hasNextPage = computed(() => safeCurrentPage.value < totalPages.value)

// 处理页码变化（强制限制在有效范围内）
const handlePageChange = (newPage: number) => {
  // 确保新页码在 [1, totalPages] 范围内
  const validPage = Math.min(Math.max(newPage, 1), totalPages.value)
  emit('page-change', validPage)
}
</script>
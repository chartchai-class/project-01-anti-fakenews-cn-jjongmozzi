<template>
 <div class="container mx-auto p-4">
 <h1 class="text-2xl font-bold mb-6">Latest News</h1>
 <div class="flex flex-wrap items-center justify-between mb-6">
 <div class="flex items-center gap-4">
 <label class="text-gray-700">Filter:</label>
 <select
 v-model="filter"
 class="border rounded px-3 py-2"
 @change="fetchNewsList"
 >
 <option value="all">All News</option>
 <option value="fake">Fake News</option>
 <option value="real">Real News</option>
 </select>
 </div>
 <div class="flex items-center gap-4">
 <label class="text-gray-700">Items per page:</label>
 <select
 v-model="perPage"
 class="border rounded px-3 py-2"
 @change="handlePerPageChange"
 >
 <option value="5">5</option>
 <option value="10">10</option>
 <option value="20">20</option>
 </select>
 </div>
 </div>
 <!-- 新闻列表组件 - 参数与 Store 状态类型匹配，修复 TS2339 错误 -->
 <NewsList
 :news-list="newsStore.newsList"
 :total-count="newsStore.totalCount"
 :is-loading="newsStore.isLoading"
 :current-page="page"
 :per-page="perPage"
 @page-change="handlePageChange"
 />
 </div>
</template>
<script setup lang="ts">
import { ref, watch } from 'vue'
import { useNewsStore } from '@/stores/newsStore'
import NewsList from '@/components/news/NewsList.vue'
// 修复：删除未使用的 PaginationParams 导入（消除 TS6133 错误）

const newsStore = useNewsStore()
const page = ref(1)
const perPage = ref(5)
// 显式指定 filter 类型，与 PaginationParams 中的 filter 匹配
const filter = ref<'all' | 'fake' | 'real'>('all')

const fetchNewsList = () => {
 // 参数 perPage 已在 PaginationParams 中声明，修复 TS2353 错误
 newsStore.fetchNews({ page: page.value, perPage: perPage.value, filter: filter.value })
}

const handlePageChange = (newPage: number) => {
 page.value = newPage
 fetchNewsList()
}

// 处理每页条数变化时重置到第一页
const handlePerPageChange = () => {
 page.value = 1
 fetchNewsList()
}

// 页面加载时立即请求数据
watch([page, perPage, filter], fetchNewsList, { immediate: true })
</script>
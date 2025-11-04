<template>
  <div class="container mx-auto p-4">
    <!-- 加载状态 -->
    <div v-if="isLoading" class="flex justify-center p-10">
      <div class="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
    </div>
    <!-- 新闻详情 -->
    <div v-else-if="news" class="max-w-3xl mx-auto">
      <img 
        :src="news.imageUrl" 
        alt="News cover" 
        class="w-full h-64 object-cover rounded-lg shadow-md mb-6"
      >
      <h1 class="text-3xl font-bold mb-4">{{ news.title }}</h1>
      <div class="text-gray-500 mb-6 flex items-center">
        <span>By {{ news.reporter }}</span>
        <span class="mx-2">•</span>
        <span>{{ news.date }}</span>
      </div>
      <div class="prose max-w-none mb-8">
        <p>{{ news.content }}</p>
      </div>
      <!-- 投票按钮 -->
      <div class="flex gap-4 mb-8">
        <button class="bg-red-100 text-red-700 px-6 py-2 rounded hover:bg-red-200 transition">
          Mark as Fake ({{ news.voteFake }})
        </button>
        <button class="bg-green-100 text-green-700 px-6 py-2 rounded hover:bg-green-200 transition">
          Mark as Real ({{ news.voteReal }})
        </button>
      </div>
    </div>
    <!-- 数据不存在/错误状态 -->
    <div v-else class="text-center p-10">
      <p class="text-gray-500 mb-4">News not found or failed to load</p>
      <button 
        @click="$router.push('/')" 
        class="text-blue-600 hover:underline"
      >
        Back to Home
      </button>
    </div>
  </div>
</template>
<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router' // 移除未使用的 useRouter
import { useNewsStore } from '@/stores/newsStore'
import type { News } from '@/types'

const route = useRoute()
// 修复：删除未使用的 router 变量
const newsStore = useNewsStore()
const news = ref<News | null>(null)
const isLoading = ref(true)

// 获取路由参数中的 ID 并请求数据
const loadNewsDetail = async () => {
  try {
    isLoading.value = true
    // 解析路由参数中的 ID（确保是数字类型）
    const newsId = Number(route.params.id)
    if (isNaN(newsId)) {
      throw new Error('Invalid news ID')
    }
    // 调用 store 方法并直接获取返回数据
    const data = await newsStore.fetchNewsById(newsId)
    news.value = data
  } catch (error) {
    console.error('Detail page error:', error)
    news.value = null
  } finally {
    isLoading.value = false
  }
}

// 页面加载时执行
onMounted(loadNewsDetail)
</script>
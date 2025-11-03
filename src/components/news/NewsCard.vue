<template>
 <!-- 路由跳转链接 -->
 <RouterLink 
 :to="{ name: 'news-detail', params: { id: news.id } }"
 class="block bg-white rounded-lg shadow-sm border hover:shadow-md transition-shadow duration-200 mb-4 overflow-hidden"
 >
 <!-- 新闻图片区域 -->
 <div class="h-48 bg-gray-200">
 <img 
 :src="`https://picsum.photos/seed/news${news.id}/600/400`" 
 alt="news image" 
 class="w-full h-full object-cover"
 >
 </div>
 <!-- 新闻内容区域 -->
 <div class="p-6">
 <div class="flex items-start justify-between mb-3">
 <h3 class="text-lg font-semibold text-gray-900 flex-1 mr-4">
 {{ news.title }}
 </h3>
 <span 
 :class="[
 'inline-flex items-center px-3 py-1 rounded-full text-xs font-medium',
 news.isFake 
 ? 'bg-red-100 text-red-800' 
 : 'bg-green-100 text-green-800'
 ]"
 >
 {{ news.isFake ? 'Fake News' : 'Real News' }}
 </span>
 </div>

 <p class="text-gray-600 mb-4 line-clamp-3">
 {{ news.summary }}
 </p>

 <div class="flex items-center justify-between text-sm text-gray-500">
 <div class="flex items-center space-x-4">
 <span>By {{ news.reporter }}</span>
 <span>{{ formatDate(news.date) }}</span>
 </div>
 
 <div class="flex items-center space-x-4">
 <span class="flex items-center space-x-1 text-red-500">
 <span>👎</span>
 <span>{{ news.voteFake }}</span>
 </span>
 <span class="flex items-center space-x-1 text-green-500">
 <span>👍</span>
 <span>{{ news.voteReal }}</span>
 </span>
 </div>
 </div>
 </div>
 </RouterLink>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
import type { News } from '@/types'
import { formatDate } from '@/utils/helpers'

interface Props {
 news: News
}

defineProps<Props>()
</script>
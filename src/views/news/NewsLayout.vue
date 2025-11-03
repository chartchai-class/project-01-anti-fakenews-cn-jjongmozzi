<template>
  <div v-if="currentNews" class="max-w-4xl mx-auto">
    <nav class="mb-8 border-b">
      <div class="flex space-x-8">
        <RouterLink
          :to="{ name: 'news-detail', params: { id: currentNews.id } }"
          class="py-4 px-1 border-b-2 font-medium text-sm"
          :class="[
            $route.name === 'news-detail'
              ? 'border-primary-500 text-primary-600'
              : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
          ]"
        >
          Details
        </RouterLink>
        <RouterLink
          :to="{ name: 'news-comments', params: { id: currentNews.id } }"
          class="py-4 px-1 border-b-2 font-medium text-sm"
          :class="[
            $route.name === 'news-comments'
              ? 'border-primary-500 text-primary-600'
              : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
          ]"
        >
          Comments
        </RouterLink>
        <RouterLink
          :to="{ name: 'news-vote', params: { id: currentNews.id } }"
          class="py-4 px-1 border-b-2 font-medium text-sm"
          :class="[
            $route.name === 'news-vote'
              ? 'border-primary-500 text-primary-600'
              : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
          ]"
        >
          Vote & Comment
        </RouterLink>
      </div>
    </nav>

    <RouterView :news="currentNews" />
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useNewsStore } from '@/stores/newsStore'

const newsStore = useNewsStore()
const { currentNews } = storeToRefs(newsStore)
</script>
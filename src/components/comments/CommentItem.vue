<template>
  <div class="bg-white p-4 rounded-lg border">
    <div class="flex justify-between items-start mb-2">
      <span class="font-medium text-gray-900">{{ comment.userName }}</span>
      <span class="text-sm text-gray-500">{{ formatDate(comment.createdAt) }}</span>
    </div>
    <p class="text-gray-700 mb-2">{{ comment.content }}</p>
    <div class="flex items-center justify-between">
      <span 
        :class="[
          'inline-flex items-center px-2 py-1 rounded text-xs font-medium',
          comment.isFakeVote 
            ? 'bg-red-100 text-red-800' 
            : 'bg-green-100 text-green-800'
        ]"
      >
        {{ comment.isFakeVote ? 'Voted: Fake' : 'Voted: Real' }}
      </span>
      <a 
        v-if="comment.evidenceImage" 
        :href="comment.evidenceImage" 
        target="_blank"
        class="text-primary-600 hover:text-primary-800 text-sm"
      >
        View Evidence
      </a>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Comment } from '@/types'
import { formatDate } from '@/utils/helpers'

interface Props {
  comment: Comment
}

defineProps<Props>()
</script>
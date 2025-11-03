<template>
  <div class="space-y-4">
    <CommentItem 
      v-for="comment in comments" 
      :key="comment.id" 
      :comment="comment" 
    />
    
    <div v-if="comments.length === 0" class="text-center py-8">
      <p class="text-gray-500">No comments yet.</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import type { Comment } from '@/types'
import CommentItem from './CommentItem.vue'

interface Props {
  comments: Comment[]
}

defineProps<Props>()
</script>
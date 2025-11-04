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
import type { Comment } from '@/types' // 依赖修正后的 Comment 接口
import CommentItem from './CommentItem.vue'
import { defineProps } from 'vue' // 补充 defineProps 导入

interface Props {
  comments: Comment[]
}
defineProps<Props>()
</script>
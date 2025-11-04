<template>
  <div v-if="news" class="bg-white rounded-lg shadow-sm border p-6">
    <h2 class="text-2xl font-bold text-gray-900 mb-6">Comments</h2>
    
    <CommentList :comments="comments" />
    
    <CommentForm 
      :news-id="news.id" 
      @comment-added="handleCommentAdded"
      class="mt-8"
    />
  </div>
</template>
<script setup lang="ts">
import { ref, onMounted } from 'vue'
import type { News, Comment } from '@/types' // 依赖修正后的类型
import { useCommentStore } from '@/stores/commentStore'
import CommentList from '@/components/comments/CommentList.vue'
import CommentForm from '@/components/comments/CommentForm.vue'
import { defineProps } from 'vue' // 补充 defineProps 导入

interface Props {
  news: News
}
const props = defineProps<Props>()

const commentStore = useCommentStore()
const comments = ref<Comment[]>([])

/**
 * 加载当前新闻的评论
 */
const loadComments = async () => {
  try {
    await commentStore.fetchCommentsByNewsId(props.news.id)
    comments.value = commentStore.currentNewsComments // 类型匹配，消除 TS2339 错误
  } catch (error) {
    console.error('Failed to load comments:', error)
  }
}

/**
 * 处理新评论添加后的状态更新
 */
const handleCommentAdded = async (newComment: Comment) => {
  try {
    await commentStore.addComment(newComment)
    comments.value = commentStore.currentNewsComments // 类型匹配，消除 TS2339 错误
  } catch (error) {
    console.error('Failed to add comment:', error)
  }
}

// 页面挂载时加载评论
onMounted(loadComments)
</script>
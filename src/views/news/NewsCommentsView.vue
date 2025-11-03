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
import type { News, Comment } from '@/types'
import { useCommentStore } from '@/stores/commentStore'
import CommentList from '@/components/comments/CommentList.vue'
import CommentForm from '@/components/comments/CommentForm.vue'

interface Props {
  news: News
}

const props = defineProps<Props>()
const commentStore = useCommentStore()
const comments = ref<Comment[]>([])

const loadComments = async () => {
  try {
    await commentStore.fetchCommentsByNewsId(props.news.id)
    comments.value = commentStore.currentNewsComments
  } catch (error) {
    console.error('Failed to load comments:', error)
  }
}

const handleCommentAdded = async (newComment: Comment) => {
  try {
    await commentStore.addComment(newComment)
    comments.value = commentStore.currentNewsComments
  } catch (error) {
    console.error('Failed to add comment:', error)
  }
}

onMounted(loadComments)
</script>
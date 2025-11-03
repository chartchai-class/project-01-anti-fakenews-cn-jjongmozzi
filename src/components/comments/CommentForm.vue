<template>
  <div class="bg-white p-6 rounded-lg border">
    <h3 class="text-lg font-medium text-gray-900 mb-4">Add a Comment</h3>
    <form @submit.prevent="submitComment">
      <div class="mb-4">
        <label for="userName" class="block text-sm font-medium text-gray-700 mb-1">
          Your Name
        </label>
        <input 
          id="userName"
          v-model="form.userName"
          type="text"
          required
          class="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
        >
      </div>

      <div class="mb-4">
        <label for="content" class="block text-sm font-medium text-gray-700 mb-1">
          Comment
        </label>
        <textarea 
          id="content"
          v-model="form.content"
          rows="3"
          required
          class="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
        ></textarea>
      </div>

      <div class="mb-4">
        <label class="block text-sm font-medium text-gray-700 mb-2">Your Vote</label>
        <div class="flex space-x-4">
          <label class="inline-flex items-center">
            <input 
              v-model="form.isFakeVote"
              type="radio" 
              :value="false"
              class="text-primary-600 focus:ring-primary-500"
            >
            <span class="ml-2">Real News</span>
          </label>
          <label class="inline-flex items-center">
            <input 
              v-model="form.isFakeVote"
              type="radio" 
              :value="true"
              class="text-primary-600 focus:ring-primary-500"
            >
            <span class="ml-2">Fake News</span>
          </label>
        </div>
      </div>

      <div class="mb-4">
        <label for="evidenceImage" class="block text-sm font-medium text-gray-700 mb-1">
          Evidence Image URL (Optional)
        </label>
        <input 
          id="evidenceImage"
          v-model="form.evidenceImage"
          type="url"
          class="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
          placeholder="https://example.com/evidence.jpg"
        >
      </div>

      <button 
        type="submit"
        class="w-full bg-primary-600 text-white py-2 px-4 rounded-md hover:bg-primary-700 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2"
      >
        Submit Comment
      </button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'
import type { Comment } from '@/types'

interface Props {
  newsId: number
}

const props = defineProps<Props>()
const emit = defineEmits<{
  commentAdded: [comment: Comment]
}>()

const form = reactive({
  userName: '',
  content: '',
  isFakeVote: false,
  evidenceImage: ''
})

const submitComment = () => {
  const newComment: Omit<Comment, 'id'> = {
    newsId: props.newsId,
    userName: form.userName,
    content: form.content,
    isFakeVote: form.isFakeVote,
    evidenceImage: form.evidenceImage || undefined,
    createdAt: new Date().toISOString()
  }

  emit('commentAdded', newComment as Comment)

  // Reset form
  form.userName = ''
  form.content = ''
  form.isFakeVote = false
  form.evidenceImage = ''
}
</script>
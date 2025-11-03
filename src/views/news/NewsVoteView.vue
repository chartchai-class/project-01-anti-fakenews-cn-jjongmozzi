<template>
  <div v-if="news" class="bg-white rounded-lg shadow-sm border p-6">
    <h2 class="text-2xl font-bold text-gray-900 mb-6">Vote & Comment</h2>
    
    <div class="mb-6">
      <h3 class="text-lg font-medium text-gray-900 mb-4">Do you think this news is fake?</h3>
      <div class="flex space-x-4">
        <button 
          @click="vote(false)"
          :class="[
            'flex-1 py-3 px-4 border rounded-lg transition-colors',
            userVote === false 
              ? 'border-green-500 bg-green-50 text-green-700' 
              : 'border-gray-300 text-gray-700 hover:bg-gray-50'
          ]"
        >
          👍 Real News
        </button>
        <button 
          @click="vote(true)"
          :class="[
            'flex-1 py-3 px-4 border rounded-lg transition-colors',
            userVote === true 
              ? 'border-red-500 bg-red-50 text-red-700' 
              : 'border-gray-300 text-gray-700 hover:bg-gray-50'
          ]"
        >
          👎 Fake News
        </button>
      </div>
    </div>

    <div class="mb-6">
      <label for="comment" class="block text-sm font-medium text-gray-700 mb-2">
        Your Comment (Optional)
      </label>
      <textarea 
        id="comment"
        v-model="commentText"
        rows="4"
        class="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
        placeholder="Explain why you think this news is real or fake..."
      ></textarea>
    </div>

    <div class="mb-6">
      <label for="evidence" class="block text-sm font-medium text-gray-700 mb-2">
        Evidence Image URL (Optional)
      </label>
      <input 
        id="evidence"
        v-model="evidenceImage"
        type="url"
        class="w-full border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
        placeholder="https://example.com/evidence.jpg"
      >
    </div>

    <button 
      @click="submitVote"
      :disabled="userVote === null"
      class="w-full py-3 px-4 bg-primary-600 text-white rounded-lg hover:bg-primary-700 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
    >
      Submit Vote
    </button>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useMessageStore } from '@/stores/messageStore'
import type { News } from '@/types'

interface Props {
  news: News
}

const props = defineProps<Props>()
const router = useRouter()
const messageStore = useMessageStore()

const userVote = ref<boolean | null>(null)
const commentText = ref('')
const evidenceImage = ref('')

const vote = (fake: boolean) => {
  userVote.value = fake
}

const submitVote = () => {
  if (userVote.value !== null) {
    // 这里应该调用 store 或 API 提交投票和评论
    messageStore.updateMessage(`Thank you for voting! You voted: ${userVote.value ? 'Fake' : 'Real'}`)
    
    // 模拟提交后跳转回详情页
    setTimeout(() => {
      router.push({ name: 'news-detail', params: { id: props.news.id } })
    }, 1000)
  }
}
</script>
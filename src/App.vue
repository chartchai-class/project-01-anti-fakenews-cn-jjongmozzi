<template>
  <div id="app" class="min-h-screen bg-gray-50">
    <AppHeader />
    
    <!-- Flash Message -->
    <div 
      v-if="message" 
      id="flashMessage"
      class="fixed top-16 left-1/2 transform -translate-x-1/2 z-50 bg-yellow-100 border border-yellow-400 text-yellow-700 px-6 py-3 rounded shadow-lg"
    >
      <h4 class="font-semibold">{{ message }}</h4>
    </div>

    <main class="container mx-auto px-4 py-8">
      <RouterView />
    </main>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useMessageStore } from '@/stores/messageStore'
import AppHeader from '@/components/common/AppHeader.vue'

const store = useMessageStore()
const { message } = storeToRefs(store)
</script>

<style>
#flashMessage {
  animation: yellofade 3s ease-in-out;
}

@keyframes yellofade {
  from {
    background-color: yellow;
    opacity: 1;
  }
  to {
    background-color: transparent;
    opacity: 0;
  }
}
</style>
<template>
  <header class="bg-white shadow-sm border-b">
    <div class="container mx-auto px-4 py-4">
      <div class="flex items-center justify-between">
        <RouterLink 
          :to="{ name: 'home' }" 
          class="flex items-center space-x-2 text-xl font-bold text-gray-800 hover:text-primary-600 transition-colors"
        >
          <span>🗞️</span>
          <span>Anti-Fake News</span>
        </RouterLink>
        
        <nav class="flex items-center space-x-6">
          <RouterLink 
            :to="{ name: 'home' }"
            class="text-gray-600 hover:text-primary-600 transition-colors font-medium"
            active-class="text-primary-600"
          >
            Home
          </RouterLink>
        </nav>
      </div>
    </div>
  </header>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>
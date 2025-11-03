<template>
  <div class="notFound">
    <div class="text-center py-12">
      <h1 class="text-4xl font-bold text-gray-900 mb-4">Oops!</h1>
      <h3 class="text-xl text-gray-700 mb-6">
        The {{ resource }} you're looking for is not here.
      </h3>
      <RouterLink 
        :to="{ name: 'home' }" 
        class="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700"
      >
        Back to Home
      </RouterLink>
    </div>
  </div>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'

interface Props {
  resource?: string
}

withDefaults(defineProps<Props>(), {
  resource: 'page'
})
</script>
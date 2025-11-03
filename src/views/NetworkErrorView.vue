<template>
  <div class="networkError">
    <div class="text-center py-12">
      <h1 class="text-4xl font-bold text-red-600 mb-4">Uh-Oh!</h1>
      <h3 class="text-xl text-gray-700 mb-6">
        It looks like you're experiencing some network issues, please take a breath and
        <a href="#" @click="$router.go(-1)" class="text-primary-600 hover:underline">click here</a> to try again.
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
</script>
<template>
  <div v-if="message" class="flash-message">
    {{ message }}
  </div>
</template>

<script setup lang="ts">
interface Props {
  message?: string
}

defineProps<Props>()
</script>

<style scoped>
.flash-message {
  @apply fixed top-4 right-4 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50;
}
</style>
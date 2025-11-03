<template>
  <div class="flex items-center space-x-4 mb-6">
    <label class="text-sm font-medium text-gray-700">Filter by:</label>
    <select 
      v-model="selectedFilter"
      @change="onFilterChange"
      class="border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
    >
      <option value="all">All News</option>
      <option value="fake">Fake News</option>
      <option value="real">Real News</option>
    </select>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { useRouter } from 'vue-router'

interface Props {
  currentFilter: string
}

const props = defineProps<Props>()
const router = useRouter()

const selectedFilter = ref(props.currentFilter)

const onFilterChange = () => {
  router.push({
    name: 'home',
    query: {
      page: 1,
      filter: selectedFilter.value
    }
  })
}

watch(() => props.currentFilter, (newFilter) => {
  selectedFilter.value = newFilter
})
</script>
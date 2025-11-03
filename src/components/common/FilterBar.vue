<template>
  <div class="flex flex-wrap items-center gap-4 mb-6 p-4 bg-white rounded-lg shadow-sm border">
    <div class="flex items-center space-x-2">
      <span class="text-sm font-medium text-gray-700">Filter:</span>
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

    <div class="flex items-center space-x-2">
      <span class="text-sm font-medium text-gray-700">Items per page:</span>
      <select 
        v-model="selectedItemsPerPage"
        @change="onItemsPerPageChange"
        class="border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-primary-500"
      >
        <option v-for="option in itemsPerPageOptions" :key="option" :value="option">
          {{ option }}
        </option>
      </select>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { useRouter } from 'vue-router'
import { ITEMS_PER_PAGE_OPTIONS } from '@/utils/constants'

interface Props {
  currentFilter: string
  currentItemsPerPage: number
}

const props = defineProps<Props>()
const router = useRouter()

const selectedFilter = ref(props.currentFilter)
const selectedItemsPerPage = ref(props.currentItemsPerPage)
const itemsPerPageOptions = ITEMS_PER_PAGE_OPTIONS

const onFilterChange = () => {
  router.push({
    name: 'home',
    query: {
      page: 1,
      limit: selectedItemsPerPage.value,
      filter: selectedFilter.value
    }
  })
}

const onItemsPerPageChange = () => {
  router.push({
    name: 'home',
    query: {
      page: 1,
      limit: selectedItemsPerPage.value,
      filter: selectedFilter.value
    }
  })
}

watch(() => props.currentFilter, (newFilter) => {
  selectedFilter.value = newFilter
})

watch(() => props.currentItemsPerPage, (newLimit) => {
  selectedItemsPerPage.value = newLimit
})
</script>
<template>
  <div class="flex items-center space-x-4 mb-6">
    <label class="text-sm font-medium text-gray-700">Items per page:</label>
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
</template>

<script setup lang="ts">
import { ref, watch } from 'vue'
import { useRouter } from 'vue-router'
import { ITEMS_PER_PAGE_OPTIONS } from '@/utils/constants'

interface Props {
  currentItemsPerPage: number
}

const props = defineProps<Props>()
const router = useRouter()

const selectedItemsPerPage = ref(props.currentItemsPerPage)
const itemsPerPageOptions = ITEMS_PER_PAGE_OPTIONS

const onItemsPerPageChange = () => {
  router.push({
    name: 'home',
    query: {
      page: 1,
      limit: selectedItemsPerPage.value
    }
  })
}

watch(() => props.currentItemsPerPage, (newLimit) => {
  selectedItemsPerPage.value = newLimit
})
</script>
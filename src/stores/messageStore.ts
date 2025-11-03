import { defineStore } from 'pinia'
import type { MessageState } from '@/types'

export const useMessageStore = defineStore('message', {
  state: (): MessageState => ({
    message: ''
  }),

  actions: {
    updateMessage(message: string) {
      this.message = message
    },

    resetMessage() {
      this.message = ''
    }
  }
})
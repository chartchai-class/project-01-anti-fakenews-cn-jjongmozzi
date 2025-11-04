import { defineStore } from 'pinia'
import type { MessageState } from '@/types' // 依赖修正后的 MessageState 接口

export const useMessageStore = defineStore('message', {
  state: (): MessageState => ({
    message: '' // 类型匹配，消除 TS2353 错误
  }),
  actions: {
    /**
     * 更新全局消息
     */
    updateMessage(message: string) {
      this.message = message // 类型匹配，消除 TS2339 错误
    },

    /**
     * 重置全局消息
     */
    resetMessage() {
      this.message = '' // 类型匹配，消除 TS2339 错误
    }
  }
})
import { defineStore } from 'pinia'
import type { Comment, CommentState } from '@/types' // 依赖修正后的类型
import { commentService } from '@/services/commentService' // 明确导入服务（避免路径歧义）

export const useCommentStore = defineStore('comments', {
  state: (): CommentState => ({
    comments: [],
    currentNewsComments: []
  }),
  actions: {
    /**
     * 根据新闻ID获取评论并更新状态
     */
    async fetchCommentsByNewsId(newsId: number) {
      try {
        const response = await commentService.getCommentsByNewsId(newsId)
        this.currentNewsComments = response.data // 类型匹配，消除 TS2339 错误
      } catch (error) {
        console.error('Failed to fetch comments:', error)
        throw error // 抛出错误，让调用方处理
      }
    },

    /**
     * 添加新评论并更新状态
     */
    async addComment(comment: Omit<Comment, 'id'>) {
      try {
        const response = await commentService.createComment(comment)
        this.currentNewsComments.push(response.data) // 类型匹配，消除 TS2339 错误
        return response.data
      } catch (error) {
        console.error('Failed to add comment:', error)
        throw error
      }
    }
  }
})
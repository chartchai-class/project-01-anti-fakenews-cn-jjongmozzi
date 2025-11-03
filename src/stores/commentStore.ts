import { defineStore } from 'pinia'
import type { Comment, CommentState } from '@/types'
import { commentService } from '@/services'

export const useCommentStore = defineStore('comments', {
  state: (): CommentState => ({
    comments: [],
    currentNewsComments: []
  }),

  actions: {
    async fetchCommentsByNewsId(newsId: number) {
      try {
        const response = await commentService.getCommentsByNewsId(newsId)
        this.currentNewsComments = response.data
      } catch (error) {
        console.error('Failed to fetch comments:', error)
        throw error
      }
    },

    async addComment(comment: Omit<Comment, 'id'>) {
      try {
        const response = await commentService.createComment(comment)
        this.currentNewsComments.push(response.data)
        return response.data
      } catch (error) {
        console.error('Failed to add comment:', error)
        throw error
      }
    }
  }
})
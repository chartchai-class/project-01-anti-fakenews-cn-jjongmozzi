import { apiClient } from './apiClient'
import type { Comment } from '@/types'

export const commentService = {
  async getCommentsByNewsId(newsId: number) {
    return apiClient.get<Comment[]>(`/comments?newsId=${newsId}&_sort=createdAt&_order=desc`)
  },

  async createComment(comment: Omit<Comment, 'id'>) {
    return apiClient.post<Comment>('/comments', {
      ...comment,
      id: Date.now(),
      createdAt: new Date().toISOString()
    })
  }
}
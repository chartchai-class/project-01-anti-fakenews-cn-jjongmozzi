import { apiClient } from './apiClient'
import type { Comment } from '@/types' // 依赖修正后的 Comment 接口

export const commentService = {
  /**
   * 根据新闻ID获取评论（按创建时间倒序）
   */
  async getCommentsByNewsId(newsId: number) {
    return apiClient.get<Comment[]>(`/comments?newsId=${newsId}&_sort=createdAt&_order=desc`)
  },

  /**
   * 创建新评论（自动生成ID和创建时间）
   */
  async createComment(comment: Omit<Comment, 'id'>) {
    return apiClient.post<Comment>('/comments', {
      ...comment,
      id: Date.now(), // 用时间戳生成唯一ID
      createdAt: new Date().toISOString()
    })
  }
}
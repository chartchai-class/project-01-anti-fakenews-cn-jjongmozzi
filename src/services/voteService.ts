import { apiClient } from './apiClient'
import type { Vote } from '@/types' // 依赖修正后的 Vote 接口

export const voteService = {
  /**
   * 根据新闻ID获取投票记录
   */
  async getVotesByNewsId(newsId: number) {
    return apiClient.get<Vote[]>(`/votes?newsId=${newsId}`)
  },

  /**
   * 创建新投票（自动生成ID和创建时间）
   */
  async createVote(vote: Omit<Vote, 'id'>) {
    return apiClient.post<Vote>('/votes', {
      ...vote,
      id: Date.now(), // 用时间戳生成唯一ID
      createdAt: new Date().toISOString()
    })
  }
}
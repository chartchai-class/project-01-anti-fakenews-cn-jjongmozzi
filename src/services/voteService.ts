import { apiClient } from './apiClient'
import type { Vote } from '@/types'

export const voteService = {
  async getVotesByNewsId(newsId: number) {
    return apiClient.get<Vote[]>(`/votes?newsId=${newsId}`)
  },

  async createVote(vote: Omit<Vote, 'id'>) {
    return apiClient.post<Vote>('/votes', {
      ...vote,
      id: Date.now(),
      createdAt: new Date().toISOString()
    })
  }
}
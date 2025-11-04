import { defineStore } from 'pinia'
import type { Vote, VoteState } from '@/types' // 依赖修正后的类型
import { voteService } from '@/services/voteService' // 明确导入服务（避免路径歧义）

export const useVoteStore = defineStore('votes', {
  state: (): VoteState => ({
    votes: [] // 类型匹配，消除 TS2353 错误
  }),
  actions: {
    /**
     * 添加新投票并更新状态
     */
    async addVote(vote: Omit<Vote, 'id'>) {
      try {
        const response = await voteService.createVote(vote)
        this.votes.push(response.data) // 类型匹配，消除 TS2339 错误
        return response.data
      } catch (error) {
        console.error('Failed to add vote:', error)
        throw error
      }
    },

    /**
     * 根据新闻ID获取投票记录并更新状态
     */
    async fetchVotesByNewsId(newsId: number) {
      try {
        const response = await voteService.getVotesByNewsId(newsId)
        this.votes = response.data // 类型匹配，消除 TS2339 错误
      } catch (error) {
        console.error('Failed to fetch votes:', error)
        throw error
      }
    }
  }
})
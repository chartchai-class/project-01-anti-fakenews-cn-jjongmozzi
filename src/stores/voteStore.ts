import { defineStore } from 'pinia'
import type { Vote, VoteState } from '@/types'
import { voteService } from '@/services'

export const useVoteStore = defineStore('votes', {
  state: (): VoteState => ({
    votes: []
  }),

  actions: {
    async addVote(vote: Omit<Vote, 'id'>) {
      try {
        const response = await voteService.createVote(vote)
        this.votes.push(response.data)
        return response.data
      } catch (error) {
        console.error('Failed to add vote:', error)
        throw error
      }
    },

    async fetchVotesByNewsId(newsId: number) {
      try {
        const response = await voteService.getVotesByNewsId(newsId)
        this.votes = response.data
      } catch (error) {
        console.error('Failed to fetch votes:', error)
        throw error
      }
    }
  }
})
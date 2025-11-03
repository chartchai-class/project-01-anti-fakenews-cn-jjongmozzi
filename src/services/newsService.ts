import { apiClient } from './apiClient'
import type { News, PaginationParams } from '@/types'

export const newsService = {
  async getNews(params: PaginationParams) {
    const { page, limit, filter } = params
    let url = `/news?_page=${page}&_limit=${limit}&_sort=reportDate&_order=desc`
    
    if (filter && filter !== 'all') {
      url += `&isFake=${filter === 'fake'}`
    }
    
    return apiClient.get<News[]>(url)
  },

  async getNewsById(id: number) {
    return apiClient.get<News>(`/news/${id}`)
  }
}
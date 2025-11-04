import { apiClient } from './apiClient'
import type { News, PaginationParams } from '@/types' // 依赖修正后的类型

export const newsService = {
  /**
   * 获取新闻列表（支持分页、筛选、排序）
   */
  async getNews(params: PaginationParams) {
    const { page, limit = 10, filter } = params // 给 limit 设默认值，避免 undefined
    let url = `/news?_page=${page}&_limit=${limit}&_sort=reportDate&_order=desc`
    
    // 筛选假新闻/真新闻（filter 非 'all' 时生效）
    if (filter && filter !== 'all') {
      url += `&isFake=${filter === 'fake'}`
    }
    
    return apiClient.get<News[]>(url)
  },

  /**
   * 根据ID获取单条新闻
   */
  async getNewsById(id: number) {
    return apiClient.get<News>(`/news/${id}`)
  }
}
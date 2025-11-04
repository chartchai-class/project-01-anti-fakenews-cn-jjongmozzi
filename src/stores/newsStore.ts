import { defineStore } from 'pinia'
import type { News, NewsState, PaginationParams } from '@/types' // 依赖修正后的接口
import mockData from '../../mock/db.json'

export const useNewsStore = defineStore('news', {
  state: (): NewsState => ({
    newsList: [], // 已在 NewsState 中声明，修复 TS2353 错误
    currentNews: null,
    totalCount: 0,
    isLoading: false // 已在 NewsState 中声明，修复 TS2339 错误
  }),
  actions: {
    async fetchNews(params: PaginationParams) {
      this.isLoading = true // 类型匹配，修复 TS2339 错误
      try {
        // 1. 获取所有新闻并筛选
        let filteredNews = (mockData.news as News[]) || []
        if (params.filter === 'fake') filteredNews = filteredNews.filter(item => item.isFake)
        if (params.filter === 'real') filteredNews = filteredNews.filter(item => !item.isFake)
        
        // 2. 分页计算（params.perPage 已在 PaginationParams 中声明，修复 TS2339 错误）
        const page = Math.max(1, Number(params.page) || 1)
        const perPage = Math.max(1, Number(params.perPage) || 5)
        const start = (page - 1) * perPage
        const end = start + perPage
        
        // 3. 更新数据（this.newsList 已在 NewsState 中声明，修复 TS2339 错误）
        this.newsList = filteredNews.slice(start, end)
        this.totalCount = filteredNews.length  // 总条数用于分页计算
      } catch (error) {
        console.error('Failed to fetch news:', error)
        this.newsList = [] // 类型匹配，修复 TS2339 错误
        this.totalCount = 0
      } finally {
        this.isLoading = false // 类型匹配，修复 TS2339 错误
      }
    },
    async fetchNewsById(id: number) {
      this.isLoading = true // 类型匹配，修复 TS2339 错误
      try {
        this.currentNews = mockData.news.find(item => item.id === id) || null
        return this.currentNews
      } finally {
        this.isLoading = false // 类型匹配，修复 TS2339 错误
      }
    },
    setCurrentNews(news: News | null) {
      this.currentNews = news
    }
  }
})
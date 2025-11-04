// src/types/index.ts
/**
 * News 接口：对应新闻数据结构，补充 summary 字段（NewsCard.vue 依赖）
 */
export interface News {
  id: number;
  title: string;
  isFake: boolean;
  content: string;
  reporter: string;
  date: string;
  voteFake: number;
  voteReal: number;
  summary: string; // 核心补充：修复 NewsCard.vue 中 TS2339 错误
  imageUrl?: string; // 可选：NewsDetailView.vue 中使用的图片字段
}

/**
 * NewsState 接口：Pinia Store 状态类型，明确声明 newsList 和 isLoading
 */
export interface NewsState {
  newsList: News[]; // 核心补充：修复 newsStore.ts 中 TS2353/TS2339 错误
  currentNews: News | null;
  totalCount: number;
  isLoading: boolean; // 核心补充：修复 newsStore.ts 中 TS2339 错误
}

/**
 * PaginationParams 接口：分页参数类型，补充 perPage 字段
 */
export interface PaginationParams {
  page: number;
  perPage: number; // 核心补充：修复 newsStore.ts 和 HomeView.vue 中 TS2339/TS2353 错误
  filter?: 'all' | 'fake' | 'real'; // 与 HomeView.vue 筛选选项匹配
}
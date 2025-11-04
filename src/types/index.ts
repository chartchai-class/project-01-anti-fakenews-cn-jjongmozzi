// src/types/index.ts
// 1. 新闻数据类型（已存在，确保字段完整）
export interface News {
  id: number;
  title: string;
  content: string;
  reporter: string;
  date: string;
  isFake: boolean;
  voteFake: number;
  voteReal: number;
  summary: string;
  imageUrl?: string; // 可选：新闻详情页图片字段
}

// 2. 分页参数类型（已存在，确保字段匹配）
export interface PaginationParams {
  page: number;
  perPage: number;
  filter?: 'all' | 'fake' | 'real';
}

// 3. 核心补充：NewsState 接口（Pinia 新闻仓库状态类型）
export interface NewsState {
  newsList: News[]; // 新闻列表数据
  currentNews: News | null; // 当前选中的新闻
  totalCount: number; // 筛选后的新闻总条数（用于分页）
  isLoading: boolean; // 加载状态标识
}
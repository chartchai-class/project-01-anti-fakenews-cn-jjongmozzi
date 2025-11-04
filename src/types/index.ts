// src/types/index.ts
/**
 * 1. 新闻数据类型（已存在，保持完整）
 */
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
  imageUrl?: string;
  reportDate?: string; // 兼容 newsService.ts 中的排序字段
}

/**
 * 2. 分页参数类型（补充 limit 字段，修复 newsService.ts 错误）
 */
export interface PaginationParams {
  page: number;
  perPage: number;
  limit?: number; // 新增：兼容 newsService.ts 中的 limit 解构
  filter?: 'all' | 'fake' | 'real';
}

/**
 * 3. 新闻仓库状态类型（已存在，保持完整）
 */
export interface NewsState {
  newsList: News[];
  currentNews: News | null;
  totalCount: number;
  isLoading: boolean;
}

/**
 * 4. 评论数据类型（新增，对应评论相关组件/服务）
 */
export interface Comment {
  id: number; // 唯一标识
  newsId: number; // 关联新闻ID
  userName: string; // 评论者姓名
  content: string; // 评论内容
  isFakeVote: boolean; // 评论者投票（是否为假新闻）
  evidenceImage?: string; // 证据图片URL（可选）
  createdAt: string; // 创建时间（ISO格式）
}

/**
 * 5. 评论仓库状态类型（新增，对应 commentStore.ts）
 */
export interface CommentState {
  comments: Comment[]; // 所有评论（备用）
  currentNewsComments: Comment[]; // 当前新闻的评论（核心）
}

/**
 * 6. 投票数据类型（新增，对应投票相关服务/仓库）
 */
export interface Vote {
  id: number; // 唯一标识
  newsId: number; // 关联新闻ID
  isFakeVote: boolean; // 投票结果（是否为假新闻）
  createdAt: string; // 创建时间（ISO格式）
  userId?: string; // 可选：投票者ID（用于去重）
}

/**
 * 7. 投票仓库状态类型（新增，对应 voteStore.ts）
 */
export interface VoteState {
  votes: Vote[]; // 所有投票记录
}

/**
 * 8. 消息提示状态类型（新增，对应 messageStore.ts）
 */
export interface MessageState {
  message: string; // 全局消息内容（如成功/错误提示）
}
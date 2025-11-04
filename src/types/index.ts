// src/types/index.ts
/**
 * 新闻类型：已存在，补充完整以兼容所有组件
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
 * 分页参数类型：已存在，补充完整
 */
export interface PaginationParams {
  page: number;
  limit?: number; // 兼容 newsService.ts 中的 limit 参数
  perPage?: number; // 兼容之前分页逻辑
  filter?: 'all' | 'fake' | 'real';
}

/**
 * 评论类型：新增，对应评论相关组件/服务
 */
export interface Comment {
  id: number; // 唯一标识，由服务生成
  newsId: number; // 关联新闻ID
  userName: string; // 评论者姓名
  content: string; // 评论内容
  isFakeVote: boolean; // 评论者投票（是否为假新闻）
  evidenceImage?: string; // 证据图片URL（可选）
  createdAt: string; // 创建时间（ISO格式）
}

/**
 * 评论仓库状态类型：新增，对应 commentStore.ts
 */
export interface CommentState {
  comments: Comment[]; // 所有评论（备用）
  currentNewsComments: Comment[]; // 当前新闻的评论（核心）
}

/**
 * 投票类型：新增，对应投票相关服务/仓库
 */
export interface Vote {
  id: number; // 唯一标识，由服务生成
  newsId: number; // 关联新闻ID
  userId?: string; // 投票者ID（可选，用于去重）
  isFakeVote: boolean; // 投票结果（是否为假新闻）
  createdAt: string; // 创建时间（ISO格式）
}

/**
 * 投票仓库状态类型：新增，对应 voteStore.ts
 */
export interface VoteState {
  votes: Vote[]; // 所有投票记录
}

/**
 * 消息提示状态类型：新增，对应 messageStore.ts
 */
export interface MessageState {
  message: string; // 全局消息内容（如成功/错误提示）
}
export interface News {
  id: number;
  title: string;
  content: string;
  reporter: string;
  date: string;
  imageUrl: string;
  isFake: boolean;
  voteFake: number;
  voteReal: number;
}

export interface Comment {
  id: number
  newsId: number
  userName: string
  content: string
  createdAt: string
  isFakeVote: boolean
  evidenceImage?: string
}

export interface Vote {
  id: number
  newsId: number
  isFake: boolean
  userId: string
  createdAt: string
}

export interface NewsState {
  news: News[]
  currentNews: News | null
  totalCount: number
}

export interface CommentState {
  comments: Comment[]
  currentNewsComments: Comment[]
}

export interface VoteState {
  votes: Vote[]
}

export interface MessageState {
  message: string
}

export interface PaginationParams {
  page: number
  limit: number
  filter?: 'all' | 'fake' | 'real'
}
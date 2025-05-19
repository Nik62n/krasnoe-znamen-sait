
// Типы для форума
export interface Comment {
  id: string;
  content: string;
  author: string;
  timestamp: Date;
}

export interface ForumPost {
  id: string;
  title: string;
  content: string;
  imageUrl: string;
  timestamp: Date;
  author: string;
  comments: Comment[];
}

export interface CreatePostFormData {
  title: string;
  content: string;
  imageUrl: string;
}

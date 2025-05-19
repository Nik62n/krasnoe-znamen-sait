
import { useState } from "react";
import { ForumPost, Comment } from "@/types/forum";

export const useForumPosts = () => {
  const [posts, setPosts] = useState<ForumPost[]>([]);
  
  // Функция создания нового поста
  const createPost = (title: string, content: string, imageUrl: string, author: string): void => {
    if (!title.trim() || !content.trim()) return;

    const newPost: ForumPost = {
      id: Date.now().toString(),
      title,
      content,
      imageUrl: imageUrl || "https://via.placeholder.com/300x200",
      timestamp: new Date(),
      author: author || "Анонимный пользователь",
      comments: [],
    };

    setPosts([newPost, ...posts]);
  };

  // Функция добавления комментария
  const addComment = (postId: string, content: string, author: string): void => {
    if (!content?.trim()) return;
    
    // Отсекаем всё после @ включительно
    const displayName = author.split('@')[0];
    
    const newComment: Comment = {
      id: Date.now().toString(),
      content,
      author: displayName,
      timestamp: new Date(),
    };

    setPosts(posts.map(post => {
      if (post.id === postId) {
        return {
          ...post,
          comments: [...post.comments, newComment]
        };
      }
      return post;
    }));
  };

  return {
    posts,
    createPost,
    addComment
  };
};

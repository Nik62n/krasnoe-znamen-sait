
import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import Icon from "@/components/ui/icon";
import { useAuth } from "@/context/AuthContext";
import { useForumPosts } from "@/hooks/useForumPosts";
import { CreatePostFormData } from "@/types/forum";

// Импорт компонентов форума
import ForumPost from "@/components/forum/ForumPost";
import CreatePostDialog from "@/components/forum/CreatePostDialog";
import EmptyForumState from "@/components/forum/EmptyForumState";

const Forums: React.FC = () => {
  const { user, isAuthenticated } = useAuth();
  const { posts, createPost, addComment } = useForumPosts();
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  // Обработчик создания поста
  const handleCreatePost = (formData: CreatePostFormData) => {
    createPost(
      formData.title, 
      formData.content, 
      formData.imageUrl, 
      user?.name || "Анонимный пользователь"
    );
    setIsDialogOpen(false);
  };

  // Обработчик добавления комментария
  const handleAddComment = (postId: string, content: string) => {
    if (!user) return;
    addComment(postId, content, user.name);
  };

  return (
    <div className="container mx-auto py-6 px-4">
      {/* Заголовок с кнопкой создания поста */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-2xl font-bold text-[#e32417]">Форум</h1>
        <Button
          onClick={() => setIsDialogOpen(true)}
          className="bg-[#e32417] hover:bg-red-700"
        >
          <Icon name="Plus" className="mr-2 h-4 w-4" />
          Создать тему
        </Button>
      </div>

      {/* Содержимое форума */}
      {posts.length === 0 ? (
        <EmptyForumState onCreatePost={() => setIsDialogOpen(true)} />
      ) : (
        <ScrollArea className="h-[500px]">
          <div className="space-y-4 pr-4">
            {posts.map((post) => (
              <ForumPost 
                key={post.id} 
                post={post} 
                onAddComment={handleAddComment} 
              />
            ))}
          </div>
        </ScrollArea>
      )}

      {/* Диалог создания новой темы */}
      <CreatePostDialog
        open={isDialogOpen}
        onOpenChange={setIsDialogOpen}
        onSubmit={handleCreatePost}
      />
    </div>
  );
};

export default Forums;

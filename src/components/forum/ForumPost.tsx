
import { useState } from "react";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";
import { ForumPost } from "@/types/forum";
import { formatDate } from "@/utils/dateUtils";
import CommentSection from "./CommentSection";
import CommentForm from "./CommentForm";
import { useAuth } from "@/context/AuthContext";

interface ForumPostProps {
  post: ForumPost;
  onAddComment: (postId: string, content: string) => void;
}

const ForumPostComponent: React.FC<ForumPostProps> = ({ post, onAddComment }) => {
  const { isAuthenticated, user } = useAuth();
  const [showCommentForm, setShowCommentForm] = useState(false);

  const handleAddComment = (postId: string, content: string) => {
    if (!isAuthenticated || !user) return;
    onAddComment(postId, content);
    setShowCommentForm(false);
  };

  return (
    <Card key={post.id} className="w-full">
      <CardHeader>
        <div className="flex justify-between items-start">
          <CardTitle>{post.title}</CardTitle>
          <span className="text-xs text-gray-500">
            {formatDate(post.timestamp)}
          </span>
        </div>
        <p className="text-sm text-gray-600">Автор: {post.author}</p>
      </CardHeader>
      <CardContent>
        <div className="flex flex-col md:flex-row gap-4">
          {post.imageUrl && (
            <img
              src={post.imageUrl}
              alt={post.title}
              className="rounded-md max-w-[300px] max-h-[200px] object-cover"
            />
          )}
          <p className="text-gray-700">{post.content}</p>
        </div>
        
        {/* Кнопка добавления комментария */}
        <div className="mt-4">
          <Button 
            variant="outline" 
            size="sm" 
            onClick={() => setShowCommentForm(!showCommentForm)}
            disabled={!isAuthenticated}
          >
            <Icon name="MessageSquare" className="mr-2 h-4 w-4" />
            Комментарий
          </Button>
          
          {!isAuthenticated && (
            <span className="text-xs text-gray-500 ml-2">
              Войдите, чтобы комментировать
            </span>
          )}
        </div>
        
        {/* Форма комментария */}
        {showCommentForm && isAuthenticated && (
          <CommentForm 
            postId={post.id} 
            onSubmit={handleAddComment}
            onCancel={() => setShowCommentForm(false)} 
          />
        )}
        
        {/* Отображение комментариев */}
        <CommentSection comments={post.comments} />
      </CardContent>
    </Card>
  );
};

export default ForumPostComponent;

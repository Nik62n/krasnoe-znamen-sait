
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

interface CommentFormProps {
  postId: string;
  onSubmit: (postId: string, content: string) => void;
  onCancel: () => void;
}

const CommentForm: React.FC<CommentFormProps> = ({ postId, onSubmit, onCancel }) => {
  const [content, setContent] = useState("");

  const handleSubmit = () => {
    if (!content.trim()) return;
    onSubmit(postId, content);
    setContent("");
  };

  return (
    <div className="mt-4 flex flex-col gap-2">
      <Textarea
        placeholder="Ваш комментарий..."
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className="min-h-[100px]"
      />
      <div className="flex justify-end gap-2">
        <Button 
          variant="outline" 
          size="sm" 
          onClick={onCancel}
        >
          Отмена
        </Button>
        <Button 
          size="sm" 
          className="bg-[#e32417] hover:bg-red-700"
          onClick={handleSubmit}
        >
          Отправить
        </Button>
      </div>
    </div>
  );
};

export default CommentForm;

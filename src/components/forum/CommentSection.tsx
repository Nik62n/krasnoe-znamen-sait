
import { Separator } from "@/components/ui/separator";
import { Comment } from "@/types/forum";
import { formatDate } from "@/utils/dateUtils";

interface CommentSectionProps {
  comments: Comment[];
}

const CommentSection: React.FC<CommentSectionProps> = ({ comments }) => {
  if (comments.length === 0) return null;

  return (
    <div className="mt-4">
      <Separator className="my-2" />
      <h4 className="text-sm font-medium mb-2">Комментарии ({comments.length})</h4>
      <div className="space-y-3">
        {comments.map((comment) => (
          <div key={comment.id} className="bg-gray-50 p-3 rounded-md">
            <div className="flex justify-between items-start">
              <span className="font-medium text-sm">{comment.author}</span>
              <span className="text-xs text-gray-500">{formatDate(comment.timestamp)}</span>
            </div>
            <p className="text-sm mt-1">{comment.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommentSection;

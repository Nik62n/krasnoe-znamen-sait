
import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

interface EmptyForumStateProps {
  onCreatePost: () => void;
}

const EmptyForumState: React.FC<EmptyForumStateProps> = ({ onCreatePost }) => {
  return (
    <div className="text-center py-10">
      <p className="text-gray-500">
        Здесь пока нет тем. Будьте первым, кто создаст тему!
      </p>
      <Button
        onClick={onCreatePost}
        variant="outline"
        className="mt-4"
      >
        <Icon name="Plus" className="mr-2 h-4 w-4" />
        Создать тему
      </Button>
    </div>
  );
};

export default EmptyForumState;

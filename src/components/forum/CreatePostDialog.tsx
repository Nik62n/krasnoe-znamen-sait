
import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { formatDate } from "@/utils/dateUtils";
import { CreatePostFormData } from "@/types/forum";

interface CreatePostDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  onSubmit: (data: CreatePostFormData) => void;
}

const CreatePostDialog: React.FC<CreatePostDialogProps> = ({ 
  open, 
  onOpenChange, 
  onSubmit 
}) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const handleSubmit = () => {
    if (!title.trim() || !content.trim()) return;
    
    onSubmit({
      title,
      content,
      imageUrl
    });
    
    resetForm();
  };

  const resetForm = () => {
    setTitle("");
    setContent("");
    setImageUrl("");
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[650px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-[#e32417] text-xl mb-4">
            Создание темы
          </DialogTitle>
        </DialogHeader>
        <div className="flex flex-col gap-6 py-4">
          <div className="flex flex-col gap-2">
            <Label htmlFor="title" className="text-md font-medium">
              Заголовок:
            </Label>
            <Input
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full"
              placeholder="Введите заголовок"
            />
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="content" className="text-md font-medium">
              Содержание:
            </Label>
            <Textarea
              id="content"
              value={content}
              onChange={(e) => setContent(e.target.value)}
              className="w-full min-h-[200px]"
              placeholder="Введите текст сообщения"
            />
          </div>

          <div className="flex flex-col gap-2">
            <Label htmlFor="image" className="text-md font-medium">
              Изображение:{" "}
              <span className="text-xs text-gray-500">(не обязательно)</span>
            </Label>
            <Input
              id="image"
              value={imageUrl}
              onChange={(e) => setImageUrl(e.target.value)}
              className="w-full"
              placeholder="Ссылка на изображение"
            />
          </div>

          <div className="text-sm text-gray-500 text-right">
            Время создания: {formatDate(new Date())}
          </div>
        </div>
        <DialogFooter className="mt-6">
          <Button
            type="button"
            variant="outline"
            onClick={() => onOpenChange(false)}
          >
            Отмена
          </Button>
          <Button
            type="button"
            className="bg-[#e32417] hover:bg-red-700"
            onClick={handleSubmit}
          >
            Создать
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
};

export default CreatePostDialog;

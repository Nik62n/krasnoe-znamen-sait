import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import Icon from "@/components/ui/icon";
import { ScrollArea } from "@/components/ui/scroll-area";

// Интерфейс для форумного поста
interface ForumPost {
  id: string;
  title: string;
  content: string;
  imageUrl: string;
  timestamp: Date;
  author: string;
}

const Forums: React.FC = () => {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [posts, setPosts] = useState<ForumPost[]>([]);
  const [newPostTitle, setNewPostTitle] = useState("");
  const [newPostContent, setNewPostContent] = useState("");
  const [newPostImageUrl, setNewPostImageUrl] = useState("");

  // Функция создания нового поста
  const handleCreatePost = () => {
    if (!newPostTitle.trim() || !newPostContent.trim()) return;

    const newPost: ForumPost = {
      id: Date.now().toString(),
      title: newPostTitle,
      content: newPostContent,
      imageUrl: newPostImageUrl || "https://via.placeholder.com/300x200",
      timestamp: new Date(),
      author: "Текущий пользователь", // Здесь можно использовать имя авторизованного пользователя
    };

    setPosts([newPost, ...posts]);
    setIsDialogOpen(false);
    resetForm();
  };

  // Сброс формы
  const resetForm = () => {
    setNewPostTitle("");
    setNewPostContent("");
    setNewPostImageUrl("");
  };

  // Форматирование даты для отображения
  const formatDate = (date: Date) => {
    return date.toLocaleString("ru-RU", {
      day: "2-digit",
      month: "2-digit",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  return (
    <div className="container mx-auto py-6 px-4">
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

      {posts.length === 0 ? (
        <div className="text-center py-10">
          <p className="text-gray-500">
            Здесь пока нет тем. Будьте первым, кто создаст тему!
          </p>
          <Button
            onClick={() => setIsDialogOpen(true)}
            variant="outline"
            className="mt-4"
          >
            <Icon name="Plus" className="mr-2 h-4 w-4" />
            Создать тему
          </Button>
        </div>
      ) : (
        <ScrollArea className="h-[500px]">
          <div className="space-y-4 pr-4">
            {posts.map((post) => (
              <Card key={post.id} className="w-full">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle>{post.title}</CardTitle>
                    <span className="text-xs text-gray-500">
                      {formatDate(post.timestamp)}
                    </span>
                  </div>
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
                </CardContent>
              </Card>
            ))}
          </div>
        </ScrollArea>
      )}

      {/* Диалог создания новой темы */}
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent className="sm:max-w-[550px]">
          <DialogHeader>
            <DialogTitle className="text-[#e32417]">Создание темы</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="title" className="text-right">
                Заголовок:
              </Label>
              <Input
                id="title"
                value={newPostTitle}
                onChange={(e) => setNewPostTitle(e.target.value)}
                className="col-span-3"
                placeholder="Введите заголовок"
              />
            </div>
            <div className="grid grid-cols-4 items-start gap-4">
              <Label htmlFor="content" className="text-right pt-2">
                Содержание:
              </Label>
              <Textarea
                id="content"
                value={newPostContent}
                onChange={(e) => setNewPostContent(e.target.value)}
                className="col-span-3 min-h-[150px]"
                placeholder="Введите текст сообщения"
              />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="image" className="text-right">
                Изображение:
                <span className="block text-xs text-gray-500">
                  (не обязательно)
                </span>
              </Label>
              <Input
                id="image"
                value={newPostImageUrl}
                onChange={(e) => setNewPostImageUrl(e.target.value)}
                className="col-span-3"
                placeholder="Ссылка на изображение"
              />
            </div>
            <div className="col-span-4 text-sm text-gray-500 text-right">
              Время создания: {formatDate(new Date())}
            </div>
          </div>
          <DialogFooter>
            <Button
              type="button"
              variant="outline"
              onClick={() => setIsDialogOpen(false)}
            >
              Отмена
            </Button>
            <Button
              type="button"
              className="bg-[#e32417] hover:bg-red-700"
              onClick={handleCreatePost}
            >
              Создать
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default Forums;

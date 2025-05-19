
import React from "react";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { useAuth } from "@/context/AuthContext";

const UserProfile: React.FC = () => {
  const { user } = useAuth();

  if (!user) return null;

  // Извлекаем никнейм (часть почты до @)
  const nickname = user.login.split('@')[0];
  
  // Используем полную почту как email
  const email = user.login;

  return (
    <Card className="fixed left-4 bottom-4 p-3 w-52 shadow-md z-10 border-red-100">
      <div className="flex items-center gap-3">
        <Avatar>
          <AvatarFallback className="bg-[#e32417] text-white">
            {nickname.substring(0, 2).toUpperCase()}
          </AvatarFallback>
        </Avatar>
        <div className="flex flex-col text-sm overflow-hidden">
          <p className="font-medium truncate">{nickname}</p>
          <p className="text-xs text-gray-500 truncate">{email}</p>
        </div>
      </div>
    </Card>
  );
};

export default UserProfile;

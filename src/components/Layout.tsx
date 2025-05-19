
import React from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "@/components/navigation/Sidebar";
import Header from "@/components/header/Header";
import LoginDialog from "@/components/auth/LoginDialog";
import UserProfile from "@/components/user/UserProfile";

/**
 * Основной компонент макета приложения.
 * Включает боковую панель, заголовок, основной контент и пользовательские элементы.
 */
const Layout: React.FC = () => {
  return (
    <div className="min-h-screen bg-white flex">
      {/* Боковая навигация */}
      <Sidebar />

      {/* Основной контент */}
      <div className="flex-1 relative">
        {/* Хедер с логотипом */}
        <Header />

        {/* Контент страницы */}
        <main className="min-h-fit">
          <Outlet />
        </main>

        {/* Компонент профиля пользователя (виден только после авторизации) */}
        <UserProfile />
      </div>

      {/* Модальное окно входа */}
      <LoginDialog />
    </div>
  );
};

export default Layout;

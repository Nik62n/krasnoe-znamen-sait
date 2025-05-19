
import React from "react";
import { NavLink } from "react-router-dom";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { useAuth } from "@/context/AuthContext";

const Sidebar: React.FC = () => {
  const { user, isAuthenticated, logout } = useAuth();

  return (
    <aside className="w-52 bg-gray-50 p-3 shadow-md">
      <div className="flex flex-col space-y-2">
        <NavItem to="/" label="Общее" />
        <NavItem to="/vacancies" label="Вакансии" />
        <NavItem to="/benefits" label="Преимущества" />
        <NavItem to="/events" label="События" />

        {/* Отображаем ссылку на форум только для авторизованных пользователей */}
        {isAuthenticated && (
          <NavItem to="/forums" label="Форум" />
        )}

        {/* Кнопка Войти/Выйти */}
        <AuthButton />
      </div>
    </aside>
  );
};

// Компонент элемента навигации
const NavItem: React.FC<{ to: string; label: string }> = ({ to, label }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        cn(
          "py-2 px-4 rounded-full text-white font-medium bg-[#e32417] hover:bg-red-700 transition-colors text-center",
          isActive && "bg-red-700 shadow-md",
        )
      }
    >
      {label}
    </NavLink>
  );
};

// Компонент кнопки авторизации
const AuthButton: React.FC = () => {
  const { isAuthenticated, logout } = useAuth();

  return (
    <>
      {isAuthenticated ? (
        <Button
          onClick={logout}
          className="mt-4 py-2 px-4 rounded-full text-white font-medium bg-gray-700 hover:bg-gray-800 transition-colors text-center"
        >
          Выйти
        </Button>
      ) : (
        <Button
          onClick={() => window.dispatchEvent(new CustomEvent("open-login-dialog"))}
          className="mt-4 py-2 px-4 rounded-full text-white font-medium bg-gray-700 hover:bg-gray-800 transition-colors text-center"
        >
          Войти
        </Button>
      )}
    </>
  );
};

export default Sidebar;


import React from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import { cn } from '@/lib/utils';

const Layout: React.FC = () => {
  return (
    <div className="min-h-screen bg-white flex">
      {/* Навигация */}
      <aside className="w-60 bg-gray-50 p-4 shadow-md">
        <div className="flex flex-col space-y-4">
          <NavLink 
            to="/" 
            className={({isActive}) => cn(
              "py-3 px-6 rounded-full text-white font-medium bg-red-600 hover:bg-red-700 transition-colors text-center",
              isActive && "bg-red-700 shadow-md"
            )}
          >
            Общее
          </NavLink>
          <NavLink 
            to="/vacancies" 
            className={({isActive}) => cn(
              "py-3 px-6 rounded-full text-white font-medium bg-red-600 hover:bg-red-700 transition-colors text-center",
              isActive && "bg-red-700 shadow-md"
            )}
          >
            Вакансии
          </NavLink>
          <NavLink 
            to="/benefits" 
            className={({isActive}) => cn(
              "py-3 px-6 rounded-full text-white font-medium bg-red-600 hover:bg-red-700 transition-colors text-center",
              isActive && "bg-red-700 shadow-md"
            )}
          >
            Преимущества
          </NavLink>
          <NavLink 
            to="/events" 
            className={({isActive}) => cn(
              "py-3 px-6 rounded-full text-white font-medium bg-red-600 hover:bg-red-700 transition-colors text-center",
              isActive && "bg-red-700 shadow-md"
            )}
          >
            События
          </NavLink>
        </div>
      </aside>

      {/* Основной контент */}
      <div className="flex-1">
        {/* Хедер с логотипом */}
        <header className="bg-white py-8 px-4 shadow-md">
          <div className="container mx-auto text-center">
            <img 
              src="https://cdn.poehali.dev/files/c5b8fc89-e433-46ae-9deb-73bcf08bf05f.png" 
              alt="Завод «КРАСНОЕ ЗНАМЯ» основан в 1918 г." 
              className="max-w-full h-auto mx-auto max-h-40"
            />
          </div>
        </header>

        {/* Контент страницы */}
        <main className="min-h-[calc(100vh-250px)]">
          <Outlet />
        </main>

        {/* Футер */}
        <footer className="bg-red-700 text-white py-6 px-4">
          <div className="container mx-auto text-center">
            <p className="text-red-100 text-sm">
              Адрес: г. Рязань, пр. Шабулина, 2А | Телефон: +7 (495) 123-45-67 | Email: info@krasnoe-znamya.ru
            </p>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default Layout;

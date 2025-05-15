import React from "react";
import { Outlet, NavLink } from "react-router-dom";
import { cn } from "@/lib/utils";

const Layout: React.FC = () => {
  return (
    <div className="min-h-screen bg-white flex">
      {/* Навигация */}
      <aside className="w-60 bg-gray-50 p-4 shadow-md">
        <div className="flex flex-col space-y-4">
          <NavLink
            to="/"
            className={({ isActive }) =>
              cn(
                "py-3 px-6 rounded-full text-white font-medium bg-[#e32417] hover:bg-red-700 transition-colors text-center",
                isActive && "bg-red-700 shadow-md",
              )
            }
          >
            Общее
          </NavLink>
          <NavLink
            to="/vacancies"
            className={({ isActive }) =>
              cn(
                "py-3 px-6 rounded-full text-white font-medium bg-[#e32417] hover:bg-red-700 transition-colors text-center",
                isActive && "bg-red-700 shadow-md",
              )
            }
          >
            Вакансии
          </NavLink>
          <NavLink
            to="/benefits"
            className={({ isActive }) =>
              cn(
                "py-3 px-6 rounded-full text-white font-medium bg-[#e32417] hover:bg-red-700 transition-colors text-center",
                isActive && "bg-red-700 shadow-md",
              )
            }
          >
            Преимущества
          </NavLink>
          <NavLink
            to="/events"
            className={({ isActive }) =>
              cn(
                "py-3 px-6 rounded-full text-white font-medium bg-[#e32417] hover:bg-red-700 transition-colors text-center",
                isActive && "bg-red-700 shadow-md",
              )
            }
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
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/3/38/Logo_of_Krasnoe_Znamya_plant.svg/1200px-Logo_of_Krasnoe_Znamya_plant.svg.png"
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
      </div>
      {/* Футер вынесен за пределы контентной области, чтобы растянуться на всю ширину */}
    </div>
  );
};

export default Layout;
